import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Contact.css';

export default function Contact() {
  const headerRef = useScrollReveal();
  const formRef = useScrollReveal();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Job Opportunity',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const mailtoLink = `mailto:mpagiderrick@gmail.com?subject=${encodeURIComponent(`[Portfolio] ${subject} — ${name}`)}&body=${encodeURIComponent(`From: ${name}\nEmail: ${email}\n\n${message}`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="contact__header reveal" ref={headerRef}>
          <span className="section-label">// Contact</span>
          <h2 className="section-title">Let's Build Something</h2>
          <p className="section-subtitle">
            Currently open to full-time roles, freelance projects, and research collaborations.
            I'd love to hear from you.
          </p>
        </div>

        <div className="contact__grid reveal" ref={formRef}>
          <form className="contact__form" onSubmit={handleSubmit} id="contact-form">
            <div className="contact__form-group">
              <label htmlFor="name" className="contact__label">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="contact__input"
                placeholder="Your full name"
              />
            </div>
            <div className="contact__form-group">
              <label htmlFor="email" className="contact__label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="contact__input"
                placeholder="you@example.com"
              />
            </div>
            <div className="contact__form-group">
              <label htmlFor="subject" className="contact__label">Subject</label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="contact__input contact__select"
              >
                <option value="Job Opportunity">Job Opportunity</option>
                <option value="Freelance">Freelance Project</option>
                <option value="Collaboration">Collaboration</option>
                <option value="Research">Research Inquiry</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="contact__form-group">
              <label htmlFor="message" className="contact__label">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="contact__input contact__textarea"
                placeholder="Tell me about your project or opportunity..."
              />
            </div>
            <button type="submit" className="btn btn-primary contact__submit">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              Send Message
            </button>
          </form>

          <div className="contact__info">
            <div className="contact__info-card">
              <h3 className="contact__info-title">Get in Touch</h3>
              <p className="contact__info-text">
                Prefer email? Reach out directly or fill out the form. I typically respond within 24 hours.
              </p>
              <div className="contact__channels">
                <a href="mailto:mpagiderrick@gmail.com" className="contact__channel">
                  <div className="contact__channel-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </div>
                  <div>
                    <span className="contact__channel-label">Email</span>
                    <span className="contact__channel-value">mpagiderrick@gmail.com</span>
                  </div>
                </a>
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
