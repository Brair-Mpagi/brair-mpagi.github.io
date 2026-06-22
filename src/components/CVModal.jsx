import './CVModal.css';

export default function CVModal({ isOpen, onClose, type = 'cv' }) {
  if (!isOpen) return null;

  const isResearch = type === 'research';

  const subject = isResearch
    ? 'Research Paper Request — [Your Institution]'
    : 'CV Request — [Your Company]';

  const body = isResearch
    ? `Hello Mpagi Derrick Brair,\n\nI would like to request your research paper.\n\nName: \nInstitution: \nReason/Purpose: \n`
    : `Hello Mpagi Derrick Brair,\n\nI would like to request your CV.\n\nName: \nCompany: \nReason: \n`;

  const mailtoHref = `mailto:brairmpagi45@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  const handleCopy = () => {
    navigator.clipboard.writeText('brairmpagi45@gmail.com');
    alert('Email copied to clipboard!');
  };

  return (
    <div className="cvmodal__overlay" onClick={onClose}>
      <div className="cvmodal__panel cvmodal__panel--simple" onClick={(e) => e.stopPropagation()}>
        <button className="cvmodal__close" onClick={onClose} aria-label="Close">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        <div className="cvmodal__simple-icon">
          {isResearch ? (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
            </svg>
          ) : (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
            </svg>
          )}
        </div>

        <h2 className="cvmodal__simple-title">
          {isResearch ? 'Request Research Paper' : 'Request CV'}
        </h2>

        <p className="cvmodal__simple-desc">
          To receive my {isResearch ? 'research paper' : 'CV'}, please send a quick email to{' '}
          <span className="cvmodal__email-highlight">brairmpagi45@gmail.com</span> with:
        </p>

        <ul className="cvmodal__simple-list">
          <li>Your <strong>Name</strong></li>
          <li>Your <strong>{isResearch ? 'Institution / University' : 'Company'}</strong></li>
          <li>The <strong>Reason</strong> for your request</li>
        </ul>

        <p className="cvmodal__simple-promise">
          Once received, your request will be processed immediately.
        </p>

        <a
          href={mailtoHref}
          className="btn btn-primary cvmodal__simple-btn"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
          Send Email Request
        </a>

        <div className="cvmodal__simple-copy" onClick={handleCopy} title="Click to copy email">
          Copy Email: <code>brairmpagi45@gmail.com</code>
        </div>
      </div>
    </div>
  );
}
