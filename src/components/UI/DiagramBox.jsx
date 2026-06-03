import './DiagramBox.css';

export default function DiagramBox({ title, children }) {
  return (
    <div className="diagram-box">
      {title && <div className="diagram-title">{title}</div>}
      {children}
    </div>
  );
}

export function FlowRow({ children, style }) {
  return <div className="flow-row" style={style}>{children}</div>;
}

export function FlowBox({ children, variant, style }) {
  return (
    <div className={`flow-box ${variant || ''}`} style={style}>
      {children}
    </div>
  );
}

export function FlowArrow({ children = '→' }) {
  return <span className="flow-arrow">{children}</span>;
}
