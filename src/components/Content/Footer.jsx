import './Footer.css';

export default function Footer({ chapters, trackName }) {
  const topicCount = chapters.reduce(
    (total, chapter) => total + (chapter.subs?.length || 0),
    0
  );

  return (
    <footer className="doc-footer">
      <p><strong>{trackName} - Comprehensive Guide</strong></p>
      <p>{chapters.length} chapters, {topicCount} focused topics, and production-ready examples.</p>
      <p>Generated June 2026</p>
    </footer>
  );
}
