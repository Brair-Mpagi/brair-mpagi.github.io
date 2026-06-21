import { useRef, useCallback } from 'react';
import './GlowCard.css';

export default function GlowCard({ children, className = '', ...props }) {
  const cardRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--glow-x', `${x}px`);
    card.style.setProperty('--glow-y', `${y}px`);
    card.style.setProperty('--glow-opacity', '1');

    // 3D tilt
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const tiltX = ((y - centerY) / centerY) * -4;
    const tiltY = ((x - centerX) / centerX) * 4;
    card.style.transform = `perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-4px)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    card.style.setProperty('--glow-opacity', '0');
    card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) translateY(0)';
  }, []);

  return (
    <div
      ref={cardRef}
      className={`glow-card ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <div className="glow-card__glow"></div>
      <div className="glow-card__border"></div>
      <div className="glow-card__content">
        {children}
      </div>
    </div>
  );
}
