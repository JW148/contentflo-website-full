"use client";

import { ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface FadeInProps {
  children: ReactNode;
  duration?: number;
  delay?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  once?: boolean;
}

const FadeIn = ({
  children,
  duration = 0.5,
  delay = 0.2,
  className = "",
  direction = "up",
  distance = 50,
}: FadeInProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "0px 0px -400px 0px",
  });

  // Set initial and animate values based on direction
  const getDirectionalValues = () => {
    switch (direction) {
      case "up":
        return { y: distance };
      case "down":
        return { y: -distance };
      case "left":
        return { x: distance };
      case "right":
        return { x: -distance };
      case "none":
      default:
        return {};
    }
  };

  const initialValues = {
    opacity: 0,
    ...getDirectionalValues(),
  };

  const animateValues = {
    opacity: 1,
    x: 0,
    y: 0,
  };

  return (
    <motion.div
      ref={ref}
      initial={initialValues}
      animate={isInView ? animateValues : initialValues}
      transition={{
        duration: duration,
        delay: delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
