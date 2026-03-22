import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { testimonials } from "@/data/content";

export const metadata: Metadata = {
  title: "Testimonials | The Academic Atelier",
  description: "What our students and their families have to say.",
};

export default function TestimonialsPage() {
  return (
    <div className="pt-[60px]">
      {/* Header */}
      <section className="py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-muted mb-5">
              Testimonials
            </p>
            <h1 className="font-serif text-4xl lg:text-5xl text-foreground leading-[1.12] tracking-tight mb-6">
              In their <em className="text-accent">own words.</em>
            </h1>
            <p className="text-[15px] text-muted leading-relaxed max-w-lg">
              We let our students speak for themselves. These are real
              experiences from real families we&apos;ve worked with.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonial grid */}
      <section className="pb-20 lg:pb-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.id} delay={i * 0.08}>
                <div className="bg-card border border-border rounded-xl p-8 h-full flex flex-col">
                  <p className="font-serif italic text-[15px] text-foreground leading-relaxed mb-6 flex-1">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center justify-between pt-5 border-t border-border">
                    <div>
                      <p className="text-[14px] font-medium text-foreground">
                        {t.name}
                      </p>
                      <p className="text-[12px] text-muted">
                        {t.type} · {t.year}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-[11px] text-muted">Accepted</p>
                      <p className="text-[13px] font-semibold text-accent">
                        {t.accepted}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Past clients note */}
      <section className="pb-20 lg:pb-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-card border border-border rounded-xl p-7 text-center">
              <span className="material-symbols-outlined text-[22px] text-accent mb-3 block mx-auto">
                forum
              </span>
              <h3 className="text-[14px] font-semibold text-foreground mb-2">
                Want to talk to a past student?
              </h3>
              <p className="text-[13px] text-muted leading-relaxed max-w-md mx-auto">
                During or after your intro call, just ask — we&apos;re happy to
                connect you with a previous family so you can hear about their
                experience firsthand.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 lg:pb-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <Link
              href="/book"
              className="bg-accent text-white text-[13px] font-medium px-7 py-3 rounded-lg hover:bg-accent-hover hover:-translate-y-[1px] transition-all duration-200"
            >
              Book a Free Intro Call
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
