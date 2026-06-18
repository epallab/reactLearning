import Section from '../../components/Content/Section';
import Subsection from '../../components/Content/Subsection';
import CodeBlock from '../../components/UI/CodeBlock';
import InfoBox from '../../components/UI/InfoBox';

const SBChapter2 = () => {
  return (
    <Section id="sb-chapter-2" number={2} title="Spring Core — IoC & Dependency Injection" theme="green">
      <p>
        To truly master Spring Boot, you must understand the engine running beneath it: The Spring Core framework. The core concepts of Spring are <strong>Inversion of Control (IoC)</strong> and <strong>Dependency Injection (DI)</strong>. These patterns promote loose coupling, making your code easier to test, maintain, and scale.
      </p>

      <Subsection id="ioc-container" icon="🔄" iconBg="#e6f4ea" iconColor="#137333" title="2.1 The IoC Container">
        <p>
          In a traditional Java application, objects are responsible for instantiating their own dependencies (e.g., using the `new` keyword). This leads to tight coupling. If Class A creates Class B, Class A is hardcoded to depend on the specific implementation of Class B.
        </p>
        <p>
          <strong>Inversion of Control</strong> means transferring the control of creating and managing objects away from the objects themselves and giving it to a container. In Spring, this container is the `ApplicationContext`. The objects managed by the Spring IoC container are called <strong>Beans</strong>.
        </p>
        <ul>
          <li><strong>BeanFactory:</strong> The simplest container, providing basic DI support. Rarely used directly in modern applications.</li>
          <li><strong>ApplicationContext:</strong> A sub-interface of BeanFactory. It adds more enterprise-specific functionality like internationalization, event propagation, and environment profiles. Spring Boot uses `ApplicationContext`.</li>
        </ul>
      </Subsection>

      <Subsection id="dependency-injection" icon="💉" iconBg="#e6f4ea" iconColor="#137333" title="2.2 Dependency Injection Patterns">
        <p>
          Dependency Injection is the mechanism used to implement IoC. The container injects the required dependencies into a bean when it is created. There are three primary ways to inject dependencies in Spring:
        </p>

        <h4>1. Constructor Injection (Strongly Recommended)</h4>
        <p>
          This is the best practice. Dependencies are provided as constructor parameters. It ensures that the bean is fully initialized in a valid state before it's used. It also makes the class easier to unit test without Spring, and allows dependencies to be marked as `final`.
        </p>
        <CodeBlock filename="UserService.java (Constructor Injection)" language="java">
{`<span class="attr">@Service</span>
<span class="kw">public class</span> <span class="fn">UserService</span> {

    <span class="kw">private final</span> UserRepository userRepository;
    <span class="kw">private final</span> EmailService emailService;

    <span class="cm">// @Autowired is optional in Spring 4.3+ if there's only one constructor</span>
    <span class="kw">public</span> <span class="fn">UserService</span>(UserRepository userRepository, EmailService emailService) {
        <span class="kw">this</span>.userRepository = userRepository;
        <span class="kw">this</span>.emailService = emailService;
    }

    <span class="kw">public void</span> <span class="fn">registerUser</span>(User user) {
        userRepository.<span class="fn">save</span>(user);
        emailService.<span class="fn">sendWelcomeEmail</span>(user.getEmail());
    }
}`}
        </CodeBlock>

        <h4>2. Field Injection (Not Recommended)</h4>
        <p>
          Dependencies are injected directly into the fields using `@Autowired`. While it requires the least amount of boilerplate code, it's heavily discouraged because it hides dependencies, prevents the use of `final` fields, and makes the class impossible to instantiate outside of a Spring container (e.g., in a unit test) without reflection.
        </p>
        <CodeBlock filename="BadPractice.java (Field Injection)" language="java">
{`<span class="attr">@Service</span>
<span class="kw">public class</span> <span class="fn">BadUserService</span> {

    <span class="attr">@Autowired</span>
    <span class="kw">private</span> UserRepository userRepository; <span class="cm">// Difficult to mock without Spring context!</span>
}`}
        </CodeBlock>

        <h4>Handling Multiple Implementations (@Qualifier & @Primary)</h4>
        <p>
          What happens when Spring finds multiple beans of the same type? It throws a `NoUniqueBeanDefinitionException`. You can resolve this using `@Qualifier` or `@Primary`.
        </p>
        <CodeBlock filename="PaymentProcessing.java" language="java">
{`<span class="kw">public interface</span> <span class="fn">PaymentGateway</span> { <span class="kw">void</span> <span class="fn">pay</span>(); }

<span class="attr">@Service</span>(<span class="str">"stripeGateway"</span>)
<span class="attr">@Primary</span> <span class="cm">// Makes this the default choice if no qualifier is specified</span>
<span class="kw">public class</span> <span class="fn">StripeGateway</span> <span class="kw">implements</span> PaymentGateway { ... }

<span class="attr">@Service</span>(<span class="str">"paypalGateway"</span>)
<span class="kw">public class</span> <span class="fn">PaypalGateway</span> <span class="kw">implements</span> PaymentGateway { ... }

<span class="attr">@Service</span>
<span class="kw">public class</span> <span class="fn">CheckoutService</span> {
    <span class="kw">private final</span> PaymentGateway defaultGateway; <span class="cm">// Gets Stripe (due to @Primary)</span>
    <span class="kw">private final</span> PaymentGateway paypalGateway;  <span class="cm">// Gets Paypal (due to @Qualifier)</span>

    <span class="kw">public</span> <span class="fn">CheckoutService</span>(
            PaymentGateway defaultGateway, 
            <span class="attr">@Qualifier</span>(<span class="str">"paypalGateway"</span>) PaymentGateway paypalGateway) {
        <span class="kw">this</span>.defaultGateway = defaultGateway;
        <span class="kw">this</span>.paypalGateway = paypalGateway;
    }
}`}
        </CodeBlock>
      </Subsection>

      <Subsection id="bean-lifecycle" icon="♻️" iconBg="#e6f4ea" iconColor="#137333" title="2.3 Bean Scopes & Lifecycle">
        <p>
          When you define a bean in Spring, you can declare the scope of that bean. The scope determines how long the bean lives and how many instances are created.
        </p>
        
        <ul>
          <li><strong>Singleton (Default):</strong> Only one instance of the bean is created per Spring IoC container. This single instance is cached and returned for all subsequent requests. <em>Stateful beans should not be singletons!</em></li>
          <li><strong>Prototype:</strong> A new instance is created every time the bean is requested from the container.</li>
          <li><strong>Request:</strong> Scoped to a single HTTP request (web applications only).</li>
          <li><strong>Session:</strong> Scoped to an HTTP session (web applications only).</li>
        </ul>

        <h4>Lifecycle Callbacks</h4>
        <p>
          You can hook into the bean creation and destruction phases using standard Java annotations: `@PostConstruct` and `@PreDestroy`.
        </p>
        
        <CodeBlock filename="DatabaseCache.java" language="java">
{`<span class="attr">@Component</span>
<span class="attr">@Scope</span>(<span class="str">"singleton"</span>) <span class="cm">// This is the default, explicitly stating it for clarity</span>
<span class="kw">public class</span> <span class="fn">DatabaseCache</span> {

    <span class="attr">@PostConstruct</span>
    <span class="kw">public void</span> <span class="fn">init</span>() {
        <span class="cm">// Called AFTER the bean has been instantiated and all dependencies injected.</span>
        <span class="cm">// Perfect place for expensive initialization logic.</span>
        System.out.<span class="fn">println</span>(<span class="str">"Populating cache from database..."</span>);
    }

    <span class="attr">@PreDestroy</span>
    <span class="kw">public void</span> <span class="fn">cleanup</span>() {
        <span class="cm">// Called right BEFORE the bean is destroyed (when application shuts down).</span>
        <span class="cm">// Perfect place to release resources, close connections, etc.</span>
        System.out.<span class="fn">println</span>(<span class="str">"Flushing cache to disk..."</span>);
    }
}`}
        </CodeBlock>
      </Subsection>

      <Subsection id="spring-profiles" icon="🏷️" iconBg="#e6f4ea" iconColor="#137333" title="2.4 Profiles & Conditional Beans">
        <p>
          Enterprise applications inevitably need to execute in different environments (e.g., `dev`, `qa`, `prod`). Spring Profiles provide a way to segregate parts of your application configuration and make it available only in certain environments.
        </p>

        <CodeBlock filename="EmailConfiguration.java" language="java">
{`<span class="attr">@Configuration</span>
<span class="kw">public class</span> <span class="fn">EmailConfiguration</span> {

    <span class="cm">// This bean is only created if the "dev" profile is active</span>
    <span class="attr">@Bean</span>
    <span class="attr">@Profile</span>(<span class="str">"dev"</span>)
    <span class="kw">public</span> EmailSender <span class="fn">mockEmailSender</span>() {
        <span class="kw">return new</span> <span class="fn">MockEmailSender</span>(); <span class="cm">// Just logs emails to the console</span>
    }

    <span class="cm">// This bean is only created if the "prod" profile is active</span>
    <span class="attr">@Bean</span>
    <span class="attr">@Profile</span>(<span class="str">"prod"</span>)
    <span class="kw">public</span> EmailSender <span class="fn">smtpEmailSender</span>() {
        <span class="kw">return new</span> <span class="fn">SmtpEmailSender</span>(); <span class="cm">// Actually sends emails via AWS SES or SendGrid</span>
    }
}`}
        </CodeBlock>

        <p>
          You activate a profile by passing an environment variable or command-line argument when running the application, or by setting it in your `application.yml`:
        </p>
        
        <CodeBlock filename="application.yml" language="yaml">
{`spring:
  profiles:
    active: dev`}
        </CodeBlock>
        
        <InfoBox type="tip" title="Advanced Conditionals">
          Spring Boot auto-configuration relies heavily on the `@Conditional` family of annotations. You can use these in your own code to dynamically register beans. Examples include: `@ConditionalOnProperty`, `@ConditionalOnClass`, and `@ConditionalOnMissingBean`.
        </InfoBox>
      </Subsection>
    </Section>
  );
};

export default SBChapter2;
