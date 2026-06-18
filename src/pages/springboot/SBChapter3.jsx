import Section from '../../components/Content/Section';
import Subsection from '../../components/Content/Subsection';
import CodeBlock from '../../components/UI/CodeBlock';
import InfoBox from '../../components/UI/InfoBox';

const SBChapter3 = () => {
  return (
    <Section id="sb-chapter-3" number={3} title="Building REST APIs with Spring MVC" theme="green">
      <p>
        Spring MVC is the web framework built into Spring Boot. It uses the `DispatcherServlet` to route incoming HTTP requests to the appropriate handlers (Controllers). When building REST APIs, Spring MVC handles the heavy lifting of routing, parameter extraction, and serialization.
      </p>

      <Subsection id="rest-controller" icon="🌐" iconBg="#e6f4ea" iconColor="#137333" title="3.1 @RestController & Request Mapping">
        <p>
          The `@RestController` annotation is a specialized version of `@Controller`. It combines `@Controller` and `@ResponseBody`, meaning every method returns a domain object instead of a view (HTML page), and Spring automatically serializes it into the HTTP response body (usually as JSON).
        </p>

        <CodeBlock filename="ProductController.java" language="java">
{`<span class="attr">@RestController</span>
<span class="attr">@RequestMapping</span>(<span class="str">"/api/v1/products"</span>) <span class="cm">// Base path for all endpoints in this class</span>
<span class="kw">public class</span> <span class="fn">ProductController</span> {

    <span class="kw">private final</span> ProductService productService;

    <span class="kw">public</span> <span class="fn">ProductController</span>(ProductService productService) {
        <span class="kw">this</span>.productService = productService;
    }

    <span class="cm">// GET /api/v1/products</span>
    <span class="attr">@GetMapping</span>
    <span class="kw">public</span> List&lt;Product&gt; <span class="fn">getAllProducts</span>() {
        <span class="kw">return</span> productService.<span class="fn">findAll</span>();
    }

    <span class="cm">// GET /api/v1/products/123</span>
    <span class="cm">// Extracts the 'id' from the URL path</span>
    <span class="attr">@GetMapping</span>(<span class="str">"/{id}"</span>)
    <span class="kw">public</span> Product <span class="fn">getProductById</span>(<span class="attr">@PathVariable</span> Long id) {
        <span class="kw">return</span> productService.<span class="fn">findById</span>(id);
    }

    <span class="cm">// GET /api/v1/products/search?category=electronics</span>
    <span class="cm">// Extracts the 'category' from the query string parameters</span>
    <span class="attr">@GetMapping</span>(<span class="str">"/search"</span>)
    <span class="kw">public</span> List&lt;Product&gt; <span class="fn">searchProducts</span>(<span class="attr">@RequestParam</span> String category) {
        <span class="kw">return</span> productService.<span class="fn">findByCategory</span>(category);
    }
}`}
        </CodeBlock>
      </Subsection>

      <Subsection id="request-response" icon="📨" iconBg="#e6f4ea" iconColor="#137333" title="3.2 Request Body, Response & DTOs">
        <p>
          For POST and PUT requests, the client sends data in the request body. We map this data to a Java object using `@RequestBody`. 
        </p>
        <p>
          It's a crucial best practice to <strong>never expose your database Entities directly in your REST controllers</strong>. Instead, use Data Transfer Objects (DTOs). Java 14+ Records are perfect for creating concise DTOs.
        </p>

        <CodeBlock filename="CreateProductDto.java" language="java">
{`<span class="cm">// A Java Record automatically generates getters, equals(), hashCode(), and toString()</span>
<span class="kw">public record</span> <span class="fn">CreateProductDto</span>(
    String name,
    String description,
    BigDecimal price
) {}`}
        </CodeBlock>

        <p>
          Additionally, you should wrap your return objects in `ResponseEntity`. This gives you full control over the HTTP status code and response headers.
        </p>

        <CodeBlock filename="ProductController.java (POST)" language="java">
{`    <span class="cm">// POST /api/v1/products</span>
    <span class="attr">@PostMapping</span>
    <span class="kw">public</span> ResponseEntity&lt;ProductResponseDto&gt; <span class="fn">createProduct</span>(
            <span class="attr">@RequestBody</span> CreateProductDto createDto) {
        
        <span class="cm">// Service layer converts DTO to Entity, saves it, and returns saved Entity</span>
        Product savedProduct = productService.<span class="fn">create</span>(createDto);
        
        <span class="cm">// Controller converts saved Entity back to Response DTO</span>
        ProductResponseDto responseDto = <span class="kw">new</span> <span class="fn">ProductResponseDto</span>(savedProduct);
        
        <span class="cm">// Return 201 Created status code with the newly created resource</span>
        <span class="kw">return</span> ResponseEntity.<span class="fn">status</span>(HttpStatus.CREATED).<span class="fn">body</span>(responseDto);
    }`}
        </CodeBlock>

        <InfoBox type="note" title="Status Codes Matter">
          Always return the correct HTTP status code. `200 OK` for GET/PUT, `201 Created` for POST, `204 No Content` for successful DELETEs, `400 Bad Request` for invalid inputs, and `404 Not Found` when a resource doesn't exist.
        </InfoBox>
      </Subsection>

      <Subsection id="content-negotiation" icon="🔗" iconBg="#e6f4ea" iconColor="#137333" title="3.3 Content Negotiation & JSON">
        <p>
          Under the hood, Spring Boot uses the <strong>Jackson</strong> library to convert Java objects to JSON and vice-versa. This happens automatically thanks to Spring's `HttpMessageConverters`.
        </p>
        <p>
          Content Negotiation allows the same endpoint to serve different formats based on the client's `Accept` header. If a client requests `Accept: application/xml`, and you've added the Jackson XML extension dependency, Spring will automatically serialize the response to XML instead of JSON without changing your controller code.
        </p>

        <CodeBlock filename="Jackson Annotations" language="java">
{`<span class="kw">public class</span> <span class="fn">UserResponseDto</span> {
    
    <span class="kw">private</span> Long id;
    
    <span class="attr">@JsonProperty</span>(<span class="str">"full_name"</span>) <span class="cm">// Changes the JSON key from "name" to "full_name"</span>
    <span class="kw">private</span> String name;
    
    <span class="attr">@JsonIgnore</span> <span class="cm">// Prevents the password from being serialized into the response</span>
    <span class="kw">private</span> String password;
    
    <span class="attr">@JsonFormat</span>(pattern = <span class="str">"yyyy-MM-dd HH:mm:ss"</span>) <span class="cm">// Formats the date string</span>
    <span class="kw">private</span> LocalDateTime createdAt;
}`}
        </CodeBlock>
      </Subsection>

      <Subsection id="api-versioning" icon="📋" iconBg="#e6f4ea" iconColor="#137333" title="3.4 API Versioning & Documentation">
        <p>
          APIs evolve, and you must avoid breaking existing mobile apps or third-party integrations when you make changes. The most common versioning strategy is <strong>URI Versioning</strong> (e.g., `/api/v1/...` and `/api/v2/...`).
        </p>
        
        <h4>OpenAPI (Swagger) Documentation</h4>
        <p>
          Documenting your REST APIs is non-negotiable for professional teams. The `springdoc-openapi-starter-webmvc-ui` dependency automates this. It reads your Spring MVC annotations and generates an interactive Swagger UI.
        </p>

        <CodeBlock filename="pom.xml" language="xml">
{`<span class="tag">&lt;dependency&gt;</span>
    <span class="tag">&lt;groupId&gt;</span>org.springdoc<span class="tag">&lt;/groupId&gt;</span>
    <span class="tag">&lt;artifactId&gt;</span>springdoc-openapi-starter-webmvc-ui<span class="tag">&lt;/artifactId&gt;</span>
    <span class="tag">&lt;version&gt;</span>2.5.0<span class="tag">&lt;/version&gt;</span>
<span class="tag">&lt;/dependency&gt;</span>`}
        </CodeBlock>

        <p>
          You can enrich the documentation using `@Operation` and `@ApiResponse` annotations on your controller methods to describe what the endpoint does and what status codes it might return.
        </p>
        <p>
          Once added and running, the interactive documentation is available at `http://localhost:8080/swagger-ui.html`.
        </p>
      </Subsection>
    </Section>
  );
};

export default SBChapter3;
