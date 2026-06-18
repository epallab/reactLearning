import './TableOfContents.css';

export default function TableOfContents({ chapters }) {
  const topicCount = chapters.reduce(
    (total, chapter) => total + (chapter.subs?.length || 0),
    0
  );

  const scrollTo = (event, id) => {
    event.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.replaceState(null, '', `#${id}`);
    }
  };

  return (
    <nav className="toc" id="table-of-contents" aria-labelledby="toc-title">
      <div className="toc-heading">
        <span className="toc-eyebrow">{chapters.length} chapters / {topicCount} topics</span>
        <h2 id="toc-title">Table of Contents</h2>
      </div>
      <ul className="toc-list">
        {chapters.map(ch => (
          <li key={ch.id}>
            <a className="toc-item" href={`#${ch.id}`} onClick={(event) => scrollTo(event, ch.id)}>
              <span className="toc-number">{ch.number}</span>
              <span className="toc-title">{ch.fullTitle || ch.title}</span>
            </a>
            {ch.subs?.map(sub => (
              <a key={sub.id} className="toc-item toc-sub" href={`#${sub.id}`} onClick={(event) => scrollTo(event, sub.id)}>
                <span className="toc-number">{sub.number}</span>
                <span className="toc-title">{sub.fullTitle || sub.title}</span>
              </a>
            ))}
          </li>
        ))}
      </ul>
    </nav>
  );
}
