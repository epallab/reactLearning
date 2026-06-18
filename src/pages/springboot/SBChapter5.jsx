import Section from '../../components/Content/Section';
import Subsection from '../../components/Content/Subsection';
import CodeBlock from '../../components/UI/CodeBlock';
import InfoBox from '../../components/UI/InfoBox';

const SBChapter5 = () => {
  return (
    <Section id="sb-chapter-5" number={5} title="Security with Spring Security" theme="green">
      <p>
        Securing an application involves two primary concepts: <strong>Authentication</strong> (Who are you?) and <strong>Authorization</strong> (What are you allowed to do?). Spring Security is the de facto standard for securing Spring-based applications, providing comprehensive support for both.
      </p>

      <Subsection id="security-fundamentals" icon="🔐" iconBg="#e6f4ea" iconColor="#137333" title="5.1 Security Fundamentals">
        <p>
          Spring Security works through a chain of Servlet Filters (the `SecurityFilterChain`). It intercepts incoming HTTP requests, applies authentication rules, and then passes the request down to the controllers if the user is authorized.
        </p>

        <CodeBlock filename="SecurityConfig.java" language="java">
{`<span class="attr">@Configuration</span>
<span class="attr">@EnableWebSecurity</span>
<span class="kw">public class</span> <span class="fn">SecurityConfig</span> {

    <span class="attr">@Bean</span>
    <span class="kw">public</span> SecurityFilterChain <span class="fn">filterChain</span>(HttpSecurity http) <span class="kw">throws</span> Exception {
        http
            <span class="cm">// Disable CSRF since we use stateless JWTs (explained next)</span>
            .<span class="fn">csrf</span>(csrf -&gt; csrf.<span class="fn">disable</span>())
            
            <span class="cm">// Configure route authorization rules</span>
            .<span class="fn">authorizeHttpRequests</span>(auth -&gt; auth
                .<span class="fn">requestMatchers</span>(<span class="str">"/api/auth/**"</span>, <span class="str">"/public/**"</span>).<span class="fn">permitAll</span>() <span class="cm">// Open access</span>
                .<span class="fn">requestMatchers</span>(<span class="str">"/api/admin/**"</span>).<span class="fn">hasRole</span>(<span class="str">"ADMIN"</span>) <span class="cm">// Admin only</span>
                .<span class="fn">anyRequest</span>().<span class="fn">authenticated</span>() <span class="cm">// Require login for everything else</span>
            )
            
            <span class="cm">// Set session management to STATELESS for REST APIs</span>
            .<span class="fn">sessionManagement</span>(sess -&gt; sess.<span class="fn">sessionCreationPolicy</span>(SessionCreationPolicy.STATELESS));
            
            <span class="cm">// (We would also add our JWT Filter here)</span>

        <span class="kw">return</span> http.<span class="fn">build</span>();
    }

    <span class="cm">// Always hash passwords before saving them! Never store plain text.</span>
    <span class="attr">@Bean</span>
    <span class="kw">public</span> PasswordEncoder <span class="fn">passwordEncoder</span>() {
        <span class="kw">return new</span> <span class="fn">BCryptPasswordEncoder</span>();
    }
}`}
        </CodeBlock>
      </Subsection>

      <Subsection id="jwt-authentication" icon="🎫" iconBg="#e6f4ea" iconColor="#137333" title="5.2 JWT Authentication">
        <p>
          In modern REST APIs and Single Page Applications (SPAs) like React or Angular, session-based authentication (cookies and server memory) is often replaced by token-based authentication using <strong>JSON Web Tokens (JWT)</strong>. 
        </p>
        <p>
          A JWT is a cryptographically signed, Base64-encoded string containing a header, a payload (claims about the user), and a signature. Because it contains everything needed to verify the user, the server doesn't need to keep a session state in memory.
        </p>

        <h4>The JWT Authentication Flow</h4>
        <ol>
          <li>Client sends `POST /api/auth/login` with username and password.</li>
          <li>Server verifies credentials against the database using `AuthenticationManager`.</li>
          <li>If valid, the server generates a JWT (signed with a secret key) and returns it.</li>
          <li>Client stores the token (e.g., in localStorage or an HttpOnly cookie).</li>
          <li>For subsequent requests, the Client sends the token in the HTTP Header: `Authorization: Bearer &lt;token&gt;`.</li>
          <li>A custom `JwtAuthenticationFilter` intercepts the request, validates the token signature, and populates the Spring Security Context.</li>
        </ol>
      </Subsection>

      <Subsection id="role-based-access" icon="👥" iconBg="#e6f4ea" iconColor="#137333" title="5.3 Role-Based Access Control (RBAC)">
        <p>
          While you can configure URL-based authorization in the `SecurityFilterChain`, it's often more maintainable to secure your business logic directly at the method level using annotations.
        </p>

        <p>First, enable global method security:</p>
        <CodeBlock filename="MethodSecurityConfig.java" language="java">
{`<span class="attr">@Configuration</span>
<span class="attr">@EnableMethodSecurity</span> <span class="cm">// Enables @PreAuthorize, @PostAuthorize, etc.</span>
<span class="kw">public class</span> <span class="fn">MethodSecurityConfig</span> { }`}
        </CodeBlock>

        <p>Then, apply the annotations directly to your controllers or services:</p>
        <CodeBlock filename="UserController.java" language="java">
{`<span class="attr">@RestController</span>
<span class="attr">@RequestMapping</span>(<span class="str">"/api/users"</span>)
<span class="kw">public class</span> <span class="fn">UserController</span> {

    <span class="cm">// Only users with the ADMIN role can execute this method</span>
    <span class="attr">@PreAuthorize</span>(<span class="str">"hasRole('ADMIN')"</span>)
    <span class="attr">@DeleteMapping</span>(<span class="str">"/{id}"</span>)
    <span class="kw">public</span> ResponseEntity&lt;Void&gt; <span class="fn">deleteUser</span>(<span class="attr">@PathVariable</span> Long id) {
        userService.<span class="fn">deleteUser</span>(id);
        <span class="kw">return</span> ResponseEntity.<span class="fn">noContent</span>().<span class="fn">build</span>();
    }

    <span class="cm">// Users can only view their OWN profile, unless they are an ADMIN</span>
    <span class="attr">@PreAuthorize</span>(<span class="str">"hasRole('ADMIN') or #id == authentication.principal.id"</span>)
    <span class="attr">@GetMapping</span>(<span class="str">"/{id}"</span>)
    <span class="kw">public</span> UserDto <span class="fn">getUserProfile</span>(<span class="attr">@PathVariable</span> Long id) {
        <span class="kw">return</span> userService.<span class="fn">getUserById</span>(id);
    }
}`}
        </CodeBlock>
      </Subsection>

      <Subsection id="oauth2-cors" icon="🌍" iconBg="#e6f4ea" iconColor="#137333" title="5.4 OAuth2 & CORS Configuration">
        <p>
          <strong>CORS (Cross-Origin Resource Sharing):</strong> When your React frontend (e.g., `http://localhost:3000`) tries to call your Spring Boot backend (e.g., `http://localhost:8080`), the browser blocks the request for security reasons. You must configure Spring Security to allow cross-origin requests.
        </p>
        
        <CodeBlock filename="CorsConfig.java" language="java">
{`http.<span class="fn">cors</span>(cors -&gt; cors.<span class="fn">configurationSource</span>(request -&gt; {
    CorsConfiguration config = <span class="kw">new</span> <span class="fn">CorsConfiguration</span>();
    config.<span class="fn">setAllowedOrigins</span>(List.<span class="fn">of</span>(<span class="str">"http://localhost:3000"</span>)); <span class="cm">// Allowed frontends</span>
    config.<span class="fn">setAllowedMethods</span>(List.<span class="fn">of</span>(<span class="str">"GET"</span>, <span class="str">"POST"</span>, <span class="str">"PUT"</span>, <span class="str">"DELETE"</span>, <span class="str">"OPTIONS"</span>));
    config.<span class="fn">setAllowedHeaders</span>(List.<span class="fn">of</span>(<span class="str">"Authorization"</span>, <span class="str">"Content-Type"</span>));
    <span class="kw">return</span> config;
}));`}
        </CodeBlock>

        <p>
          <strong>OAuth2 Login:</strong> Spring Security makes it incredibly easy to implement "Login with Google" or "Login with GitHub" via OAuth2. By adding the `spring-boot-starter-oauth2-client` dependency and putting your client ID and secret in `application.yml`, Spring auto-configures the entire redirection flow!
        </p>
      </Subsection>
    </Section>
  );
};

export default SBChapter5;
