import Section from '../../components/Content/Section';
import Subsection from '../../components/Content/Subsection';
import CodeBlock from '../../components/UI/CodeBlock';
import InfoBox from '../../components/UI/InfoBox';

const SBChapter9 = () => {
  return (
    <Section id="sb-chapter-9" number={9} title="Messaging & Event-Driven Architecture" theme="green">
      <p>
        In modern distributed systems, synchronous HTTP communication (like REST) isn't always the best approach. If Service A must wait for Service B to finish before returning a response, your system becomes slow and brittle. Event-Driven Architecture (EDA) uses asynchronous messaging to decouple services, improve performance, and increase resilience.
      </p>

      <Subsection id="spring-events" icon="📡" iconBg="#e6f4ea" iconColor="#137333" title="9.1 Spring Application Events">
        <p>
          Before jumping into heavy message brokers, Spring provides a built-in event bus for decoupling components <em>within the same application</em> (the same JVM).
        </p>
        <p>
          You publish an event from one service, and one or more listeners react to it. By default, these events are synchronous, but they can easily be made asynchronous.
        </p>

        <CodeBlock filename="UserRegistrationEvent.java" language="java">
{`<span class="cm">// 1. Define the Event (can be a standard Record in modern Java)</span>
<span class="kw">public record</span> <span class="fn">UserRegistrationEvent</span>(Long userId, String email) { }

<span class="cm">// 2. Publish the Event</span>
<span class="attr">@Service</span>
<span class="kw">public class</span> <span class="fn">UserService</span> {
    <span class="kw">private final</span> ApplicationEventPublisher publisher;
    
    <span class="cm">// constructor omitted</span>
    
    <span class="kw">public void</span> <span class="fn">register</span>(User user) {
        userRepository.<span class="fn">save</span>(user);
        <span class="cm">// Instead of calling EmailService directly, we publish an event.</span>
        <span class="cm">// UserService no longer needs to know EmailService exists!</span>
        publisher.<span class="fn">publishEvent</span>(<span class="kw">new</span> <span class="fn">UserRegistrationEvent</span>(user.<span class="fn">getId</span>(), user.<span class="fn">getEmail</span>()));
    }
}

<span class="cm">// 3. Listen for the Event</span>
<span class="attr">@Component</span>
<span class="kw">public class</span> <span class="fn">EmailNotificationListener</span> {

    <span class="attr">@EventListener</span>
    <span class="cm">// @Async // Uncomment this to handle the event in a separate thread!</span>
    <span class="kw">public void</span> <span class="fn">handleUserRegistration</span>(UserRegistrationEvent event) {
        System.out.<span class="fn">println</span>(<span class="str">"Sending welcome email to: "</span> + event.<span class="fn">email</span>());
    }
}`}
        </CodeBlock>
      </Subsection>

      <Subsection id="kafka-integration" icon="📬" iconBg="#e6f4ea" iconColor="#137333" title="9.2 Apache Kafka Integration">
        <p>
          When you need to send events <em>between</em> different microservices, you need a message broker. Apache Kafka is the industry standard for high-throughput, distributed event streaming. Spring Kafka makes producing and consuming messages trivial.
        </p>

        <h4>Producing Messages</h4>
        <CodeBlock filename="OrderProducer.java" language="java">
{`<span class="attr">@Service</span>
<span class="kw">public class</span> <span class="fn">OrderProducer</span> {
    <span class="kw">private final</span> KafkaTemplate&lt;String, OrderEvent&gt; kafkaTemplate;

    <span class="cm">// constructor omitted</span>

    <span class="kw">public void</span> <span class="fn">sendOrderCreatedEvent</span>(OrderEvent event) {
        <span class="cm">// Sends a message to the "orders-topic"</span>
        kafkaTemplate.<span class="fn">send</span>(<span class="str">"orders-topic"</span>, event.<span class="fn">getOrderId</span>(), event);
    }
}`}
        </CodeBlock>

        <h4>Consuming Messages</h4>
        <CodeBlock filename="InventoryConsumer.java" language="java">
{`<span class="attr">@Service</span>
<span class="kw">public class</span> <span class="fn">InventoryConsumer</span> {

    <span class="cm">// Listens to the topic and assigns this consumer to a specific group</span>
    <span class="attr">@KafkaListener</span>(topics = <span class="str">"orders-topic"</span>, groupId = <span class="str">"inventory-group"</span>)
    <span class="kw">public void</span> <span class="fn">consumeOrderEvent</span>(OrderEvent event) {
        log.<span class="fn">info</span>(<span class="str">"Received order event for ID: {}"</span>, event.<span class="fn">getOrderId</span>());
        <span class="cm">// Deduct inventory based on the order...</span>
    }
}`}
        </CodeBlock>
      </Subsection>

      <Subsection id="rabbitmq-integration" icon="🐰" iconBg="#e6f4ea" iconColor="#137333" title="9.3 RabbitMQ Integration">
        <p>
          While Kafka is a streaming platform (logs are persisted), RabbitMQ is a traditional message broker (messages are deleted after consumption). RabbitMQ is excellent for complex routing topologies using Exchanges, Routing Keys, and Queues.
        </p>
        <p>
          Spring AMQP operates similarly to Spring Kafka. You use a `RabbitTemplate` to send messages to an Exchange, and `@RabbitListener` to consume messages from a Queue.
        </p>
      </Subsection>

      <Subsection id="async-processing" icon="⏰" iconBg="#e6f4ea" iconColor="#137333" title="9.4 Async Processing & Scheduling">
        <p>
          Sometimes you don't need a message broker, you just need a background thread to do heavy lifting so the HTTP request can return immediately. Spring's `@Async` annotation handles this.
        </p>

        <CodeBlock filename="ReportService.java" language="java">
{`<span class="attr">@Service</span>
<span class="attr">@EnableAsync</span> <span class="cm">// Must be enabled on a config class or main class</span>
<span class="kw">public class</span> <span class="fn">ReportService</span> {

    <span class="attr">@Async</span> <span class="cm">// Runs this method in a separate thread pool</span>
    <span class="kw">public</span> CompletableFuture&lt;String&gt; <span class="fn">generateMonthlyReport</span>() {
        <span class="cm">// Simulating a long-running PDF generation task</span>
        Thread.<span class="fn">sleep</span>(5000); 
        <span class="kw">return</span> CompletableFuture.<span class="fn">completedFuture</span>(<span class="str">"report-123.pdf"</span>);
    }
}`}
        </CodeBlock>

        <h4>Scheduled Tasks (Cron Jobs)</h4>
        <p>Spring can also run methods on a recurring schedule without requiring external tools like Kubernetes CronJobs or Linux crontab.</p>

        <CodeBlock filename="BatchJob.java" language="java">
{`<span class="attr">@Component</span>
<span class="attr">@EnableScheduling</span>
<span class="kw">public class</span> <span class="fn">DataCleanupJob</span> {

    <span class="cm">// Runs every day at 3:00 AM server time</span>
    <span class="attr">@Scheduled</span>(cron = <span class="str">"0 0 3 * * ?"</span>)
    <span class="kw">public void</span> <span class="fn">cleanupOldData</span>() {
        log.<span class="fn">info</span>(<span class="str">"Starting daily data cleanup..."</span>);
        <span class="cm">// delete soft-deleted records older than 30 days</span>
    }
}`}
        </CodeBlock>
      </Subsection>
    </Section>
  );
};

export default SBChapter9;
