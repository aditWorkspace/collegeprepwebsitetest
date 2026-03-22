import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import InteractiveImage from "@/components/InteractiveImage";

export const metadata: Metadata = {
  title: "Why Us | Verge Consulting",
  description: "Why we built Verge and why it's different from everything else out there.",
};

export default function WhyUsPage() {
  return (
    <div className="pt-[64px]">
      {/* Header */}
      <section className="py-16 lg:py-24 dot-grid-light">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-[12px] font-semibold tracking-[0.25em] uppercase text-accent-warm mb-5">
              /why us
            </p>
            <h1 className="font-serif text-[clamp(2.5rem,5vw,4rem)] text-foreground leading-[1.08] tracking-tight mb-8">
              Why we built <span className="text-accent font-semibold">Verge.</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="space-y-6 text-[17px] text-muted leading-[1.75]">
  <p>
    We built Verge because we were in the exact same position not too long ago, trying to understand a process that felt unclear and overly scripted. Most of the guidance we came across sounded polished, but it all felt the same. The same story frameworks, the same advice on how to present yourself, the same idea that there was a “right” way to package who you are.
  </p>
  <p>
    It didn’t sit right with us. So we stepped away from that approach and focused on what actually made sense. We spent our time building projects we genuinely cared about, exploring interests we could speak about honestly, and shaping a narrative that reflected who we were instead of what we thought admissions wanted to hear. And that ended up working.
  </p>
  <p>
    That experience is the foundation of Verge. We don’t believe in scaling this into a one size fits all system or pushing students into generic molds. We work with a very small group of students so we can actually understand who you are, what you care about, and where you want to go. From there, we help you build an application that is grounded in something real, whether that means refining your narrative, strengthening your activities, or even helping you create projects that genuinely align with your interests.
  </p>
  <p>
    The goal isn’t to make you look impressive on paper. It’s to make your application make sense. Because when it does, it stands out naturally.
  </p>
</div>
          </ScrollReveal>
        </div>
      </section>

      {/* What we actually do */}
      <section className="py-16 lg:py-24 bg-card border-y border-border">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-serif text-[clamp(2rem,4vw,2.8rem)] text-foreground leading-tight mb-12">
              What makes us different.
            </h2>
          </ScrollReveal>
          <div className="space-y-8">
            {[
              {
                icon: "rocket_launch",
                title: "We build, not just advise.",
                body: "Most counselors help you write about what you've already done. We help you actually do things. Launch projects, start initiatives, develop experiences that make your application real.",
              },
              {
                icon: "group",
                title: "You work with the founders. Period.",
                body: "No interns, no junior staff, no hand-offs. Both Adit and Aum are directly involved with every student. You get two people who've been through this themselves and know what actually works.",
              },
              {
                icon: "visibility",
                title: "We keep it small on purpose.",
                body: "We work with a limited number of students each cycle. That's not a marketing line. It's how we make sure every student gets real attention, not recycled advice.",
              },
              {
                icon: "fingerprint",
                title: "Your story has to be yours.",
                body: "We're not going to manufacture a version of you that looks good on paper. We help you figure out what's genuinely interesting about you and communicate it at a higher level.",
              },
            ].map((belief, i) => (
              <ScrollReveal key={belief.title} delay={i * 0.1}>
                <InteractiveImage
                  className="bg-background border border-border rounded-2xl p-7 lg:p-8 cursor-pointer"
                  intensity={2}
                  scale={1.01}
                >
                  <div className="flex items-start gap-5">
                    <div className="w-11 h-11 rounded-xl bg-accent-light flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-[22px] text-accent">{belief.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-[17px] font-bold text-foreground mb-2">{belief.title}</h3>
                      <p className="text-[15px] text-muted leading-[1.7]">{belief.body}</p>
                    </div>
                  </div>
                </InteractiveImage>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Talk to previous clients */}
      <section className="py-14 lg:py-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <InteractiveImage
              className="bg-card border border-border rounded-2xl p-8 lg:p-10 cursor-pointer"
              intensity={2}
              scale={1.01}
            >
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-accent-warm/10 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-[26px] text-accent-warm">forum</span>
                </div>
                <div>
                  <h3 className="text-[18px] font-bold text-foreground mb-2">Talk to our previous clients.</h3>
                  <p className="text-[16px] text-muted leading-[1.7]">
                    We&apos;re proud of the work we&apos;ve done and the relationships we&apos;ve built. If you want to hear from families we&apos;ve worked with before making a decision, just ask. We&apos;re happy to set up a private conversation so you can hear how it went, directly from them.
                  </p>
                </div>
              </div>
            </InteractiveImage>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 lg:pb-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-accent rounded-3xl px-8 py-14 lg:px-16 lg:py-16 text-center relative overflow-hidden">
              <div className="absolute inset-0 dot-grid-light opacity-10" />
              <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-white/[0.03]" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-white/[0.03]" />
              <div className="relative z-10">
                <h2 className="font-serif text-[clamp(1.8rem,3.5vw,2.5rem)] text-white mb-4">
                  Want to learn more?
                </h2>
                <p className="text-[16px] text-white/45 mb-8 max-w-md mx-auto leading-relaxed">
                  Book a free 30-minute call and we&apos;ll walk you through our experience and services. No commitment, no pressure.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link
                    href="/book"
                    className="bg-white text-accent text-[15px] font-semibold px-9 py-4 rounded-xl hover:-translate-y-[2px] hover:shadow-xl transition-all duration-300 interactive-lift"
                    style={{ opacity: 1 }}
                  >
                    Book a Free Intro Call
                  </Link>
                  <Link
                    href="/testimonials"
                    className="border-2 border-white/20 text-white text-[15px] font-semibold px-9 py-4 rounded-xl hover:bg-white/10 hover:border-white/30 transition-all duration-300"
                  >
                    Read Testimonials
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
