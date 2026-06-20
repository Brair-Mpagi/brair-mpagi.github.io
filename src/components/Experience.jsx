import { useScrollReveal } from '../hooks/useScrollReveal';
import GlowCard from './GlowCard';
import './Experience.css';

const experiences = [
  {
    company: 'Uganda Industrial Research Institute (UIRI)',
    role: 'Intern — Engineering & Technology Development',
    period: 'Jan 2025 – Apr 2025',
    type: 'Internship',
    color: '#00D4FF',
    achievements: [
      'Managed and maintained 40+ staff workstations across multiple departments',
      'Configured and optimised LAN infrastructure for institute-wide connectivity',
      'Assisted in platform development and conducted User Acceptance Testing (UAT)',
      'Contributed to IT systems documentation and asset management',
    ],
    tech: ['Linux', 'LAN', 'UAT', 'IT Systems'],
  },
  {
    company: 'Uganda National Examinations Board (UNEB)',
    role: 'Script Adjudication & Data Entry Clerk',
    period: '2023 – Present',
    type: 'Part-Time',
    color: '#7C3AED',
    achievements: [
      'Processed high-volume examination data with strict accuracy requirements',
      'Performed quality assurance checks on examination scripts and records',
      'Managed confidential institutional records under data protection protocols',
    ],
    tech: ['Data Processing', 'QA', 'Records Management'],
  },
  {
    company: 'Della Electronics',
    role: 'IT Support Technician Intern',
    period: 'Jun 2022 – Dec 2022',
    type: 'Internship',
    color: '#10F0A0',
    achievements: [
      'Performed OS administration, hardware diagnostics, and system maintenance',
      'Configured and troubleshot network infrastructure issues',
      'Implemented cybersecurity best practices and endpoint protection',
    ],
    tech: ['OS Admin', 'Networking', 'Cybersecurity'],
  },
];

export default function Experience() {
  const headerRef = useScrollReveal();

  return (
    <section className="experience section" id="experience">
      <div className="container">
        <div className="reveal" ref={headerRef}>
          <span className="section-label">// Experience</span>
          <h2 className="section-title">Where I've Worked</h2>
          <p className="section-subtitle">
            Real-world experience managing systems, building platforms, and solving problems at scale.
          </p>
        </div>

        <div className="experience__timeline">
          {experiences.map((exp, i) => (
            <TimelineEntry key={i} experience={exp} index={i} total={experiences.length} />
          ))}
        </div>

        <div className="experience__cta">
          <a href="/resume.pdf" download className="btn btn-secondary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Download Full CV
          </a>
        </div>
      </div>
    </section>
  );
}

function TimelineEntry({ experience, index, total }) {
  const ref = useScrollReveal();

  return (
    <div className="timeline__entry reveal" ref={ref}>
      <div className="timeline__marker">
        <div className="timeline__dot" style={{ boxShadow: `0 0 12px ${experience.color}40`, borderColor: experience.color }}></div>
        {index < total - 1 && <div className="timeline__line"></div>}
      </div>
      <GlowCard className="timeline__card-wrapper">
        <div className="timeline__card">
          <div className="timeline__header">
            <div>
              <span className="timeline__type" style={{ color: experience.color, borderColor: `${experience.color}30`, background: `${experience.color}10` }}>
                {experience.type}
              </span>
              <h3 className="timeline__company">{experience.company}</h3>
              <p className="timeline__role">{experience.role}</p>
            </div>
            <span className="timeline__period">{experience.period}</span>
          </div>
          <ul className="timeline__achievements">
            {experience.achievements.map((item, j) => (
              <li key={j}>
                <span className="timeline__bullet" style={{ color: experience.color }}>▹</span>
                {item}
              </li>
            ))}
          </ul>
          <div className="timeline__tech">
            {experience.tech.map((t, j) => (
              <span className="timeline__tech-tag" key={j}>{t}</span>
            ))}
          </div>
        </div>
      </GlowCard>
    </div>
  );
}
