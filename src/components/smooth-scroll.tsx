"use client";

import { ReactLenis } from "lenis/react";
import { useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export function SmoothScroll({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();

  return (
    <ReactLenis
      root
      options={{
        lerp: reduce ? 1 : 0.055,
        duration: reduce ? 0 : 1.45,
        smoothWheel: !reduce,
        wheelMultiplier: 0.82,
        touchMultiplier: 1.1,
      }}
    >
      {children}
    </ReactLenis>
  );
}
