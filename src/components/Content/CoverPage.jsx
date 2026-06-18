import './CoverPage.css';

const accentMap = {
  cyan: {
    logo: 'react',
    badgeBg: 'rgba(97, 218, 251, 0.13)',
    badgeBorder: 'rgba(97, 218, 251, 0.28)',
    badgeColor: '#b8f3ff',
    btnBg: '#61dafb',
    btnColor: '#07111f',
    btnShadow: 'rgba(97, 218, 251, 0.22)',
    metaLabel: 'React Ready',
  },
  green: {
    logo: 'spring',
    badgeBg: 'rgba(109, 179, 63, 0.13)',
    badgeBorder: 'rgba(109, 179, 63, 0.28)',
    badgeColor: '#c5e8a8',
    btnBg: '#6db33f',
    btnColor: '#0a1a0a',
    btnShadow: 'rgba(109, 179, 63, 0.22)',
    metaLabel: 'Production Ready',
  },
};

function ReactLogo() {
  return (
    <svg className="react-logo" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="8" fill="#61DAFB" />
      <ellipse cx="50" cy="50" rx="45" ry="18" fill="none" stroke="#61DAFB" strokeWidth="2" />
      <ellipse cx="50" cy="50" rx="45" ry="18" fill="none" stroke="#61DAFB" strokeWidth="2" transform="rotate(60 50 50)" />
      <ellipse cx="50" cy="50" rx="45" ry="18" fill="none" stroke="#61DAFB" strokeWidth="2" transform="rotate(120 50 50)" />
    </svg>
  );
}

function SpringLogo() {
  return (
    <svg className="react-logo spring-logo" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="42" fill="none" stroke="#6db33f" strokeWidth="3" />
      <path d="M73 27c-1 14-10 26-22 32 8-2 16-8 20-16-6 12-18 20-32 22 18-2 30-16 34-38z" fill="#6db33f" />
      <path d="M30 62c4 5 12 10 20 10s18-6 22-14c-6 10-16 16-26 16-6 0-12-4-16-12z" fill="#6db33f" />
      <circle cx="30" cy="68" r="4" fill="#6db33f" />
    </svg>
  );
}

const logoComponents = { react: ReactLogo, spring: SpringLogo };

export default function CoverPage({ chapters, config }) {
  const accent = accentMap[config.accent] || accentMap.cyan;
  const LogoComponent = logoComponents[accent.logo] || ReactLogo;
  const topicCount = chapters.reduce(
    (total, chapter) => total + (chapter.subs?.length || 0),
    0
  );

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const coverGradient = config.accent === 'green'
    ? 'linear-gradient(115deg, rgba(8, 20, 10, 0.96) 0%, rgba(14, 32, 18, 0.92) 54%, rgba(22, 56, 28, 0.82) 100%)'
    : 'linear-gradient(115deg, rgba(10, 17, 30, 0.96) 0%, rgba(16, 29, 45, 0.92) 54%, rgba(14, 62, 72, 0.82) 100%)';

  return (
    <section className="cover-page" id="top" style={{ background: `${coverGradient}, #101d2d` }}>
      <div className="cover-content">
        <LogoComponent />
        <div
          className="cover-badge"
          style={{
            background: accent.badgeBg,
            borderColor: accent.badgeBorder,
            color: accent.badgeColor,
          }}
        >
          {config.badge}
        </div>
        <h1 className="cover-title">{config.title}</h1>
        <p className="cover-subtitle">{config.subtitle}</p>
        <div className="cover-actions" aria-label="Guide shortcuts">
          <button
            type="button"
            className="cover-action primary"
            onClick={() => scrollTo(config.firstChapterId)}
            style={{
              background: accent.btnBg,
              color: accent.btnColor,
              boxShadow: `0 12px 30px ${accent.btnShadow}`,
            }}
          >
            Start reading
            <svg viewBox="0 0 20 20" aria-hidden="true">
              <path d="M11 4l6 6-6 6M3 10h13" />
            </svg>
          </button>
          <button
            type="button"
            className="cover-action secondary"
            onClick={() => scrollTo('table-of-contents')}
          >
            View contents
          </button>
        </div>
        <div className="cover-meta">
          <div className="cover-meta-item">
            <span className="cover-meta-value">{chapters.length}</span>
            <span>Chapters</span>
          </div>
          <div className="cover-meta-item">
            <span className="cover-meta-value">{topicCount}</span>
            <span>Topics</span>
          </div>
          <div className="cover-meta-item">
            <span className="cover-meta-value" style={{ color: accent.btnBg }}>
              {config.accent === 'green' ? 'Java 21' : '19'}
            </span>
            <span>{accent.metaLabel}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
