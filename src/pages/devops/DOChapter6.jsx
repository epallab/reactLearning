import Section from '../../components/Content/Section';
import Subsection from '../../components/Content/Subsection';
import CodeBlock from '../../components/UI/CodeBlock';
import InfoBox from '../../components/UI/InfoBox';

export default function DOChapter6() {
  return (
    <Section id="ci-cd" number={6} title="CI/CD Pipelines" theme="amber">
      <p>
        Continuous Integration (CI) and Continuous Deployment (CD) form the backbone of modern DevOps. By automating the integration and delivery process, teams can release code changes more frequently and reliably.
      </p>

      <Subsection id="ci-cd-concepts" icon="🚀" iconBg="#fef3c7" iconColor="#d97706" title="6.1 Continuous Integration & Deployment">
        <p>
          <strong>Continuous Integration (CI):</strong> The practice of merging all developers' working copies to a shared mainline several times a day. Every commit triggers an automated build and test sequence.
        </p>
        <p>
          <strong>Continuous Delivery (CD):</strong> The extension of CI. It ensures that the software is always in a deployable state. A human might still need to click an "Approve" button to push it to production.
        </p>
        <p>
          <strong>Continuous Deployment (CD):</strong> Takes Delivery one step further. Every change that passes all stages of the production pipeline is released to the customers <em>automatically</em>, with no human intervention.
        </p>
      </Subsection>

      <Subsection id="github-actions" icon="🐙" iconBg="#fef3c7" iconColor="#d97706" title="6.2 GitHub Actions">
        <p>
          GitHub Actions makes it easy to automate all your software workflows directly within your GitHub repository. Workflows are defined using YAML files stored in the `.github/workflows` directory.
        </p>
        
        <CodeBlock filename=".github/workflows/ci.yml" language="yaml">
{`name: Node.js CI

# Trigger the workflow on push to main or pull requests
on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v3
    
    - name: Use Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '20.x'
        cache: 'npm'
        
    - name: Install Dependencies
      run: npm ci
      
    - name: Run Linter
      run: npm run lint
      
    - name: Run Tests
      run: npm test
      
    - name: Build Artifacts
      run: npm run build`}
        </CodeBlock>
      </Subsection>

      <Subsection id="jenkins-overview" icon="🤵" iconBg="#fef3c7" iconColor="#d97706" title="6.3 Jenkins Overview">
        <p>
          While GitHub Actions, GitLab CI, and CircleCI are popular SaaS CI/CD tools, <strong>Jenkins</strong> remains the grandfather of CI servers. It is an open-source automation server that is typically self-hosted.
        </p>
        <p>
          Jenkins workflows are defined using a `Jenkinsfile` written in Groovy syntax (Declarative Pipeline). While highly customizable and extensible via thousands of plugins, it carries a higher maintenance burden compared to modern SaaS alternatives.
        </p>
      </Subsection>
    </Section>
  );
}
