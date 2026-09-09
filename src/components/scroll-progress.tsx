"use client";

import { motion, useReducedMotion, useScroll } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const reduce = useReducedMotion();

  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[2px] bg-hairline"
      role="progressbar"
      aria-label="Reading progress"
    >
      <motion.div
        className="h-full origin-left bg-gold"
        style={reduce ? { scaleX: 0 } : { scaleX: scrollYProgress }}
      />
    </div>
  );
}
