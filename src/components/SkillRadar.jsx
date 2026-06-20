import { useRef, useEffect, useState, useCallback } from 'react';
import './SkillRadar.css';

const dimensions = [
  { label: 'AI / ML', value: 90 },
  { label: 'NLP', value: 85 },
  { label: 'Full-Stack', value: 80 },
  { label: 'Databases', value: 75 },
  { label: 'Systems', value: 70 },
  { label: 'DevOps', value: 65 },
];

export default function SkillRadar() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [animProgress, setAnimProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Visibility observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Animation
  useEffect(() => {
    if (!isVisible) return;
    let start = null;
    const duration = 1500;
    const animate = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setAnimProgress(eased);
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isVisible]);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const size = 360;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas.style.width = `${size}px`;
    canvas.style.height = `${size}px`;
    ctx.scale(dpr, dpr);

    const cx = size / 2;
    const cy = size / 2;
    const maxR = 130;
    const n = dimensions.length;
    const step = (Math.PI * 2) / n;

    ctx.clearRect(0, 0, size, size);

    const style = getComputedStyle(document.documentElement);
    const borderColor = style.getPropertyValue('--border').trim() || '#1E2D40';
    const textColor = style.getPropertyValue('--text-secondary').trim() || '#8896A8';
    const accentColor = style.getPropertyValue('--accent-primary').trim() || '#00D4FF';

    // Grid rings
    for (let ring = 1; ring <= 4; ring++) {
      const r = (maxR * ring) / 4;
      ctx.beginPath();
      for (let i = 0; i <= n; i++) {
        const angle = step * i - Math.PI / 2;
        const x = cx + Math.cos(angle) * r;
        const y = cy + Math.sin(angle) * r;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.strokeStyle = borderColor;
      ctx.lineWidth = 0.5;
      ctx.stroke();
    }

    // Axis lines
    for (let i = 0; i < n; i++) {
      const angle = step * i - Math.PI / 2;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + Math.cos(angle) * maxR, cy + Math.sin(angle) * maxR);
      ctx.strokeStyle = borderColor;
      ctx.lineWidth = 0.5;
      ctx.stroke();
    }

    // Data polygon — filled
    ctx.beginPath();
    for (let i = 0; i <= n; i++) {
      const idx = i % n;
      const angle = step * idx - Math.PI / 2;
      const val = (dimensions[idx].value / 100) * maxR * animProgress;
      const x = cx + Math.cos(angle) * val;
      const y = cy + Math.sin(angle) * val;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
    const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, maxR);
    gradient.addColorStop(0, 'rgba(0, 212, 255, 0.15)');
    gradient.addColorStop(1, 'rgba(124, 58, 237, 0.05)');
    ctx.fillStyle = gradient;
    ctx.fill();
    ctx.strokeStyle = accentColor;
    ctx.lineWidth = 2;
    ctx.stroke();

    // Data points
    for (let i = 0; i < n; i++) {
      const angle = step * i - Math.PI / 2;
      const val = (dimensions[i].value / 100) * maxR * animProgress;
      const x = cx + Math.cos(angle) * val;
      const y = cy + Math.sin(angle) * val;
      const isHovered = hoveredIndex === i;

      // Glow
      if (isHovered) {
        ctx.beginPath();
        ctx.arc(x, y, 16, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 212, 255, 0.15)';
        ctx.fill();
      }

      // Dot
      ctx.beginPath();
      ctx.arc(x, y, isHovered ? 6 : 4, 0, Math.PI * 2);
      ctx.fillStyle = isHovered ? '#fff' : accentColor;
      ctx.fill();
      ctx.strokeStyle = accentColor;
      ctx.lineWidth = 2;
      ctx.stroke();

      // Label
      const labelR = maxR + 24;
      const lx = cx + Math.cos(angle) * labelR;
      const ly = cy + Math.sin(angle) * labelR;
      ctx.font = `${isHovered ? '600' : '500'} 12px 'Inter', sans-serif`;
      ctx.fillStyle = isHovered ? accentColor : textColor;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(dimensions[i].label, lx, ly);

      // Value on hover
      if (isHovered) {
        ctx.font = `700 14px 'JetBrains Mono', monospace`;
        ctx.fillStyle = '#fff';
        ctx.fillText(`${dimensions[i].value}%`, x, y - 18);
      }
    }
  }, [animProgress, hoveredIndex]);

  useEffect(() => {
    draw();
  }, [draw]);

  const handleMouseMove = useCallback((e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;
    const size = 360;
    const cx = size / 2;
    const cy = size / 2;
    const maxR = 130;
    const n = dimensions.length;
    const step = (Math.PI * 2) / n;

    let closest = -1;
    let closestDist = 30;
    for (let i = 0; i < n; i++) {
      const angle = step * i - Math.PI / 2;
      const val = (dimensions[i].value / 100) * maxR * animProgress;
      const x = cx + Math.cos(angle) * val;
      const y = cy + Math.sin(angle) * val;
      const dist = Math.sqrt((mx - x) ** 2 + (my - y) ** 2);
      if (dist < closestDist) {
        closestDist = dist;
        closest = i;
      }
    }
    setHoveredIndex(closest);
  }, [animProgress]);

  return (
    <div className="skill-radar" ref={containerRef}>
      <canvas
        ref={canvasRef}
        className="skill-radar__canvas"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setHoveredIndex(-1)}
      />
      <div className="skill-radar__legend">
        {dimensions.map((dim, i) => (
          <div
            key={i}
            className={`skill-radar__legend-item ${hoveredIndex === i ? 'skill-radar__legend-item--active' : ''}`}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(-1)}
          >
            <div className="skill-radar__legend-bar">
              <div
                className="skill-radar__legend-fill"
                style={{ width: `${dim.value * animProgress}%` }}
              ></div>
            </div>
            <span className="skill-radar__legend-label">{dim.label}</span>
            <span className="skill-radar__legend-value">{Math.round(dim.value * animProgress)}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
