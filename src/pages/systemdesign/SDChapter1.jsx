import Section from '../../components/Content/Section';
import Subsection from '../../components/Content/Subsection';

export default function SDChapter1() {
  return (
    <Section id="sd-chapter-1" number="1" title="Introduction to System Design" theme="purple">
      <Subsection id="sd-intro-basics" title="1.1 What is System Design?">
        <p>
          System design is the process of defining the architecture, modules, interfaces, and data for a system to satisfy specified requirements. It involves understanding how different components communicate with each other, how data flows through the system, and what the trade-offs are for various architectural decisions.
        </p>
        <div className="callout callout-info">
          <strong>Key Concept:</strong> Modern system design heavily focuses on distributed systems because a single machine cannot handle the scale of today's internet applications.
        </div>
      </Subsection>

      <Subsection id="sd-intro-scaling" title="1.2 Vertical vs Horizontal Scaling">
        <p>
          When your system reaches its limits, you need to scale it. There are two primary ways to do this:
        </p>
        <ul>
          <li><strong>Vertical Scaling (Scale Up):</strong> Adding more power (CPU, RAM, Storage) to your existing machine.</li>
          <li><strong>Horizontal Scaling (Scale Out):</strong> Adding more machines to your pool of resources.</li>
        </ul>
        <p>
          While vertical scaling is easier to implement initially, it has a hard limit. Horizontal scaling is the standard for large-scale distributed systems, though it introduces complexity like data consistency and load balancing.
        </p>
      </Subsection>

      <Subsection id="sd-intro-tradeoffs" title="1.3 Trade-offs (CAP Theorem)">
        <p>
          In a distributed system, you are forced to make trade-offs. The CAP theorem states that a distributed data store can only simultaneously provide two of the following three guarantees:
        </p>
        <ul>
          <li><strong>Consistency:</strong> Every read receives the most recent write or an error.</li>
          <li><strong>Availability:</strong> Every request receives a (non-error) response, without the guarantee that it contains the most recent write.</li>
          <li><strong>Partition Tolerance:</strong> The system continues to operate despite an arbitrary number of messages being dropped (or delayed) by the network between nodes.</li>
        </ul>
        <p>
          Since network partitions are inevitable in distributed systems, we generally have to choose between Consistency and Availability.
        </p>
      </Subsection>
    </Section>
  );
}
