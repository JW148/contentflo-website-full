import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./ui/accordian";

const faqData = [
  {
    question:
      "What makes ContentFlo different from other platforms like Kajabi or Teachable?",
    answer:
      "ContentFlo allows you to fully integrate courses directly on your own website, giving you full control over branding, design, and data ownership. Unlike other platforms, you won'&apos;'t have to rely on third-party hosts or sacrifice your brand's identity",
  },
  {
    question: "What is included in the setup process?",
    answer:
      "The setup includes building your website or integrating our content management system into your existing site, customising the look and feel to match your brand, and setting up key features like Custom Website Build, Hosting and Content Management Setup.",
  },
  {
    question: "Is there an onboarding fee?",
    answer:
      "Yes, we charge a one-time onboarding fee to cover the initial website setup and customisation. After the first month, you'll only pay a lower monthly fee for ongoing maintenance and support.",
  },
  {
    question: "Can I customise the platform to fit my brand?",
    answer:
      "Absolutely! ContentFlo offers full flexibility with branding and user experience, allowing you to design the platform to match your brand's style and voice.",
  },
  {
    question: "Do I own my content and data?",
    answer:
      "Yes! One of the core advantages of ContentFlo is that you have full ownership of your content and customer data. No third-party access — it's all under your control.",
  },
];

export function FAQ() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 ">
        <div className="mx-auto max-w-[58rem] text-center mb-16">
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
            Frequently Asked Questions
          </h2>
        </div>
        <Accordion
          type="single"
          collapsible
          className="w-full max-w-3xl mx-auto border-muted rounded-xl border   bg-[url(/noise.svg)] bg-repeat bg-[length:500px_500px]"
        >
          <div className="size-full rounded-xl  p-4 bg-gradient-to-tr from-zinc-950 via-zinc-950/80 to-zinc-900/10">
            {faqData.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className=" border-b-0"
              >
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </div>
        </Accordion>
      </div>
    </section>
  );
}
