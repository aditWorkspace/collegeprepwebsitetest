import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { faqs } from "@/data/content";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "FAQ | The Academic Atelier",
  description: "Frequently asked questions about our college consulting services.",
};

export default function FaqPage() {
  return (
    <div className="pt-[60px]">
      {/* Header */}
      <section className="py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-muted mb-5">
              FAQ
            </p>
            <h1 className="font-serif text-4xl lg:text-5xl text-foreground leading-[1.12] tracking-tight mb-6">
              Common <em className="text-accent">questions.</em>
            </h1>
            <p className="text-[15px] text-muted leading-relaxed max-w-lg">
              If you don&apos;t see your question here, feel free to{" "}
              <Link href="/contact" className="text-accent font-medium hover:underline">
                reach out
              </Link>{" "}
              or ask during your intro call.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ items */}
      <section className="pb-24 lg:pb-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <FaqAccordion items={faqs} />

          <ScrollReveal delay={0.2}>
            <div className="mt-14 text-center">
              <p className="text-[14px] text-muted mb-5">
                Still have questions?
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/book"
                  className="bg-accent text-white text-[13px] font-medium px-7 py-3 rounded-lg hover:bg-accent-hover hover:-translate-y-[1px] transition-all duration-200"
                >
                  Book an Intro Call
                </Link>
                <Link
                  href="/contact"
                  className="border border-border text-foreground text-[13px] font-medium px-7 py-3 rounded-lg hover:border-accent hover:text-accent transition-all duration-200"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
