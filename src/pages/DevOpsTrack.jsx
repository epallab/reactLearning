import { Link } from 'react-router-dom';
import './DevOpsTrack.css';

export default function DevOpsTrack() {
  return (
    <div className="devops-soon">
      <div className="devops-soon-bg" aria-hidden="true" />
      <div className="devops-soon-content">
        <div className="devops-soon-icon">
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="18" fill="none" stroke="#f59e0b" strokeWidth="3" />
            <path d="M50 28v-10M50 82v-10M72 50h10M18 50h10" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" />
            <path d="M65.6 34.4l7-7M27.4 72.6l7-7M65.6 65.6l7 7M27.4 27.4l7 7" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" />
            <circle cx="50" cy="50" r="6" fill="#f59e0b" />
          </svg>
        </div>
        <span className="devops-soon-badge">Coming Soon</span>
        <h1 className="devops-soon-title">DevOps Track</h1>
        <p className="devops-soon-desc">
          We&apos;re building a comprehensive guide covering CI/CD pipelines, Docker, Kubernetes,
          Terraform, cloud platforms, monitoring, and infrastructure as code. Stay tuned!
        </p>
        <div className="devops-soon-topics">
          <span>Docker</span>
          <span>Kubernetes</span>
          <span>Terraform</span>
          <span>GitHub Actions</span>
          <span>AWS / GCP</span>
          <span>Monitoring</span>
        </div>
        <Link to="/" className="devops-soon-back">
          <svg viewBox="0 0 20 20" aria-hidden="true">
            <path d="M9 16l-6-6 6-6M17 10H4" />
          </svg>
          Back to Hub
        </Link>
      </div>
    </div>
  );
}
