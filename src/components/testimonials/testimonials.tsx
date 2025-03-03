import { TestimonialCard } from "./testimonialCard";
import { VideoTestimonial } from "./videoTestimonial";

export function Testimonials() {
  return (
    <section className="flex flex-col space-y-16 py-24 md:py-32">
      <div className="mx-auto max-w-[58rem] text-center ">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
          Trusted by Influencers and Businesses
        </h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">
          Don&apos;t just take our word for it. Hear from the people who use{" "}
          <b>ContentFlo</b> every day.
        </p>
      </div>
      <div className=" container  ">
        <div className="max-w-[100%] md:max-w-[80%]  mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Video Testimonia - left col */}
          <div className="flex h-[85vh] rounded-xl">
            <VideoTestimonial />
          </div>
          <div className="grid grid-rows-2  gap-6">
            <TestimonialCard
              quote="They made the entire process of building the app easy to understand and guided us in developing effective strategies to reach a new audience. Their expertise and proactive support gave us confidence at every step, and we're thrilled to have a tool that will enhance our training."
              name="Julie Powell"
              role="Head of Training, Learning and Development"
              company="EYW"
              image="/eyw.png?height=80&width=80"
            />

            {/* Bottom Right - Text Testimonial */}
            <TestimonialCard
              quote="The team impressed us with their skill and attention to detail on a complex web rebuild. The project's rapid progress and the developer's deep knowledge of modern frameworks made for a smooth, effective deployment. ContentFlo have an exceptionally talented developer with a proactive, positive approach."
              name="Grant Forrest"
              role="Technical Director"
              company="Lunaria LTD"
              image="/lunaria.png?height=80&width=80"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
