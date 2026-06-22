import { useScrollReveal } from '../hooks/useScrollReveal';
import GlowCard from './GlowCard';
import './About.css';

const profileCode = `const brair = {
  name: "Mpagi Derrick Brair",
  role: "AI Engineer & Full-Stack Developer",
  location: "Kampala, Uganda 🇺🇬",
  education: {
    degree: "BSc Computer Science",
         focus: ["AI", "ML", "NLP", "Data Science"]
  },
  currentFocus: [
    "Network Security", "NLP Research", "Full-Stack"
  ],
  funFact: "Codding is a hobby"
};`;

export default function About({ openCVModal }) {
  const revealRef = useScrollReveal();
  const revealRef2 = useScrollReveal();

  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about__grid">
          <div className="about__image-col reveal" ref={revealRef}>
            <div className="about__image-wrapper">
              <div className="about__image-placeholder">
                <span className="about__image-initials">Brair</span>
                <div className="about__image-rings">
                  <div className="about__image-ring about__image-ring--1"></div>
                  <div className="about__image-ring about__image-ring--2"></div>
                  <div className="about__image-ring about__image-ring--3"></div>
                </div>
              </div>
              <div className="about__image-border"></div>
            </div>

            {/* Code Profile Card */}
            <GlowCard className="about__code-card">
              <div className="about__code-window">
                <div className="about__code-header">
                  <span className="about__code-dot about__code-dot--red"></span>
                  <span className="about__code-dot about__code-dot--yellow"></span>
                  <span className="about__code-dot about__code-dot--green"></span>
                  <span className="about__code-filename">profile.js</span>
                </div>
                <pre className="about__code-body">
                  <code>{profileCode}</code>
                </pre>
              </div>
            </GlowCard>
          </div>
          <div className="about__content-col reveal" ref={revealRef2}>
            <span className="section-label">// About Me</span>
            <h2 className="section-title">Turning Ideas Into<br />Intelligent Systems</h2>
            <div className="about__text">
              <p>
                I enjoy building software that solve real-world problems. My interests span artificial intelligence, cyber/network security full-stack development, automation, and data-driven systems.
              </p>
              <p>
                From AI sys and ML applications to scalable web platforms and backend services, I enjoy exploring how technology can transform complex challenges into practical solutions. I'm particularly interested in intelligent systems, natural language processing, and building tools that make information more accessible and workflows more efficient.
              </p>
              <p>
                --&gt; I'm always learning
              </p>
            </div>

            <div className="about__metrics">
              <div className="about__metric">
                <span className="about__metric-value">40+</span>
                <span className="about__metric-label">Workstations Managed</span>
              </div>
              <div className="about__metric">
                <span className="about__metric-value">6+</span>
                <span className="about__metric-label">Projects Shipped</span>
              </div>
              <div className="about__metric">
                <span className="about__metric-value">3</span>
                <span className="about__metric-label">Internships Completed</span>
              </div>
            </div>

            <div className="about__values">
              <div className="about__value-tag">
                <span className="about__value-icon">◈</span>
                Curiosity-Driven
              </div>
              <div className="about__value-tag">
                <span className="about__value-icon">◈</span>
                Build for Impact
              </div>
              <div className="about__value-tag">
                <span className="about__value-icon">◈</span>
                Efficiency First
              </div>
              <div className="about__value-tag">
                <span className="about__value-icon">◈</span>
                Open Source
              </div>
            </div>

            <div className="about__actions">
              <button
                className="btn btn-primary"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                See My Projects
              </button>
              <button onClick={openCVModal} className="btn btn-secondary">Request CV</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
