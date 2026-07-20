"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li";
};

export default function ScrollReveal({
  children,
  delay = 0,
  className,
  as = "div",
}: ScrollRevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const Component = motion[as];

  if (shouldReduceMotion) {
    const Static = as;
    return <Static className={className}>{children}</Static>;
  }

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  );
}
