import Section from '../../components/Content/Section';
import Subsection from '../../components/Content/Subsection';

export default function SDChapter3() {
  return (
    <Section id="sd-chapter-3" number="3" title="Architecture Patterns" theme="purple">
      <Subsection id="sd-arch-microservices" title="3.1 Microservices Architecture">
        <p>
          Microservices architecture structures an application as a collection of loosely coupled, independently deployable services. Each service is organized around a business capability.
        </p>
        <ul>
          <li><strong>Pros:</strong> Independent deployment, fault isolation, technology diversity, easier horizontal scaling.</li>
          <li><strong>Cons:</strong> Distributed system complexity, network latency, data consistency (CAP theorem), complex debugging.</li>
        </ul>
        <p>
          It contrasts with a <strong>Monolith</strong>, where all code is packaged in a single deployable unit. Monoliths are simpler to start with but harder to scale and maintain as the team and codebase grow.
        </p>
      </Subsection>

      <Subsection id="sd-arch-event-driven" title="3.2 Event-Driven Architecture">
        <p>
          Event-driven architecture (EDA) is a software design pattern where decoupled applications asynchronously publish and subscribe to events via an event broker (e.g., Kafka, RabbitMQ).
        </p>
        <p>
          An <strong>event</strong> is a change in state, like "User Registered" or "Item Added to Cart".
        </p>
        <ul>
          <li><strong>Producer:</strong> Generates and publishes the event. Doesn't know who will consume it.</li>
          <li><strong>Consumer:</strong> Subscribes to events and reacts to them.</li>
          <li><strong>Broker:</strong> Mediates communication, ensuring events are reliably delivered.</li>
        </ul>
        <div className="callout callout-info">
          <strong>Key Concept:</strong> EDA promotes high decoupling, allowing teams to develop and deploy services completely independently as long as they adhere to the event schema.
        </div>
      </Subsection>

      <Subsection id="sd-arch-serverless" title="3.3 Serverless Functions">
        <p>
          Serverless computing (e.g., AWS Lambda, Google Cloud Functions) allows you to build and run applications without managing servers. The cloud provider automatically provisions, scales, and manages the infrastructure required to run the code.
        </p>
        <ul>
          <li><strong>Pros:</strong> No server management, auto-scaling (scale to zero), pay only for what you use, faster time to market.</li>
          <li><strong>Cons:</strong> Vendor lock-in, cold starts (delay when a function is invoked after being idle), complex monitoring, limited execution duration.</li>
        </ul>
        <p>
          Serverless is excellent for event-driven workflows, background processing, and unpredictable workloads.
        </p>
      </Subsection>
    </Section>
  );
}
