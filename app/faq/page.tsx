import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { faqs } from "@/data/content";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "FAQ | Prospectus Consulting",
  description: "Frequently asked questions about our college counseling services.",
};

export default function FaqPage() {
  return (
    <div className="pt-[64px]">
      <section className="py-16 lg:py-24 dot-grid-light">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-[12px] font-semibold tracking-[0.25em] uppercase text-accent-warm mb-5">/faq</p>
            <h1 className="font-serif text-[clamp(2.5rem,5vw,4rem)] text-foreground leading-[1.08] tracking-tight mb-6">
              Common <span className="text-accent font-semibold">questions.</span>
            </h1>
            <p className="text-[17px] text-muted leading-[1.7] max-w-lg">
              If you don&apos;t see your question here,{" "}
              <Link href="/contact" className="text-accent font-semibold hover:underline">reach out</Link>{" "}
              or ask during your intro call.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-20 lg:pb-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <FaqAccordion items={faqs} />
          <ScrollReveal delay={0.2}>
            <div className="mt-16 bg-accent rounded-3xl px-8 py-14 lg:px-12 lg:py-14 text-center relative overflow-hidden">
              <div className="absolute inset-0 dot-grid-light opacity-10" />
              <div className="relative z-10">
                <h2 className="font-serif text-[clamp(1.5rem,3vw,2rem)] text-white mb-4">
                  Still have questions?
                </h2>
                <p className="text-[15px] text-white/45 mb-8 max-w-sm mx-auto leading-relaxed">
                  The quickest way to get answers is a free intro call. Or reach out anytime.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link href="/book" className="bg-white text-accent text-[15px] font-semibold px-9 py-4 rounded-xl hover:-translate-y-[2px] hover:shadow-xl transition-all duration-300 interactive-lift" style={{ opacity: 1 }}>
                    Book an Intro Call
                  </Link>
                  <Link href="/contact" className="border-2 border-white/20 text-white text-[15px] font-semibold px-9 py-4 rounded-xl hover:bg-white/10 hover:border-white/30 transition-all duration-300">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
