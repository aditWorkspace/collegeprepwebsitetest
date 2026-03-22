import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { stats, featuredColleges, testimonials } from "@/data/content";

export const metadata: Metadata = {
  title: "Results | The Academic Atelier",
  description: "Student outcomes and placement results.",
};

export default function ResultsPage() {
  return (
    <div className="pt-[60px]">
      {/* Header */}
      <section className="py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-muted mb-5">
              Results
            </p>
            <h1 className="font-serif text-4xl lg:text-5xl text-foreground leading-[1.12] tracking-tight mb-6">
              Outcomes that <em className="text-accent">speak for themselves.</em>
            </h1>
            <p className="text-[15px] text-muted leading-relaxed max-w-lg">
              We&apos;re deliberate about how many students we work with. That
              intentionality shows in the results.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats */}
      <section className="pb-20 lg:pb-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.08}>
                <div className="bg-card border border-border rounded-xl p-7 text-center">
                  <p className="font-serif text-4xl text-accent leading-none mb-2">
                    {stat.value}
                  </p>
                  <p className="text-[12px] text-muted">
                    {stat.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Colleges */}
      <section className="py-20 lg:py-28 bg-card border-y border-border">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-muted mb-8">
              Where Our Students Have Been Accepted
            </p>
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
              {featuredColleges.map((college) => (
                <span
                  key={college}
                  className="font-serif text-2xl text-foreground/70"
                >
                  {college}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials preview */}
      <section className="py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-serif text-2xl text-foreground mb-10">
              What students say.
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
            {testimonials.slice(0, 4).map((t, i) => (
              <ScrollReveal key={t.id} delay={i * 0.08}>
                <div className="bg-card border border-border rounded-xl p-7">
                  <p className="font-serif italic text-[14px] text-foreground leading-relaxed mb-5">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div>
                      <p className="text-[13px] font-medium text-foreground">
                        {t.name}
                      </p>
                      <p className="text-[11px] text-muted">{t.type}</p>
                    </div>
                    <p className="text-[12px] font-semibold text-accent">
                      {t.accepted}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <Link
              href="/testimonials"
              className="inline-flex items-center gap-2 text-[13px] font-medium text-accent hover:gap-3 transition-all duration-200"
            >
              Read all testimonials
              <span className="material-symbols-outlined text-[16px]">
                arrow_forward
              </span>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 lg:pb-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <p className="text-[15px] text-muted mb-6">
              Want to be next?
            </p>
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
