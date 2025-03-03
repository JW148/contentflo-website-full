import { MacbookScroll } from "@/components/ui/macbook-scroll";

export function Preview() {
  return (
    <section className="container space-y-16 py-24 md:py-32" id="section1">
      <div className="mx-auto max-w-[58rem] text-center md:-mb-20 -mb-[200px]">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
          Bespoke Content Management
        </h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">
          Discover how <b>ContentFlo</b> can transform your content with our
          innovative technologies.
        </p>
      </div>
      <MacbookScroll src={"/cf_admin_panel.png"} title />
    </section>
  );
}
