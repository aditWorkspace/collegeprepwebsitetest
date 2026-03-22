import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import InteractiveImage from "@/components/InteractiveImage";
import { testimonials } from "@/data/content";

export const metadata: Metadata = {
  title: "Testimonials | Verge Consulting",
  description: "What our students and their families have to say.",
};

export default function TestimonialsPage() {
  return (
    <div className="pt-[64px]">
      <section className="py-16 lg:py-24 dot-grid-light">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-[12px] font-semibold tracking-[0.25em] uppercase text-accent-warm mb-5">/testimonials</p>
            <h1 className="font-serif text-[clamp(2.5rem,5vw,4rem)] text-foreground leading-[1.08] tracking-tight mb-6">
              In their <span className="text-accent font-semibold">own words.</span>
            </h1>
            <p className="text-[17px] text-muted leading-[1.7] max-w-lg">
              Real experiences from real families we&apos;ve worked with. Want to
              hear it firsthand? We&apos;re happy to connect you with any of our
              previous clients. Just ask.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-14 lg:pb-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.id} delay={i * 0.08}>
                <InteractiveImage className="bg-card border border-border rounded-2xl p-8 cursor-pointer h-full flex flex-col" intensity={3} scale={1.015}>
                  <div className="flex gap-1 mb-5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} className="material-symbols-outlined text-[16px] text-accent-warm" style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>star</span>
                    ))}
                  </div>
                  <p className="font-serif text-[18px] text-foreground leading-[1.65] mb-7 flex-1">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center justify-between pt-5 border-t border-border">
                    <div>
                      <p className="text-[15px] font-semibold text-foreground">{t.name}</p>
                      <p className="text-[13px] text-muted">{t.type} · {t.year}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[11px] text-muted uppercase tracking-wider">Accepted</p>
                      <p className="text-[14px] font-bold text-accent">{t.accepted}</p>
                    </div>
                  </div>
                </InteractiveImage>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Talk to past clients */}
      <section className="pb-14 lg:pb-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-accent rounded-3xl p-8 lg:p-10 relative overflow-hidden">
              <div className="absolute inset-0 dot-grid-light opacity-10" />
              <div className="absolute -top-12 -right-12 w-36 h-36 rounded-full bg-white/[0.03]" />
              <div className="relative z-10 flex flex-col lg:flex-row items-start gap-6">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-[26px] text-white">forum</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-[19px] font-bold text-white mb-3">Want to talk to a past client?</h3>
                  <p className="text-[16px] text-white/50 leading-[1.7] mb-5">
                    We&apos;re proud of the work we do, and we have nothing to hide. During or after your intro call, just ask. We&apos;ll set up a private conversation with a previous family so you can hear exactly how the experience was.
                  </p>
                  <Link
                    href="/book"
                    className="inline-flex items-center gap-2 text-[14px] font-semibold text-accent-warm hover:text-white transition-colors group"
                  >
                    Book your intro call
                    <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 lg:pb-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-serif text-[clamp(1.8rem,3vw,2.5rem)] text-foreground mb-4">
              Want to learn more?
            </h2>
            <p className="text-[16px] text-muted mb-8 max-w-md mx-auto leading-relaxed">
              Book a free 30-minute call and we&apos;ll walk you through our services and experience.
            </p>
            <Link href="/book" className="bg-accent text-white text-[15px] font-semibold px-9 py-4 rounded-xl hover:bg-accent-hover hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 interactive-lift" style={{ opacity: 1 }}>
              Book a Free Intro Call
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
