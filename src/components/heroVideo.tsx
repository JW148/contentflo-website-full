"use client";

import { MuxVideo } from "@/payload-types";
import { useDeviceType } from "@/utilities/useDeviceType";
import MuxPlayer from "@mux/mux-player-react";
import { motion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";

interface HeroVideoProps {
  heroVideo: MuxVideo;
}

export function HeroVideo({ heroVideo }: HeroVideoProps) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["end 10vh", "start start"],
  });

  const smoothed = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const isMobile = useDeviceType();

  if (isMobile) return null;
  if (!heroVideo) return null;

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
      />
      <div className="absolute inset-0 bg-black/30 backdrop-blur-xs" />
    </motion.div>
  );
}
