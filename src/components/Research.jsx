import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Research.css';

function ResearchModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({ name: '', email: '', institution: '', reason: '' });
  const [submitted, setSubmitted] = useState(false);
  const [mailtoLink, setMailtoLink] = useState('');

  if (!isOpen) return null;

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, institution, reason } = formData;
    const subject = encodeURIComponent(`Research Paper Request — ${institution || name}`);
    const body = encodeURIComponent(
      `Hello Mpagi Derrick Brair,\n\nI would like to request your research paper.\n\n` +
      `Name: ${name}\nEmail: ${email}\nInstitution / Organisation: ${institution}\nReason: ${reason}\n\n` +
      `Please reply to the email above.\n`
    );
    setMailtoLink(`mailto:brairmpagi45@gmail.com?subject=${subject}&body=${body}`);
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    setMailtoLink('');
    setFormData({ name: '', email: '', institution: '', reason: '' });
    onClose();
  };

  return (
    <div className="cvmodal__overlay" onClick={handleClose}>
      <div className="cvmodal__panel" onClick={(e) => e.stopPropagation()}>
        <div className="cvmodal__header">
          <div className="cvmodal__header-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
            </svg>
          </div>
          <div>
            <h2 className="cvmodal__title">Request Research Paper</h2>
            <p className="cvmodal__subtitle">NLP-Driven Institutional Knowledge Retrieval</p>
          </div>
          <button className="cvmodal__close" onClick={handleClose} aria-label="Close">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>
        <div className="cvmodal__note">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
          <span>Please use your institutional or company email when submitting.</span>
        </div>
        {submitted ? (
          <div className="cvmodal__success">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#10F0A0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
            <p style={{ fontWeight: 700, color: 'var(--text-primary)', marginBottom: 4 }}>Ready to send!</p>
            <p style={{ fontSize: 'var(--fs-xs)', color: 'var(--text-secondary)', marginBottom: 16 }}>Click the button below to open Gmail with your request pre-filled.</p>
            <a
              href={mailtoLink}
              className="btn btn-primary cvmodal__submit"
              style={{ display: 'inline-flex', justifyContent: 'center', textDecoration: 'none' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
              </svg>
              Open Gmail
            </a>
            <button onClick={handleClose} style={{ marginTop: 8, background: 'none', border: 'none', color: 'var(--text-tertiary)', fontSize: 'var(--fs-xs)', cursor: 'pointer' }}>Close</button>
          </div>
        ) : (
          <form className="cvmodal__form" onSubmit={handleSubmit}>
            <div className="cvmodal__field">
              <label htmlFor="rp-name" className="cvmodal__label">Full Name</label>
              <input id="rp-name" type="text" name="name" value={formData.name} onChange={handleChange} className="cvmodal__input" placeholder="John Doe" required />
            </div>
            <div className="cvmodal__field">
              <label htmlFor="rp-email" className="cvmodal__label">Your Email</label>
              <input id="rp-email" type="email" name="email" value={formData.email} onChange={handleChange} className="cvmodal__input" placeholder="you@university.edu" required />
            </div>
            <div className="cvmodal__field">
              <label htmlFor="rp-institution" className="cvmodal__label">Institution / Organisation</label>
              <input id="rp-institution" type="text" name="institution" value={formData.institution} onChange={handleChange} className="cvmodal__input" placeholder="e.g. MIT, Makerere University" required />
            </div>
            <div className="cvmodal__field">
              <label htmlFor="rp-reason" className="cvmodal__label">Purpose of Request</label>
              <textarea id="rp-reason" name="reason" value={formData.reason} onChange={handleChange} className="cvmodal__input cvmodal__textarea" placeholder="e.g. Related research, literature review, thesis reference" rows="3" required />
            </div>
            <button type="submit" className="btn btn-primary cvmodal__submit">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
              Send Request
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default function Research() {
  const ref = useScrollReveal();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="research section" id="research">
      <div className="container">
        <div className="reveal" ref={ref}>
          <span className="section-label">// Research</span>
          <h2 className="section-title">Academic Research</h2>
        </div>
        <div className="research__card reveal" ref={useScrollReveal()}>
          <div className="research__badge">Final Year Thesis</div>
          <div className="research__content">
            <div className="research__main">
              <h3 className="research__title">
                RAG-AI-conversation-system-FAISS-ST — An NLP-Driven Approach to Institutional Knowledge Retrieval
              </h3>
              <div className="research__meta">
                <span className="research__meta-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 1.1 2.7 2 6 2s6-.9 6-2v-5"/>
                  </svg>
                  MMU
                </span>
                <span className="research__meta-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                  2025–2026
                </span>
              </div>
              <p className="research__abstract">
                This research investigates the application of Natural Language Processing techniques for building
                intelligent conversational systems capable of automated knowledge retrieval within African higher
                education institutions. The system leverages NLP pipelines, semantic understanding, and knowledge
                graph approaches to enable stakeholder engagement and drive digital transformation in university
                information services.
              </p>
              <div className="research__keywords">
                <span className="research__keyword">NLP</span>
                <span className="research__keyword">Conversational AI</span>
                <span className="research__keyword">Knowledge Retrieval</span>
                <span className="research__keyword">Higher Education</span>
                <span className="research__keyword">Digital Transformation</span>
              </div>
            </div>
            <div className="research__sidebar">
              <div className="research__status">
                <div className="research__status-label">Status</div>
                <div className="research__status-value">
                  <span className="research__status-dot"></span>
                  Published
                </div>
              </div>
              <div className="research__tech">
                <div className="research__tech-label">Key Technologies</div>
                <div className="research__tech-list">
                  <span>NLP</span>
                  <span>Python</span>
                  <span>Intelligent Agents</span>
                  <span>Knowledge Graphs</span>
                </div>
              </div>
              <button
                className="btn btn-secondary research__cta"
                onClick={() => setIsModalOpen(true)}
              >
                Request Research Paper
              </button>
            </div>
          </div>
        </div>
      </div>
      <ResearchModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
