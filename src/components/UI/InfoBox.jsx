import './InfoBox.css';

export default function InfoBox({ type = 'note', title, children }) {
  return (
    <div className={`info-box ${type}`}>
      {title && <div className="info-box-title">{title}</div>}
      {children}
    </div>
  );
}
