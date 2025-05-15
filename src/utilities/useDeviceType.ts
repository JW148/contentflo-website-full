"use client";

import { useEffect, useState } from "react";

export function useDeviceType() {
  const [isMobile, setIsMobile] = useState(false);

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

  return isMobile;
}
