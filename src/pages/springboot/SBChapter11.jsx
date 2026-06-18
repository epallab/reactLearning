import Section from '../../components/Content/Section';
import Subsection from '../../components/Content/Subsection';
import CodeBlock from '../../components/UI/CodeBlock';
import InfoBox from '../../components/UI/InfoBox';

const SBChapter11 = () => {
  return (
    <Section id="sb-chapter-11" number={11} title="Deployment & CI/CD Integration" theme="green">
      <p>
        Building the application is only half the battle. Getting it reliably and securely deployed to a production environment is the other half. Modern Spring Boot deployment revolves heavily around containerization and orchestration.
      </p>

      <Subsection id="docker-containerization" icon="🐋" iconBg="#e6f4ea" iconColor="#137333" title="11.1 Docker Containerization">
        <p>
          Spring Boot applications compile into "fat JARs" containing all dependencies and an embedded web server. While you can run this directly with `java -jar`, wrapping it in a Docker container ensures the application runs exactly the same way on a developer's laptop as it does in AWS.
        </p>

        <h4>Multi-Stage Dockerfile</h4>
        <p>A multi-stage build compiles the code inside the container using a heavy JDK image, but then copies <em>only</em> the compiled JAR into a lightweight JRE image for production. This keeps your final image size incredibly small and secure.</p>

        <CodeBlock filename="Dockerfile" language="dockerfile">
{`<span class="cm"># Stage 1: Build the application</span>
<span class="kw">FROM</span> eclipse-temurin:21-jdk-alpine <span class="kw">AS</span> build
<span class="kw">WORKDIR</span> /workspace/app

<span class="cm"># Copy gradle wrapper and source code</span>
<span class="kw">COPY</span> gradlew .
<span class="kw">COPY</span> gradle gradle
<span class="kw">COPY</span> build.gradle settings.gradle ./
<span class="kw">COPY</span> src src

<span class="cm"># Build the fat JAR (skipping tests for speed in this example)</span>
<span class="kw">RUN</span> ./gradlew build -x test

<span class="cm"># Stage 2: Create the production image</span>
<span class="kw">FROM</span> eclipse-temurin:21-jre-alpine
<span class="kw">VOLUME</span> /tmp
<span class="kw">ARG</span> JAR_FILE=/workspace/app/build/libs/*.jar
<span class="kw">COPY</span> --from=build \${JAR_FILE} app.jar

<span class="cm"># Run the application as a non-root user for security</span>
<span class="kw">RUN</span> addgroup -S spring && adduser -S spring -G spring
<span class="kw">USER</span> spring:spring

<span class="kw">ENTRYPOINT</span> [<span class="str">"java"</span>,<span class="str">"-jar"</span>,<span class="str">"/app.jar"</span>]`}
        </CodeBlock>

        <InfoBox type="tip" title="Cloud Native Buildpacks / Jib">
          Writing Dockerfiles by hand is no longer strictly necessary! You can use `mvn spring-boot:build-image` to automatically generate highly optimized Docker images using Cloud Native Buildpacks, or use Google's `Jib` maven/gradle plugin.
        </InfoBox>
      </Subsection>

      <Subsection id="kubernetes-deployment" icon="☸️" iconBg="#e6f4ea" iconColor="#137333" title="11.2 Kubernetes Deployment">
        <p>
          Once containerized, Kubernetes (K8s) is the industry standard for running those containers at scale. A standard Spring Boot deployment requires a Deployment, a Service, and often ConfigMaps/Secrets.
        </p>

        <p>Kubernetes needs to know if your Spring Boot app is actually ready to receive traffic. This is where the Actuator health endpoints we discussed in Chapter 10 become critical.</p>

        <CodeBlock filename="deployment.yaml" language="yaml">
{`apiVersion: apps/v1
kind: Deployment
metadata:
  name: user-service
spec:
  replicas: 3
  selector:
    matchLabels:
      app: user-service
  template:
    metadata:
      labels:
        app: user-service
    spec:
      containers:
        - name: user-service
          image: myregistry.com/user-service:1.0.4
          ports:
            - containerPort: 8080
          
          <span class="cm"># Liveness Probe: Restarts the pod if it hangs or deadlocks</span>
          livenessProbe:
            httpGet:
              path: /actuator/health/liveness
              port: 8080
            initialDelaySeconds: 30
            periodSeconds: 10
            
          <span class="cm"># Readiness Probe: Stops sending traffic if the DB connection fails</span>
          readinessProbe:
            httpGet:
              path: /actuator/health/readiness
              port: 8080
            initialDelaySeconds: 10
            periodSeconds: 5`}
        </CodeBlock>
      </Subsection>

      <Subsection id="cicd-pipelines" icon="🔄" iconBg="#e6f4ea" iconColor="#137333" title="11.3 CI/CD Pipelines (GitHub Actions)">
        <p>
          Continuous Integration and Continuous Deployment (CI/CD) automates the process of testing and building your application every time a developer pushes code.
        </p>

        <CodeBlock filename=".github/workflows/build.yml" language="yaml">
{`name: Java CI with Maven

on:
  push:
    branches: [ "main" ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    
    - name: Set up JDK 21
      uses: actions/setup-java@v3
      with:
        java-version: '21'
        distribution: 'temurin'
        cache: maven
        
    - name: Build and Test with Maven
      run: mvn -B package --file pom.xml
      
    - name: Build and Push Docker image
      uses: docker/build-push-action@v4
      with:
        push: true
        tags: myregistry.com/my-app:\${{ github.sha }}`}
        </CodeBlock>
      </Subsection>

      <Subsection id="profiles-environments" icon="🌐" iconBg="#e6f4ea" iconColor="#137333" title="11.4 Environment Configuration & Secrets">
        <p>
          Never hardcode database passwords or API keys in your `application.yml`, and absolutely never commit them to GitHub. The Twelve-Factor App methodology states that configuration should be stored in the environment.
        </p>
        <p>
          Spring Boot automatically maps environment variables to your properties. If you have a property `spring.datasource.password`, you can override it in your Kubernetes pod by setting an environment variable named `SPRING_DATASOURCE_PASSWORD`.
        </p>
        <p>
          For advanced, centralized configuration across hundreds of microservices, enterprise teams use <strong>Spring Cloud Config Server</strong> combined with HashiCorp Vault to securely store and distribute secrets.
        </p>
      </Subsection>
    </Section>
  );
};

export default SBChapter11;
