"use server";

import { RefreshRouteOnSave } from "@/utilities/refreshRouteOnSave";
import { getCachedGlobal } from "@/utilities/getGlobals";

import Hero from "@/components/hero";
import { Preview } from "@/components/preview";
import Features from "@/components/features";
import { ProcessTimeline } from "@/components/process";
import { Testimonials } from "@/components/testimonials/testimonials";
import CTA from "@/components/cta";
import { FAQ } from "@/components/faq";
import { Home as HomeType } from "@/payload-types";

export async function Home() {
  const homeData = (await getCachedGlobal("home", 1)()) as HomeType;
  const videoTestimonial = {
    video: homeData.videoTestimonial,
    testimonial: {
      companyLogo: homeData.companyLogo,
      name: homeData.name,
      company: homeData.company,
      role: homeData.role,
      quote: homeData.quote,
    },
  };
  return (
    <div className="z-10 relative container">
      <RefreshRouteOnSave />
      <Hero
        header={homeData.heroHeading}
        flipWords={homeData.flipWords || [{ word: "Your Data." }]}
        subheading={homeData.heroSubheading}
      />
      <Preview
        heading={homeData.previewHeading}
        subheading={homeData.previewSubheading}
        image={homeData.previewImage}
      />
      <Features
        heading={homeData.featuresHeading}
        subheading={homeData.featuresSubheading}
        features={homeData.feature}
      />
      <ProcessTimeline
        heading={homeData.processHeading}
        subheading={homeData.processSubheading}
        steps={homeData.step}
      />
      <Testimonials
        heading={homeData.testimonialsTitle}
        subheading={homeData.testomonialsSubheading}
        videoTestimonial={videoTestimonial}
        testimonials={homeData.testimonials}
      />
      <CTA heading={homeData.ctaTitle} subheading={homeData.ctaSubtitle} />
      <FAQ faqs={homeData.faq || null} />
    </div>
  );
}
