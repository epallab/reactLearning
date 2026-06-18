import { useState, useEffect, useCallback } from 'react';
import Sidebar from './Sidebar';
import './Layout.css';

export default function Layout({ children, chapters, brandConfig }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeId, setActiveId] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  // Dark mode effect
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  useEffect(() => {
    document.body.classList.toggle('nav-open', sidebarOpen);
    return () => document.body.classList.remove('nav-open');
  }, [sidebarOpen]);

  useEffect(() => {
    if (!sidebarOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSidebarOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [sidebarOpen]);

  // Scroll progress + back to top
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
      setShowBackToTop(scrollTop > 600);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver for active section
  useEffect(() => {
    const sections = document.querySelectorAll('[data-section-id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.getAttribute('data-section-id'));
          }
        });
      },
      { rootMargin: '-80px 0px -70% 0px', threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!window.location.hash) return undefined;

    const targetId = decodeURIComponent(window.location.hash.slice(1));
    const timeoutId = window.setTimeout(() => {
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ block: 'start' });
      }
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, []);

  // Scroll to top on track mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const toggleSidebar = useCallback(() => {
    setSidebarOpen((prev) => !prev);
  }, []);

  const closeSidebar = useCallback(() => {
    setSidebarOpen(false);
  }, []);

  const toggleTheme = useCallback(() => {
    setIsDark((prev) => !prev);
  }, []);

  return (
    <>
      <a className="skip-link" href="#content">Skip to content</a>

      {/* Reading progress bar */}
      <div
        className="progress-bar"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Reading progress"
      />

      {/* Mobile sidebar toggle */}
      <button
        className={`sidebar-toggle ${sidebarOpen ? 'active' : ''}`}
        onClick={toggleSidebar}
        type="button"
        aria-expanded={sidebarOpen}
        aria-label="Toggle navigation"
      >
        <svg className="menu-icon" viewBox="0 0 24 24" aria-hidden="true">
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
        <svg className="close-icon" viewBox="0 0 24 24" aria-hidden="true">
          <line x1="6" y1="6" x2="18" y2="18" />
          <line x1="18" y1="6" x2="6" y2="18" />
        </svg>
      </button>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={closeSidebar}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <Sidebar
        chapters={chapters}
        activeId={activeId}
        isOpen={sidebarOpen}
        onToggle={closeSidebar}
        isDark={isDark}
        onToggleTheme={toggleTheme}
        brandConfig={brandConfig}
      />

      {/* Main content area */}
      <main className="main-content" id="content" tabIndex={-1}>{children}</main>

      {/* Back to top button */}
      {showBackToTop && (
        <button
          className="back-to-top"
          onClick={scrollToTop}
          type="button"
          aria-label="Back to top"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </button>
      )}
    </>
  );
}
