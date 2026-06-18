import Section from '../../components/Content/Section';
import Subsection from '../../components/Content/Subsection';
import CodeBlock from '../../components/UI/CodeBlock';
import InfoBox from '../../components/UI/InfoBox';

export default function DOChapter4() {
  return (
    <Section id="docker" number={4} title="Containerization (Docker)" theme="amber">
      <p>
        Docker revolutionized software delivery by solving the "It works on my machine" problem. Containerization allows developers to package an application with all of its dependencies into a single, standardized unit for software development.
      </p>

      <Subsection id="containers-vs-vms" icon="📦" iconBg="#fef3c7" iconColor="#d97706" title="4.1 Containers vs VMs">
        <p>
          <strong>Virtual Machines (VMs)</strong> virtualize the <em>hardware</em>. Each VM runs a full guest operating system (Windows, Linux), which consumes significant RAM and CPU just to exist.
        </p>
        <p>
          <strong>Containers</strong> virtualize the <em>operating system</em>. They share the host system's kernel and isolate the application processes. Containers are lightweight, start in milliseconds, and use a fraction of the resources required by a VM.
        </p>
      </Subsection>

      <Subsection id="dockerfile" icon="🐳" iconBg="#fef3c7" iconColor="#d97706" title="4.2 Writing Dockerfiles">
        <p>
          A Dockerfile is a text document containing all the commands a user could call on the command line to assemble an image.
        </p>
        <CodeBlock filename="Dockerfile" language="dockerfile">
{`# 1. Base Image
FROM node:20-alpine

# 2. Set working directory inside the container
WORKDIR /app

# 3. Copy package files and install dependencies
COPY package*.json ./
RUN npm install --production

# 4. Copy the rest of the application code
COPY . .

# 5. Expose the port the app runs on
EXPOSE 3000

# 6. Command to run the application
CMD ["node", "src/index.js"]`}
        </CodeBlock>
        <InfoBox type="tip" title="Docker Build Context">
          Always use a <code>.dockerignore</code> file (similar to <code>.gitignore</code>) to prevent copying <code>node_modules/</code> or secret files into the image. This speeds up the build and reduces image size.
        </InfoBox>
      </Subsection>

      <Subsection id="docker-compose" icon="🐙" iconBg="#fef3c7" iconColor="#d97706" title="4.3 Docker Compose">
        <p>
          Modern applications rarely consist of a single container. You usually need a backend, a frontend, and a database. Docker Compose is a tool for defining and running multi-container Docker applications using a YAML file.
        </p>
        <CodeBlock filename="docker-compose.yml" language="yaml">
{`version: '3.8'
services:
  web:
    build: ./frontend
    ports:
      - "3000:3000"
    depends_on:
      - api
      
  api:
    build: ./backend
    ports:
      - "8080:8080"
    environment:
      - DB_URL=postgres://db:5432/myapp
      
  db:
    image: postgres:15-alpine
    environment:
      - POSTGRES_PASSWORD=secret
    volumes:
      - pgdata:/var/lib/postgresql/data

volumes:
  pgdata:`}
        </CodeBlock>
        <p>To start the entire stack, simply run <code>docker-compose up -d</code>.</p>
      </Subsection>

      <Subsection id="docker-networking" icon="🔌" iconBg="#fef3c7" iconColor="#d97706" title="4.4 Volumes & Networking">
        <p>
          <strong>Volumes:</strong> Containers are ephemeral. If a database container is deleted, all its data is lost. Docker Volumes provide persistent storage that exists outside the lifecycle of a given container.
        </p>
        <p>
          <strong>Networking:</strong> By default, containers running on the same Docker network can talk to each other using their container names as hostnames (e.g., the `api` container can connect to the database at `http://db:5432`).
        </p>
      </Subsection>
    </Section>
  );
}
