"use client";

import { MuxVideo } from "@/payload-types";
import MuxPlayer from "@mux/mux-player-react";
import { motion, useScroll, useSpring } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface HeroVideoProps {
  heroVideo: MuxVideo;
}

export function HeroVideo({ heroVideo }: HeroVideoProps) {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["end 10vh", "start start"],
  });

  const smoothed = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Or window.screen.width
    };

    checkIsMobile(); // Initial check
    window.addEventListener("resize", checkIsMobile); // Re-check on resize

    return () => {
      window.removeEventListener("resize", checkIsMobile); // Clean up listener
    };
  }, []);

  if (isMobile) return null;

  return (
    <motion.div
      className="absolute overflow-hidden inset-0 size-full -z-10"
      ref={containerRef}
      style={{ opacity: smoothed, scale: smoothed }}
    >
      <MuxPlayer
        // Using playback id
        playbackId={heroVideo.playbackOptions![0].playbackId!}
        // Or use the playback URL
        src={heroVideo.playbackOptions![0].playbackUrl!}
        // Poster
        poster={heroVideo.playbackOptions![0].posterUrl!}
        muted
        maxResolution="720p"
        loop
        playsInline
        autoPlay
        className=" "
      />
      <div className="absolute inset-0 bg-black/30 backdrop-blur-xs" />
    </motion.div>
  );
}
