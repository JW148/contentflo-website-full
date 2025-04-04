"use client";

import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { RichText } from "@payloadcms/richtext-lexical/react";
import type { RichTextType, FeatureType } from "@/types/types";

import { icons } from "@/utilities/getIcon";

type IconKeys = keyof typeof icons;

interface FeaturesProps {
  heading: string;
  subheading: RichTextType;
  features: FeatureType[];
}

export default function Features({
  heading,
  subheading,
  features,
}: FeaturesProps) {
  return (
    <section className="container space-y-16 py-24 md:py-32">
      <div className="mx-auto max-w-[58rem] text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
          {heading}
        </h2>
        <RichText
          data={subheading}
          className="mt-4 text-muted-foreground sm:text-lg"
        />
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
        {features.map((feature) => {
          const Icon = icons[feature.icon as IconKeys];
          return (
            <HoverBorderGradient
              key={feature.id}
              containerClassName="rounded-lg mx-auto h-full px-0"
              as={"div"}
              className="relative p-0 h-full overflow-hidden border bg-[url(/noise.svg)] bg-repeat bg-[length:500px_500px] "
            >
              <div className="flex flex-col p-8 size-full bg-linear-to-tr from-zinc-950 via-zinc-950/80 to-zinc-900/10">
                <div className="flex items-center gap-4">
                  <Icon className="h-8 w-8" />
                  <h3 className="font-bold">{feature.title}</h3>
                </div>
                <RichText
                  data={feature.body}
                  className="flex flex-col mt-2 text-muted-foreground gap-4"
                />
              </div>
            </HoverBorderGradient>
          );
        })}
      </div>
    </section>
  );
}
