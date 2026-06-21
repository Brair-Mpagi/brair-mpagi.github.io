import React, { useEffect, useRef, useState } from 'react';
import './NeuralNetworkGraph.css';

const LAYERS = [
  // Layer 0: Identity Node (Far Left)
  [
    { id: 'in0', name: 'BRAIR', icon: '🧠', x: 3, y: 50, color: '#7C3AED', isSpecial: true, cat: 'core', subtitle: 'Developer Brain' }
  ],

  // Layer 1: Frontend & Languages (10 nodes split into 2 lines)
  [
    { id: 'l1-0', name: 'React',       icon: '⚛',  x: 20, y: 8, color: '#61DAFB', cat: 'frontend' },
    { id: 'l1-1', name: 'Next.js',     icon: '▲',  x: 25, y: 18, color: '#cccccc', cat: 'frontend' },
    { id: 'l1-2', name: 'Vue.js',      icon: '🌿', x: 20, y: 28, color: '#42B883', cat: 'frontend' },
    { id: 'l1-3', name: 'TypeScript',  icon: 'Ts', x: 25, y: 38, color: '#3178C6', cat: 'frontend' },
    { id: 'l1-4', name: 'JavaScript',  icon: 'JS', x: 20, y: 48, color: '#F7DF1E', cat: 'frontend' },
    { id: 'l1-5', name: 'HTML5',       icon: 'H5', x: 25, y: 58, color: '#E34F26', cat: 'frontend' },
    { id: 'l1-6', name: 'CSS3',        icon: 'C3', x: 20, y: 68, color: '#1572B6', cat: 'frontend' },
    { id: 'l1-7', name: 'Tailwind',    icon: '🌊', x: 25, y: 78, color: '#06B6D4', cat: 'frontend' },
    { id: 'l1-8', name: 'GSAP',        icon: '🎞', x: 20, y: 88, color: '#88CE02', cat: 'frontend' },
    { id: 'l1-9', name: 'Framer',      icon: '𝔽', x: 25, y: 98, color: '#0055FF', cat: 'frontend' },
  ],

  // Layer 2: Backend & Frameworks (10 nodes split into 2 lines)
  [
    { id: 'l2-0', name: 'Python',    icon: '🐍', x: 39, y: 8, color: '#3776AB', cat: 'backend' },
    { id: 'l2-1', name: 'Node.js',   icon: '⬢',  x: 44, y: 18, color: '#339933', cat: 'backend' },
    { id: 'l2-2', name: 'Express',   icon: 'Ex', x: 39, y: 28, color: '#888888', cat: 'backend' },
    { id: 'l2-3', name: 'PHP',       icon: '🔮', x: 44, y: 38, color: '#777BB4', cat: 'backend' },
    { id: 'l2-4', name: 'Java',      icon: '☕', x: 39, y: 48, color: '#ED8B00', cat: 'backend' },
    { id: 'l2-5', name: 'C++',       icon: 'C⁺', x: 44, y: 58, color: '#00599C', cat: 'backend' },
    { id: 'l2-6', name: 'REST APIs', icon: '⇄',  x: 39, y: 68, color: '#FF6C37', cat: 'backend' },
    { id: 'l2-7', name: 'GraphQL',   icon: '◈',  x: 44, y: 78, color: '#E10098', cat: 'backend' },
    { id: 'l2-8', name: 'FastAPI',   icon: '⚡', x: 39, y: 88, color: '#009688', cat: 'backend' },
    { id: 'l2-9', name: 'Flask',     icon: '🧪', x: 44, y: 98, color: '#aaaaaa', cat: 'backend' },
  ],

  // Layer 3: AI / ML / NLP (10 nodes split into 2 lines)
  [
    { id: 'l3-0', name: 'scikit-learn',  icon: '📊', x: 58, y: 8, color: '#F59E0B', cat: 'ml' },
    { id: 'l3-1', name: 'TensorFlow',    icon: '🍊', x: 63, y: 18, color: '#FF6F00', cat: 'ml' },
    { id: 'l3-2', name: 'PyTorch',       icon: '🔥', x: 58, y: 26.6, color: '#EE4C2C', cat: 'ml' },
    { id: 'l3-3', name: 'ML Models',     icon: '📈', x: 63, y: 38, color: '#EC4899', cat: 'ml' },
    { id: 'l3-4', name: 'Deep Learning', icon: '🕸', x: 58, y: 48, color: '#A855F7', cat: 'ml' },
    { id: 'l3-5', name: 'FAISS',         icon: '🔍', x: 63, y: 58, color: '#00D4FF', cat: 'ml' },
    { id: 'l3-6', name: 'RAG Systems',   icon: '🤖', x: 58, y: 68, color: '#10F0A0', cat: 'ml' },
    { id: 'l3-7', name: 'NLP',           icon: '💬', x: 63, y: 78, color: '#7C3AED', cat: 'ml' },
    { id: 'l3-8', name: 'Sent.Trans',    icon: '🧬', x: 58, y: 88, color: '#6EE7B7', cat: 'ml' },
    { id: 'l3-9', name: 'LLM APIs',      icon: '🌐', x: 63, y: 98, color: '#FB923C', cat: 'ml' },
  ],

  // Layer 4: Infra, DB & Systems (10 nodes split into 2 lines)
  [
    { id: 'l4-0', name: 'MySQL',      icon: '🐬', x: 77, y: 8, color: '#4479A1', cat: 'infra' },
    { id: 'l4-1', name: 'PostgreSQL', icon: '🐘', x: 82, y: 18, color: '#336791', cat: 'infra' },
    { id: 'l4-2', name: 'MongoDB',    icon: '🍃', x: 77, y: 26.6, color: '#47A248', cat: 'infra' },
    { id: 'l4-3', name: 'Redis',      icon: '🟥', x: 82, y: 38, color: '#DC382D', cat: 'infra' },
    { id: 'l4-4', name: 'Linux',      icon: '🐧', x: 77, y: 48, color: '#FCC624', cat: 'infra' },
    { id: 'l4-5', name: 'Docker',     icon: '🐳', x: 82, y: 58, color: '#2496ED', cat: 'infra' },
    { id: 'l4-6', name: 'Git/GitHub', icon: '📦', x: 77, y: 68, color: '#F05032', cat: 'infra' },
    { id: 'l4-7', name: 'Networks',   icon: '🔗', x: 82, y: 78, color: '#6366F1', cat: 'infra' },
    { id: 'l4-8', name: 'Sec/Crypto', icon: '🔐', x: 77, y: 88, color: '#EF4444', cat: 'infra' },
    { id: 'l4-9', name: 'Android',    icon: '📱', x: 82, y: 98, color: '#3DDC84', cat: 'infra' },
  ],

  // Layer 5: Output Node (Far Right)
  [
    { id: 'out0', name: 'SYSTEM', icon: 'sys', x: 97, y: 50, color: '#10F0A0', isSpecial: true, cat: 'core', subtitle: 'Intelligent System' }
  ]
];

const ALL_NODES = LAYERS.flat();

function getCoords(node, w, h) {
  return { x: (node.x / 100) * w, y: (node.y / 100) * h };
}

export default function NeuralNetworkGraph() {
  const canvasRef   = useRef(null);
  const containerRef = useRef(null);
  const [hoveredNodeId, setHoveredNodeId] = useState(null);

  // Draw canvas connections (lines only)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const dpr  = window.devicePixelRatio || 1;
    const w = rect.width, h = rect.height;

    canvas.width  = w * dpr;
    canvas.height = h * dpr;
    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, w, h);

    const isDark   = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const baseLine = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.07)';

    // Draw static connections
    for (let l = 0; l < LAYERS.length - 1; l++) {
      LAYERS[l].forEach(curr => {
        const cc = getCoords(curr, w, h);
        LAYERS[l + 1].forEach(next => {
          const nc = getCoords(next, w, h);
          const hl = hoveredNodeId === curr.id || hoveredNodeId === next.id;
          ctx.beginPath();
          ctx.moveTo(cc.x, cc.y);
          ctx.lineTo(nc.x, nc.y);
          ctx.strokeStyle = hl
            ? (hoveredNodeId === curr.id ? curr.color : next.color) + '99'
            : baseLine;
          ctx.lineWidth = hl ? 1.2 : 0.35;
          ctx.stroke();
        });
      });
    }
  }, [hoveredNodeId]);

  return (
    <div className="neural-graph section" id="neural-graph-section" ref={containerRef}>
      <div className="container">
        <div className="neural-graph__viewport">
          <canvas ref={canvasRef} className="neural-graph__canvas" />

          {/* Node overlay */}
          <div className="neural-graph__nodes-container">
            {ALL_NODES.map(node => (
              <div
                key={node.id}
                className={`neural-node${node.isSpecial ? ' neural-node--special' : ''}${hoveredNodeId === node.id ? ' neural-node--hovered' : ''}`}
                style={{ left: `${node.x}%`, top: `${node.y}%`, '--node-color': node.color }}
                onMouseEnter={() => setHoveredNodeId(node.id)}
                onMouseLeave={() => setHoveredNodeId(null)}
              >
                <div className="neural-node__circle">
                  <span className="neural-node__icon">{node.icon}</span>
                </div>
                <div className="neural-node__tooltip">
                  <span className="neural-node__tooltip-title">{node.name}</span>
                  {node.subtitle && <span className="neural-node__tooltip-subtitle">{node.subtitle}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}