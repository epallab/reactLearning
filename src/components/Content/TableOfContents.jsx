import './TableOfContents.css';

export default function TableOfContents({ chapters }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="toc">
      <h2>Table of Contents</h2>
      <ul className="toc-list">
        {chapters.map(ch => (
          <li key={ch.id}>
            <a className="toc-item" onClick={() => scrollTo(ch.id)}>
              <span className="toc-number">{ch.number}</span>
              <span className="toc-title">{ch.fullTitle || ch.title}</span>
            </a>
            {ch.subs?.map(sub => (
              <a key={sub.id} className="toc-item toc-sub" onClick={() => scrollTo(sub.id)}>
                <span className="toc-number">{sub.number}</span>
                <span className="toc-title">{sub.fullTitle || sub.title}</span>
              </a>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
}
