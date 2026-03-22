import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Why Us | The Academic Atelier",
  description: "Why we built a different kind of college consulting service.",
};

const genericTraits = [
  {
    label: "Template essays",
    desc: "Recycled frameworks that strip away individuality.",
  },
  {
    label: "Junior staff",
    desc: "Advisors who haven't been through the process themselves.",
  },
  {
    label: "Volume-first model",
    desc: "Too many students, not enough attention.",
  },
  {
    label: "Polish over substance",
    desc: "Essays that sound good but say nothing real.",
  },
];

const ourTraits = [
  {
    label: "Your voice, sharpened",
    desc: "We help you communicate who you are — at a higher level.",
  },
  {
    label: "Senior mentors only",
    desc: "Both mentors attended and succeeded at top institutions.",
  },
  {
    label: "Deliberately small",
    desc: "15 students per cycle. That's it.",
  },
  {
    label: "Honest feedback",
    desc: "We push you to go deeper, not to sound more polished.",
  },
];

export default function WhyUsPage() {
  return (
    <div className="pt-[60px]">
      {/* Header */}
      <section className="py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-muted mb-5">
              Why Us
            </p>
            <h1 className="font-serif text-4xl lg:text-5xl text-foreground leading-[1.12] tracking-tight mb-6">
              Why we built this <em className="text-accent">differently.</em>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="space-y-5 text-[15px] text-muted leading-relaxed">
              <p>
                Too much college advising feels polished but generic. Students
                are often pushed toward a version of themselves that looks right
                on paper but doesn&apos;t feel real.
              </p>
              <p className="text-foreground font-medium">
                We built this to do the opposite.
              </p>
              <p>
                We focus on helping students think clearly, write honestly, and
                present themselves with intention — not fit into a template.
              </p>
              <p>
                The goal isn&apos;t to manufacture a perfect applicant.
                It&apos;s to help you communicate who you actually are, at a
                higher level.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 lg:py-28 bg-card border-y border-border">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-serif text-3xl text-foreground leading-tight mb-14 text-center">
              Two approaches. <em className="text-accent">Very different results.</em>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Generic */}
            <ScrollReveal delay={0.1}>
              <div className="rounded-xl border border-border bg-background p-8">
                <div className="flex items-center gap-2 mb-8">
                  <span className="w-2 h-2 rounded-full bg-muted/30" />
                  <p className="text-[12px] font-semibold uppercase tracking-[0.15em] text-muted">
                    Typical Consulting
                  </p>
                </div>
                <div className="space-y-5">
                  {genericTraits.map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-[18px] text-red-400 mt-0.5 shrink-0">
                        close
                      </span>
                      <div>
                        <p className="text-[13px] font-medium text-foreground mb-0.5">
                          {item.label}
                        </p>
                        <p className="text-[12px] text-muted leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Ours */}
            <ScrollReveal delay={0.2}>
              <div className="rounded-xl bg-accent text-white p-8">
                <div className="flex items-center gap-2 mb-8">
                  <span className="w-2 h-2 rounded-full bg-white/40" />
                  <p className="text-[12px] font-semibold uppercase tracking-[0.15em] text-white/60">
                    Our Approach
                  </p>
                </div>
                <div className="space-y-5">
                  {ourTraits.map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-[18px] text-white/80 mt-0.5 shrink-0">
                        check_circle
                      </span>
                      <div>
                        <p className="text-[13px] font-medium text-white mb-0.5">
                          {item.label}
                        </p>
                        <p className="text-[12px] text-white/55 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Beliefs */}
      <section className="py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-serif text-3xl text-foreground leading-tight mb-10">
              What we believe.
            </h2>
          </ScrollReveal>
          <div className="space-y-8">
            {[
              {
                title: "The best applications are honest ones.",
                body: "Admissions officers read thousands of essays. The ones that stand out aren't the most polished — they're the most real.",
              },
              {
                title: "Students deserve mentors who've been there.",
                body: "Both of our mentors attended and succeeded at highly selective institutions. They know what it feels like to sit where you're sitting.",
              },
              {
                title: "Growth matters more than packaging.",
                body: "Our students don't just get accepted — they grow as thinkers and writers through the process. That confidence lasts longer than any acceptance letter.",
              },
            ].map((belief, i) => (
              <ScrollReveal key={belief.title} delay={i * 0.1}>
                <div className="border-l-2 border-border pl-6 hover:border-accent transition-colors duration-300">
                  <h3 className="text-[15px] font-semibold text-foreground mb-2">
                    {belief.title}
                  </h3>
                  <p className="text-[14px] text-muted leading-relaxed">
                    {belief.body}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 lg:pb-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <p className="text-[15px] text-muted mb-6">
              Curious if we&apos;re the right fit?
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
