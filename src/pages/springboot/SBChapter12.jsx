import Section from '../../components/Content/Section';
import Subsection from '../../components/Content/Subsection';
import CodeBlock from '../../components/UI/CodeBlock';
import InfoBox from '../../components/UI/InfoBox';

const SBChapter12 = () => {
  return (
    <Section id="sb-chapter-12" number={12} title="Advanced Topics & Interview Prep" theme="green">
      <p>
        To truly distinguish yourself as a Senior Spring Boot Developer, you must understand the framework's internal mechanics and design patterns. This chapter covers the deep-dive topics frequently asked in technical interviews.
      </p>

      <Subsection id="design-patterns" icon="🎨" iconBg="#e6f4ea" iconColor="#137333" title="12.1 Design Patterns in Spring">
        <p>The Spring Framework is a masterclass in applying software design patterns. Understanding them helps you understand how Spring works internally.</p>
        <ul>
          <li><strong>Singleton Pattern:</strong> Used heavily. Spring Beans are singletons by default within the IoC container.</li>
          <li><strong>Factory Pattern:</strong> The `BeanFactory` and `ApplicationContext` are classic implementations of the Factory pattern, responsible for creating and delivering objects.</li>
          <li><strong>Proxy Pattern:</strong> Used extensively in Spring AOP and `@Transactional`. When you inject a transactional bean, Spring doesn't give you the actual object; it gives you a dynamically generated Proxy object that wraps the actual object with begin/commit/rollback logic.</li>
          <li><strong>Template Method Pattern:</strong> Seen in `JdbcTemplate`, `RestTemplate`, and `KafkaTemplate`. They provide a skeleton algorithm, leaving specific steps to be implemented by the developer.</li>
        </ul>
      </Subsection>

      <Subsection id="transaction-deep-dive" icon="🔀" iconBg="#e6f4ea" iconColor="#137333" title="12.2 Transaction Propagation Deep Dive">
        <p>
          What happens when one `@Transactional` method calls another `@Transactional` method? Does it create a new transaction, or join the existing one? This is determined by the <strong>Propagation Behavior</strong>.
        </p>
        
        <CodeBlock filename="Propagation Types" language="java">
{`<span class="cm">// REQUIRED (Default): If a transaction exists, join it. If not, create a new one.</span>
<span class="attr">@Transactional</span>(propagation = Propagation.REQUIRED)

<span class="cm">// REQUIRES_NEW: Suspend the current transaction (if any) and ALWAYS start a new one.</span>
<span class="cm">// Useful for Audit Logging (logs must be saved even if the main transaction rolls back).</span>
<span class="attr">@Transactional</span>(propagation = Propagation.REQUIRES_NEW)

<span class="cm">// MANDATORY: Must be called from within an existing transaction, otherwise throws exception.</span>
<span class="attr">@Transactional</span>(propagation = Propagation.MANDATORY)

<span class="cm">// NESTED: Executes within a nested transaction using savepoints.</span>
<span class="attr">@Transactional</span>(propagation = Propagation.NESTED)`}
        </CodeBlock>
      </Subsection>

      <Subsection id="aop-aspects" icon="🎯" iconBg="#e6f4ea" iconColor="#137333" title="12.3 Aspect-Oriented Programming (AOP)">
        <p>
          AOP is a programming paradigm that aims to increase modularity by allowing the separation of <strong>Cross-Cutting Concerns</strong>. Logging, security, and transaction management are things that "cut across" your entire application. Instead of copy-pasting logging code into every single service method, you use AOP.
        </p>

        <CodeBlock filename="LoggingAspect.java" language="java">
{`<span class="attr">@Aspect</span>
<span class="attr">@Component</span>
<span class="kw">public class</span> <span class="fn">LoggingAspect</span> {

    <span class="cm">// Pointcut: Defines WHERE the aspect should be applied</span>
    <span class="cm">// This targets every method inside the 'service' package</span>
    <span class="attr">@Pointcut</span>(<span class="str">"execution(* com.example.demo.service.*.*(..))"</span>)
    <span class="kw">public void</span> <span class="fn">serviceMethods</span>() {}

    <span class="cm">// Advice: Defines WHAT code to run, and WHEN (Before, After, Around)</span>
    <span class="attr">@Around</span>(<span class="str">"serviceMethods()"</span>)
    <span class="kw">public</span> Object <span class="fn">logExecutionTime</span>(ProceedingJoinPoint joinPoint) <span class="kw">throws</span> Throwable {
        <span class="kw">long</span> start = System.<span class="fn">currentTimeMillis</span>();
        
        <span class="cm">// Continue executing the actual target method</span>
        Object proceed = joinPoint.<span class="fn">proceed</span>();
        
        <span class="kw">long</span> executionTime = System.<span class="fn">currentTimeMillis</span>() - start;
        System.out.<span class="fn">println</span>(joinPoint.<span class="fn">getSignature</span>() + <span class="str">" executed in "</span> + executionTime + <span class="str">"ms"</span>);
        
        <span class="kw">return</span> proceed;
    }
}`}
        </CodeBlock>
      </Subsection>

      <Subsection id="interview-questions" icon="💼" iconBg="#e6f4ea" iconColor="#137333" title="12.4 Top Spring Boot Interview Questions">
        <div className="interview-qa">
          <h4>1. What is the difference between @Component, @Service, @Repository, and @Controller?</h4>
          <p>
            `@Component` is a generic stereotype for any Spring-managed component. `@Service`, `@Repository`, and `@Controller` are specializations of `@Component`. `@Repository` automatically translates database-specific SQLExceptions into Spring's unified DataAccessException hierarchy. `@Controller` is picked up by the DispatcherServlet for web routing. `@Service` currently has no additional behavior over `@Component` but clarifies intent.
          </p>

          <h4>2. Explain how Spring Boot Auto-Configuration works internally.</h4>
          <p>
            The `@EnableAutoConfiguration` annotation tells Spring Boot to look for `META-INF/spring.factories` (or `META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports` in newer versions) in all classpath JARs. These files list auto-configuration classes. Spring evaluates these classes based on `@Conditional` annotations (e.g., "if Tomcat is on the classpath, load the Tomcat config").
          </p>

          <h4>3. What is the difference between ApplicationContext and BeanFactory?</h4>
          <p>
            `BeanFactory` uses lazy initialization (beans are created only when requested). `ApplicationContext` uses eager initialization (singleton beans are created at startup). ApplicationContext also supports internationalization, event publishing, and annotation-based dependency injection.
          </p>

          <h4>4. How do you resolve the "Circular Dependency" problem?</h4>
          <p>
            A circular dependency occurs when Bean A depends on Bean B, and Bean B depends on Bean A. The best solution is to redesign your classes to remove the cycle (often by extracting the shared logic into a third Bean C). If unavoidable, you can use `@Lazy` on one of the injected parameters to delay initialization.
          </p>
        </div>
      </Subsection>
    </Section>
  );
};

export default SBChapter12;
