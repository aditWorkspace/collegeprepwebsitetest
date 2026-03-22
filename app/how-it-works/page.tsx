import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "How It Works | The Academic Atelier",
  description: "Our three-phase consulting process and the dual-mentor model.",
};

const phases = [
  {
    num: "01",
    title: "Discovery & Identity",
    description:
      "We start by getting to know you — not your resume. Through a deep intake process, we map your experiences, values, intellectual interests, and the parts of your story that feel most alive. This shapes everything else.",
    details: [
      "90-minute deep-dive intake session",
      "Values and interests mapping",
      "Academic narrative assessment",
      "Initial positioning strategy",
    ],
  },
  {
    num: "02",
    title: "Strategic Architecture",
    description:
      "With a clear picture of who you are, we build a strategic framework for your applications. School list, narrative threads, which activities to foreground, which essays to write and why.",
    details: [
      "School list research and curation",
      "Narrative thread identification",
      "Activities and honors positioning",
      "Essay topic strategy per school",
    ],
  },
  {
    num: "03",
    title: "Refining & Execution",
    description:
      "We work through drafts together — real feedback, real conversation. We push you to go deeper, cut what's vague, and sharpen what's true. Both consultants review your work before it goes anywhere.",
    details: [
      "Iterative draft development",
      "Line-level editing and feedback",
      "Dual-mentor review on every essay",
      "Final polish and submission prep",
    ],
  },
];

export default function HowItWorksPage() {
  return (
    <div className="pt-[60px]">
      {/* Header */}
      <section className="py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-muted mb-5">
              How It Works
            </p>
            <h1 className="font-serif text-4xl lg:text-5xl text-foreground leading-[1.12] tracking-tight mb-6">
              A process built around <em className="text-accent">you.</em>
            </h1>
            <p className="text-[15px] text-muted leading-relaxed max-w-lg">
              We&apos;re intentionally small. Every student gets a dedicated
              primary mentor, plus direct access to the second — who reviews
              everything before submission.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Phases */}
      <section className="pb-20 lg:pb-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="space-y-6">
            {phases.map((phase, i) => (
              <ScrollReveal key={phase.num} delay={i * 0.1}>
                <div className="bg-card border border-border rounded-2xl p-8 lg:p-10 group hover:border-accent/30 transition-colors duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-[80px_1fr_1fr] gap-6 lg:gap-10 items-start">
                    {/* Number */}
                    <span className="font-serif text-5xl text-border group-hover:text-accent/20 transition-colors duration-300 leading-none">
                      {phase.num}
                    </span>

                    {/* Main content */}
                    <div>
                      <h2 className="text-[18px] font-semibold text-foreground mb-3">
                        {phase.title}
                      </h2>
                      <p className="text-[14px] text-muted leading-relaxed">
                        {phase.description}
                      </p>
                    </div>

                    {/* Details */}
                    <div className="lg:border-l lg:border-border lg:pl-8">
                      <p className="text-[11px] uppercase tracking-[0.1em] text-muted mb-3">
                        What&apos;s included
                      </p>
                      <ul className="space-y-2">
                        {phase.details.map((detail) => (
                          <li
                            key={detail}
                            className="flex items-start gap-2"
                          >
                            <span className="material-symbols-outlined text-[14px] text-accent mt-0.5 shrink-0">
                              check
                            </span>
                            <span className="text-[13px] text-muted">
                              {detail}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Dual Mentor */}
      <section className="py-20 lg:py-28 bg-card border-y border-border">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-accent rounded-2xl p-8 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-6 items-start">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-[24px] text-white">
                    group
                  </span>
                </div>
                <div>
                  <h2 className="font-serif text-2xl text-white mb-3">
                    The Dual-Mentor Model
                  </h2>
                  <div className="space-y-4 text-[14px] text-white/70 leading-relaxed">
                    <p>
                      Each student has a{" "}
                      <strong className="text-white font-medium">
                        primary mentor
                      </strong>{" "}
                      who leads their strategy and is their main point of
                      contact throughout the process.
                    </p>
                    <p>
                      The{" "}
                      <strong className="text-white font-medium">
                        second mentor
                      </strong>{" "}
                      stays genuinely in the loop — available for additional
                      sessions if you want another perspective, and{" "}
                      <strong className="text-white font-medium">
                        guaranteed to review every essay before submission
                      </strong>
                      .
                    </p>
                    <p>
                      Two sets of sharp, experienced eyes on everything you
                      submit. No outsourcing. No interns. No junior staff.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Key facts */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-serif text-2xl text-foreground mb-10 text-center">
              Good to know.
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: "event_available",
                title: "Flexible scheduling",
                desc: "Book sessions that work for you. Evenings and weekends available.",
              },
              {
                icon: "chat",
                title: "Open communication",
                desc: "Text, email, or message anytime. We're accessible, not bureaucratic.",
              },
              {
                icon: "groups",
                title: "Small cohort",
                desc: "We take ~15 students per cycle. You're not a number.",
              },
            ].map((fact, i) => (
              <ScrollReveal key={fact.title} delay={i * 0.08}>
                <div className="bg-card border border-border rounded-xl p-6">
                  <span className="material-symbols-outlined text-[22px] text-accent mb-3 block">
                    {fact.icon}
                  </span>
                  <h3 className="text-[13px] font-semibold text-foreground mb-1.5">
                    {fact.title}
                  </h3>
                  <p className="text-[12px] text-muted leading-relaxed">
                    {fact.desc}
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
              Ready to see if this is the right fit?
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/book"
                className="bg-accent text-white text-[13px] font-medium px-7 py-3 rounded-lg hover:bg-accent-hover hover:-translate-y-[1px] transition-all duration-200"
              >
                Book an Intro Call
              </Link>
              <Link
                href="/services"
                className="border border-border text-foreground text-[13px] font-medium px-7 py-3 rounded-lg hover:border-accent hover:text-accent transition-all duration-200"
              >
                View Services
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
