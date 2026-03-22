import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import { CALENDLY_URL } from "@/data/content";

export const metadata: Metadata = {
  title: "Book a Call | The Academic Atelier",
  description: "Schedule a free intro call to discuss your college application goals.",
};

export default function BookPage() {
  return (
    <div className="pt-[60px]">
      {/* Header */}
      <section className="py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-muted mb-5">
              Book a Call
            </p>
            <h1 className="font-serif text-4xl lg:text-5xl text-foreground leading-[1.12] tracking-tight mb-6">
              Let&apos;s have a <em className="text-accent">real conversation.</em>
            </h1>
            <p className="text-[15px] text-muted leading-relaxed max-w-lg">
              No pressure, no pitch. The intro call is just a conversation
              about where you are, what you&apos;re working toward, and whether
              we&apos;re the right fit.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Calendly embed */}
      <section className="pb-10">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-card border border-border rounded-2xl overflow-hidden ambient-shadow-lg">
              {/* REPLACE: Update CALENDLY_URL in data/content.ts */}
              <iframe
                src={CALENDLY_URL}
                width="100%"
                height="600"
                frameBorder="0"
                title="Book a call with The Academic Atelier"
                className="block"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Fallback */}
      <section className="pb-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <p className="text-[13px] text-muted mb-3">
              Having trouble with the embed?
            </p>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[13px] font-medium text-accent hover:underline"
            >
              Open Calendly in a new tab
              <span className="material-symbols-outlined text-[16px]">
                open_in_new
              </span>
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* What to expect */}
      <section className="pb-24 lg:pb-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-serif text-2xl text-foreground mb-8 text-center">
              What to expect.
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                icon: "schedule",
                title: "20–30 minutes",
                desc: "A focused conversation, not a marathon sales pitch.",
              },
              {
                icon: "psychology",
                title: "Honest perspective",
                desc: "You'll leave with useful insight, whether we work together or not.",
              },
              {
                icon: "handshake",
                title: "Zero pressure",
                desc: "We only take students we believe we can genuinely help.",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.08}>
                <div className="bg-card border border-border rounded-xl p-6 text-center">
                  <span className="material-symbols-outlined text-[22px] text-accent mb-3 block">
                    {item.icon}
                  </span>
                  <h3 className="text-[13px] font-semibold text-foreground mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-[12px] text-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
