import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import GlowCard from './GlowCard';
import './Experience.css';

const experiences = [
  {
    company: 'Uganda Industrial Research Institute (UIRI)',
    role: 'Embedded Systems Engineer / Network (Intern)',
    period: 'Jan 2025 – Apr 2025',
    type: 'Internship',
    color: '#00D4FF',
    achievements: [
      'Engineered embedded systems solutions for technology development projects',
      'Configured and optimised LAN infrastructure for institute-wide connectivity',
      'Maintained staff workstations and assisted in system platform development',
    ],
    tech: ['Embedded Systems', 'Networking', 'Hardware', 'Linux'],
  },
  {
    company: 'Skurge Tech',
    role: 'Cyber Security Analyst / Networks Engineer',
    period: '2024',
    type: 'Full-Time',
    color: '#FF3366',
    achievements: [
      'Performed vulnerability assessments and implemented endpoint protection',
      'Monitored network traffic to identify and mitigate security threats',
      'Provided advanced IT support and systems administration',
    ],
    tech: ['Cybersecurity', 'Networks', 'IT Support', 'Threat Mitigation'],
  },
  {
    company: 'UNA',
    role: 'Junior Systems Support Assistant',
    period: '2023 – 2024',
    type: 'Full-Time',
    color: '#7C3AED',
    achievements: [
      'Provided frontline technical support for hardware and software issues',
      'Assisted in the deployment and configuration of institutional IT systems',
      'Maintained system documentation and troubleshooting guides',
    ],
    tech: ['System Admin', 'Helpdesk', 'Hardware Troubleshooting'],
  },
  {
    company: 'Della Electronics',
    role: 'IT Support Technician | System Analyst',
    period: 'Jun 2022 – Dec 2022',
    type: 'Internship',
    color: '#10F0A0',
    achievements: [
      'Conducted OS administration, hardware diagnostics, and system maintenance',
      'Analyzed system requirements to improve operational efficiency',
      'Troubleshot complex network infrastructure issues',
    ],
    tech: ['OS Admin', 'System Analysis', 'Diagnostics'],
  },
  {
    company: 'Freelance / Independent Clients',
    role: 'Full-Stack & AI Developer',
    period: '2020 – Present',
    type: 'Freelance',
    color: '#F59E0B',
    achievements: [
      'Designed and developed RAG-powered chatbot systems and ML prediction engines',
      'Built scalable, responsive full-stack web platforms using React and Node.js',
      'Delivered custom software solutions solving specific client business needs',
    ],
    tech: ['React', 'Node.js', 'Machine Learning', 'Python'],
  },
  {
    company: 'School / Institutional ICT Labs',
    role: 'IT Support Assistant (Freelance)',
    period: '2022 – Present',
    type: 'Freelance',
    color: '#3B82F6',
    achievements: [
      'Managed and maintained computer laboratory equipment and software',
      'Supported students and staff with technical issues and network access',
      'Ensured lab security protocols and data integrity were upheld',
    ],
    tech: ['Lab Management', 'Technical Support', 'Networking'],
  },
  {
    company: 'IT Labs',
    role: 'Software Developer',
    period: 'Present',
    type: 'Contract',
    color: '#E11D48',
    achievements: [
      'Developing and maintaining software applications and internal tools',
      'Collaborating on codebase improvements and technical architecture',
      'Participating in code reviews and agile development sprints',
    ],
    tech: ['Software Dev', 'Agile', 'Architecture'],
  },
];

export default function Experience({ openCVModal }) {
  const headerRef = useScrollReveal();
  const [activeId, setActiveId] = useState(0);

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

        <div className="experience__deck">
          {experiences.map((exp, i) => (
            <TimelineEntry 
              key={i} 
              experience={exp} 
              index={i} 
              total={experiences.length}
              isActive={activeId === i}
              activeId={activeId}
              onClick={() => setActiveId(i)}
            />
          ))}
        </div>

        <div className="experience__cta">
          <button onClick={openCVModal} className="btn btn-secondary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Request Full CV
          </button>
        </div>
      </div>
    </section>
  );
}

function TimelineEntry({ experience, index, total, isActive, onClick, activeId }) {
  const diff = index - activeId;

  return (
    <GlowCard 
      className={`experience__deck-card ${isActive ? 'active' : 'inactive'}`}
      onClick={onClick}
      style={{
        zIndex: 20 - Math.abs(diff),
        transform: isActive 
          ? 'translateY(-15px) scale(1.05)' 
          : `translateY(${Math.abs(diff) * 5}px) scale(${1 - Math.abs(diff) * 0.03}) rotateZ(${diff * 1.5}deg)`,
        opacity: isActive ? 1 : 0.6,
        filter: isActive ? 'none' : 'blur(1px)'
      }}
    >
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
        
        <div className="timeline__details" style={{ opacity: isActive ? 1 : 0.3, transition: 'opacity 0.4s' }}>
          <div className="timeline__details-inner">
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
        </div>
      </div>
    </GlowCard>
  );
}
