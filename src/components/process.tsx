import { RichText } from "@payloadcms/richtext-lexical/react";
import { icons } from "@/utilities/getIcon";

import type { RichTextType, ProcessStepType } from "@/types/types";

type IconKeys = keyof typeof icons;

interface ProcessProps {
  heading: string;
  subheading: RichTextType;
  steps: ProcessStepType[];
}

export function ProcessTimeline({ heading, subheading, steps }: ProcessProps) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-[58rem] text-center">
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
            {heading}
          </h2>
          <RichText
            data={subheading}
            className="mt-4 text-muted-foreground sm:text-lg"
          />
        </div>
        <div className="mx-auto mt-12 max-w-4xl">
          <div className="relative">
            {/* Vertical line */}
            <div className=" absolute left-8 top-0 h-[85%] mt-[12vh] w-0.5 bg-gradient-to-b from-zinc-800 to-zinc-200 md:left-1/2 md:-ml-0.5 "></div>

            {/* Timeline steps */}
            <div className="space-y-24">
              {steps.map((step, index) => {
                const Icon = icons[step.icon as IconKeys];
                return (
                  <div key={index} className="relative items-center flex">
                    {/* Step number indicator */}
                    <div className="absolute left-0 md:left-1/2 md:-ml-8 z-10">
                      <div
                        className={`flex h-16 w-16 place-self-center items-center justify-center rounded-full border-2 border-primary bg-primary text-primary-foreground`}
                      >
                        <span className="text-2xl font-bold">{index + 1}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div
                      className={`ml-24 md:ml-0 ${
                        index % 2 === 0
                          ? "md:mr-auto md:pr-16 "
                          : "md:ml-auto md:pl-16"
                      } md:w-6/12 `}
                    >
                      <div
                        className={`rounded-lg border shadow-sm transition-all border-muted  bg-[url(/noise.svg)] bg-repeat bg-[length:500px_500px] `}
                      >
                        <div className="size-full p-4 rounded-lg bg-gradient-to-tr from-zinc-950 via-zinc-950/80 to-zinc-900/10">
                          <div className="flex items-center gap-2 mb-2">
                            <Icon />
                            <h3 className="text-lg font-semibold">
                              {step.title}
                            </h3>
                          </div>
                          <RichText
                            data={step.body}
                            className="text-sm text-muted-foreground"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
