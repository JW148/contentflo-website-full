import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Instagram, Linkedin } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex ">
          <Image
            src={"/cf_text_white.svg"}
            width={50}
            height={75}
            alt="Contentflo logo"
          />
        </Link>
        <nav className="flex-1"></nav>
        <div className=" items-center space-x-6 text-sm font-medium md:flex hidden">
          <Link
            href="#section1"
            className="transition-colors hover:text-primary"
          >
            Solution
          </Link>
          <Link href="/about" className="transition-colors hover:text-primary">
            About Us
          </Link>
          <Button variant="outline" size="lg" asChild>
            <a href="#cta">Contact</a>
          </Button>
          <div className="flex flex-row gap-0 border-l border-muted">
            <Button variant={"ghost"} asChild>
              <a
                href="https://www.instagram.com/contentflo.io/"
                target="_blank"
              >
                <Instagram />
              </a>
            </Button>
            <Button variant={"ghost"} asChild>
              <a
                href="https://www.linkedin.com/company/contentflo-io/"
                target="_blank"
              >
                <Linkedin />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
