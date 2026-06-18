import Section from '../../components/Content/Section';
import Subsection from '../../components/Content/Subsection';
import CodeBlock from '../../components/UI/CodeBlock';
import InfoBox from '../../components/UI/InfoBox';

export default function DOChapter9() {
  return (
    <Section id="observability" number={9} title="Monitoring & Observability" theme="amber">
      <p>
        You cannot manage what you cannot measure. Once an application is deployed, you must know if it's healthy, if it's fast, and exactly why it crashed at 3:00 AM. This is the domain of Observability.
      </p>

      <Subsection id="metrics-logs-traces" icon="📊" iconBg="#fef3c7" iconColor="#d97706" title="9.1 The Three Pillars of Observability">
        <p>
          True observability is built on three distinct types of telemetry data:
        </p>
        <ul>
          <li><strong>Metrics:</strong> Aggregated numeric data over time (e.g., CPU usage is 85%, API error rate is 2%). Great for triggering alerts.</li>
          <li><strong>Logs:</strong> Discrete text records of events that happened (e.g., "User 123 logged in", "NullPointerException at line 42"). Essential for debugging.</li>
          <li><strong>Traces:</strong> Represent the lifecycle of a single request as it travels across multiple microservices. Crucial for identifying latency bottlenecks in distributed systems.</li>
        </ul>
      </Subsection>

      <Subsection id="prometheus-grafana" icon="📈" iconBg="#fef3c7" iconColor="#d97706" title="9.2 Prometheus & Grafana (Metrics)">
        <p>
          <strong>Prometheus</strong> is an open-source systems monitoring and alerting toolkit. Unlike legacy systems that wait for servers to push data to them, Prometheus uses a <em>pull model</em>. It periodically scrapes HTTP endpoints (like `/metrics`) exposed by your applications to collect time-series data.
        </p>
        <p>
          <strong>Grafana</strong> is the visualization layer. It connects to Prometheus (and many other data sources) to create beautiful, dynamic dashboards that visualize your metrics.
        </p>
      </Subsection>

      <Subsection id="elk-stack" icon="🔍" iconBg="#fef3c7" iconColor="#d97706" title="9.3 The ELK Stack (Logs)">
        <p>
          When you have 50 microservices running across 200 Kubernetes pods, SSHing into a server to read a log file using `grep` is impossible. You need centralized logging.
        </p>
        <p>
          The <strong>ELK Stack</strong> is the most popular solution:
        </p>
        <ul>
          <li><strong>Elasticsearch:</strong> A highly scalable, full-text search and analytics engine where all logs are stored and indexed.</li>
          <li><strong>Logstash</strong> (or Fluentd/Filebeat): The data collection pipeline that ingests logs from your containers, transforms them (e.g., parsing JSON), and sends them to Elasticsearch.</li>
          <li><strong>Kibana:</strong> The visualization dashboard that allows you to search, filter, and analyze the logs stored in Elasticsearch.</li>
        </ul>
      </Subsection>
    </Section>
  );
}
