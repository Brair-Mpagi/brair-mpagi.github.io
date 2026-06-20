import { useScrollReveal } from '../hooks/useScrollReveal';
import './Research.css';

export default function Research() {
  const ref = useScrollReveal();

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
                University AI Chatbot System — An NLP-Driven Approach to Institutional Knowledge Retrieval
              </h3>
              <div className="research__meta">
                <span className="research__meta-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 1.1 2.7 2 6 2s6-.9 6-2v-5"/></svg>
                  Mountains of the Moon University
                </span>
                <span className="research__meta-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
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
                  In Progress
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
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Request Research Paper
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
