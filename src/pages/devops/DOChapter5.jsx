import Section from '../../components/Content/Section';
import Subsection from '../../components/Content/Subsection';
import CodeBlock from '../../components/UI/CodeBlock';
import InfoBox from '../../components/UI/InfoBox';

export default function DOChapter5() {
  return (
    <Section id="kubernetes" number={5} title="Orchestration (Kubernetes)" theme="amber">
      <p>
        Docker is great for running containers on a single machine. But what happens when you need to run 500 containers across 20 servers? How do you ensure high availability, load balancing, and automatic scaling? This is where Kubernetes (K8s) comes in.
      </p>

      <Subsection id="k8s-architecture" icon="☸️" iconBg="#fef3c7" iconColor="#d97706" title="5.1 K8s Architecture">
        <p>
          A Kubernetes cluster consists of two main parts:
        </p>
        <ul>
          <li><strong>Control Plane (Master Nodes):</strong> The brain of the cluster. It schedules containers, manages state (etcd), and exposes the Kubernetes API.</li>
          <li><strong>Data Plane (Worker Nodes):</strong> The physical or virtual machines that actually run your containerized applications. They run a component called the `kubelet` which communicates with the Control Plane.</li>
        </ul>
      </Subsection>

      <Subsection id="pods-deployments" icon="🏗️" iconBg="#fef3c7" iconColor="#d97706" title="5.2 Pods & Deployments">
        <p>
          Kubernetes doesn't run containers directly; it wraps them in a higher-level structure called a <strong>Pod</strong>. A Pod is the smallest deployable unit in Kubernetes and usually contains a single container.
        </p>
        <p>
          You rarely create Pods directly. Instead, you create a <strong>Deployment</strong>. A Deployment ensures that a specified number of Pod replicas are running at all times. If a node crashes, the Deployment automatically reschedules those Pods onto healthy nodes.
        </p>
        
        <CodeBlock filename="deployment.yaml" language="yaml">
{`apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:1.14.2
        ports:
        - containerPort: 80`}
        </CodeBlock>
      </Subsection>

      <Subsection id="services-ingress" icon="🚪" iconBg="#fef3c7" iconColor="#d97706" title="5.3 Services & Ingress">
        <p>
          Pods are mortal—they get created and destroyed constantly, getting new IP addresses every time. A <strong>Service</strong> provides a stable IP address and DNS name that load-balances traffic across a dynamic set of Pods.
        </p>
        <p>
          An <strong>Ingress</strong> is an API object that manages external access to the Services in a cluster, typically HTTP/HTTPS. It provides load balancing, SSL termination, and name-based virtual hosting.
        </p>

        <CodeBlock filename="service.yaml" language="yaml">
{`apiVersion: v1
kind: Service
metadata:
  name: nginx-service
spec:
  selector:
    app: nginx
  ports:
    - protocol: TCP
      port: 80
      targetPort: 80
  type: ClusterIP`}
        </CodeBlock>
      </Subsection>

      <Subsection id="config-secrets" icon="🔐" iconBg="#fef3c7" iconColor="#d97706" title="5.4 ConfigMaps & Secrets">
        <p>
          Following the Twelve-Factor App methodology, configuration should be separated from code.
        </p>
        <ul>
          <li><strong>ConfigMaps:</strong> Store non-confidential data in key-value pairs (e.g., application properties, environment variables).</li>
          <li><strong>Secrets:</strong> Store sensitive information, such as passwords, OAuth tokens, and ssh keys. They are similar to ConfigMaps but are base64 encoded and can be encrypted at rest.</li>
        </ul>
      </Subsection>
    </Section>
  );
}
