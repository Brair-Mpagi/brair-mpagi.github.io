import { useState, useEffect, useRef } from 'react';
import ParticleCanvas from './ParticleCanvas';
import './Hero.css';

const terminalLines = [
  { type: 'prompt', text: '~  ' },
  { type: 'command', text: 'whoami', delay: 800 },
  { type: 'output', text: 'Mpagi Derrick Brair — AI Engineer & Full-Stack Developer', delay: 400 },
  { type: 'prompt', text: '~  ' },
  { type: 'command', text: 'cat skills.json | jq .focus', delay: 600 },
  { type: 'output', text: '["RAG Systems", "NLP", "Machine Learning", "Full-Stack Web"]', delay: 300 },
  { type: 'prompt', text: '~  ' },
  { type: 'command', text: 'echo $CURRENT_STATUS', delay: 500 },
  { type: 'output', text: '🟢 Open to opportunities — graduate roles, research, consulting', delay: 300 },
  { type: 'prompt', text: '~  ' },
  { type: 'command', text: 'ls ./projects --sort=impact', delay: 600 },
  { type: 'output', text: 'RAG-AI-System/  AI-Sales-Engine/  ML-Optimization/  NLP-Chatbot/', delay: 300 },
  { type: 'prompt', text: '~  ' },
  { type: 'command', text: 'python3 -c "from brain import passion; print(passion())"', delay: 700 },
  { type: 'output', text: '"Building intelligent systems from Uganda, for the world."', delay: 400 },
];

function Terminal() {
  const [lines, setLines] = useState([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const terminalRef = useRef(null);

  useEffect(() => {
    if (currentLineIndex >= terminalLines.length) {
      // Restart after a pause
      const timeout = setTimeout(() => {
        setLines([]);
        setCurrentLineIndex(0);
        setCurrentCharIndex(0);
        setIsTyping(true);
      }, 5000);
      return () => clearTimeout(timeout);
    }

    const currentLine = terminalLines[currentLineIndex];

    if (currentLine.type === 'prompt') {
      setLines(prev => [...prev, { type: 'prompt', text: currentLine.text, typing: '' }]);
      setCurrentLineIndex(prev => prev + 1);
      setCurrentCharIndex(0);
      return;
    }

    if (currentLine.type === 'command') {
      if (currentCharIndex === 0) {
        // Start typing command
        setLines(prev => {
          const updated = [...prev];
          if (updated.length > 0) {
            updated[updated.length - 1] = { ...updated[updated.length - 1], typing: '' };
          }
          return updated;
        });
      }

      if (currentCharIndex < currentLine.text.length) {
        const timeout = setTimeout(() => {
          setLines(prev => {
            const updated = [...prev];
            if (updated.length > 0) {
              updated[updated.length - 1] = {
                ...updated[updated.length - 1],
                typing: currentLine.text.slice(0, currentCharIndex + 1),
              };
            }
            return updated;
          });
          setCurrentCharIndex(prev => prev + 1);
        }, 40 + Math.random() * 30);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setCurrentLineIndex(prev => prev + 1);
          setCurrentCharIndex(0);
        }, currentLine.delay || 300);
        return () => clearTimeout(timeout);
      }
    }

    if (currentLine.type === 'output') {
      const timeout = setTimeout(() => {
        setLines(prev => [...prev, { type: 'output', text: currentLine.text }]);
        setCurrentLineIndex(prev => prev + 1);
        setCurrentCharIndex(0);
      }, currentLine.delay || 200);
      return () => clearTimeout(timeout);
    }
  }, [currentLineIndex, currentCharIndex]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines]);

  return (
    <div className="terminal">
      <div className="terminal__header">
        <div className="terminal__dots">
          <span className="terminal__dot terminal__dot--red"></span>
          <span className="terminal__dot terminal__dot--yellow"></span>
          <span className="terminal__dot terminal__dot--green"></span>
        </div>
        <span className="terminal__title">brair@dev ~ zsh</span>
        <div className="terminal__dots" style={{ opacity: 0 }}>
          <span className="terminal__dot"></span>
          <span className="terminal__dot"></span>
          <span className="terminal__dot"></span>
        </div>
      </div>
      <div className="terminal__body" ref={terminalRef}>
        {lines.map((line, i) => (
          <div key={i} className={`terminal__line terminal__line--${line.type}`}>
            {line.type === 'prompt' && (
              <>
                <span className="terminal__user">brair</span>
                <span className="terminal__at">@</span>
                <span className="terminal__host">dev</span>
                <span className="terminal__sep">{line.text}</span>
                <span className="terminal__typed">{line.typing}</span>
                {i === lines.length - 1 && <span className="terminal__caret">█</span>}
              </>
            )}
            {line.type === 'output' && (
              <span className="terminal__output">{line.text}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

const orbitTechs = [
  { name: 'LLMs', angle: 0, radius: 140, speed: 0.3, color: '#3776AB' },
  { name: 'RAG', angle: 60, radius: 140, speed: 0.3, color: '#61DAFB' },
  { name: 'Embeddings', angle: 120, radius: 140, speed: 0.3, color: '#00D4FF' },
  { name: 'FAISS', angle: 180, radius: 140, speed: 0.3, color: '#7C3AED' },
  { name: 'Transformers', angle: 240, radius: 140, speed: 0.3, color: '#68A063' },
  { name: 'Agents', angle: 300, radius: 140, speed: 0.3, color: '#10F0A0' },
];

function TechOrbit() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    let frame;
    const animate = () => {
      setRotation(prev => prev + 0.15);
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="tech-orbit">
      <div className="tech-orbit__center">
        <span className="tech-orbit__core-text">AI</span>
      </div>
      <div className="tech-orbit__ring tech-orbit__ring--1"></div>
      <div className="tech-orbit__ring tech-orbit__ring--2"></div>
      {orbitTechs.map((tech, i) => {
        const angle = ((tech.angle + rotation) * Math.PI) / 180;
        const x = Math.cos(angle) * tech.radius;
        const y = Math.sin(angle) * tech.radius * 0.4; // Perspective
        const scale = 0.7 + ((Math.sin(angle) + 1) / 2) * 0.4;
        const zIndex = Math.round((Math.sin(angle) + 1) * 10);
        return (
          <div
            key={i}
            className="tech-orbit__node"
            style={{
              transform: `translate(${x}px, ${y}px) scale(${scale})`,
              zIndex,
              opacity: 0.5 + scale * 0.5,
              '--node-color': tech.color,
            }}
          >
            {tech.name}
          </div>
        );
      })}
    </div>
  );
}

export default function Hero({ openCVModal }) {
  return (
    <section className="hero" id="hero">
      <ParticleCanvas />
      <div className="hero__grid-bg"></div>
      <div className="hero__content container">
        <div className="hero__left">
          <div className="hero__badge">
            <span className="hero__badge-dot"></span>
            AI Engineer & Full-Stack Developer
          </div>
          <h1 className="hero__title">
            I build <span className="hero__title-gradient">intelligent</span><br />
            systems </h1>
          <p className="hero__subtitle">
            Building production-grade systems from <span className="hero__subtitle-accent">Kampala, Uganda</span>.
          </p>
          <div className="hero__actions">
            <button
              className="btn btn-primary hero__btn hero__btn--magnetic"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
              View Projects
            </button>
            <button onClick={openCVModal} className="btn btn-secondary hero__btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Request CV
            </button>
          </div>
          <TechOrbit />
        </div>
        <div className="hero__right">
          <Terminal />
        </div>
      </div>
      <div className="hero__scroll-indicator">
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-wheel"></div>
        </div>
        <span>Scroll to explore</span>
      </div>
      <div className="hero__gradient-overlay"></div>
    </section>
  );
}
