import Link from "next/link";
import { stats, consultants, testimonials } from "@/data/content";
import ScrollReveal from "@/components/ScrollReveal";
import HeroVisual from "@/components/HeroVisual";

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center pt-[60px]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 w-full py-20 lg:py-0 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left: copy */}
          <div className="flex flex-col gap-7 max-w-xl">
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-muted">
              Premium College Consulting
            </p>

            <h1 className="font-serif text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] tracking-tight text-foreground text-balance">
              Your story, told
              <br />
              <em className="text-accent">with intention.</em>
            </h1>

            <p className="text-[15px] text-muted leading-relaxed max-w-md">
              We help students think clearly, write honestly, and present
              themselves at the highest level — without losing what makes
              them real.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-1">
              <Link
                href="/book"
                className="bg-accent text-white text-[13px] font-medium px-7 py-3 rounded-lg hover:bg-accent-hover hover:-translate-y-[1px] transition-all duration-200 text-center"
              >
                Book an Intro Call
              </Link>
              <Link
                href="/why-us"
                className="border border-border text-foreground text-[13px] font-medium px-7 py-3 rounded-lg hover:border-accent hover:text-accent transition-all duration-200 text-center"
              >
                Why We&apos;re Different
              </Link>
            </div>

            {/* Trust micro */}
            <div className="flex items-center gap-3 mt-2">
              <div className="flex -space-x-1.5">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="w-7 h-7 rounded-full border-2 border-background bg-accent-light flex items-center justify-center text-[10px] font-medium text-accent"
                  >
                    {["A", "P", "M"][i]}
                  </div>
                ))}
              </div>
              <p className="text-[12px] text-muted">
                Trusted by students admitted to{" "}
                <span className="font-medium text-foreground">
                  Yale, Stanford, Columbia
                </span>{" "}
                & more
              </p>
            </div>
          </div>

          {/* Right: ingrained visuals */}
          <HeroVisual />
        </div>
      </section>

      {/* ===== TRUST STRIP ===== */}
      <section className="border-y border-border bg-card">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.08}>
                <div className="text-center">
                  <p className="font-serif text-3xl lg:text-4xl text-accent leading-none mb-1.5">
                    {stat.value}
                  </p>
                  <p className="text-[12px] text-muted tracking-wide">
                    {stat.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY PREVIEW ===== */}
      <section className="py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-muted mb-4">
                Why Us
              </p>
              <h2 className="font-serif text-3xl lg:text-4xl text-foreground leading-tight mb-5">
                Built because the{" "}
                <em className="text-accent">status quo</em> wasn&apos;t good
                enough.
              </h2>
              <p className="text-[15px] text-muted leading-relaxed mb-6 max-w-md">
                Most consulting feels polished but generic. Students get pushed
                toward a version of themselves that looks right on paper but
                doesn&apos;t feel real. We built something different.
              </p>
              <Link
                href="/why-us"
                className="inline-flex items-center gap-2 text-[13px] font-medium text-accent hover:gap-3 transition-all duration-200"
              >
                Learn more
                <span className="material-symbols-outlined text-[16px]">
                  arrow_forward
                </span>
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-card border border-border rounded-xl p-6 ambient-shadow">
                  <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center mb-3">
                    <span className="material-symbols-outlined text-[18px] text-red-400">
                      close
                    </span>
                  </div>
                  <p className="text-[13px] font-medium text-foreground mb-1">
                    Generic Consulting
                  </p>
                  <p className="text-[12px] text-muted leading-relaxed">
                    Template essays, formulaic strategy, junior staff running
                    the show.
                  </p>
                </div>
                <div className="bg-accent text-white rounded-xl p-6 ambient-shadow-lg">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center mb-3">
                    <span className="material-symbols-outlined text-[18px] text-white">
                      check_circle
                    </span>
                  </div>
                  <p className="text-[13px] font-medium text-white mb-1">
                    Our Approach
                  </p>
                  <p className="text-[12px] text-white/60 leading-relaxed">
                    Your real voice, sharpened strategy, two senior mentors on
                    every essay.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== ABOUT PREVIEW ===== */}
      <section className="py-24 lg:py-32 bg-card border-y border-border">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-muted mb-4">
              The Team
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl text-foreground leading-tight mb-12">
              Two mentors. <em className="text-accent">One mission.</em>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {consultants.map((c, i) => (
              <ScrollReveal key={c.id} delay={i * 0.1}>
                <div className="bg-background rounded-xl border border-border p-7 hover:ambient-shadow-lg transition-shadow duration-300 group">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-14 h-14 rounded-xl bg-accent-light flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                      <span className="material-symbols-outlined text-accent group-hover:text-white transition-colors text-[24px]">
                        person
                      </span>
                    </div>
                    <div>
                      <h3 className="text-[15px] font-semibold text-foreground">
                        {c.name}
                      </h3>
                      <p className="text-[12px] text-muted">{c.title}</p>
                      <p className="text-[11px] text-muted mt-0.5">
                        {c.degree}, {c.school}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {c.specialties.map((s) => (
                      <span
                        key={s}
                        className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-accent-light text-accent"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.2}>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-[13px] font-medium text-accent hover:gap-3 transition-all duration-200"
            >
              Full bios & backgrounds
              <span className="material-symbols-outlined text-[16px]">
                arrow_forward
              </span>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== PROCESS PREVIEW ===== */}
      <section className="py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-muted mb-4">
              The Process
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl text-foreground leading-tight mb-12">
              Thoughtful by <em className="text-accent">design.</em>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              {
                num: "01",
                title: "Discovery",
                desc: "We start by understanding you — not your resume. Your values, interests, and the parts of your story that feel most alive.",
              },
              {
                num: "02",
                title: "Strategy",
                desc: "A clear framework: school list, narrative threads, what to foreground. Built around you, not a template.",
              },
              {
                num: "03",
                title: "Execution",
                desc: "Real feedback, real conversation. Both mentors review every essay before submission.",
              },
            ].map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 0.1}>
                <div className="relative bg-card border border-border rounded-xl p-7 hover:border-accent/30 transition-colors duration-300 group">
                  <span className="text-[11px] font-semibold tracking-[0.2em] text-muted/40 mb-4 block">
                    {step.num}
                  </span>
                  <h3 className="text-[15px] font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[13px] text-muted leading-relaxed">
                    {step.desc}
                  </p>
                  <div className="mt-4 h-[1.5px] w-0 group-hover:w-8 bg-accent transition-all duration-400 ease-out" />
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 text-[13px] font-medium text-accent hover:gap-3 transition-all duration-200"
            >
              See our full process
              <span className="material-symbols-outlined text-[16px]">
                arrow_forward
              </span>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== TESTIMONIALS PREVIEW ===== */}
      <section className="py-24 lg:py-32 bg-card border-y border-border">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-muted mb-4">
              Student Voices
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl text-foreground leading-tight mb-12">
              From the students{" "}
              <em className="text-accent">we&apos;ve worked with.</em>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {testimonials.slice(0, 2).map((t, i) => (
              <ScrollReveal key={t.id} delay={i * 0.1}>
                <div className="bg-background border border-border rounded-xl p-7">
                  <p className="font-serif italic text-[15px] text-foreground leading-relaxed mb-5">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div>
                      <p className="text-[13px] font-medium text-foreground">
                        {t.name}
                      </p>
                      <p className="text-[11px] text-muted">{t.type}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[11px] text-muted">Accepted</p>
                      <p className="text-[12px] font-semibold text-accent">
                        {t.accepted}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.2}>
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

      {/* ===== FINAL CTA ===== */}
      <section className="py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-accent rounded-2xl px-8 py-14 lg:px-16 lg:py-20 text-center">
              <h2 className="font-serif text-3xl lg:text-4xl text-white leading-tight mb-4">
                Ready to start?
              </h2>
              <p className="text-[14px] text-white/60 mb-8 max-w-md mx-auto">
                Book a free intro call. No pressure, no pitch — just a real
                conversation about where you are and how we can help.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/book"
                  className="bg-white text-accent text-[13px] font-medium px-7 py-3 rounded-lg hover:-translate-y-[1px] hover:shadow-lg transition-all duration-200"
                >
                  Book a Call
                </Link>
                <Link
                  href="/services"
                  className="border border-white/20 text-white text-[13px] font-medium px-7 py-3 rounded-lg hover:bg-white/10 transition-all duration-200"
                >
                  View Services
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
