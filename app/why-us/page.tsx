import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import InteractiveImage from "@/components/InteractiveImage";

export const metadata: Metadata = {
  title: "Why Us | Vergre Consulting",
  description: "Why we built Vergre — and why it's different from everything else out there.",
};

export default function WhyUsPage() {
  return (
    <div className="pt-[64px]">
      {/* Header */}
      <section className="py-20 lg:py-28 dot-grid-light">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-[12px] font-semibold tracking-[0.25em] uppercase text-accent-warm mb-5">
              /why us
            </p>
            <h1 className="font-serif text-[clamp(2.5rem,5vw,4rem)] text-foreground leading-[1.08] tracking-tight mb-8">
              Why we built <em className="text-accent">Vergre.</em>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="space-y-6 text-[17px] text-muted leading-[1.75]">
              <p>
                We were in your position not that long ago, trying to figure out
                how this whole process actually works. And honestly, most of the
                help we got didn&apos;t feel that helpful. A lot of counselors charge
                a ton of money, but the advice felt recycled. Same story
                structures, same strategies, same way of &quot;packaging&quot; people, even
                when it didn&apos;t really fit who we were.
              </p>
              <p>
                So we stopped relying on that and did it our own way. We focused
                on things that actually made sense for us. Projects we genuinely
                cared about, interests we could speak on naturally, and a story
                that didn&apos;t feel forced, and that approach ended up working.
              </p>
              <p>
                That&apos;s what we bring here. We&apos;re not trying to run this at scale
                or push a one size fits all playbook. We work with a small number
                of students and actually get to know you. Then we help shape your
                application around what&apos;s real, whether that&apos;s your narrative,
                your activities, or even building out projects that actually fit
                you. Not just what looks impressive, but what actually makes sense
                when someone reads your application. We created Vergre to make sure
                students aren&apos;t being misinformed and misled just like we were.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* What we actually do */}
      <section className="py-20 lg:py-28 bg-card border-y border-border">
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
                body: "Most counselors help you write about what you've already done. We help you actually do things — launch projects, start initiatives, develop experiences that make your application real.",
              },
              {
                icon: "group",
                title: "You work with the founders. Period.",
                body: "No interns, no junior staff, no hand-offs. Both Adit and Aum are directly involved with every student. You get two people who've been through this themselves and know what actually works.",
              },
              {
                icon: "visibility",
                title: "We keep it small on purpose.",
                body: "We work with a limited number of students each cycle. That's not a marketing line — it's how we make sure every student gets real attention, not recycled advice.",
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
      <section className="py-16 lg:py-20">
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
                    We&apos;re proud of the work we&apos;ve done and the relationships we&apos;ve built. If you want to hear from families we&apos;ve worked with before making a decision, just ask — we&apos;re happy to set up a private conversation so you can hear how it went, directly from them.
                  </p>
                </div>
              </div>
            </InteractiveImage>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 lg:pb-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-accent rounded-3xl px-8 py-14 lg:px-16 lg:py-16 text-center relative overflow-hidden">
              <div className="absolute inset-0 dot-grid-light opacity-10" />
              <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-white/[0.03]" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-white/[0.03]" />
              <div className="relative z-10">
                <h2 className="font-serif text-[clamp(1.8rem,3.5vw,2.5rem)] text-white mb-4">
                  Curious if we&apos;re the right fit?
                </h2>
                <p className="text-[16px] text-white/45 mb-8 max-w-md mx-auto leading-relaxed">
                  A 20-minute call is all it takes to find out. No commitment, no pressure — just an honest conversation.
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
