"use client";

import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import MuxVideo from "@mux/mux-video-react";
import Image from "next/image";

export function VideoTestimonial() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.onloadeddata = function () {
        console.log("video loaded");
      };
    }
  }, [videoRef]);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="relative h-full w-full border border-muted rounded-xl ">
      <MuxVideo
        ref={videoRef}
        muted={isMuted}
        playbackId={"K51vDQG14bUtt66sFjXCcN2a1A101o9FWZiSGpAtnDgc"}
        style={{
          height: "100%",
          maxWidth: "100%",
          objectFit: "cover",
          overflow: "hidden",
        }}
        playsInline
        className="mx-auto rounded-xl md:rounded-none"
      />
      <div className="size-full flex flex-col p-6 justify-between absolute bg-gradient-to-t from-black to-transparent text-white rounded-xl overflow-hidden  inset-0">
        <div className="flex justify-end space-x-2">
          <button
            onClick={toggleMute}
            className="rounded-full bg-black/30 p-2  backdrop-blur-sm hover:bg-black/50 transition"
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? (
              <VolumeX className="h-5 w-5" />
            ) : (
              <Volume2 className="h-5 w-5" />
            )}
          </button>
        </div>
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 relative rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Image
                src="/abzone.svg?height=40&width=40"
                alt="Michael Rivera"
                fill
                className="h-9 w-9 rounded-full object-cover"
              />
            </div>
            <div className="text-left">
              <p className="font-medium text-lg">AbdAllah Mitchell</p>
              <p className="text-sm opacity-80">Founder, AB ZONE</p>
            </div>
          </div>

          <p className="text-lg font-medium">
            &quot;Everything fits perfectly into my website. It looks
            professional, feels native, and enhances my credibility&quot;
          </p>

          <button
            onClick={togglePlay}
            className="rounded-full bg-white text-black px-4 py-2 font-medium flex items-center space-x-2 hover:bg-opacity-90 transition"
          >
            {isPlaying ? (
              <>
                <Pause className="h-4 w-4" />
                <span>Pause</span>
              </>
            ) : (
              <>
                <Play className="h-4 w-4" />
                <span>Watch Story</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
