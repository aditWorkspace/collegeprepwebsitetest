import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import InteractiveImage from "@/components/InteractiveImage";

export const metadata: Metadata = {
  title: "Philosophy | Prospectus Consulting",
  description: "What we believe about college admissions, profile building, and helping students tell their real stories.",
};

export default function PhilosophyPage() {
  return (
    <div className="pt-[64px]">
      <section className="py-16 lg:py-24 dot-grid-light">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-[12px] font-semibold tracking-[0.25em] uppercase text-accent-warm mb-5">/philosophy</p>
            <h1 className="font-serif text-[clamp(2.5rem,5vw,4rem)] text-foreground leading-[1.08] tracking-tight mb-6">
              What we <span className="text-accent font-semibold">believe.</span>
            </h1>
            <p className="text-[17px] text-muted leading-[1.7] max-w-lg">
              The college admissions process is broken in a lot of ways. Here&apos;s
              how we think about it, and why we do things differently.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Core beliefs */}
      <section className="pb-16 lg:pb-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="space-y-16">
            {[
              {
                title: "Your profile should be built, not fabricated.",
                icon: "architecture",
                paragraphs: [
                  "There's a difference between helping someone look impressive and helping someone actually become more interesting. Most counseling does the first thing. We try to do the second.",
                  "That means we spend real time helping students develop projects, pursue ideas, and build experiences that are genuinely theirs, not cookie-cutter activities designed to check a box.",
                ],
              },
              {
                title: "The best applications tell a true story.",
                icon: "auto_stories",
                paragraphs: [
                  "Admissions officers read thousands of applications. The ones that stand out aren't the most polished. They're the ones where everything feels connected and real. Where you read the essay, look at the activities, and think: \"yeah, this makes sense for this person.\"",
                  "That kind of coherence can't be faked. It has to come from actually knowing who you are and building your application around that.",
                ],
              },
              {
                title: "You deserve mentors who've actually been through it.",
                icon: "school",
                paragraphs: [
                  "We went through this process recently. We know what it feels like to sit in front of a blank Common App essay. We know what it's like to get advice that doesn't feel right but you follow it anyway because the person sounds confident.",
                  "That's why we started Verge. Not because we think we have all the answers, but because we know what bad advice looks like and we know what actually worked for us.",
                ],
              },
              {
                title: "Small is better.",
                icon: "groups",
                paragraphs: [
                  "We could take on more students. We choose not to. Every student we work with gets direct access to both of us, not a junior associate, not an intern. That only works if we stay small.",
                  "We'd rather do great work for a few students than mediocre work for many.",
                ],
              },
            ].map((belief, i) => (
              <ScrollReveal key={belief.title} delay={i * 0.05}>
                <div>
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-accent-light flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="material-symbols-outlined text-[22px] text-accent">{belief.icon}</span>
                    </div>
                    <h2 className="font-serif text-[clamp(1.5rem,3vw,2rem)] text-foreground">
                      {belief.title}
                    </h2>
                  </div>
                  <div className="space-y-4 text-[16px] text-muted leading-[1.75] ml-14">
                    {belief.paragraphs.map((p, j) => (
                      <p key={j}>{p}</p>
                    ))}
                  </div>
                  {i < 3 && <div className="accent-line-center mt-16 w-12 mx-auto" />}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* What we don't do */}
      <section className="py-16 lg:py-24 bg-card border-y border-border">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-[12px] font-semibold tracking-[0.25em] uppercase text-accent-warm mb-5 text-center">/boundaries</p>
            <h2 className="font-serif text-[clamp(2rem,4vw,2.8rem)] text-foreground mb-4 text-center">
              What we don&apos;t do.
            </h2>
            <p className="text-[16px] text-muted text-center mb-12 max-w-lg mx-auto leading-relaxed">
              Being honest about our limits is part of doing good work.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { title: "Guarantee admissions", desc: "Anyone who guarantees you'll get into a specific school is lying. We focus on making your application as strong as possible." },
              { title: "Write your essays for you", desc: "Your essays need to sound like you. We guide, push, and refine, but the writing is always yours." },
              { title: "Use a formula", desc: "There's no template that works for everyone. We build strategy around who you actually are." },
              { title: "Scale up", desc: "We're not trying to become a big company. We're trying to do right by the students we work with." },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.08}>
                <InteractiveImage className="bg-background border border-border rounded-2xl p-7 cursor-pointer h-full" intensity={3} scale={1.015}>
                  <span className="material-symbols-outlined text-[22px] text-red-400 mb-4 block">close</span>
                  <h3 className="text-[16px] font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-[15px] text-muted leading-relaxed">{item.desc}</p>
                </InteractiveImage>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-accent rounded-3xl px-8 py-14 lg:px-16 lg:py-16 text-center relative overflow-hidden">
              <div className="absolute inset-0 dot-grid-light opacity-10" />
              <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-white/[0.03]" />
              <div className="relative z-10">
                <h2 className="font-serif text-[clamp(1.8rem,3.5vw,2.5rem)] text-white mb-4">
                  Want to learn more about how we work?
                </h2>
                <p className="text-[16px] text-white/45 mb-8 max-w-md mx-auto leading-relaxed">
                  Book a free 30-minute intro call and we&apos;ll walk you through our experience and services.
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
                    href="/why-us"
                    className="border-2 border-white/20 text-white text-[15px] font-semibold px-9 py-4 rounded-xl hover:bg-white/10 hover:border-white/30 transition-all duration-300"
                  >
                    Read Our Story
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
