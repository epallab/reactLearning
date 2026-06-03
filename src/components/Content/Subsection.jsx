export default function Subsection({ id, icon, iconBg, iconColor, title, children }) {
  return (
    <div id={id} className="subsection" data-section-id={id}>
      <h3 className="subsection-title">
        <span className="icon" style={{ background: iconBg, color: iconColor }}>{icon}</span>
        {title}
      </h3>
      {children}
    </div>
  );
}
