import Section from '../../components/Content/Section';
import Subsection from '../../components/Content/Subsection';

export default function SDChapter4() {
  return (
    <Section id="sd-chapter-4" number="4" title="Networking & APIs" theme="purple">
      <Subsection id="sd-net-rest-graphql" title="4.1 REST vs GraphQL vs gRPC">
        <p>APIs allow different software systems to communicate. Choosing the right paradigm depends on your needs.</p>
        <div className="table-responsive">
          <table>
            <thead>
              <tr>
                <th>Feature</th>
                <th>REST</th>
                <th>GraphQL</th>
                <th>gRPC</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Protocol</strong></td>
                <td>HTTP 1.1</td>
                <td>HTTP 1.1 (or 2)</td>
                <td>HTTP/2</td>
              </tr>
              <tr>
                <td><strong>Data Format</strong></td>
                <td>JSON (usually)</td>
                <td>JSON</td>
                <td>Protocol Buffers (Binary)</td>
              </tr>
              <tr>
                <td><strong>Over-fetching</strong></td>
                <td>Common</td>
                <td>Client specifies exactly what it needs</td>
                <td>Defined by rigid schemas</td>
              </tr>
              <tr>
                <td><strong>Best For</strong></td>
                <td>Public APIs, CRUD apps</td>
                <td>Complex UI apps, mobile, aggregating multiple APIs</td>
                <td>Internal Microservices, high performance</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Subsection>

      <Subsection id="sd-net-load-balancing" title="4.2 Load Balancers & API Gateways">
        <h3>Load Balancers</h3>
        <p>
          A Load Balancer distributes incoming network traffic across a group of backend servers (a server farm or server pool).
        </p>
        <ul>
          <li><strong>L4 Load Balancing (Transport):</strong> Routes traffic based on IP address and port. Fast but lacks application awareness.</li>
          <li><strong>L7 Load Balancing (Application):</strong> Routes traffic based on HTTP headers, URLs, or cookies. Slower but allows smarter routing.</li>
        </ul>
        
        <h3>API Gateways</h3>
        <p>
          An API Gateway is a server that acts as an API front-end, receiving API requests, enforcing throttling and security policies, passing requests to the back-end service and then passing the response back to the requester.
        </p>
        <p>
          Common features include rate limiting, authentication/authorization, request routing, and metrics collection.
        </p>
      </Subsection>

      <Subsection id="sd-net-cdn" title="4.3 Content Delivery Networks (CDNs)">
        <p>
          A CDN is a geographically distributed network of proxy servers and their data centers. The goal is to provide high availability and performance by distributing the service spatially relative to end-users.
        </p>
        <p>
          CDNs cache static content (HTML, CSS, JS, images, videos) closer to the user. When a user requests content, it's served from the nearest CDN Edge Server (Point of Presence or PoP) rather than the Origin Server.
        </p>
        <ul>
          <li><strong>Push CDN:</strong> You upload content to the CDN, which is then responsible for providing it to users. Good for small traffic or content that rarely changes.</li>
          <li><strong>Pull CDN:</strong> CDN pulls content from the Origin server upon the first request and caches it. Good for heavy traffic.</li>
        </ul>
      </Subsection>
    </Section>
  );
}
