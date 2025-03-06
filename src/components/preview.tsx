import { MacbookScroll } from "@/components/ui/macbook-scroll";
import { RichText } from "@payloadcms/richtext-lexical/react";
import type { RichTextType } from "@/types/types";
import type { Media } from "@/payload-types";

interface PreviewProps {
  heading: string;
  subheading: RichTextType;
  image: string | Media;
}

export function Preview({ heading, subheading, image }: PreviewProps) {
  return (
    <section className="container space-y-16 py-24 md:py-32" id="section1">
      <div className="mx-auto max-w-[58rem] text-center md:-mb-20 -mb-[200px]">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
          {heading}
        </h2>
        <RichText
          data={subheading}
          className="mt-4 text-muted-foreground sm:text-lg"
        />
      </div>
      <MacbookScroll
        src={
          image
            ? typeof image === "string"
              ? "/placeholder.svg"
              : image.url || "/placeholder.svg"
            : "/placeholder.svg"
        }
        title
      />
    </section>
  );
}
