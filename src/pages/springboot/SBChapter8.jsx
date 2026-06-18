import Section from '../../components/Content/Section';
import Subsection from '../../components/Content/Subsection';
import CodeBlock from '../../components/UI/CodeBlock';
import InfoBox from '../../components/UI/InfoBox';

const SBChapter8 = () => {
  return (
    <Section id="sb-chapter-8" number={8} title="Microservices Architecture" theme="green">
      <p>
        While Spring Boot makes it easy to build monoliths, it shines brightest when building microservices. Spring Cloud builds upon Spring Boot to provide patterns for distributed systems, such as configuration management, service discovery, circuit breakers, and API gateways.
      </p>

      <Subsection id="microservices-patterns" icon="🏗️" iconBg="#e6f4ea" iconColor="#137333" title="8.1 Microservices Design Patterns">
        <p>
          Before splitting an application, you must understand boundaries. Microservices are typically divided by <strong>Bounded Contexts</strong> (a concept from Domain-Driven Design). For an e-commerce app, you wouldn't split by technical layer (e.g., a service for all controllers, a service for all DB access). Instead, you split by business domain: an Inventory Service, an Order Service, and a Payment Service.
        </p>
        <p>Each microservice must own its own database to ensure loose coupling. If Order Service needs data from Inventory Service, it must call the Inventory API, not query the Inventory database directly.</p>
      </Subsection>

      <Subsection id="service-discovery" icon="🔍" iconBg="#e6f4ea" iconColor="#137333" title="8.2 Service Discovery (Eureka)">
        <p>
          In a cloud environment, microservices dynamically scale up and down. Their IP addresses change constantly. Hardcoding IPs is impossible. 
        </p>
        <p>
          <strong>Netflix Eureka</strong> acts as a phonebook. When a service boots up, it registers its IP with Eureka. When Service A needs to call Service B, it asks Eureka for Service B's location.
        </p>

        <CodeBlock filename="EurekaServerApplication.java" language="java">
{`<span class="attr">@SpringBootApplication</span>
<span class="attr">@EnableEurekaServer</span> <span class="cm">// Turns this app into a Eureka Registry</span>
<span class="kw">public class</span> <span class="fn">EurekaServerApplication</span> {
    <span class="kw">public static void</span> <span class="fn">main</span>(String[] args) {
        SpringApplication.<span class="fn">run</span>(EurekaServerApplication.<span class="kw">class</span>, args);
    }
}`}
        </CodeBlock>

        <p>Then, in your worker microservices, you add `@EnableDiscoveryClient` and configure Eureka's URL in `application.yml`.</p>
      </Subsection>

      <Subsection id="api-gateway" icon="🚪" iconBg="#e6f4ea" iconColor="#137333" title="8.3 API Gateway (Spring Cloud Gateway)">
        <p>
          Clients shouldn't have to know the IP addresses of 50 different microservices, nor should they handle authentication 50 times. An API Gateway is the single entry point for all client requests.
        </p>
        <p>
          Spring Cloud Gateway routes incoming requests to the correct backend service (often asking Eureka where that service is). It's also the perfect place to enforce rate limiting, CORS, and JWT authentication validation.
        </p>

        <CodeBlock filename="application.yml (Gateway)" language="yaml">
{`spring:
  cloud:
    gateway:
      routes:
        - id: order-service
          uri: lb://ORDER-SERVICE <span class="cm"># Load-balances via Eureka</span>
          predicates:
            - Path=/api/orders/**
          filters:
            - AddRequestHeader=X-Tenant, App1
        
        - id: inventory-service
          uri: lb://INVENTORY-SERVICE
          predicates:
            - Path=/api/inventory/**`}
        </CodeBlock>
      </Subsection>

      <Subsection id="circuit-breaker" icon="🔌" iconBg="#e6f4ea" iconColor="#137333" title="8.4 Resilience with Circuit Breaker (Resilience4j)">
        <p>
          In distributed systems, failures are guaranteed. If the Payment Service goes down, the Order Service (which calls it) will hang, tying up threads until it crashes too. This cascading failure can bring down your whole system.
        </p>
        <p>
          A Circuit Breaker (like Resilience4j) wraps network calls. If the call fails repeatedly, the circuit "trips" (opens). Future calls fail fast without waiting for timeouts, allowing the failing service time to recover. You can provide a fallback response while the circuit is open.
        </p>

        <CodeBlock filename="OrderService.java" language="java">
{`<span class="attr">@Service</span>
<span class="kw">public class</span> <span class="fn">OrderService</span> {

    <span class="attr">@CircuitBreaker</span>(name = <span class="str">"inventoryService"</span>, fallbackMethod = <span class="str">"fallbackInventory"</span>)
    <span class="kw">public boolean</span> <span class="fn">checkInventory</span>(String productId) {
        <span class="cm">// Makes an HTTP call to the Inventory Service</span>
        <span class="kw">return</span> restTemplate.<span class="fn">getForObject</span>(<span class="str">"http://INVENTORY-SERVICE/api/inventory/"</span> + productId, Boolean.<span class="kw">class</span>);
    }

    <span class="cm">// Executed automatically if the circuit is open or an exception occurs</span>
    <span class="kw">public boolean</span> <span class="fn">fallbackInventory</span>(String productId, Throwable t) {
        <span class="cm">// Log the error and return a safe default</span>
        log.<span class="fn">error</span>(<span class="str">"Inventory service down, assuming out of stock for "</span> + productId, t);
        <span class="kw">return false</span>; 
    }
}`}
        </CodeBlock>
      </Subsection>
    </Section>
  );
};

export default SBChapter8;
