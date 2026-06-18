import Section from '../../components/Content/Section';
import Subsection from '../../components/Content/Subsection';
import CodeBlock from '../../components/UI/CodeBlock';
import InfoBox from '../../components/UI/InfoBox';

export default function DOChapter8() {
  return (
    <Section id="cloud-providers" number={8} title="Cloud Providers (AWS Overview)" theme="amber">
      <p>
        The cloud is simply someone else's computer, but it provides on-demand availability of computer system resources, especially data storage and computing power, without direct active management by the user. Amazon Web Services (AWS) is the dominant market leader.
      </p>

      <Subsection id="cloud-computing" icon="☁️" iconBg="#fef3c7" iconColor="#d97706" title="8.1 Cloud Computing Models">
        <p>
          Cloud services are generally divided into three main categories:
        </p>
        <ul>
          <li><strong>IaaS (Infrastructure as a Service):</strong> You rent the raw servers, networking, and storage. You are responsible for the OS and everything above it. (e.g., AWS EC2).</li>
          <li><strong>PaaS (Platform as a Service):</strong> The cloud provider manages the OS and runtime. You just upload your application code. (e.g., Heroku, AWS Elastic Beanstalk).</li>
          <li><strong>SaaS (Software as a Service):</strong> Fully managed applications consumed via the browser. (e.g., Gmail, Salesforce).</li>
        </ul>
      </Subsection>

      <Subsection id="aws-core" icon="🔶" iconBg="#fef3c7" iconColor="#d97706" title="8.2 Core AWS Services">
        <p>
          AWS has hundreds of services, but almost all architectures rely on these core primitives:
        </p>
        <table className="devops-table">
          <thead>
            <tr>
              <th>Service Name</th>
              <th>Category</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>EC2</strong> (Elastic Compute Cloud)</td>
              <td>Compute</td>
              <td>Virtual machines in the cloud. You have full root access.</td>
            </tr>
            <tr>
              <td><strong>S3</strong> (Simple Storage Service)</td>
              <td>Storage</td>
              <td>Object storage for files, images, backups, and static websites.</td>
            </tr>
            <tr>
              <td><strong>RDS</strong> (Relational Database Service)</td>
              <td>Database</td>
              <td>Managed SQL databases (PostgreSQL, MySQL). AWS handles backups and patching.</td>
            </tr>
            <tr>
              <td><strong>VPC</strong> (Virtual Private Cloud)</td>
              <td>Networking</td>
              <td>Your private, isolated section of the AWS network where you launch resources.</td>
            </tr>
            <tr>
              <td><strong>IAM</strong> (Identity and Access Management)</td>
              <td>Security</td>
              <td>Manages users, roles, and permissions across AWS.</td>
            </tr>
          </tbody>
        </table>
      </Subsection>

      <Subsection id="serverless" icon="⚡" iconBg="#fef3c7" iconColor="#d97706" title="8.3 Serverless Computing (Lambda)">
        <p>
          "Serverless" doesn't mean there are no servers; it means you don't manage them, and you only pay for the exact milliseconds your code is executing.
        </p>
        <p>
          <strong>AWS Lambda</strong> allows you to run code in response to events (like an HTTP request via API Gateway, or a file being uploaded to S3). It automatically scales from zero to thousands of concurrent executions instantly, making it highly cost-effective for spiky workloads.
        </p>
      </Subsection>
    </Section>
  );
}
