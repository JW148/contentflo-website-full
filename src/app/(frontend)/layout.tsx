import React from "react";
import "./globals.css";
import MouseMoveEffect from "@/components/mouse-move-effect";
import Navbar from "@/components/navbar";
import CTA from "@/components/cta";
import Footer from "@/components/footer";
import Script from "next/script";

import type { Metadata } from "next";

import { GeistSans } from "geist/font/sans";

export const metadata: Metadata = {
  title: "ContentFlo",
  description: "Bespoke content-driven web platforms",
  openGraph: {
    title: "ContentFlo",
    description: "Bespoke content-driven web platforms",
    url: "https://contentflo.io",
    siteName: "ContentFlo",
    images: [
      {
        url: "https://contentflo.io/contentflo_mockup_1.jpg?height=800&width=600", // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
    locale: "en_UK",
    type: "website",
  },
};

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;

  return (
    <html lang="en" className="dark">
      <Script
        strategy="lazyOnload"
        src="https://umami-gkgo0gscg8kc88oowcgg8css.coolify.contentflo.io/script.js"
        data-website-id="319e8379-39d7-4f14-bfa9-7c1a9c5a6a8a"
      ></Script>

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
