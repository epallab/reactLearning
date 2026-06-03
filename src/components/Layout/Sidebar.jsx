import { useCallback } from 'react';
import './Sidebar.css';

export default function Sidebar({ chapters, activeId, isOpen, onToggle, isDark, onToggleTheme }) {
  const handleLinkClick = useCallback(
    (id) => {
      const el = document.querySelector(`[data-section-id="${id}"]`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      // Close sidebar on mobile after clicking a link
      if (window.innerWidth < 1024) {
        onToggle();
      }
    },
    [onToggle]
  );

  return (
    <nav className={`sidebar ${isOpen ? 'open' : ''}`}>
      {/* Brand */}
      <div className="sidebar-brand">
        <svg viewBox="0 0 100 100" aria-hidden="true">
          <circle cx="50" cy="50" r="8" fill="#61DAFB" />
          <ellipse
            cx="50"
            cy="50"
            rx="45"
            ry="18"
            fill="none"
            stroke="#61DAFB"
            strokeWidth="2.5"
          />
          <ellipse
            cx="50"
            cy="50"
            rx="45"
            ry="18"
            fill="none"
            stroke="#61DAFB"
            strokeWidth="2.5"
            transform="rotate(60 50 50)"
          />
          <ellipse
            cx="50"
            cy="50"
            rx="45"
            ry="18"
            fill="none"
            stroke="#61DAFB"
            strokeWidth="2.5"
            transform="rotate(120 50 50)"
          />
        </svg>
        <div>
          <div className="sidebar-brand-text">React.js Developer</div>
          <div className="sidebar-brand-sub">Comprehensive Guide</div>
        </div>
        <button
          className="theme-toggle"
          onClick={onToggleTheme}
          aria-label="Toggle dark mode"
        >
          {isDark ? '☀️' : '🌙'}
        </button>
      </div>

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
              className={`sidebar-link ${activeId === chapter.id ? 'active' : ''}`}
              onClick={() => handleLinkClick(chapter.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleLinkClick(chapter.id);
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
                  className={`sidebar-link sb-sub ${activeId === sub.id ? 'active' : ''}`}
                  onClick={() => handleLinkClick(sub.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleLinkClick(sub.id);
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
