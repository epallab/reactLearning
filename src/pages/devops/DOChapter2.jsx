import Section from '../../components/Content/Section';
import Subsection from '../../components/Content/Subsection';
import CodeBlock from '../../components/UI/CodeBlock';
import InfoBox from '../../components/UI/InfoBox';

export default function DOChapter2() {
  return (
    <Section id="linux-basics" number={2} title="Linux Basics & Shell" theme="amber">
      <p>
        Linux is the backbone of modern infrastructure. Over 90% of cloud servers and nearly all containers run on Linux. Mastering the Linux command line is the most foundational skill for any DevOps engineer.
      </p>

      <Subsection id="linux-architecture" icon="🐧" iconBg="#fef3c7" iconColor="#d97706" title="2.1 Linux Architecture">
        <p>
          The Linux operating system is composed of three main layers:
        </p>
        <ul>
          <li><strong>The Kernel:</strong> The core of the OS that interacts directly with the hardware (CPU, Memory, Disks).</li>
          <li><strong>The Shell:</strong> The command-line interpreter (like Bash or Zsh) that takes your commands and passes them to the kernel.</li>
          <li><strong>Applications:</strong> User-space programs (like Node.js, Docker, Nginx).</li>
        </ul>
      </Subsection>

      <Subsection id="file-system" icon="📁" iconBg="#fef3c7" iconColor="#d97706" title="2.2 File System & Permissions">
        <p>
          In Linux, <em>everything is a file</em>. Even hardware devices are represented as files in the `/dev` directory.
        </p>
        <CodeBlock filename="Terminal" language="bash">
{`# View files with detailed permissions
ls -la

# Change file permissions (Owner: Read/Write/Execute, Group: Read/Execute, Others: Read/Execute)
chmod 755 script.sh

# Change the owner of a file to 'nginx' user
chown nginx:nginx /var/www/html/index.html`}
        </CodeBlock>
        <p>
          A permission like `rwxr-xr-x` means:
          <br/>- `rwx` (Owner): Read, Write, Execute
          <br/>- `r-x` (Group): Read, Execute
          <br/>- `r-x` (Others): Read, Execute
        </p>
      </Subsection>

      <Subsection id="shell-scripting" icon="📜" iconBg="#fef3c7" iconColor="#d97706" title="2.3 Bash Scripting">
        <p>
          Shell scripting allows you to automate repetitive tasks. A script is just a series of commands saved in a text file.
        </p>
        <CodeBlock filename="backup.sh" language="bash">
{`#!/bin/bash
# The line above is the "shebang" - it tells the OS to use bash to run this script

BACKUP_DIR="/var/backups"
SOURCE_DIR="/var/www/html"
TIMESTAMP=$(date +"%Y-%m-%d_%H-%M-%S")

echo "Starting backup of $SOURCE_DIR..."

# Create a compressed tarball
tar -czf "$BACKUP_DIR/backup_$TIMESTAMP.tar.gz" "$SOURCE_DIR"

if [ $? -eq 0 ]; then
  echo "Backup successful!"
else
  echo "Backup failed!" >&2
  exit 1
fi`}
        </CodeBlock>
      </Subsection>

      <Subsection id="networking-basics" icon="🌐" iconBg="#fef3c7" iconColor="#d97706" title="2.4 Networking Basics">
        <p>
          DevOps heavily relies on networking to connect microservices. Essential commands include:
        </p>
        <ul>
          <li><code>ping</code>: Checks if a remote host is reachable via ICMP.</li>
          <li><code>curl</code>: Transfers data to/from a server (essential for testing APIs).</li>
          <li><code>netstat</code> or <code>ss</code>: Shows open ports and active connections.</li>
          <li><code>nslookup</code> or <code>dig</code>: Queries DNS to resolve domain names to IP addresses.</li>
        </ul>
      </Subsection>
    </Section>
  );
}
