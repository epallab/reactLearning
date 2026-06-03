import './Section.css';

export default function Section({ id, number, title, theme = 'blue', children }) {
  return (
    <div className={`section theme-${theme}`} id={id} data-section-id={id}>
      <div className="section-header">
        <span className="section-number">Chapter {number}</span>
        <h2 className="section-title">{title}</h2>
      </div>
      {children}
    </div>
  );
}
