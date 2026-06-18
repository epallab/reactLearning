import Section from '../../components/Content/Section';
import Subsection from '../../components/Content/Subsection';
import CodeBlock from '../../components/UI/CodeBlock';
import InfoBox from '../../components/UI/InfoBox';

const SBChapter6 = () => {
  return (
    <Section id="sb-chapter-6" number={6} title="Exception Handling & Validation" theme="green">
      <p>
        A robust API must gracefully handle errors and invalid inputs. Instead of returning raw HTML error pages or unreadable Java stack traces, a professional REST API returns structured, predictable JSON error responses.
      </p>

      <Subsection id="global-exception-handling" icon="🛡️" iconBg="#e6f4ea" iconColor="#137333" title="6.1 Global Exception Handling (@ControllerAdvice)">
        <p>
          Instead of wrapping every controller method in `try/catch` blocks, Spring allows you to handle exceptions globally using `@ControllerAdvice`. This acts as an interceptor. Whenever an exception is thrown anywhere in the application, the advice class catches it and transforms it into an HTTP response.
        </p>

        <CodeBlock filename="GlobalExceptionHandler.java" language="java">
{`<span class="attr">@RestControllerAdvice</span> <span class="cm">// Combines @ControllerAdvice and @ResponseBody</span>
<span class="kw">public class</span> <span class="fn">GlobalExceptionHandler</span> {

    <span class="cm">// Catches our custom business exception</span>
    <span class="attr">@ExceptionHandler</span>(ResourceNotFoundException.<span class="kw">class</span>)
    <span class="kw">public</span> ResponseEntity&lt;ErrorResponse&gt; <span class="fn">handleNotFound</span>(ResourceNotFoundException ex) {
        ErrorResponse error = <span class="kw">new</span> <span class="fn">ErrorResponse</span>(
            HttpStatus.NOT_FOUND.<span class="fn">value</span>(),
            ex.<span class="fn">getMessage</span>(),
            LocalDateTime.<span class="fn">now</span>()
        );
        <span class="kw">return new</span> <span class="fn">ResponseEntity</span>&lt;&gt;(error, HttpStatus.NOT_FOUND);
    }

    <span class="cm">// Fallback for any unhandled exception (Prevent returning 500 HTML pages)</span>
    <span class="attr">@ExceptionHandler</span>(Exception.<span class="kw">class</span>)
    <span class="kw">public</span> ResponseEntity&lt;ErrorResponse&gt; <span class="fn">handleGlobalException</span>(Exception ex) {
        ErrorResponse error = <span class="kw">new</span> <span class="fn">ErrorResponse</span>(
            HttpStatus.INTERNAL_SERVER_ERROR.<span class="fn">value</span>(),
            <span class="str">"An unexpected error occurred"</span>,
            LocalDateTime.<span class="fn">now</span>()
        );
        <span class="kw">return new</span> <span class="fn">ResponseEntity</span>&lt;&gt;(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}`}
        </CodeBlock>
      </Subsection>

      <Subsection id="bean-validation" icon="✅" iconBg="#e6f4ea" iconColor="#137333" title="6.2 Bean Validation (JSR 380)">
        <p>
          You should never trust client input. Spring Boot provides seamless integration with the Hibernate Validator framework. You define your validation rules directly on your DTO classes using annotations.
        </p>

        <CodeBlock filename="RegisterRequestDto.java" language="java">
{`<span class="kw">public class</span> <span class="fn">RegisterRequestDto</span> {

    <span class="attr">@NotBlank</span>(message = <span class="str">"Username is required"</span>)
    <span class="attr">@Size</span>(min = 3, max = 20, message = <span class="str">"Username must be between 3 and 20 characters"</span>)
    <span class="kw">private</span> String username;

    <span class="attr">@NotBlank</span>(message = <span class="str">"Email is required"</span>)
    <span class="attr">@Email</span>(message = <span class="str">"Please provide a valid email address"</span>)
    <span class="kw">private</span> String email;

    <span class="attr">@NotBlank</span>
    <span class="attr">@Pattern</span>(regexp = <span class="str">"^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$"</span>, 
             message = <span class="str">"Password must contain at least one digit, one lowercase, one uppercase, and be 8+ chars long"</span>)
    <span class="kw">private</span> String password;
    
    <span class="cm">// ... getters/setters</span>
}`}
        </CodeBlock>

        <p>
          To trigger the validation, simply prepend the `@Valid` annotation to the `@RequestBody` in your controller:
        </p>

        <CodeBlock filename="AuthController.java" language="java">
{`<span class="attr">@PostMapping</span>(<span class="str">"/register"</span>)
<span class="kw">public</span> ResponseEntity&lt;String&gt; <span class="fn">register</span>(<span class="attr">@Valid</span> <span class="attr">@RequestBody</span> RegisterRequestDto request) {
    <span class="cm">// If validation fails, Spring automatically throws a MethodArgumentNotValidException</span>
    <span class="cm">// before this line of code is ever reached!</span>
    authService.<span class="fn">registerNewUser</span>(request);
    <span class="kw">return</span> ResponseEntity.<span class="fn">ok</span>(<span class="str">"User registered successfully"</span>);
}`}
        </CodeBlock>
      </Subsection>

      <Subsection id="custom-validators" icon="🔧" iconBg="#e6f4ea" iconColor="#137333" title="6.3 Custom Validators">
        <p>
          Sometimes the built-in annotations aren't enough. For example, validating that an email domain is allowed, or ensuring that `password` and `confirmPassword` fields match. You can create your own annotations!
        </p>

        <p>1. Define the annotation:</p>
        <CodeBlock filename="ValidIp.java" language="java">
{`<span class="attr">@Target</span>({ElementType.FIELD})
<span class="attr">@Retention</span>(RetentionPolicy.RUNTIME)
<span class="attr">@Constraint</span>(validatedBy = IpAddressValidator.<span class="kw">class</span>)
<span class="kw">public @interface</span> <span class="fn">ValidIp</span> {
    String <span class="fn">message</span>() <span class="kw">default</span> <span class="str">"Invalid IP Address"</span>;
    Class&lt;?&gt;[] <span class="fn">groups</span>() <span class="kw">default</span> {};
    Class&lt;? extends Payload&gt;[] <span class="fn">payload</span>() <span class="kw">default</span> {};
}`}
        </CodeBlock>

        <p>2. Create the validator logic:</p>
        <CodeBlock filename="IpAddressValidator.java" language="java">
{`<span class="kw">public class</span> <span class="fn">IpAddressValidator</span> <span class="kw">implements</span> ConstraintValidator&lt;ValidIp, String&gt; {
    <span class="attr">@Override</span>
    <span class="kw">public boolean</span> <span class="fn">isValid</span>(String value, ConstraintValidatorContext context) {
        <span class="kw">if</span> (value == <span class="kw">null</span>) <span class="kw">return false</span>;
        <span class="cm">// Implement regex or IP parsing logic here</span>
        <span class="kw">return</span> value.<span class="fn">matches</span>(<span class="str">"^([0-9]{1,3}\\.){3}[0-9]{1,3}$"</span>);
    }
}`}
        </CodeBlock>
      </Subsection>

      <Subsection id="error-response-patterns" icon="📝" iconBg="#e6f4ea" iconColor="#137333" title="6.4 RFC 7807 (Problem Details for HTTP APIs)">
        <p>
          Rather than reinventing the wheel with a custom error JSON structure, Spring Boot 3 supports RFC 7807 (Problem Details) out of the box. This provides a standardized way for HTTP APIs to return error information.
        </p>
        <p>
          Instead of creating a custom `ErrorResponse` DTO, you can return a `ProblemDetail` object from your `@ExceptionHandler`.
        </p>

        <CodeBlock filename="ProblemDetail Example" language="java">
{`<span class="attr">@ExceptionHandler</span>(InsufficientFundsException.<span class="kw">class</span>)
<span class="kw">public</span> ProblemDetail <span class="fn">handleFundsError</span>(InsufficientFundsException ex) {
    ProblemDetail problemDetail = ProblemDetail.<span class="fn">forStatusAndDetail</span>(HttpStatus.BAD_REQUEST, ex.<span class="fn">getMessage</span>());
    problemDetail.<span class="fn">setTitle</span>(<span class="str">"Insufficient Funds"</span>);
    problemDetail.<span class="fn">setProperty</span>(<span class="str">"currentBalance"</span>, ex.<span class="fn">getCurrentBalance</span>());
    problemDetail.<span class="fn">setProperty</span>(<span class="str">"requiredAmount"</span>, ex.<span class="fn">getRequiredAmount</span>());
    
    <span class="kw">return</span> problemDetail;
}`}
        </CodeBlock>
      </Subsection>
    </Section>
  );
};

export default SBChapter6;
