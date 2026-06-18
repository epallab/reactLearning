import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function ReactLogo() {
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true">
      <circle cx="50" cy="50" r="8" fill="#61DAFB" />
      <ellipse cx="50" cy="50" rx="45" ry="18" fill="none" stroke="#61DAFB" strokeWidth="2.5" />
      <ellipse cx="50" cy="50" rx="45" ry="18" fill="none" stroke="#61DAFB" strokeWidth="2.5" transform="rotate(60 50 50)" />
      <ellipse cx="50" cy="50" rx="45" ry="18" fill="none" stroke="#61DAFB" strokeWidth="2.5" transform="rotate(120 50 50)" />
    </svg>
  );
}

function SpringLogo() {
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true">
      <circle cx="50" cy="50" r="42" fill="none" stroke="#6db33f" strokeWidth="3" />
      <path d="M73 27c-1 14-10 26-22 32 8-2 16-8 20-16-6 12-18 20-32 22 18-2 30-16 34-38z" fill="#6db33f" />
      <path d="M30 62c4 5 12 10 20 10s18-6 22-14c-6 10-16 16-26 16-6 0-12-4-16-12z" fill="#6db33f" />
      <circle cx="30" cy="68" r="4" fill="#6db33f" />
    </svg>
  );
}

const logoMap = { react: ReactLogo, spring: SpringLogo };

export default function Sidebar({ chapters, activeId, isOpen, onToggle, isDark, onToggleTheme, brandConfig }) {
  const handleLinkClick = useCallback(
    (event, id) => {
      event.preventDefault();
      const el = document.querySelector(`[data-section-id="${id}"]`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.history.replaceState(null, '', `#${id}`);
      }
      // Close sidebar on mobile after clicking a link
      if (window.innerWidth < 1024) {
        onToggle();
      }
    },
    [onToggle]
  );

  const LogoComponent = logoMap[brandConfig?.icon] || ReactLogo;
  const accentColor = brandConfig?.accent || '#61dafb';

  return (
    <nav className={`sidebar ${isOpen ? 'open' : ''}`} style={{ '--sidebar-accent': accentColor }}>
      {/* Brand */}
      <div className="sidebar-brand">
        <LogoComponent />
        <div>
          <div className="sidebar-brand-text">{brandConfig?.title || 'Developer Guide'}</div>
          <div className="sidebar-brand-sub">{brandConfig?.subtitle || 'Comprehensive Guide'}</div>
        </div>
        <button
          className="theme-toggle"
          onClick={onToggleTheme}
          type="button"
          aria-label="Toggle dark mode"
        >
          {isDark ? (
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M21 12.8A8.4 8.4 0 1111.2 3 6.6 6.6 0 0021 12.8z" />
            </svg>
          )}
        </button>
      </div>

      {/* Back to Hub */}
      <Link to="/" className="sidebar-back-hub" onClick={() => { if (window.innerWidth < 1024) onToggle(); }}>
        <svg viewBox="0 0 20 20" aria-hidden="true">
          <path d="M9 16l-6-6 6-6M17 10H4" />
        </svg>
        Back to Hub
      </Link>

      {/* Navigation Links */}
      <div className="sidebar-nav">
        {chapters.map((chapter, index) => (
          <div key={chapter.id}>
            {/* Section label (only if present) */}
            {chapter.sectionLabel && (
              <>
                {index > 0 && <div className="sidebar-divider" />}
                <span className="sidebar-section-label">{chapter.sectionLabel}</span>
              </>
            )}

            {/* Divider between chapters without section labels */}
            {!chapter.sectionLabel && index > 0 && <div className="sidebar-divider" />}

            {/* Main chapter link */}
            <a
              href={`#${chapter.id}`}
              className={`sidebar-link ${activeId === chapter.id ? 'active' : ''}`}
              onClick={(event) => handleLinkClick(event, chapter.id)}
              aria-current={activeId === chapter.id ? 'location' : undefined}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleLinkClick(e, chapter.id);
                }
              }}
            >
              <span className="sb-num">{chapter.number}</span>
              <span>{chapter.title}</span>
            </a>

            {/* Sub-links */}
            {chapter.subs &&
              chapter.subs.map((sub) => (
                <a
                  key={sub.id}
                  href={`#${sub.id}`}
                  className={`sidebar-link sb-sub ${activeId === sub.id ? 'active' : ''}`}
                  onClick={(event) => handleLinkClick(event, sub.id)}
                  aria-current={activeId === sub.id ? 'location' : undefined}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      handleLinkClick(e, sub.id);
                    }
                  }}
                >
                  <span className="sb-num">{sub.number}</span>
                  <span>{sub.title}</span>
                </a>
              ))}
          </div>
        ))}
      </div>
    </nav>
  );
}
