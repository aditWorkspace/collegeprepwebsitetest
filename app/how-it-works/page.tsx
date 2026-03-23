import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import InteractiveImage from "@/components/InteractiveImage";

export const metadata: Metadata = {
  title: "How It Works | Prospectus Consulting",
  description: "Our three-step process: Understand, Build, Refine.",
};

const phases = [
  {
    num: "01",
    title: "Understand",
    icon: "psychology",
    description: "We start by getting to know you: your interests, your strengths, what you actually care about. Not your resume, not your stats. We figure out what makes you interesting and where the real story is.",
    details: ["Deep-dive conversation about who you are", "Interests and strengths mapping", "Identify what's missing from your profile", "Initial strategy for what to build"],
    imageLabel: "Discovery session",
  },
  {
    num: "02",
    title: "Build",
    icon: "rocket_launch",
    description: "This is the step that sets us apart. Rather than just advising you on what to do, we work alongside you to develop real projects and initiatives that strengthen your profile. This could mean launching a business initiative, starting a nonprofit, building a meaningful leadership role, or developing a research project. The goal is always genuine substance, activities that are authentically yours, not manufactured for an application.",
    details: ["Project ideation and hands-on development", "Initiative launch and growth support", "Meaningful experience building", "Activities list strategy and positioning"],
    imageLabel: "Project development",
  },
  {
    num: "03",
    title: "Refine",
    icon: "edit_note",
    description: "Once your profile is real, we shape how you present it. Essays, activities list, narrative. Everything gets refined until your application tells a coherent, authentic story. Both founders review everything before submission.",
    details: ["Essay writing and revision", "Narrative arc development", "Activities and honors positioning", "Final review by both founders"],
    imageLabel: "Essay review",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="pt-[64px]">
      <section className="py-16 lg:py-24 dot-grid-light">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-[12px] font-semibold tracking-[0.25em] uppercase text-accent-warm mb-5">/process</p>
            <h1 className="font-serif text-[clamp(2.5rem,5vw,4rem)] text-foreground leading-[1.08] tracking-tight mb-6">
              Understand. Build. <span className="text-accent font-semibold">Refine.</span>
            </h1>
            <p className="text-[17px] text-muted leading-[1.7] max-w-lg">
              We don&apos;t just help you write about your experiences. We help
              you create them. Then we make sure your application tells the
              full story.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-16 lg:pb-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 space-y-8">
          {phases.map((phase, i) => (
            <ScrollReveal key={phase.num} delay={i * 0.1}>
              <InteractiveImage className="bg-card border border-border rounded-2xl overflow-hidden cursor-pointer" intensity={2} scale={1.008}>
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-0">
                  <div className="p-8 lg:p-10">
                    <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr_1fr] gap-6 lg:gap-8 items-start">
                      <div className="flex items-center gap-3">
                        <span className="font-serif text-[clamp(2.5rem,5vw,3.5rem)] text-accent/15 leading-none font-bold">{phase.num}</span>
                        <span className="material-symbols-outlined text-[24px] text-accent">{phase.icon}</span>
                      </div>
                      <div>
                        <h2 className="text-[20px] font-bold text-foreground mb-3">{phase.title}</h2>
                        <p className="text-[15px] text-muted leading-[1.7]">{phase.description}</p>
                      </div>
                      <div className="lg:border-l lg:border-border lg:pl-8">
                        <p className="text-[11px] uppercase tracking-[0.15em] text-muted mb-4 font-bold">What this looks like</p>
                        <ul className="space-y-2.5">
                          {phase.details.map((d) => (
                            <li key={d} className="flex items-start gap-2.5">
                              <span className="material-symbols-outlined text-[16px] text-accent mt-0.5 shrink-0">check</span>
                              <span className="text-[14px] text-muted">{d}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* Image placeholder — replace with real photos */}
                  <div
                    className="hidden lg:block min-h-[260px] relative"
                    style={{
                      background: `linear-gradient(${135 + i * 40}deg, ${
                        ["#2C3E50, #4A6741", "#1A2340, #2C3A5C", "#5B2C6F, #9B59B6"][i]
                      })`,
                    }}
                  >
                    <div className="absolute inset-0 dot-grid-light opacity-15" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <span className="material-symbols-outlined text-white/20 text-[36px] block mb-2">{phase.icon}</span>
                        <p className="text-white/25 text-[12px] font-medium tracking-wide">{phase.imageLabel}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </InteractiveImage>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Both founders */}
      <section className="py-16 lg:py-24 bg-card border-y border-border">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-accent rounded-3xl p-8 lg:p-12 relative overflow-hidden">
              <div className="absolute inset-0 dot-grid-light opacity-8" />
              <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-white/[0.03]" />
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-6 items-start">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-[28px] text-white">group</span>
                </div>
                <div>
                  <h2 className="font-serif text-[clamp(1.5rem,3vw,2rem)] text-white mb-4">You work with both of us.</h2>
                  <div className="space-y-4 text-[15px] text-white/60 leading-[1.7]">
                    <p>Every student gets assigned a primary counselor, either <strong className="text-white font-semibold">Adit or Aum</strong>. But both of us stay involved throughout the entire process, not interns, not junior staff, not someone we hired last month.</p>
                    <p>Both founders <strong className="text-white font-semibold">review every essay and every application before submission</strong>. You can also request to work with either of us on any specific area. Two perspectives, two sets of experience, one shared goal.</p>
                  </div>
                  <div className="flex items-center gap-4 mt-6 pt-5 border-t border-white/10">
                    <div className="flex -space-x-2">
                      {["AM", "AN"].map((initials, idx) => (
                        <div key={idx} className="w-9 h-9 rounded-full border-2 border-accent bg-white/15 text-white flex items-center justify-center text-[10px] font-semibold">
                          {initials}
                        </div>
                      ))}
                    </div>
                    <p className="text-[13px] text-white/40">Adit Mittal & Aum Narkar</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Good to know — enhanced */}
      <section className="py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-[12px] font-semibold tracking-[0.25em] uppercase text-accent-warm mb-5 text-center">/details</p>
            <h2 className="font-serif text-[clamp(2rem,4vw,2.8rem)] text-foreground mb-4 text-center">Good to know.</h2>
            <p className="text-[16px] text-muted text-center mb-12 max-w-lg mx-auto leading-relaxed">
              The logistical stuff that matters. We&apos;re flexible, responsive, and built for how students actually work.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: "event_available", title: "Flexible scheduling", desc: "Evenings and weekends available. We work around your schedule, not the other way around." },
              { icon: "chat", title: "Always reachable", desc: "Text, email, or message us anytime. We respond fast and don't hide behind a support inbox." },
              { icon: "language", title: "Fully remote", desc: "We work with students everywhere. Video calls, shared docs, real-time collaboration." },
              { icon: "forum", title: "Talk to past clients", desc: "Want to hear from someone we've worked with? Just ask and we'll set up a private call." },
            ].map((fact, i) => (
              <ScrollReveal key={fact.title} delay={i * 0.08}>
                <InteractiveImage className="bg-card border border-border rounded-2xl p-6 cursor-pointer h-full" intensity={4} scale={1.02}>
                  <div className="w-10 h-10 rounded-xl bg-accent-light flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-[22px] text-accent">{fact.icon}</span>
                  </div>
                  <h3 className="text-[16px] font-bold text-foreground mb-2">{fact.title}</h3>
                  <p className="text-[14px] text-muted leading-relaxed">{fact.desc}</p>
                </InteractiveImage>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 lg:pb-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-accent rounded-3xl px-8 py-14 lg:px-16 lg:py-16 text-center relative overflow-hidden">
              <div className="absolute inset-0 dot-grid-light opacity-10" />
              <div className="relative z-10">
                <h2 className="font-serif text-[clamp(1.8rem,3.5vw,2.5rem)] text-white mb-4">
                  Ready to get started?
                </h2>
                <p className="text-[16px] text-white/45 mb-8 max-w-md mx-auto leading-relaxed">
                  Book a free intro call and we&apos;ll walk you through how the process works for your specific situation.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link href="/book" className="bg-white text-accent text-[15px] font-semibold px-9 py-4 rounded-xl hover:-translate-y-[2px] hover:shadow-xl transition-all duration-300 interactive-lift" style={{ opacity: 1 }}>
                    Book an Intro Call
                  </Link>
                  <Link href="/services" className="border-2 border-white/20 text-white text-[15px] font-semibold px-9 py-4 rounded-xl hover:bg-white/10 hover:border-white/30 transition-all duration-300">
                    View Services
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
