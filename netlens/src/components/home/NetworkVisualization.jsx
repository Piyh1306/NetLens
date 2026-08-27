import { motion } from "framer-motion";

const nodes = [
  { x: 220, y: 60, r: 5, color: "#22C55E", delay: 0 },
  { x: 90, y: 140, r: 4, color: "#06B6D4", delay: 0.3 },
  { x: 340, y: 130, r: 4, color: "#2563EB", delay: 0.6 },
  { x: 60, y: 260, r: 5, color: "#2563EB", delay: 0.9 },
  { x: 220, y: 220, r: 7, color: "#22C55E", delay: 0 },
  { x: 380, y: 250, r: 4, color: "#06B6D4", delay: 1.2 },
  { x: 150, y: 340, r: 4, color: "#EF4444", delay: 1.5 },
  { x: 300, y: 360, r: 4, color: "#2563EB", delay: 1.8 },
];

const links = [
  [0, 1], [0, 2], [1, 4], [2, 4], [1, 3], [2, 5], [4, 6], [4, 7], [3, 6], [5, 7],
];

export default function NetworkVisualization() {
  return (
    <div className="relative w-full h-[420px] md:h-[460px] flex items-center justify-center">
      <svg viewBox="0 0 440 420" className="w-full h-full max-w-md" aria-hidden="true">
        <defs>
          <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#22C55E" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#22C55E" stopOpacity="0" />
          </radialGradient>
        </defs>

        {links.map(([a, b], i) => (
          <motion.line
            key={i}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
            stroke="#1E293B"
            strokeWidth="1.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: i * 0.08, ease: "easeInOut" }}
          />
        ))}

        {links.map(([a, b], i) => (
          <motion.circle
            key={`pulse-${i}`}
            r="2.5"
            fill="#22C55E"
            initial={{ opacity: 0 }}
            animate={{
              cx: [nodes[a].x, nodes[b].x],
              cy: [nodes[a].y, nodes[b].y],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "linear",
            }}
          />
        ))}

        <circle cx="220" cy="220" r="46" fill="url(#coreGlow)" />

        {nodes.map((n, i) => (
          <motion.g key={i}>
            <motion.circle
              cx={n.x}
              cy={n.y}
              r={n.r + 8}
              fill={n.color}
              opacity="0.12"
              animate={{ r: [n.r + 6, n.r + 12, n.r + 6] }}
              transition={{ duration: 2.4, repeat: Infinity, delay: n.delay }}
            />
            <motion.circle
              cx={n.x}
              cy={n.y}
              r={n.r}
              fill={n.color}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: n.delay }}
            />
          </motion.g>
        ))}
      </svg>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="font-mono text-[10px] text-accent/70 tracking-widest translate-y-24">
          MONITORING NODE
        </span>
      </div>
    </div>
  );
}
