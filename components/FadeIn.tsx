"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function FadeIn({ children, className, delay = 0 }: FadeInProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-64px" }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
