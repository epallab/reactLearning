import Section from '../../components/Content/Section';
import Subsection from '../../components/Content/Subsection';
import CodeBlock from '../../components/UI/CodeBlock';
import InfoBox from '../../components/UI/InfoBox';

const SBChapter1 = () => {
  return (
    <Section id="sb-chapter-1" number={1} title="Spring Boot Fundamentals" theme="green">
      <p>
        Spring Boot completely revolutionized Java enterprise development by introducing the "convention over configuration" paradigm. Before Spring Boot, starting a new Spring project required massive amounts of XML configuration, dependency management headaches, and a deep understanding of application servers like Tomcat or WebSphere.
      </p>
      <p>
        Today, Spring Boot allows you to create production-grade, stand-alone Spring applications that you can "just run." It takes an opinionated view of the Spring platform and third-party libraries so you can get started with minimum fuss.
      </p>

      <Subsection id="spring-boot-intro" icon="🚀" iconBg="#e6f4ea" iconColor="#137333" title="1.1 What is Spring Boot?">
        <p>
          At its core, Spring Boot is not a replacement for the Spring Framework; it's a sophisticated layer built <em>on top</em> of it. It provides three major capabilities that make development blazingly fast:
        </p>
        <ul>
          <li><strong>Auto-configuration:</strong> Spring Boot automatically configures your application based on the jar dependencies you've added. If `spring-webmvc` is on the classpath, it configures a DispatcherServlet. If `h2-database` is present, it configures an in-memory database.</li>
          <li><strong>Starter Dependencies:</strong> "Starters" are a set of convenient dependency descriptors you can include in your application. You get a one-stop-shop for all the Spring and related technology you need. Instead of hunting for the right versions of 10 different libraries to build a web app, you just include `spring-boot-starter-web`.</li>
          <li><strong>Embedded Servers:</strong> Spring Boot packages an embedded web server (Tomcat, Jetty, or Undertow) directly inside your executable JAR file. You no longer need to deploy a WAR file to a separate web server.</li>
        </ul>
        <InfoBox type="note" title="Opinionated Defaults">
          Spring Boot's "opinionated" nature means it provides sensible default configurations for almost everything. However, it gets out of the way seamlessly when you need to define your own custom configurations.
        </InfoBox>
      </Subsection>

      <Subsection id="project-setup" icon="📦" iconBg="#e6f4ea" iconColor="#137333" title="1.2 Project Setup & Initializr">
        <p>
          The absolute best way to start a new Spring Boot project is by using the <strong>Spring Initializr</strong> (available at <a href="https://start.spring.io" target="_blank" rel="noreferrer">start.spring.io</a>). It allows you to select your build tool (Maven or Gradle), Java version, and the Starter dependencies you need.
        </p>
        
        <h4>Understanding the Maven POM (pom.xml)</h4>
        <p>
          When you generate a project, you'll get a `pom.xml` that inherits from the `spring-boot-starter-parent`. This parent POM manages the versions of all Spring and third-party dependencies, ensuring compatibility.
        </p>
        
        <CodeBlock filename="pom.xml (Snippet)" language="xml">
{`<span class="tag">&lt;parent&gt;</span>
  <span class="tag">&lt;groupId&gt;</span>org.springframework.boot<span class="tag">&lt;/groupId&gt;</span>
  <span class="tag">&lt;artifactId&gt;</span>spring-boot-starter-parent<span class="tag">&lt;/artifactId&gt;</span>
  <span class="tag">&lt;version&gt;</span>3.2.4<span class="tag">&lt;/version&gt;</span>
  <span class="tag">&lt;relativePath</span><span class="tag">/&gt;</span> <span class="cm">&lt;!-- lookup parent from repository --&gt;</span>
<span class="tag">&lt;/parent&gt;</span>

<span class="tag">&lt;dependencies&gt;</span>
  <span class="cm">&lt;!-- Provides Spring MVC, embedded Tomcat, Jackson, etc. --&gt;</span>
  <span class="tag">&lt;dependency&gt;</span>
    <span class="tag">&lt;groupId&gt;</span>org.springframework.boot<span class="tag">&lt;/groupId&gt;</span>
    <span class="tag">&lt;artifactId&gt;</span>spring-boot-starter-web<span class="tag">&lt;/artifactId&gt;</span>
  <span class="tag">&lt;/dependency&gt;</span>
  
  <span class="cm">&lt;!-- Provides JPA and Hibernate --&gt;</span>
  <span class="tag">&lt;dependency&gt;</span>
    <span class="tag">&lt;groupId&gt;</span>org.springframework.boot<span class="tag">&lt;/groupId&gt;</span>
    <span class="tag">&lt;artifactId&gt;</span>spring-boot-starter-data-jpa<span class="tag">&lt;/artifactId&gt;</span>
  <span class="tag">&lt;/dependency&gt;</span>
<span class="tag">&lt;/dependencies&gt;</span>`}
        </CodeBlock>
      </Subsection>

      <Subsection id="project-structure" icon="📁" iconBg="#e6f4ea" iconColor="#137333" title="1.3 Project Structure & Conventions">
        <p>
          Spring Boot recommends a standard package layout. The main application class should be placed in a root package above all other classes. This allows the `@SpringBootApplication` annotation to implicitly define a base "search package" for component scanning.
        </p>

        <CodeBlock filename="Standard Directory Layout" language="bash">
{`<span class="cm">src/main/java/com/example/demo/</span>
├── DemoApplication.java         <span class="cm"># Main application class</span>
├── <span class="fn">controller/</span>                  <span class="cm"># REST Controllers (@RestController)</span>
│   └── UserController.java
├── <span class="fn">service/</span>                     <span class="cm"># Business Logic (@Service)</span>
│   └── UserService.java
├── <span class="fn">repository/</span>                  <span class="cm"># Data Access (@Repository)</span>
│   └── UserRepository.java
├── <span class="fn">model/</span>                       <span class="cm"># JPA Entities (@Entity)</span>
│   └── User.java
├── <span class="fn">dto/</span>                         <span class="cm"># Data Transfer Objects</span>
│   └── UserDto.java
└── <span class="fn">config/</span>                      <span class="cm"># Configurations (@Configuration)</span>
    └── SecurityConfig.java

<span class="cm">src/main/resources/</span>
├── application.yml              <span class="cm"># Application configuration</span>
└── <span class="fn">static/</span>                      <span class="cm"># Static assets (HTML, CSS, JS)</span>`}
        </CodeBlock>

        <h4>The Main Application Class</h4>
        <p>
          Every Spring Boot application has a main class containing the `public static void main` method. This is the entry point that delegates to `SpringApplication.run()`.
        </p>

        <CodeBlock filename="DemoApplication.java" language="java">
{`<span class="kw">package</span> com.example.demo;

<span class="kw">import</span> org.springframework.boot.SpringApplication;
<span class="kw">import</span> org.springframework.boot.autoconfigure.SpringBootApplication;

<span class="attr">@SpringBootApplication</span>
<span class="kw">public class</span> <span class="fn">DemoApplication</span> {

    <span class="kw">public static void</span> <span class="fn">main</span>(String[] args) {
        <span class="cm">// Bootstraps the application, starts the IoC container and embedded server</span>
        SpringApplication.<span class="fn">run</span>(DemoApplication.<span class="kw">class</span>, args);
    }
}`}
        </CodeBlock>

        <InfoBox type="tip" title="Unpacking @SpringBootApplication">
          `@SpringBootApplication` is actually a convenience annotation that combines three incredibly important annotations:
          <br/>1. <code>@Configuration</code>: Tags the class as a source of bean definitions.
          <br/>2. <code>@EnableAutoConfiguration</code>: Tells Spring Boot to start adding beans based on classpath settings.
          <br/>3. <code>@ComponentScan</code>: Tells Spring to look for other components, configurations, and services in the current package and all its sub-packages.
        </InfoBox>
      </Subsection>

      <Subsection id="application-properties" icon="⚙️" iconBg="#e6f4ea" iconColor="#137333" title="1.4 Configuration (Properties vs YAML)">
        <p>
          Spring Boot externalizes configuration so you can work with the same application code in different environments. You can use properties files, YAML files, environment variables, or command-line arguments.
        </p>
        <p>
          Most developers prefer YAML (`application.yml`) over properties (`application.properties`) due to its hierarchical and readable structure, especially when dealing with complex configurations.
        </p>

        <CodeBlock filename="src/main/resources/application.yml" language="yaml">
{`<span class="cm"># Server Configuration</span>
server:
  port: 8080
  servlet:
    context-path: /api/v1

<span class="cm"># Database Configuration</span>
spring:
  datasource:
    url: jdbc:postgresql://localhost:5432/mydb
    username: admin
    password: secure_password
  jpa:
    hibernate:
      ddl-auto: update
    show-sql: true

<span class="cm"># Custom Application Properties</span>
app:
  jwt:
    secret: my-super-secret-key-that-should-be-long-enough
    expiration-ms: 86400000`}
        </CodeBlock>

        <h4>Accessing Properties in Code</h4>
        <p>
          You can inject configuration values directly into your beans using the `@Value` annotation, or for complex configurations, use `@ConfigurationProperties` to bind properties to a POJO (Plain Old Java Object).
        </p>

        <CodeBlock filename="JwtConfig.java" language="java">
{`<span class="kw">package</span> com.example.demo.config;

<span class="kw">import</span> org.springframework.beans.factory.annotation.Value;
<span class="kw">import</span> org.springframework.stereotype.Component;
<span class="kw">import</span> org.springframework.boot.context.properties.ConfigurationProperties;

<span class="cm">// Approach 1: Using @Value for single properties</span>
<span class="attr">@Component</span>
<span class="kw">public class</span> <span class="fn">JwtUtils</span> {
    
    <span class="attr">@Value</span>(<span class="str">"\${app.jwt.secret}"</span>)
    <span class="kw">private</span> String jwtSecret;
    
    <span class="attr">@Value</span>(<span class="str">"\${app.jwt.expiration-ms}"</span>)
    <span class="kw">private int</span> jwtExpirationMs;
}

<span class="cm">// Approach 2: Using @ConfigurationProperties (Recommended for grouped properties)</span>
<span class="attr">@Component</span>
<span class="attr">@ConfigurationProperties</span>(prefix = <span class="str">"app.jwt"</span>)
<span class="kw">public class</span> <span class="fn">JwtProperties</span> {
    <span class="kw">private</span> String secret;
    <span class="kw">private int</span> expirationMs;

    <span class="cm">// Getters and Setters are required for @ConfigurationProperties to work!</span>
    <span class="kw">public</span> String <span class="fn">getSecret</span>() { <span class="kw">return</span> secret; }
    <span class="kw">public void</span> <span class="fn">setSecret</span>(String secret) { <span class="kw">this</span>.secret = secret; }
    
    <span class="kw">public int</span> <span class="fn">getExpirationMs</span>() { <span class="kw">return</span> expirationMs; }
    <span class="kw">public void</span> <span class="fn">setExpirationMs</span>(<span class="kw">int</span> expirationMs) { <span class="kw">this</span>.expirationMs = expirationMs; }
}`}
        </CodeBlock>
      </Subsection>
    </Section>
  );
};

export default SBChapter1;
