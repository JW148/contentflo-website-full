import React from "react";
import "./globals.css";
import MouseMoveEffect from "@/components/mouse-move-effect";
import Navbar from "@/components/navbar";
import CTA from "@/components/cta";
import Footer from "@/components/footer";

import type { Metadata } from "next";

import { GeistSans } from "geist/font/sans";

export const metadata: Metadata = {
  title: "ContentFlo",
  description: "Bespoke content-driven web platforms",
};

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;

  return (
    <html lang="en" className="dark">
      <head>
        <script
          defer
          src="https://umami-gkgo0gscg8kc88oowcgg8css.coolify.contentflo.io/script.js"
          data-website-id="319e8379-39d7-4f14-bfa9-7c1a9c5a6a8a"
        ></script>
      </head>
      <body
        className={`${GeistSans.className} bg-background text-foreground antialiased`}
      >
        <MouseMoveEffect />
        <Navbar />
        {children}
        <div className="relative z-10">
          <CTA />
          <Footer />
        </div>
      </body>
    </html>
  );
}
