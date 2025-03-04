"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Instagram, Linkedin, Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const navLinks = [
    { href: "#section1", label: "Solution" },
    { href: "/about", label: "About Us" },
  ];

  const socialLinks = [
    {
      href: "https://www.instagram.com/contentflo.io/",
      icon: Instagram,
      label: "Instagram",
    },
    {
      href: "https://www.linkedin.com/company/contentflo-io/",
      icon: Linkedin,
      label: "LinkedIn",
    },
  ];

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };
  return (
    <header className="sticky flex flex-col top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex">
          <Image
            src={"/cf_text_white.svg"}
            width={50}
            height={75}
            alt="Contentflo logo"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 justify-end items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}

          <Button variant="outline" size="lg" asChild>
            <a href="#cta">Contact</a>
          </Button>

          <div className="flex flex-row gap-0 border-l border-muted">
            {socialLinks.map((social) => (
              <Button key={social.href} variant="ghost" asChild>
                <a href={social.href} target="_blank" aria-label={social.label}>
                  <social.icon />
                </a>
              </Button>
            ))}
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex-1 justify-items-end">
          <Button
            variant="ghost"
            className="flex"
            size="icon"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={mobileMenuVariants}
            className="w-full h-screen  z-10 border-t border-border/40 "
          >
            <div className="container flex flex-col  space-y-4 py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-lg transition-colors hover:text-primary"
                  onClick={toggleMobileMenu}
                >
                  {link.label}
                </Link>
              ))}

              <Button variant="outline" size="lg" asChild>
                <a href="#cta" onClick={toggleMobileMenu}>
                  Contact
                </a>
              </Button>

              <div className="flex space-x-4 pt-4 border-t border-muted">
                {socialLinks.map((social) => (
                  <Button
                    key={social.href}
                    variant="ghost"
                    asChild
                    className="flex-1 justify-center"
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      aria-label={social.label}
                      onClick={toggleMobileMenu}
                    >
                      <social.icon />
                      <span className="ml-2">{social.label}</span>
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
