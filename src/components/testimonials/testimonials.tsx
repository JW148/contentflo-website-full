import { TestimonialCard } from "./testimonialCard";
import { VideoTestimonial } from "./videoTestimonial";
import type { RichTextType, TestimonialsType } from "@/types/types";
import type { MuxVideo } from "@/payload-types";
import { RichText } from "@payloadcms/richtext-lexical/react";

interface TestimonialsProps {
  heading: string;
  subheading: RichTextType;
  videoTestimonial: {
    video?: string | MuxVideo;
    testimonial: TestimonialsType;
  };
  testimonials: TestimonialsType[];
}

export function Testimonials({
  heading,
  subheading,
  videoTestimonial,
  testimonials,
}: TestimonialsProps) {
  let logo1;
  if (
    testimonials[0].companyLogo &&
    typeof testimonials[0].companyLogo !== "string"
  )
    logo1 = testimonials[0].companyLogo.url;
  let logo2;
  if (
    testimonials[1].companyLogo &&
    typeof testimonials[1].companyLogo !== "string"
  )
    logo2 = testimonials[1].companyLogo.url;

  return (
    <section className="flex flex-col space-y-16 py-24 md:py-32">
      <div className="mx-auto max-w-[58rem] text-center ">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
          {heading}
        </h2>
        <RichText
          data={subheading}
          className="mt-4 text-muted-foreground sm:text-lg"
        />
      </div>
      <div className=" container  ">
        <div className="max-w-[100%] md:max-w-[80%]  mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Video Testimonia - left col */}
          <div className="flex h-[85vh] rounded-xl">
            <VideoTestimonial
              video={videoTestimonial.video || ""}
              testimonial={videoTestimonial.testimonial}
            />
          </div>
          <div className="grid grid-rows-2  gap-6">
            <TestimonialCard
              quote={testimonials[0].quote}
              name={testimonials[0].name}
              role={testimonials[0].role}
              company={testimonials[0].company}
              image={logo1 || "/placeholder.svg"}
            />

            {/* Bottom Right - Text Testimonial */}
            <TestimonialCard
              quote={testimonials[1].quote}
              name={testimonials[1].name}
              role={testimonials[1].role}
              company={testimonials[1].company}
              image={logo2 || "/placeholder.svg"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
