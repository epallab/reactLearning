import Section from '../../components/Content/Section';
import Subsection from '../../components/Content/Subsection';

export default function SDChapter5() {
  return (
    <Section id="sd-chapter-5" number="5" title="System Design Interviews" theme="purple">
      <Subsection id="sd-int-framework" title="5.1 Interview Framework (PEDALS)">
        <p>
          Approaching a system design interview requires a structured method. The <strong>PEDALS</strong> framework is a popular approach:
        </p>
        <ul>
          <li><strong>P - Process Requirements:</strong> Clarify functional (what the system should do) and non-functional (scale, availability, latency) requirements.</li>
          <li><strong>E - Estimate:</strong> Back-of-the-envelope calculations for traffic (QPS), storage, bandwidth, and memory.</li>
          <li><strong>D - Design High-Level:</strong> Draw the core components (Client, Load Balancer, Web Servers, Database) and data flow.</li>
          <li><strong>A - API Design:</strong> Define the REST endpoints or RPC calls between client and server.</li>
          <li><strong>L - Logical Database Schema:</strong> Define the tables, NoSQL collections, and relationships.</li>
          <li><strong>S - Scale & Deep Dive:</strong> Identify bottlenecks, add caching, sharding, message queues, and discuss trade-offs.</li>
        </ul>
      </Subsection>

      <Subsection id="sd-int-url-shortener" title="5.2 Design a URL Shortener">
        <p>
          <strong>Problem:</strong> Design a service like TinyURL that takes a long URL and generates a short, unique alias.
        </p>
        <h4>Key Considerations:</h4>
        <ul>
          <li><strong>Shortening Algorithm:</strong> Base62 encoding (A-Z, a-z, 0-9) of a unique ID. A 7-character Base62 string can support ~3.5 trillion URLs.</li>
          <li><strong>Unique ID Generation:</strong> Can't rely on auto-incrementing DB IDs at scale. Use a dedicated service like Twitter Snowflake or pre-generate IDs in blocks (ZooKeeper).</li>
          <li><strong>Redirection:</strong> HTTP 301 (Permanent - browsers cache it) vs HTTP 302 (Temporary - better for analytics tracking).</li>
          <li><strong>Database:</strong> NoSQL (like DynamoDB or Cassandra) is a good fit as the schema is simple (ShortURL, LongURL, UserID, CreationDate) and read-heavy.</li>
        </ul>
      </Subsection>

      <Subsection id="sd-int-chat-app" title="5.3 Design a Chat Application">
        <p>
          <strong>Problem:</strong> Design a real-time chat application like WhatsApp or Discord.
        </p>
        <h4>Key Considerations:</h4>
        <ul>
          <li><strong>Real-Time Communication:</strong> WebSockets are essential for persistent, bi-directional connections between clients and servers. Polling or Long-Polling are inefficient fallbacks.</li>
          <li><strong>Connection Management:</strong> Need a "Gateway" or "Chat Servers" to maintain WebSocket connections. A separate "Session Server" (using Redis) tracks which user is connected to which Chat Server.</li>
          <li><strong>Message Routing:</strong> When User A sends a message to User B, Chat Server A checks the Session Server for User B's location, and routes the message (often via a message queue or pub/sub like Redis Pub/Sub) to Chat Server B.</li>
          <li><strong>Storage:</strong> Need high write throughput. Cassandra or HBase are common for storing message histories.</li>
        </ul>
      </Subsection>
    </Section>
  );
}
