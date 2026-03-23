import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import InteractiveImage from "@/components/InteractiveImage";
import { counselors } from "@/data/content";

export const metadata: Metadata = {
  title: "About | Prospectus Consulting",
  description: "Meet the founders behind Prospectus Consulting.",
};

export default function AboutPage() {
  return (
    <div className="pt-[64px]">
      {/* Header */}
      <section className="py-16 lg:py-24 dot-grid-light">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-[12px] font-semibold tracking-[0.25em] uppercase text-accent-warm mb-5">
              /about
            </p>
            <h1 className="font-serif text-[clamp(2.5rem,5vw,4rem)] text-foreground leading-[1.08] tracking-tight mb-6">
              The people behind <span className="text-accent font-semibold">Prospectus.</span>
            </h1>
            <p className="text-[17px] text-muted leading-[1.7] max-w-lg">
              We&apos;re not a large agency with rotating staff. We&apos;re two people who went through this process ourselves, learned what actually works, and built Verge around that experience. Every student works directly with both of us throughout the entire process.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Founders */}
      <section className="pb-16 lg:pb-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 space-y-10">
          {counselors.map((c, i) => (
            <ScrollReveal key={c.id} delay={i * 0.1}>
              <InteractiveImage
                className="bg-card border border-border rounded-3xl overflow-hidden cursor-pointer"
                intensity={2}
                scale={1.008}
              >
                <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-0">
                  {/* Photo column */}
                  <div className="min-h-[240px] lg:min-h-[400px] relative overflow-hidden">
                    <Image
                      src={c.image!}
                      alt={c.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-10">
                    <div className="mb-7">
                      <div className="flex items-center gap-4 mb-1">
                        <h2 className="font-serif text-[clamp(1.5rem,3vw,2rem)] text-foreground">
                          {c.name}
                        </h2>
                        <a
                          href={c.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-lg bg-accent-light flex items-center justify-center hover:bg-accent hover:text-white text-accent transition-all duration-200 shrink-0"
                          aria-label={`${c.name}'s LinkedIn`}
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                        </a>
                      </div>
                      <p className="text-[15px] text-muted">{c.title}</p>
                      <p className="text-[13px] text-accent-warm mt-1 font-semibold">
                        {c.school} · SAT {c.sat}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-7">
                      {c.activities.map((a) => (
                        <span key={a} className="text-[11px] font-bold px-3 py-1.5 rounded-lg bg-accent-light text-accent">
                          {a}
                        </span>
                      ))}
                    </div>

                    <div className="grid grid-cols-1 gap-5 mb-7 py-6 border-y border-border">
                      <div>
                        <p className="text-[11px] uppercase tracking-[0.15em] text-muted mb-1.5 font-semibold">
                          Admitted To
                        </p>
                        <p className="text-[15px] font-semibold text-foreground">
                          {c.admittedTo.join(", ")}
                        </p>
                      </div>
                    </div>

                    <p className="text-[15px] text-muted leading-[1.7]">{c.bio}</p>
                  </div>
                </div>
              </InteractiveImage>
            </ScrollReveal>
          ))}
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
                  Want to learn more about how we work?
                </h2>
                <p className="text-[16px] text-white/45 mb-8 max-w-md mx-auto leading-relaxed">
                  The best way is a free 30-minute intro call. We&apos;ll walk you through our experience, learn about your situation, and help you figure out if we&apos;d be a good fit. You can also reach out with any questions beforehand.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link
                    href="/book"
                    className="bg-white text-accent text-[15px] font-semibold px-9 py-4 rounded-xl hover:-translate-y-[2px] hover:shadow-xl transition-all duration-300 interactive-lift"
                    style={{ opacity: 1 }}
                  >
                    Book an Intro Call
                  </Link>
                  <Link
                    href="/contact"
                    className="border-2 border-white/20 text-white text-[15px] font-semibold px-9 py-4 rounded-xl hover:bg-white/10 hover:border-white/30 transition-all duration-300"
                  >
                    Ask Us a Question
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
