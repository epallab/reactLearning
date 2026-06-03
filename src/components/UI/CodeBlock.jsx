import { useState } from 'react';
import './CodeBlock.css';

export default function CodeBlock({ filename, language, children }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    // Strip HTML tags to get plain text for copying
    const text = typeof children === 'string' ? children : '';
    const plainText = text.replace(/<[^>]*>/g, '');
    await navigator.clipboard.writeText(plainText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="code-block-wrapper">
      {filename && (
        <div className="file-header">
          <span className="file-dot dot-red" />
          <span className="file-dot dot-yellow" />
          <span className="file-dot dot-green" />
          <span className="file-name">{filename}</span>
          <button className="copy-btn" onClick={handleCopy}>
            {copied ? '✓ Copied' : 'Copy'}
          </button>
        </div>
      )}
      <pre className={filename ? 'has-header' : ''}>
        {language && <span className="lang-tag">{language}</span>}
        <code dangerouslySetInnerHTML={{ __html: children }} />
      </pre>
    </div>
  );
}
