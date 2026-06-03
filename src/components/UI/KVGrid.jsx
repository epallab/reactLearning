import './KVGrid.css';

export function KVGrid({ children }) {
  return <div className="kv-grid">{children}</div>;
}

export function KVItem({ label, value }) {
  return (
    <div className="kv-item">
      <div className="kv-label">{label}</div>
      <div className="kv-value">{value}</div>
    </div>
  );
}
