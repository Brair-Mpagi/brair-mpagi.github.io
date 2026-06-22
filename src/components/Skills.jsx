import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SkillRadar from './SkillRadar';
import GlowCard from './GlowCard';
import './Skills.css';

const skillCategories = [
  {
    title: 'AI & Machine Learning',
    icon: '🧠',
    skills: [
      { name: 'NLP', level: 'Expert' },
      { name: 'RAG Systems', level: 'Expert' },
      { name: 'FAISS', level: 'Proficient' },
      { name: 'Sentence Transformers', level: 'Proficient' },
      { name: 'scikit-learn', level: 'Proficient' },
      { name: 'Deep Learning', level: 'Proficient' },
      { name: 'Linear Programming', level: 'Proficient' },
    ],
  },
  {
    title: 'Full-Stack Web',
    icon: '⚡',
    skills: [
      { name: 'React', level: 'Proficient' },
      { name: 'Node.js', level: 'Proficient' },
      { name: 'Express', level: 'Proficient' },
      { name: 'RESTful APIs', level: 'Proficient' },
      { name: 'HTML5/CSS3', level: 'Expert' },
      { name: 'PHP', level: 'Proficient' },
    ],
  },
  {
    title: 'Languages',
    icon: '💻',
    skills: [
      { name: 'Python', level: 'Expert' },
      { name: 'JavaScript', level: 'Expert' },
      { name: 'Java', level: 'Proficient' },
      { name: 'C++', level: 'Proficient' },
      { name: 'PHP', level: 'Proficient' },
      { name: 'C', level: 'Familiar' },
    ],
  },
  {
    title: 'Data & Databases',
    icon: '🗄️',
    skills: [
      { name: 'MySQL', level: 'Proficient' },
      { name: 'PostgreSQL', level: 'Proficient' },
      { name: 'Data Warehousing', level: 'Familiar' },
      { name: 'Data Visualization', level: 'Proficient' },
    ],
  },
  {
    title: 'Systems & Networks',
    icon: '🌐',
    skills: [
      { name: 'Linux Admin', level: 'Proficient' },
      { name: 'LAN Configuration', level: 'Proficient' },
      { name: 'Network Security', level: 'Familiar' },
      { name: 'Troubleshooting', level: 'Proficient' },
    ],
  },
  {
    title: 'Dev Tools',
    icon: '🛠️',
    skills: [
      { name: 'Git & GitHub', level: 'Proficient' },
      { name: 'VS Code', level: 'Expert' },
      { name: 'Android Studio', level: 'Familiar' },
      { name: 'Jupyter Notebook', level: 'Proficient' },
      { name: 'AI-Assisted Dev', level: 'Proficient' },
    ],
  },
];

const levelConfig = {
  Expert: { color: 'var(--success)', bg: 'rgba(16, 240, 160, 0.08)', border: 'rgba(16, 240, 160, 0.2)' },
  Proficient: { color: 'var(--accent-primary)', bg: 'rgba(0, 212, 255, 0.08)', border: 'rgba(0, 212, 255, 0.2)' },
  Familiar: { color: 'var(--text-tertiary)', bg: 'rgba(139, 148, 158, 0.08)', border: 'rgba(139, 148, 158, 0.2)' },
};

export default function Skills() {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const headerRef = useScrollReveal();
  const radarRef = useScrollReveal();
  const gridRef = useScrollReveal();

  return (
    <section className="skills section" id="skills">
      <div className="container">
        <div className="reveal" ref={headerRef}>
          <span className="section-label">// Technical Skills</span>
          <h2 className="section-title">Tools & Technologies</h2>
          <p className="section-subtitle">
            Categorised by domain, with proficiency levels earned through real projects — not just tutorials.
          </p>
        </div>

        {/* Interactive Radar */}
        <div className="reveal" ref={radarRef}>
          <SkillRadar />
        </div>

        {/* Category Deck */}
        <div className="skills__deck reveal" ref={gridRef}>
          {skillCategories.map((cat, i) => {
            const isActive = activeCardIndex === i;
            const diff = i - activeCardIndex;
            
            return (
              <GlowCard 
                key={i}
                className={`skills__deck-card ${isActive ? 'active' : 'inactive'}`}
                onClick={() => setActiveCardIndex(i)}
                style={{
                  zIndex: 20 - Math.abs(diff),
                  transform: isActive 
                    ? 'translateY(-15px) scale(1.05)' 
                    : `translateY(${Math.abs(diff) * 5}px) scale(${1 - Math.abs(diff) * 0.03}) rotateZ(${diff * 1.5}deg)`,
                  opacity: isActive ? 1 : 0.6,
                  filter: isActive ? 'none' : 'blur(1px)'
                }}
              >
                <div className="skills__category-inner">
                  <div className="skills__category-header">
                    <span className="skills__category-icon">{cat.icon}</span>
                    <h3 className="skills__category-title">{cat.title}</h3>
                  </div>
                  <div className="skills__tags" style={{ opacity: isActive ? 1 : 0.3, transition: 'opacity 0.4s' }}>
                    {cat.skills.map((skill, j) => (
                      <div className="skills__tag" key={j}>
                        <span className="skills__tag-name">{skill.name}</span>
                        <span
                          className="skills__tag-level"
                          style={{
                            color: levelConfig[skill.level].color,
                            background: levelConfig[skill.level].bg,
                            borderColor: levelConfig[skill.level].border,
                          }}
                        >
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </GlowCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
