import Section from '../../components/Content/Section';
import Subsection from '../../components/Content/Subsection';
import CodeBlock from '../../components/UI/CodeBlock';
import InfoBox from '../../components/UI/InfoBox';

export default function DOChapter7() {
  return (
    <Section id="iac" number={7} title="Infrastructure as Code (Terraform)" theme="amber">
      <p>
        Clicking through a web console to create servers, databases, and networks is slow, error-prone, and impossible to replicate perfectly across environments. Infrastructure as Code (IaC) solves this by defining infrastructure via machine-readable configuration files.
      </p>

      <Subsection id="iac-principles" icon="🏗️" iconBg="#fef3c7" iconColor="#d97706" title="7.1 IaC Principles">
        <p>
          IaC brings software engineering practices to infrastructure:
        </p>
        <ul>
          <li><strong>Version Control:</strong> Infrastructure changes go through Pull Requests, code review, and CI/CD pipelines.</li>
          <li><strong>Idempotency:</strong> Applying the same configuration multiple times should always result in the same state, without duplicating resources.</li>
          <li><strong>Declarative vs Imperative:</strong> Instead of writing a script that says "Create VM, then Create Network" (Imperative), you declare "I want a VM connected to this Network" (Declarative), and the IaC tool figures out the steps to achieve that state.</li>
        </ul>
      </Subsection>

      <Subsection id="terraform-basics" icon="🌍" iconBg="#fef3c7" iconColor="#d97706" title="7.2 Terraform Basics">
        <p>
          HashiCorp Terraform is the industry standard for declarative IaC. It uses the HashiCorp Configuration Language (HCL) and can provision resources across any cloud provider (AWS, Azure, GCP) using Providers.
        </p>

        <CodeBlock filename="main.tf" language="hcl">
{`# 1. Define the Provider
provider "aws" {
  region = "us-east-1"
}

# 2. Declare a Resource
resource "aws_instance" "web_server" {
  ami           = "ami-0c55b159cbfafe1f0" # Ubuntu 20.04
  instance_type = "t2.micro"

  tags = {
    Name        = "Production-Web-Server"
    Environment = "Prod"
  }
}

# 3. Output a value after creation
output "server_public_ip" {
  value = aws_instance.web_server.public_ip
}`}
        </CodeBlock>
        <p>
          The core Terraform workflow consists of three commands: `terraform init` (downloads plugins), `terraform plan` (shows what will change), and `terraform apply` (executes the changes).
        </p>
      </Subsection>

      <Subsection id="state-management" icon="💾" iconBg="#fef3c7" iconColor="#d97706" title="7.3 State Management">
        <p>
          Terraform must map the resources in your configuration files to the actual resources in the real world (e.g., matching the `aws_instance` block to the actual EC2 instance ID `i-0abcdef1234567890`).
        </p>
        <p>
          It does this using a <strong>State File</strong> (`terraform.tfstate`). In a team environment, this file must never be committed to Git (it contains cleartext secrets and leads to merge conflicts). Instead, it must be stored in a remote backend (like an AWS S3 bucket) with state locking enabled (via DynamoDB) to prevent concurrent executions from corrupting the infrastructure.
        </p>
      </Subsection>
    </Section>
  );
}
