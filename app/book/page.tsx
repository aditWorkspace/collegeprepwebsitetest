import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import InteractiveImage from "@/components/InteractiveImage";
import { CALENDLY_URL } from "@/data/content";

export const metadata: Metadata = {
  title: "Book a Call | Verge Consulting",
  description: "Schedule a free intro call to discuss your college application goals.",
};

export default function BookPage() {
  return (
    <div className="pt-[64px]">
      <section className="py-16 lg:py-24 dot-grid-light">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-[12px] font-semibold tracking-[0.25em] uppercase text-accent-warm mb-5">/book</p>
            <h1 className="font-serif text-[clamp(2.5rem,5vw,4rem)] text-foreground leading-[1.08] tracking-tight mb-6">
              Schedule a <span className="text-accent font-semibold">free intro call.</span>
            </h1>
            <p className="text-[17px] text-muted leading-[1.7] max-w-lg">
              Pick a time that works for you and we&apos;ll hop on a 30-minute call. We&apos;ll walk you through our experience and services, learn about your situation, and help you figure out if we&apos;d be the right fit.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-10">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-card border border-border rounded-3xl overflow-hidden ambient-shadow-lg">
              <iframe src={CALENDLY_URL} width="100%" height="600" frameBorder="0" title="Book a call" className="block" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <p className="text-[14px] text-muted mb-3">Having trouble?</p>
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[14px] font-semibold text-accent hover:underline">
              Open Calendly in a new tab
              <span className="material-symbols-outlined text-[16px]">open_in_new</span>
            </a>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-20 lg:pb-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-serif text-[clamp(1.8rem,3vw,2.5rem)] text-foreground mb-10 text-center">What to expect.</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { icon: "schedule", title: "30 minutes", desc: "Enough time to walk through our services and learn about your situation." },
              { icon: "psychology", title: "Useful perspective", desc: "You'll leave with a clear sense of what we do and whether it makes sense for you." },
              { icon: "handshake", title: "No commitment", desc: "Get a feel for the process first. You decide if it's right for you." },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.08}>
                <InteractiveImage className="bg-card border border-border rounded-2xl p-7 text-center cursor-pointer" intensity={4} scale={1.02}>
                  <span className="material-symbols-outlined text-[26px] text-accent mb-4 block">{item.icon}</span>
                  <h3 className="text-[15px] font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-[14px] text-muted leading-relaxed">{item.desc}</p>
                </InteractiveImage>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
