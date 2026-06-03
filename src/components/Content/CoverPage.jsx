import './CoverPage.css';

export default function CoverPage() {
  return (
    <div className="cover-page">
      <div className="cover-content">
        <svg className="react-logo" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="8" fill="#61DAFB"/>
          <ellipse cx="50" cy="50" rx="45" ry="18" fill="none" stroke="#61DAFB" strokeWidth="2"/>
          <ellipse cx="50" cy="50" rx="45" ry="18" fill="none" stroke="#61DAFB" strokeWidth="2" transform="rotate(60 50 50)"/>
          <ellipse cx="50" cy="50" rx="45" ry="18" fill="none" stroke="#61DAFB" strokeWidth="2" transform="rotate(120 50 50)"/>
        </svg>
        <div className="cover-badge">Professional Reference Guide</div>
        <h1 className="cover-title">React.js Frontend Developer</h1>
        <p className="cover-subtitle">Comprehensive Guide to Key Responsibilities, Skills &amp; Best Practices with Production-Ready Code Examples</p>
        <div className="cover-meta">
          <div className="cover-meta-item">
            <svg viewBox="0 0 20 20"><path d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"/></svg>
            June 2026
          </div>
          <div className="cover-meta-item">
            <svg viewBox="0 0 20 20"><path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.669 0-3.218.51-4.5 1.385V16"/></svg>
            8 Chapters · 40+ Examples
          </div>
          <div className="cover-meta-item">
            <svg viewBox="0 0 20 20"><path d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"/></svg>
            React 18+ / ES2024
          </div>
        </div>
        <div className="scroll-indicator">
          <span>Scroll to explore</span>
          <div className="scroll-arrow">↓</div>
        </div>
      </div>
    </div>
  );
}
