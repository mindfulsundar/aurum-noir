"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

type Props = {
  href: string;
  children: string;
  variant?: "solid" | "ghost";
  className?: string;
};

export function MagneticLink({
  href,
  children,
  variant = "ghost",
  className = "",
}: Props) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 180, damping: 18, mass: 0.4 });

  const base =
    variant === "solid"
      ? "bg-ink text-canvas hover:bg-gold"
      : "border border-ink text-ink hover:bg-ink hover:text-canvas";

  return (
    <motion.div style={reduce ? undefined : { x: sx, y: sy }} className="inline-flex">
      <Link
        ref={ref}
        href={href}
        className={`inline-flex min-h-12 items-center justify-center px-7 text-[11px] tracking-[0.28em] uppercase transition-colors duration-500 ${base} ${className}`}
        onMouseMove={(event) => {
          if (reduce || !ref.current) return;
          const box = ref.current.getBoundingClientRect();
          x.set((event.clientX - box.left - box.width / 2) * 0.28);
          y.set((event.clientY - box.top - box.height / 2) * 0.28);
        }}
        onMouseLeave={() => {
          x.set(0);
          y.set(0);
        }}
      >
        {children}
      </Link>
    </motion.div>
  );
}
