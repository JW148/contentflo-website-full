// components/TransitionWrapper.tsx
"use client";

import { motion, useInView, Variants } from "framer-motion";
import React, { ReactNode, useRef } from "react";
import type { JSX } from "react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

type TransitionWrapperProps = {
  children: ReactNode;
  as?: keyof JSX.IntrinsicElements;
};

export default function TransitionWrapper({
  children,
}: TransitionWrapperProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-200px", once: false });

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {Array.isArray(children) ? (
        children.map((child, index) => (
          <motion.div key={index} variants={itemVariants}>
            {child}
          </motion.div>
        ))
      ) : (
        <motion.div variants={itemVariants}>{children}</motion.div>
      )}
    </motion.div>
  );
}
