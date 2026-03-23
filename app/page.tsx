import Link from "next/link";
import Image from "next/image";
import { counselors, testimonials } from "@/data/content";
import ScrollReveal from "@/components/ScrollReveal";
import HeroVisual from "@/components/HeroVisual";
import InteractiveImage from "@/components/InteractiveImage";
import ImageCarousel from "@/components/ImageCarousel";

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative min-h-[90vh] flex items-center pt-[60px] dot-grid-light">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 w-full py-16 lg:py-0 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <div className="flex flex-col gap-6 max-w-xl">
            <p className="text-[12px] font-semibold tracking-[0.25em] uppercase text-accent-warm mb-1">
              College Profile Building
            </p>

            <h1 className="font-serif text-[clamp(2.8rem,6vw,4.5rem)] leading-[1.05] tracking-tight text-foreground text-balance mt-1">
              We help students find their story.
              <br />
            </h1>

            <p className="text-[17px] lg:text-[18px] text-muted leading-[1.7] max-w-md">
Before we touch your essays, we find your thesis. Every activity, project, and personal statement then becomes evidence for the same argument: here is who I am, and here is why it matters.            </p>
            <p className="text-[15px] text-muted leading-[1.7] max-w-md">
              Both founders work directly with every student, and we keep our roster to fewer than ten students each cycle so we can give each one the attention they need.
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
                {counselors.map((c, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-background overflow-hidden"
                  >
                    <Image
                      src={c.image!}
                      alt={c.name}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <p className="text-[14px] text-muted leading-snug">
                Founded by students from{" "}
                <span className="font-semibold text-foreground">
                  UC Berkeley Haas + CS
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
      <section className="bg-card/60 border-y border-border/40 mt-4">
        <ImageCarousel />
      </section>

      {/* ===== WHY PREVIEW ===== */}
      <section className="py-16 lg:py-24 dot-grid-light">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <ScrollReveal>
              <p className="text-[12px] font-semibold tracking-[0.25em] uppercase text-accent-warm mb-5">
                /why us
              </p>
              <h2 className="font-serif text-[clamp(2.2rem,4.5vw,3.5rem)] text-foreground leading-[1.08] mb-6">
                We were in your position{" "}
                <span className="text-accent font-semibold">not that long ago.</span>
              </h2>
              <p className="text-[17px] text-muted leading-[1.7] mb-4">
                Most of the help we got felt generic. Same story structures, same strategies, same way of &quot;packaging&quot; people. We stopped relying on that and did it our own way, focusing on projects and interests we genuinely cared about, with a story that didn&apos;t feel forced. That approach worked, and it&apos;s what we bring to every student we work with.
              </p>
              <p className="text-[15px] text-muted leading-[1.7] mb-4">
                We&apos;ve seen firsthand how much of a difference it makes when someone helps you build real substance for your application rather than just polishing what you already have. For example, one student we worked with was interested in environmental science but had no standout activities in that area. We helped her launch a water quality testing initiative in her community. It started as an idea in our first conversation and became a central part of her application.
              </p>
              <p className="text-[14px] text-muted leading-[1.7] mb-8">
                We&apos;re happy to connect you with previous families we&apos;ve worked with. Just ask during your intro call and we&apos;ll set up a private conversation.
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
                    Large services typically assign you to a junior counselor, use template strategies, and focus almost entirely on essay editing. The advice tends to be the same regardless of who you are.
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
                    We work directly with every student, no junior staff, no hand-offs. We help you build real projects, develop your narrative, and present a profile that&apos;s genuinely yours.
                  </p>
                </InteractiveImage>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== ABOUT PREVIEW ===== */}
      <section className="py-16 lg:py-24 bg-card border-y border-border">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <ScrollReveal>
              <p className="text-[12px] font-semibold tracking-[0.25em] uppercase text-accent-warm mb-5">
                /about
              </p>
              <h2 className="font-serif text-[clamp(2.2rem,4.5vw,3.5rem)] text-foreground leading-[1.08] mb-4">
                Two counselors. <span className="text-accent font-semibold">Real experience.</span>
              </h2>
              <p className="text-[16px] text-muted leading-[1.7] mb-4">
                We&apos;re not a large agency with rotating staff. We&apos;re two people who went through this process ourselves, learned what actually works, and built a service around that experience. Every student gets assigned a primary counselor, but both of us stay involved throughout the entire process and both review every application before submission.
              </p>
              <p className="text-[15px] text-muted leading-[1.7] mb-8">
                You can also request to work with either of us on any specific area. We&apos;re flexible and want to make sure you get the best support possible.
              </p>
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

            <ScrollReveal delay={0.15}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {counselors.map((c) => (
                  <InteractiveImage
                    key={c.id}
                    className="bg-background rounded-2xl border border-border p-6 cursor-pointer"
                    intensity={4}
                    scale={1.02}
                  >
                    <div className="w-14 h-14 rounded-xl overflow-hidden mb-4">
                      <Image
                        src={c.image!}
                        alt={c.name}
                        width={112}
                        height={112}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-[16px] font-bold text-foreground mb-1">{c.name}</h3>
                    <p className="text-[13px] text-accent-warm font-semibold mb-3">{c.school}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {c.activities.slice(0, 3).map((a) => (
                        <span
                          key={a}
                          className="text-[10px] font-semibold px-2.5 py-1 rounded-md bg-accent-light text-accent"
                        >
                          {a}
                        </span>
                      ))}
                    </div>
                  </InteractiveImage>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== PROCESS PREVIEW ===== */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-[12px] font-semibold tracking-[0.25em] uppercase text-accent-warm mb-5">
              /process
            </p>
            <h2 className="font-serif text-[clamp(2.2rem,4.5vw,3.5rem)] text-foreground leading-[1.08] mb-4">
              Understand. Build. <span className="text-accent font-semibold">Refine.</span>
            </h2>
            <p className="text-[16px] text-muted leading-[1.7] mb-12 max-w-lg">
              Our process is designed to take you from &quot;I don&apos;t know where to start&quot; to a polished, authentic application. We work through three phases, each building on the last, so that by the time you submit, every part of your application tells a coherent story.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              {
                num: "01",
                title: "Understand",
                icon: "psychology",
                desc: "We start by getting to know you deeply: your interests, strengths, and what genuinely excites you. This isn't a surface-level intake form. We have real conversations about who you are, what you care about, and where the gaps are in your current profile. You'll be assigned a primary counselor, but both founders are involved from day one.",
              },
              {
                num: "02",
                title: "Build",
                icon: "rocket_launch",
                desc: "This is the step most counselors skip. We help you create meaningful projects and experiences, whether that's a business initiative, a nonprofit organization, or something built around an interest you already have. The goal is genuine substance, not checkbox activities.",
              },
              {
                num: "03",
                title: "Refine",
                icon: "edit_note",
                desc: "Once your profile has real depth, we shape how you present it. We craft your essays, position your activities list, and develop your narrative so every part of your application tells a coherent story. Both founders review everything before submission.",
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
      <section className="py-16 lg:py-24 bg-card border-y border-border">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-[12px] font-semibold tracking-[0.25em] uppercase text-accent-warm mb-5">
              /voices
            </p>
            <h2 className="font-serif text-[clamp(2.2rem,4.5vw,3.5rem)] text-foreground leading-[1.08] mb-4">
              From the students{" "}
              <span className="text-accent font-semibold">we&apos;ve worked with.</span>
            </h2>
            <p className="text-[16px] text-muted leading-[1.7] mb-12 max-w-lg">
              These are real experiences from families we&apos;ve worked with. If you want to hear it firsthand before making a decision, we&apos;re happy to connect you with any of our previous clients. Just ask during your intro call and we&apos;ll set up a private conversation.
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
                  <p className="font-serif text-[18px] text-foreground leading-[1.6] mb-7">
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
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-accent rounded-3xl px-8 py-14 lg:px-20 lg:py-16 relative overflow-hidden">
              <div className="absolute inset-0 dot-grid-light opacity-10" />
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div>
                  <p className="text-[12px] font-semibold tracking-[0.25em] uppercase text-accent-warm mb-5">
                    Get started
                  </p>
                  <h2 className="font-serif text-[clamp(2.2rem,4.5vw,3.2rem)] text-white leading-[1.1] mb-5">
                    Want to learn more about what we do?
                  </h2>
                  <p className="text-[17px] text-white/50 leading-[1.7] mb-8">
                    Book a free 30-minute intro call so we can learn about your situation, walk you through our services, and help you figure out if we&apos;d be a good fit. No commitment, and you&apos;ll walk away with useful perspective either way.
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
                      href="/contact"
                      className="border-2 border-white/20 text-white text-[15px] font-semibold px-9 py-4 rounded-xl hover:bg-white/10 hover:border-white/30 transition-all duration-300 text-center"
                    >
                      Ask Us a Question
                    </Link>
                  </div>
                </div>
                <div className="hidden lg:block">
                  <div className="space-y-4">
                    <div className="bg-white/[0.06] rounded-2xl p-6 border border-white/[0.08]">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="material-symbols-outlined text-[22px] text-accent-warm">schedule</span>
                        <p className="text-[15px] font-semibold text-white">30 minute call</p>
                      </div>
                      <p className="text-[14px] text-white/40 leading-relaxed">We&apos;ll learn about your background, walk you through how we work, and help you figure out if our approach is the right fit for your goals.</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/[0.06] rounded-2xl p-5 border border-white/[0.08]">
                        <span className="material-symbols-outlined text-[20px] text-accent-warm mb-2 block">psychology</span>
                        <p className="text-[13px] font-semibold text-white mb-1">Straightforward</p>
                        <p className="text-[12px] text-white/35">We&apos;ll be upfront about what we can and can&apos;t help with.</p>
                      </div>
                      <div className="bg-white/[0.06] rounded-2xl p-5 border border-white/[0.08]">
                        <span className="material-symbols-outlined text-[20px] text-accent-warm mb-2 block">handshake</span>
                        <p className="text-[13px] font-semibold text-white mb-1">Zero obligation</p>
                        <p className="text-[12px] text-white/35">Walk away with real insight regardless.</p>
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
