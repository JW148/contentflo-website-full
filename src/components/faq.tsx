import { RichText } from "@payloadcms/richtext-lexical/react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./ui/accordian";

import type { faqType } from "@/types/types";

interface FAQProps {
  faqs?: faqType[] | null;
}

export function FAQ({ faqs }: FAQProps) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      {faqs && faqs.length > 0 && (
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
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className=" border-b-0"
                >
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <RichText data={faq.answer} />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </div>
          </Accordion>
        </div>
      )}
    </section>
  );
}
