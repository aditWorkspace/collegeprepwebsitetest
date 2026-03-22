import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { consultants } from "@/data/content";

export const metadata: Metadata = {
  title: "About | The Academic Atelier",
  description: "Meet the mentors behind The Academic Atelier.",
};

export default function AboutPage() {
  return (
    <div className="pt-[60px]">
      {/* Header */}
      <section className="py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-muted mb-5">
              About
            </p>
            <h1 className="font-serif text-4xl lg:text-5xl text-foreground leading-[1.12] tracking-tight mb-6">
              The people behind <em className="text-accent">the work.</em>
            </h1>
            <p className="text-[15px] text-muted leading-relaxed max-w-lg">
              We&apos;re not a faceless agency. We&apos;re two people who care
              deeply about helping students tell their real stories — because
              we&apos;ve been through the process ourselves.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Founders */}
      <section className="pb-24 lg:pb-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 space-y-8">
          {consultants.map((c, i) => (
            <ScrollReveal key={c.id} delay={i * 0.1}>
              <div className="bg-card border border-border rounded-2xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-0">
                  {/* Photo column */}
                  <div className="bg-warm flex items-center justify-center p-10 lg:p-0 lg:min-h-[360px]">
                    {c.image ? (
                      // REPLACE: Use next/image when you have real photos
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={c.image}
                        alt={c.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="flex flex-col items-center gap-2 opacity-30">
                        <span className="material-symbols-outlined text-[48px] text-muted">
                          person
                        </span>
                        <p className="text-[11px] text-muted">
                          Add photo
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Content column */}
                  <div className="p-8 lg:p-10">
                    <div className="mb-6">
                      <h2 className="font-serif text-2xl text-foreground mb-1">
                        {c.name}
                      </h2>
                      <p className="text-[14px] text-muted">{c.title}</p>
                      <p className="text-[12px] text-muted mt-1">
                        {c.degree}, {c.school}
                      </p>
                    </div>

                    {/* Specialties */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {c.specialties.map((s) => (
                        <span
                          key={s}
                          className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-accent-light text-accent"
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    {/* Stats grid */}
                    <div className="grid grid-cols-2 gap-4 mb-6 py-5 border-y border-border">
                      <div>
                        <p className="text-[11px] uppercase tracking-[0.1em] text-muted mb-1">
                          Test Scores
                        </p>
                        <p className="text-[13px] font-medium text-foreground">
                          {c.sat}
                        </p>
                      </div>
                      <div>
                        <p className="text-[11px] uppercase tracking-[0.1em] text-muted mb-1">
                          Admitted To
                        </p>
                        <p className="text-[13px] font-medium text-foreground">
                          {c.admittedTo.join(", ")}
                        </p>
                      </div>
                    </div>

                    {/* Bio */}
                    <p className="text-[14px] text-muted leading-relaxed mb-5 italic">
                      {c.bio}
                    </p>

                    {/* Highlights */}
                    <ul className="space-y-2">
                      {c.highlights.map((h, j) => (
                        <li key={j} className="flex items-start gap-2.5">
                          <span className="material-symbols-outlined text-[14px] text-accent mt-0.5 shrink-0">
                            arrow_forward
                          </span>
                          <span className="text-[13px] text-muted">
                            {h}
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
      </section>

      {/* CTA */}
      <section className="pb-24 lg:pb-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <p className="text-[15px] text-muted mb-6">
              Want to get to know us better?
            </p>
            <Link
              href="/book"
              className="bg-accent text-white text-[13px] font-medium px-7 py-3 rounded-lg hover:bg-accent-hover hover:-translate-y-[1px] transition-all duration-200"
            >
              Book an Intro Call
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
