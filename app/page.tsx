import Link from "next/link";
import { counselors, testimonials } from "@/data/content";
import ScrollReveal from "@/components/ScrollReveal";
import HeroVisual from "@/components/HeroVisual";
import InteractiveImage from "@/components/InteractiveImage";
import ImageCarousel from "@/components/ImageCarousel";

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center pt-[60px] dot-grid-light">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 w-full py-16 lg:py-0 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <div className="flex flex-col gap-6 max-w-xl">
            <p className="text-[12px] font-semibold tracking-[0.25em] uppercase text-accent-warm">
              College Profile Building
            </p>

            <h1 className="font-serif text-[clamp(2.8rem,6vw,4.5rem)] leading-[1.05] tracking-tight text-foreground text-balance">
              We don&apos;t just edit essays.
              <br />
              <em className="text-accent">We build profiles.</em>
            </h1>

            <p className="text-[17px] lg:text-[18px] text-muted leading-[1.7] max-w-md">
              Most counselors polish what you already have. We help you build
              the projects, experiences, and narrative that make your application
              genuinely stand out.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <Link
                href="/book"
                className="bg-accent text-white text-[15px] font-semibold px-9 py-4 rounded-xl hover:bg-accent-hover hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 text-center interactive-lift"
                style={{ opacity: 1 }}
              >
                Book an Intro Call
              </Link>
              <Link
                href="/why-us"
                className="border-2 border-accent/20 text-foreground text-[15px] font-semibold px-9 py-4 rounded-xl hover:border-accent hover:text-accent hover:-translate-y-[2px] transition-all duration-300 text-center"
              >
                Why We&apos;re Different
              </Link>
            </div>

            {/* Founders */}
            <div className="flex items-center gap-4 mt-4 pt-6 border-t border-border">
              <div className="flex -space-x-2">
                {["AM", "AN"].map((initials, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-background bg-accent text-white flex items-center justify-center text-[11px] font-semibold"
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <p className="text-[14px] text-muted leading-snug">
                Founded by students from{" "}
                <span className="font-semibold text-foreground">
                  UC Berkeley
                </span>{" "}
                &amp;{" "}
                <span className="font-semibold text-foreground">
                  NYU Stern
                </span>
              </p>
            </div>
          </div>

          {/* Right: visuals */}
          <HeroVisual />
        </div>
      </section>

      {/* ===== IMAGE CAROUSEL ===== */}
      <section className="overflow-hidden bg-card/60 border-y border-border/40 py-5">
        <ImageCarousel />
      </section>

      {/* ===== WHY PREVIEW ===== */}
      <section className="py-20 lg:py-28 dot-grid-light">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <ScrollReveal>
              <p className="text-[12px] font-semibold tracking-[0.25em] uppercase text-accent-warm mb-5">
                /why us
              </p>
              <h2 className="font-serif text-[clamp(2.2rem,4.5vw,3.5rem)] text-foreground leading-[1.08] mb-6">
                We were in your position{" "}
                <em className="text-accent">not that long ago.</em>
              </h2>
              <p className="text-[17px] text-muted leading-[1.7] mb-4">
                Most of the help we got didn&apos;t feel that helpful. Same story
                structures, same strategies, same way of &quot;packaging&quot; people.{" "}
                <strong className="text-foreground">
                  So we did it our own way — and it worked.
                </strong>
              </p>
              <p className="text-[15px] text-muted leading-[1.7] mb-8">
                We&apos;re happy to connect you with previous families we&apos;ve worked with — just ask during your intro call.
              </p>
              <Link
                href="/why-us"
                className="inline-flex items-center gap-2 text-[15px] font-semibold text-accent group"
              >
                Read our story
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <InteractiveImage
                  className="bg-card border border-border rounded-2xl p-7 cursor-pointer"
                  intensity={4}
                  scale={1.02}
                >
                  <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-[22px] text-red-400">
                      close
                    </span>
                  </div>
                  <p className="text-[16px] font-bold text-foreground mb-2">
                    Generic Counseling
                  </p>
                  <p className="text-[14px] text-muted leading-relaxed">
                    Recycled advice, template essays, no real profile development. One-size-fits-all strategies.
                  </p>
                </InteractiveImage>

                <InteractiveImage
                  className="bg-accent text-white rounded-2xl p-7 cursor-pointer"
                  intensity={4}
                  scale={1.02}
                  glowColor="rgba(26, 35, 64, 0.25)"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                    <span
                      className="material-symbols-outlined text-[22px] text-white"
                      style={{
                        fontVariationSettings:
                          "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24",
                      }}
                    >
                      check_circle
                    </span>
                  </div>
                  <p className="text-[16px] font-bold text-white mb-2">
                    Our Approach
                  </p>
                  <p className="text-[14px] text-white/60 leading-relaxed">
                    Build real projects, shape your narrative, work directly with
                    both founders. Personalized to you.
                  </p>
                </InteractiveImage>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== ABOUT PREVIEW ===== */}
      <section className="py-20 lg:py-28 bg-card border-y border-border">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-[12px] font-semibold tracking-[0.25em] uppercase text-accent-warm mb-5">
              /about
            </p>
            <h2 className="font-serif text-[clamp(2.2rem,4.5vw,3.5rem)] text-foreground leading-[1.08] mb-4">
              Two counselors. <em className="text-accent">Real experience.</em>
            </h2>
            <p className="text-[16px] text-muted leading-[1.7] mb-12 max-w-lg">
              Not a faceless agency. Two people who went through this process themselves and built something better.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {counselors.map((c, i) => (
              <ScrollReveal key={c.id} delay={i * 0.12}>
                <InteractiveImage
                  className="bg-background rounded-2xl border border-border p-8 cursor-pointer h-full"
                  intensity={3}
                  scale={1.015}
                >
                  <div className="flex items-start gap-5 mb-5">
                    {/* Photo placeholder */}
                    <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0"
                      style={{
                        background: i === 0
                          ? "linear-gradient(135deg, #2C3E50, #34495E)"
                          : "linear-gradient(135deg, #5B2C6F, #7D3C98)",
                      }}
                    >
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-white text-[20px] font-serif font-semibold">
                          {c.name.split(" ").map((n) => n[0]).join("")}
                        </span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-[18px] font-bold text-foreground">
                        {c.name}
                      </h3>
                      <p className="text-[14px] text-muted">{c.title}</p>
                      <p className="text-[13px] text-accent-warm mt-1 font-semibold">
                        {c.school} · SAT {c.sat}
                      </p>
                    </div>
                  </div>
                  <p className="text-[14px] text-muted leading-[1.7] mb-5">{c.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {c.activities.map((a) => (
                      <span
                        key={a}
                        className="text-[11px] font-semibold px-3 py-1.5 rounded-lg bg-accent-light text-accent"
                      >
                        {a}
                      </span>
                    ))}
                  </div>
                </InteractiveImage>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.2}>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-[15px] font-semibold text-accent group"
            >
              Full bios &amp; backgrounds
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== PROCESS PREVIEW ===== */}
      <section className="py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-[12px] font-semibold tracking-[0.25em] uppercase text-accent-warm mb-5">
              /process
            </p>
            <h2 className="font-serif text-[clamp(2.2rem,4.5vw,3.5rem)] text-foreground leading-[1.08] mb-4">
              Understand. Build. <em className="text-accent">Refine.</em>
            </h2>
            <p className="text-[16px] text-muted leading-[1.7] mb-12 max-w-lg">
              A clear three-step framework that takes you from &quot;I have no idea what to do&quot; to a polished, authentic application.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              {
                num: "01",
                title: "Understand",
                icon: "psychology",
                desc: "We get to know you — your interests, your strengths, and what actually matters to you. Not your resume. You.",
              },
              {
                num: "02",
                title: "Build",
                icon: "rocket_launch",
                desc: "We help you develop real projects and initiatives that fit who you are. Things that make your application genuine, not manufactured.",
              },
              {
                num: "03",
                title: "Refine",
                icon: "edit_note",
                desc: "We shape your narrative, write your essays, position your activities, and make sure every part of your application tells a coherent story.",
              },
            ].map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 0.1}>
                <InteractiveImage
                  className="bg-card border border-border rounded-2xl p-8 cursor-pointer h-full"
                  intensity={3}
                  scale={1.02}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-serif text-[clamp(2rem,4vw,2.5rem)] text-accent/15 leading-none font-bold">
                      {step.num}
                    </span>
                    <span className="material-symbols-outlined text-[22px] text-accent">
                      {step.icon}
                    </span>
                  </div>
                  <h3 className="text-[18px] font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[15px] text-muted leading-[1.7]">
                    {step.desc}
                  </p>
                </InteractiveImage>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 text-[15px] font-semibold text-accent group"
            >
              See our full process
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== TESTIMONIALS PREVIEW ===== */}
      <section className="py-20 lg:py-28 bg-card border-y border-border">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-[12px] font-semibold tracking-[0.25em] uppercase text-accent-warm mb-5">
              /voices
            </p>
            <h2 className="font-serif text-[clamp(2.2rem,4.5vw,3.5rem)] text-foreground leading-[1.08] mb-4">
              From the students{" "}
              <em className="text-accent">we&apos;ve worked with.</em>
            </h2>
            <p className="text-[16px] text-muted leading-[1.7] mb-12 max-w-lg">
              Don&apos;t take our word for it. And if you want to hear it firsthand, we&apos;re happy to connect you with any of our previous clients.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {testimonials.slice(0, 2).map((t, i) => (
              <ScrollReveal key={t.id} delay={i * 0.12}>
                <InteractiveImage
                  className="bg-background border border-border rounded-2xl p-8 cursor-pointer h-full"
                  intensity={3}
                  scale={1.015}
                >
                  <div className="flex gap-1 mb-5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        className="material-symbols-outlined text-[16px] text-accent-warm"
                        style={{
                          fontVariationSettings:
                            "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24",
                        }}
                      >
                        star
                      </span>
                    ))}
                  </div>
                  <p className="font-serif italic text-[18px] text-foreground leading-[1.6] mb-7">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center justify-between pt-5 border-t border-border">
                    <div>
                      <p className="text-[15px] font-semibold text-foreground">
                        {t.name}
                      </p>
                      <p className="text-[13px] text-muted">{t.type}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[11px] text-muted uppercase tracking-wider">
                        Accepted
                      </p>
                      <p className="text-[14px] font-bold text-accent">
                        {t.accepted}
                      </p>
                    </div>
                  </div>
                </InteractiveImage>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.2}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Link
                href="/testimonials"
                className="inline-flex items-center gap-2 text-[15px] font-semibold text-accent group"
              >
                Read all testimonials
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
              <span className="text-border hidden sm:block">|</span>
              <p className="text-[14px] text-muted">
                <span className="material-symbols-outlined text-[16px] align-middle mr-1.5 text-accent-warm">forum</span>
                Want to talk to a past client? Just ask during your intro call.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-accent rounded-3xl px-8 py-16 lg:px-20 lg:py-20 relative overflow-hidden">
              <div className="absolute inset-0 dot-grid-light opacity-10" />
              {/* Decorative circles */}
              <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-white/[0.03]" />
              <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-white/[0.03]" />
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div>
                  <p className="text-[12px] font-semibold tracking-[0.25em] uppercase text-accent-warm mb-5">
                    Get started
                  </p>
                  <h2 className="font-serif text-[clamp(2.2rem,4.5vw,3.2rem)] text-white leading-[1.1] mb-5">
                    Ready to build a profile that actually stands out?
                  </h2>
                  <p className="text-[17px] text-white/50 leading-[1.7] mb-8">
                    Book a free intro call. No pressure, no pitch — just a real
                    conversation about where you are and how we can help. You&apos;ll leave with useful perspective either way.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/book"
                      className="bg-white text-accent text-[15px] font-semibold px-9 py-4 rounded-xl hover:-translate-y-[2px] hover:shadow-xl transition-all duration-300 interactive-lift text-center"
                      style={{ opacity: 1 }}
                    >
                      Book a Free Intro Call
                    </Link>
                    <Link
                      href="/services"
                      className="border-2 border-white/20 text-white text-[15px] font-semibold px-9 py-4 rounded-xl hover:bg-white/10 hover:border-white/30 transition-all duration-300 text-center"
                    >
                      View Services
                    </Link>
                  </div>
                </div>
                <div className="hidden lg:block">
                  <div className="space-y-4">
                    <div className="bg-white/[0.06] rounded-2xl p-6 border border-white/[0.08]">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="material-symbols-outlined text-[22px] text-accent-warm">schedule</span>
                        <p className="text-[15px] font-semibold text-white">20-30 minute call</p>
                      </div>
                      <p className="text-[14px] text-white/40 leading-relaxed">A focused conversation, not a sales pitch. We&apos;ll talk about your goals, your profile, and what support would look like.</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/[0.06] rounded-2xl p-5 border border-white/[0.08]">
                        <span className="material-symbols-outlined text-[20px] text-accent-warm mb-2 block">psychology</span>
                        <p className="text-[13px] font-semibold text-white mb-1">Honest feedback</p>
                        <p className="text-[12px] text-white/35">Even if we&apos;re not the right fit.</p>
                      </div>
                      <div className="bg-white/[0.06] rounded-2xl p-5 border border-white/[0.08]">
                        <span className="material-symbols-outlined text-[20px] text-accent-warm mb-2 block">handshake</span>
                        <p className="text-[13px] font-semibold text-white mb-1">Zero obligation</p>
                        <p className="text-[12px] text-white/35">Walk away with real insight.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
