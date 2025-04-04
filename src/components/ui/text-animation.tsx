"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";

export function TypingEffect({ text = "Typing Effect" }: { text: string }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref);
  return (
    <h2
      ref={ref}
      className="bg-linear-to-br from-foreground from-30% via-foreground/90 to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl"
    >
      {text.split("").map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.2, delay: index * 0.1 }}
        >
          {letter}
        </motion.span>
      ))}
    </h2>
  );
}
