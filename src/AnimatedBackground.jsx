import { motion } from "framer-motion";

const snakes = [
  { stroke: "#2563eb", duration: 10, delay: 0, offset: 100 },
  { stroke: "#4f9cf9", duration: 15, delay: 5, offset: 50 },
  { stroke: "#1e40af", duration: 20, delay: 10, offset: 100 },
  { stroke: "#60a5fa", duration: 25, delay: 15, offset: 150 },
];

export default function AnimatedBackground() {
  return (
    <svg
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        overflow: "visible",
      }}
      viewBox="0 0 1200 600"
      preserveAspectRatio="none"
    >
      {snakes.map((snake, i) => (
        <motion.path
          key={i}
          d={`M0 ${200 + snake.offset} 
             C 300 ${150 + snake.offset} 900 ${250 + snake.offset} 1200 ${200 + snake.offset}`}
          fill="transparent"
          stroke={snake.stroke}
          strokeWidth={6}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0.6 }}
          animate={{
            pathLength: [0, 1, 0],
            y: [0, 40, -40, 0],
            opacity: [1.4, 0.8, 0.4],
          }}
          transition={{
            duration: snake.duration,
            delay: snake.delay,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        />
      ))}
    </svg>
  );
}