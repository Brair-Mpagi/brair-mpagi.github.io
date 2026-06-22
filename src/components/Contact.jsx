import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Contact.css';

export default function Contact() {
  const headerRef = useScrollReveal();
  const optionsRef = useScrollReveal();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('brairmpagi45@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const templates = [
    {
      label: 'Hire / Freelance Inquiry',
      subject: 'Freelance Project Opportunity — [Company]',
      body: 'Hello Mpagi Derrick Brair,\n\nI am reaching out regarding a project/role opportunity.\n\nProject details:\nTimeline:\nBudget/Rate range:\n',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
        </svg>
      )
    },
    {
      label: 'Research / Collaboration',
      subject: 'Research Inquiry — [Institution]',
      body: 'Hello Mpagi Derrick Brair,\n\nI am interested in discussing your research on institutional knowledge retrieval or collaborating on a related topic.\n\nInquiry details:\n',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
        </svg>
      )
    },
    {
      label: 'General Inquiry',
      subject: 'General Inquiry / Hello',
      body: 'Hello Mpagi Derrick Brair,\n\n[Your message here]\n',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      )
    }
  ];

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="contact__header reveal" ref={headerRef}>
          <span className="section-label">// Contact</span>
          <h2 className="section-title">Let's Build Something</h2>
          <p className="section-subtitle">
            Currently open to full-time roles, freelance projects, and research collaborations.
            Choose a pathway below to start the conversation.
          </p>
        </div>

        <div className="contact__grid reveal" ref={optionsRef}>
          <div className="contact__hub">
            <div className="contact__terminal">
              <div className="contact__terminal-header">
                <span className="contact__terminal-dot red"></span>
                <span className="contact__terminal-dot yellow"></span>
                <span className="contact__terminal-dot green"></span>
                <span className="contact__terminal-title">bash — contact</span>
              </div>
              <div className="contact__terminal-body">
                <p className="contact__terminal-line"><span className="prompt">$</span> ping -c 1 mpagi.d</p>
                <p className="contact__terminal-response">64 bytes from mpagi.d: icmp_seq=1 ttl=64 time=0.045 ms</p>
                <p className="contact__terminal-line"><span className="prompt">$</span> mpagi --status</p>
                <p className="contact__terminal-response success">Online & open to invitations</p>
                <p className="contact__terminal-line"><span className="prompt">$</span> mpagi --response-time</p>
                <p className="contact__terminal-response">Typically under 24 hours</p>
              </div>
            </div>

            <div className="contact__templates-title">Choose Inquiry Type</div>
            <div className="contact__templates-grid">
              {templates.map((tpl, i) => {
                const mailtoHref = `mailto:brairmpagi45@gmail.com?subject=${encodeURIComponent(tpl.subject)}&body=${encodeURIComponent(tpl.body)}`;
                return (
                  <a key={i} href={mailtoHref} className="contact__template-btn">
                    <span className="contact__template-icon">{tpl.icon}</span>
                    <span className="contact__template-label">{tpl.label}</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="contact__template-arrow">
                      <line x1="5" y1="12" x2="19" y2="12"/>
                      <polyline points="12 5 19 12 12 19"/>
                    </svg>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="contact__info">
            <div className="contact__info-card">
              <h3 className="contact__info-title">Get in Touch Directly</h3>
              <p className="contact__info-text">
                Tap any of the categories on the left to start a pre-filled draft in your mail client, or copy the address manually below.
              </p>
              <div className="contact__channels">
                <div className="contact__channel" onClick={handleCopyEmail} style={{ cursor: 'pointer' }}>
                  <div className="contact__channel-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </div>
                  <div style={{ flexGrow: 1 }}>
                    <span className="contact__channel-label">Email Address</span>
                    <span className="contact__channel-value">brairmpagi45@gmail.com</span>
                  </div>
                  <div className="contact__channel-copy-status">
                    {copied ? (
                      <span style={{ color: '#10F0A0', fontSize: 'var(--fs-xs)' }}>Copied!</span>
                    ) : (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                    )}
                  </div>
                </div>
                <a href="https://github.com/Brair-Mpagi" target="_blank" rel="noopener noreferrer" className="contact__channel">
                  <div className="contact__channel-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                  </div>
                  <div>
                    <span className="contact__channel-label">GitHub</span>
                    <span className="contact__channel-value">Brair-Mpagi</span>
                  </div>
                </a>
                <div className="contact__channel">
                  <div className="contact__channel-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div>
                    <span className="contact__channel-label">Location</span>
                    <span className="contact__channel-value">Kampala, Uganda</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact__availability">
              <span className="contact__availability-dot"></span>
              <span>Available for new opportunities</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
