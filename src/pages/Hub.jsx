import { Link } from 'react-router-dom';
import { chapters } from '../data/chapters';
import { springBootChapters } from '../data/springBootChapters';
import { devOpsChapters } from '../data/devOpsChapters';
import { systemDesignChapters } from '../data/systemDesignChapters';
import './Hub.css';

const tracks = [
  {
    id: 'frontend',
    path: '/frontend',
    title: 'Frontend',
    subtitle: 'React.js Developer Guide',
    description:
      'Master scalable React interfaces, API integration, state management, performance patterns, and modern React 19 features.',
    icon: 'react',
    chapters: chapters.length,
    topics: chapters.reduce((t, c) => t + (c.subs?.length || 0), 0),
    accent: '#61dafb',
    accentGlow: 'rgba(97, 218, 251, 0.35)',
    gradient: 'linear-gradient(135deg, #0a1628 0%, #0d2137 50%, #0c3a4a 100%)',
    available: true,
  },
  {
    id: 'backend',
    path: '/backend',
    title: 'Backend',
    subtitle: 'Java Spring Boot Guide',
    description:
      'Build production-grade REST APIs, master Spring Security, JPA, microservices, testing, and deploy with Docker & Kubernetes.',
    icon: 'spring',
    chapters: springBootChapters.length,
    topics: springBootChapters.reduce((t, c) => t + (c.subs?.length || 0), 0),
    accent: '#6db33f',
    accentGlow: 'rgba(109, 179, 63, 0.35)',
    gradient: 'linear-gradient(135deg, #0a1a0a 0%, #122210 50%, #1a3018 100%)',
    available: true,
  },
  {
    id: 'devops',
    path: '/devops',
    title: 'DevOps',
    subtitle: 'Infrastructure & Ops Guide',
    description:
      'CI/CD pipelines, containerization, orchestration, cloud platforms, monitoring, and infrastructure as code.',
    icon: 'devops',
    chapters: devOpsChapters.length,
    topics: devOpsChapters.reduce((t, c) => t + (c.subs?.length || 0), 0),
    accent: '#f59e0b',
    accentGlow: 'rgba(245, 158, 11, 0.35)',
    gradient: 'linear-gradient(135deg, #1a1408 0%, #2a1f0a 50%, #3a2a0c 100%)',
    available: true,
  },
  {
    id: 'systemdesign',
    path: '/system-design',
    title: 'System Design',
    subtitle: 'Architect & Engineer',
    description:
      'Master the fundamentals of scalability, databases, microservices, architecture patterns and prepare for system design interviews.',
    icon: 'systemdesign',
    chapters: systemDesignChapters.length,
    topics: systemDesignChapters.reduce((t, c) => t + (c.subs?.length || 0), 0),
    accent: '#8b5cf6',
    accentGlow: 'rgba(139, 92, 246, 0.35)',
    gradient: 'linear-gradient(135deg, #170f2e 0%, #251846 50%, #32205c 100%)',
    available: true,
  },
];

function ReactIcon() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="hub-track-icon">
      <circle cx="50" cy="50" r="8" fill="#61DAFB" />
      <ellipse cx="50" cy="50" rx="45" ry="18" fill="none" stroke="#61DAFB" strokeWidth="2" />
      <ellipse cx="50" cy="50" rx="45" ry="18" fill="none" stroke="#61DAFB" strokeWidth="2" transform="rotate(60 50 50)" />
      <ellipse cx="50" cy="50" rx="45" ry="18" fill="none" stroke="#61DAFB" strokeWidth="2" transform="rotate(120 50 50)" />
    </svg>
  );
}

function SpringIcon() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="hub-track-icon">
      <circle cx="50" cy="50" r="42" fill="none" stroke="#6db33f" strokeWidth="3" />
      <path
        d="M73 27c-1 14-10 26-22 32 8-2 16-8 20-16-6 12-18 20-32 22 18-2 30-16 34-38z"
        fill="#6db33f"
      />
      <path
        d="M30 62c4 5 12 10 20 10s18-6 22-14c-6 10-16 16-26 16-6 0-12-4-16-12z"
        fill="#6db33f"
      />
      <circle cx="30" cy="68" r="4" fill="#6db33f" />
    </svg>
  );
}

function DevOpsIcon() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="hub-track-icon">
      <circle cx="50" cy="50" r="18" fill="none" stroke="#f59e0b" strokeWidth="3" />
      <path d="M50 28v-10M50 82v-10M72 50h10M18 50h10" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" />
      <path d="M65.6 34.4l7-7M27.4 72.6l7-7M65.6 65.6l7 7M27.4 27.4l7 7" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" />
      <circle cx="50" cy="50" r="6" fill="#f59e0b" />
    </svg>
  );
}

function SystemDesignIcon() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="hub-track-icon">
      <rect x="25" y="25" width="20" height="20" rx="4" fill="none" stroke="#8b5cf6" strokeWidth="3" />
      <rect x="55" y="25" width="20" height="20" rx="4" fill="none" stroke="#8b5cf6" strokeWidth="3" />
      <rect x="40" y="55" width="20" height="20" rx="4" fill="none" stroke="#8b5cf6" strokeWidth="3" />
      <path d="M35 45v5h15v5" fill="none" stroke="#8b5cf6" strokeWidth="2" />
      <path d="M65 45v5H50v5" fill="none" stroke="#8b5cf6" strokeWidth="2" />
    </svg>
  );
}

const iconMap = { react: ReactIcon, spring: SpringIcon, devops: DevOpsIcon, systemdesign: SystemDesignIcon };

export default function Hub() {
  return (
    <div className="hub">
      {/* Animated background grid */}
      <div className="hub-bg-grid" aria-hidden="true" />
      <div className="hub-bg-glow" aria-hidden="true" />

      <header className="hub-header">
        <div className="hub-badge">Developer Learning Platform</div>
        <h1 className="hub-title">
          Master the <span className="hub-title-gradient">Full Stack</span>
        </h1>
        <p className="hub-subtitle">
          Comprehensive, production-ready guides for frontend, backend, and DevOps.
          Pick a track and start building real-world skills.
        </p>
      </header>

      <div className="hub-tracks">
        {tracks.map((track) => {
          const IconComponent = iconMap[track.icon];
          const content = (
            <div
              className={`hub-card ${!track.available ? 'hub-card-disabled' : ''}`}
              style={{
                '--card-accent': track.accent,
                '--card-glow': track.accentGlow,
                background: track.gradient,
              }}
            >
              <div className="hub-card-shine" />
              <div className="hub-card-content">
                <div className="hub-card-icon-row">
                  <IconComponent />
                  {!track.available && (
                    <span className="hub-card-badge-soon">Coming Soon</span>
                  )}
                </div>
                <h2 className="hub-card-title">{track.title}</h2>
                <p className="hub-card-subtitle">{track.subtitle}</p>
                <p className="hub-card-desc">{track.description}</p>
                {track.available && (
                  <div className="hub-card-stats">
                    <div className="hub-card-stat">
                      <span className="hub-card-stat-value">{track.chapters}</span>
                      <span>Chapters</span>
                    </div>
                    <div className="hub-card-stat">
                      <span className="hub-card-stat-value">{track.topics}</span>
                      <span>Topics</span>
                    </div>
                  </div>
                )}
                <div className="hub-card-cta">
                  {track.available ? (
                    <>
                      Start Learning
                      <svg viewBox="0 0 20 20" aria-hidden="true">
                        <path d="M11 4l6 6-6 6M3 10h13" />
                      </svg>
                    </>
                  ) : (
                    'Notify Me'
                  )}
                </div>
              </div>
            </div>
          );

          return track.available ? (
            <Link key={track.id} to={track.path} className="hub-card-link">
              {content}
            </Link>
          ) : (
            <div key={track.id} className="hub-card-link">
              {content}
            </div>
          );
        })}
      </div>

      <footer className="hub-footer">
        <p>Built for developers who ship. Updated June 2026.</p>
      </footer>
    </div>
  );
}
