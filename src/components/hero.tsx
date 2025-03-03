import { Button } from "@/components/ui/button";

import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { FlipWords } from "./ui/flip-words";

export default function Hero() {
  return (
    <section className="container flex min-h-[calc(100vh-3.5rem)] max-w-screen-2xl flex-col items-center justify-center space-y-8 py-24 text-center md:py-32">
      <div className="space-y-4">
        <HoverBorderGradient
          containerClassName="rounded-full mx-auto"
          as="button"
          className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 "
        >
          <span>
            Introducing <b>ContentFlo</b>
          </span>
        </HoverBorderGradient>
        <h1 className="bg-gradient-to-br from-foreground from-30% via-foreground/90 to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
          Take Full Control Of
          <br />
          <FlipWords words={["Your Brand.", "Your Content.", "Your Data."]} />
        </h1>
        <p className="mx-auto max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Create, manage, and deliver your own courses and content directly from
          your website—no third-party needed.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <Button asChild size={"lg"}>
          <a href="#section1">Learn More</a>
        </Button>
        <Button variant="outline" size="lg" asChild>
          <a href="#cta">Schedule a Demo</a>
        </Button>
      </div>
    </section>
  );
}
