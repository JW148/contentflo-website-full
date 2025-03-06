import { CTAForm } from "./ui/cta-from";
import { RichText } from "@payloadcms/richtext-lexical/react";
import type { RichTextType } from "@/types/types";

interface CTAProps {
  heading: string;
  subheading: RichTextType;
}

export default function CTA({ heading, subheading }: CTAProps) {
  return (
    <section className="border-t border-b" id="cta">
      <div className="container flex flex-col items-center gap-4 py-24 text-center md:py-32">
        <h2 className="font-bold max-w-[58rem] text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
          {heading}
        </h2>
        <RichText
          data={subheading}
          className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8"
        />
        <CTAForm />
      </div>
    </section>
  );
}
