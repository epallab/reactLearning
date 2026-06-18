import Section from '../../components/Content/Section';
import Subsection from '../../components/Content/Subsection';
import CodeBlock from '../../components/UI/CodeBlock';
import InfoBox from '../../components/UI/InfoBox';

const SBChapter7 = () => {
  return (
    <Section id="sb-chapter-7" number={7} title="Testing Spring Boot Applications" theme="green">
      <p>
        Testing is not an afterthought in Spring Boot; it's a first-class citizen. Spring Boot provides a dedicated `spring-boot-starter-test` dependency that pulls in everything you need: JUnit 5, Mockito, AssertJ, Hamcrest, and Spring's own testing utilities.
      </p>

      <Subsection id="unit-testing" icon="🧪" iconBg="#e6f4ea" iconColor="#137333" title="7.1 Unit Testing with JUnit 5 & Mockito">
        <p>
          A unit test isolates a specific class and tests it without loading the Spring container. Because you used Constructor Injection (as discussed in Chapter 2), this is incredibly easy. You just instantiate the class and pass in Mock objects for its dependencies.
        </p>

        <CodeBlock filename="UserServiceTest.java" language="java">
{`<span class="kw">import</span> org.junit.jupiter.api.Test;
<span class="kw">import</span> org.junit.jupiter.api.extension.ExtendWith;
<span class="kw">import</span> org.mockito.InjectMocks;
<span class="kw">import</span> org.mockito.Mock;
<span class="kw">import</span> org.mockito.junit.jupiter.MockitoExtension;
<span class="kw">import static</span> org.mockito.Mockito.*;
<span class="kw">import static</span> org.assertj.core.api.Assertions.*;

<span class="attr">@ExtendWith</span>(MockitoExtension.<span class="kw">class</span>)
<span class="kw">class</span> <span class="fn">UserServiceTest</span> {

    <span class="attr">@Mock</span> <span class="cm">// Creates a fake implementation of UserRepository</span>
    <span class="kw">private</span> UserRepository userRepository;

    <span class="attr">@InjectMocks</span> <span class="cm">// Injects the mock repository into the service</span>
    <span class="kw">private</span> UserService userService;

    <span class="attr">@Test</span>
    <span class="kw">void</span> <span class="fn">shouldReturnUserWhenIdExists</span>() {
        <span class="cm">// Arrange (Given)</span>
        User mockUser = <span class="kw">new</span> <span class="fn">User</span>(1L, <span class="str">"Alice"</span>);
        <span class="fn">when</span>(userRepository.<span class="fn">findById</span>(1L)).<span class="fn">thenReturn</span>(Optional.<span class="fn">of</span>(mockUser));

        <span class="cm">// Act (When)</span>
        User result = userService.<span class="fn">getUserById</span>(1L);

        <span class="cm">// Assert (Then)</span>
        <span class="fn">assertThat</span>(result.<span class="fn">getName</span>()).<span class="fn">isEqualTo</span>(<span class="str">"Alice"</span>);
        <span class="fn">verify</span>(userRepository, <span class="fn">times</span>(1)).<span class="fn">findById</span>(1L);
    }
}`}
        </CodeBlock>
      </Subsection>

      <Subsection id="integration-testing" icon="🔬" iconBg="#e6f4ea" iconColor="#137333" title="7.2 Integration Testing (@SpringBootTest)">
        <p>
          Integration tests ensure that all the components in your application wire together correctly and interact with databases/external systems as expected. The `@SpringBootTest` annotation loads the <em>entire</em> Spring Application Context.
        </p>
        <p>
          You can use `MockMvc` to simulate HTTP requests without actually starting an embedded web server, making the tests much faster.
        </p>

        <CodeBlock filename="UserControllerIntegrationTest.java" language="java">
{`<span class="attr">@SpringBootTest</span>
<span class="attr">@AutoConfigureMockMvc</span>
<span class="kw">class</span> <span class="fn">UserControllerIntegrationTest</span> {

    <span class="attr">@Autowired</span>
    <span class="kw">private</span> MockMvc mockMvc;

    <span class="attr">@Autowired</span>
    <span class="kw">private</span> UserRepository userRepository;

    <span class="attr">@Test</span>
    <span class="kw">void</span> <span class="fn">shouldCreateNewUser</span>() <span class="kw">throws</span> Exception {
        String jsonPayload = <span class="str">"{ \"username\": \"bob123\", \"email\": \"bob@example.com\" }"</span>;

        mockMvc.<span class="fn">perform</span>(post(<span class="str">"/api/users"</span>)
                .<span class="fn">contentType</span>(MediaType.APPLICATION_JSON)
                .<span class="fn">content</span>(jsonPayload))
               .<span class="fn">andExpect</span>(status().<span class="fn">isCreated</span>())
               .<span class="fn">andExpect</span>(jsonPath(<span class="str">"$.username"</span>).<span class="fn">value</span>(<span class="str">"bob123"</span>));
               
        <span class="cm">// Verify the user was actually saved in the DB</span>
        <span class="fn">assertThat</span>(userRepository.<span class="fn">findByUsername</span>(<span class="str">"bob123"</span>)).<span class="fn">isPresent</span>();
    }
}`}
        </CodeBlock>
      </Subsection>

      <Subsection id="slice-testing" icon="🍰" iconBg="#e6f4ea" iconColor="#137333" title="7.3 Slice Testing">
        <p>
          Loading the full Application Context with `@SpringBootTest` is slow. If you only want to test the Web Layer (Controllers) or the Data Layer (Repositories), Spring Boot provides "slice" annotations. They only load the beans relevant to that specific slice.
        </p>

        <ul>
          <li><code>@WebMvcTest(UserController.class)</code>: Loads only the specified controller, Jackson converters, and validation configurations. You must `@MockBean` any service dependencies.</li>
          <li><code>@DataJpaTest</code>: Configures an in-memory database (like H2), configures Hibernate, and loads your Repository interfaces. It's automatically transactional and rolls back at the end of each test.</li>
          <li><code>@JsonTest</code>: Tests JSON serialization/deserialization.</li>
        </ul>
      </Subsection>

      <Subsection id="testcontainers" icon="🐳" iconBg="#e6f4ea" iconColor="#137333" title="7.4 TestContainers">
        <p>
          Using an in-memory H2 database for `@DataJpaTest` is fast, but H2 has different SQL syntax than your production PostgreSQL or MySQL database. This can lead to tests passing locally but failing in production.
        </p>
        <p>
          <strong>Testcontainers</strong> solves this by spinning up real, ephemeral Docker containers (e.g., a real Postgres database, a real Kafka broker) during test execution, wiring them to Spring, and tearing them down afterward.
        </p>

        <CodeBlock filename="PostgresTest.java" language="java">
{`<span class="attr">@SpringBootTest</span>
<span class="attr">@Testcontainers</span>
<span class="kw">class</span> <span class="fn">ProductRepositoryTest</span> {

    <span class="cm">// Spins up a real Postgres 15 docker container before tests run!</span>
    <span class="attr">@Container</span>
    <span class="kw">static</span> PostgreSQLContainer&lt;?&gt; postgres = <span class="kw">new</span> <span class="fn">PostgreSQLContainer</span>&lt;&gt;(<span class="str">"postgres:15-alpine"</span>);

    <span class="attr">@DynamicPropertySource</span>
    <span class="kw">static void</span> <span class="fn">configureProperties</span>(DynamicPropertyRegistry registry) {
        <span class="cm">// Tells Spring to use the container's randomized URL and credentials</span>
        registry.<span class="fn">add</span>(<span class="str">"spring.datasource.url"</span>, postgres::getJdbcUrl);
        registry.<span class="fn">add</span>(<span class="str">"spring.datasource.username"</span>, postgres::getUsername);
        registry.<span class="fn">add</span>(<span class="str">"spring.datasource.password"</span>, postgres::getPassword);
    }
    
    <span class="cm">// ... your tests here run against the REAL dockerized database</span>
}`}
        </CodeBlock>
      </Subsection>
    </Section>
  );
};

export default SBChapter7;
