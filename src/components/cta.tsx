import { CTAForm } from "./ui/cta-from";

export default function CTA() {
  return (
    <section className="border-t" id="cta">
      <div className="container flex flex-col items-center gap-4 py-24 text-center md:py-32">
        <h2 className="font-bold max-w-[58rem] text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
          Ready to Take Full Control of Your Content and Brand?
        </h2>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Join the waitlist to get <b>early access</b> of the product and
          receive updates on the progress!
        </p>
        <CTAForm />
      </div>
    </section>
  );
}
