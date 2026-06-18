import Section from '../../components/Content/Section';
import Subsection from '../../components/Content/Subsection';
import CodeBlock from '../../components/UI/CodeBlock';
import InfoBox from '../../components/UI/InfoBox';

export default function DOChapter1() {
  return (
    <Section id="culture-fundamentals" number={1} title="Culture & Fundamentals" theme="amber">
      <p>
        DevOps is not just a toolchain—it is a cultural philosophy that bridges the gap between software development (Dev) and IT operations (Ops). The goal is to shorten the systems development life cycle and provide continuous delivery with high software quality.
      </p>

      <Subsection id="what-is-devops" icon="💡" iconBg="#fef3c7" iconColor="#d97706" title="1.1 What is DevOps?">
        <p>
          Before DevOps, developers wrote code and "tossed it over the wall" to operations engineers to deploy. This led to a fundamental conflict: Developers wanted to release features fast, while Operations wanted stability and refused to deploy untested code.
        </p>
        <p>
          DevOps solves this by creating cross-functional teams that share responsibility for the entire application lifecycle, from planning and coding to deployment and monitoring.
        </p>
        <InfoBox type="info" title="CALMS Framework">
          The DevOps philosophy is often summarized by the CALMS acronym: <strong>C</strong>ulture, <strong>A</strong>utomation, <strong>L</strong>ean, <strong>M</strong>easurement, and <strong>S</strong>haring.
        </InfoBox>
      </Subsection>

      <Subsection id="agile-lean" icon="🔄" iconBg="#fef3c7" iconColor="#d97706" title="1.2 Agile & Lean Principles">
        <p>
          DevOps is the natural extension of Agile. While Agile focuses on optimizing the software development process (Scrum, Sprints), DevOps takes those same principles and applies them to infrastructure and deployment.
        </p>
        <ul>
          <li><strong>Small Batches:</strong> Releasing code in small, frequent chunks rather than massive updates twice a year. This makes finding and fixing bugs vastly easier.</li>
          <li><strong>Shift-Left:</strong> Moving testing and security checks earlier ("left") in the development process so issues are caught before they reach production.</li>
        </ul>
      </Subsection>

      <Subsection id="devops-lifecycle" icon="♾️" iconBg="#fef3c7" iconColor="#d97706" title="1.3 The DevOps Lifecycle">
        <p>
          The DevOps lifecycle is often visualized as an infinite loop, emphasizing continuous improvement.
        </p>
        <ol>
          <li><strong>Plan:</strong> Define business value and requirements (Jira, Trello).</li>
          <li><strong>Code:</strong> Software design and development (Git).</li>
          <li><strong>Build:</strong> Compile code and package dependencies (Maven, npm).</li>
          <li><strong>Test:</strong> Automated unit and integration testing (JUnit, Jest).</li>
          <li><strong>Release:</strong> Artifact management and release approval (Nexus, Artifactory).</li>
          <li><strong>Deploy:</strong> Infrastructure provisioning and deployment (Terraform, Ansible, K8s).</li>
          <li><strong>Operate:</strong> Server configuration and scaling.</li>
          <li><strong>Monitor:</strong> Metrics and log collection (Prometheus, Grafana, ELK).</li>
        </ol>
      </Subsection>
    </Section>
  );
}
