import { useState, useEffect, useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Stats.css';

function CountUp({ end, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const stats = [
  { value: 6, suffix: '+', label: 'Projects Built', icon: '⟨/⟩' },
  { value: 2, suffix: '', label: 'Internships', icon: '◈' },
  { value: 1, suffix: '', label: 'NLP Research', icon: '◉' },
  { value: 3, suffix: '+', label: 'Years Study', icon: '◇' },
];

export default function Stats() {
  const revealRef = useScrollReveal();

  return (
    <section className="stats" id="stats">
      <div className="container">
        <div className="stats__grid reveal reveal-stagger" ref={revealRef}>
          {stats.map((stat, i) => (
            <div className="stats__item" key={i}>
              <span className="stats__icon">{stat.icon}</span>
              <span className="stats__value">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </span>
              <span className="stats__label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
