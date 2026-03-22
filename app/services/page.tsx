import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import InteractiveImage from "@/components/InteractiveImage";
import { services } from "@/data/content";

export const metadata: Metadata = {
  title: "Services | Vergre Consulting",
  description: "Hourly packages with full access to both founders. Profile building, project development, and essay support.",
};

export default function ServicesPage() {
  return (
    <div className="pt-[64px]">
      <section className="py-20 lg:py-28 dot-grid-light">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-[12px] font-semibold tracking-[0.25em] uppercase text-accent-warm mb-5">/services</p>
            <h1 className="font-serif text-[clamp(2.5rem,5vw,4rem)] text-foreground leading-[1.08] tracking-tight mb-6">
              Simple pricing. <em className="text-accent">Real support.</em>
            </h1>
            <p className="text-[17px] text-muted leading-[1.7] max-w-lg">
              Both packages include full access to both founders. No interns,
              no hand-offs — just direct, personal support for building your
              profile and crafting your application.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-20 lg:pb-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <ScrollReveal key={service.name} delay={i * 0.1}>
                <InteractiveImage
                  className={`rounded-2xl p-8 h-full flex flex-col cursor-pointer ${
                    service.highlighted ? "bg-accent text-white" : "bg-card border border-border"
                  }`}
                  intensity={3}
                  scale={1.02}
                  glowColor={service.highlighted ? "rgba(26,35,64,0.3)" : undefined}
                >
                  {service.highlighted && (
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent-warm mb-5">Most Popular</span>
                  )}
                  <h2 className={`font-serif text-[clamp(1.5rem,3vw,2rem)] mb-3 ${service.highlighted ? "text-white" : "text-foreground"}`}>
                    {service.name}
                  </h2>
                  <p className={`text-[15px] leading-[1.7] mb-7 ${service.highlighted ? "text-white/55" : "text-muted"}`}>
                    {service.description}
                  </p>
                  <p className={`font-serif text-[clamp(2rem,4vw,2.5rem)] mb-7 font-semibold ${service.highlighted ? "text-white" : "text-foreground"}`}>
                    {service.price}
                  </p>
                  <ul className="space-y-3 mb-8 flex-1">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <span className={`material-symbols-outlined text-[16px] mt-0.5 shrink-0 ${service.highlighted ? "text-accent-warm" : "text-accent"}`}>check</span>
                        <span className={`text-[14px] ${service.highlighted ? "text-white/75" : "text-muted"}`}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/book" className={`text-[15px] font-semibold px-7 py-3.5 rounded-xl text-center transition-all duration-200 hover:-translate-y-[1px] ${
                    service.highlighted ? "bg-white text-accent hover:shadow-lg" : "bg-accent text-white hover:bg-accent-hover"
                  }`}>
                    Get Started
                  </Link>
                </InteractiveImage>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="pb-20 lg:pb-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="accent-line-center w-16 mx-auto mb-8" />
            <h2 className="font-serif text-[clamp(1.8rem,3vw,2.5rem)] text-foreground mb-4 text-center">
              What you get with both packages.
            </h2>
            <p className="text-[16px] text-muted text-center mb-12 max-w-lg mx-auto leading-relaxed">
              Every student gets the same level of personal attention and direct access.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { icon: "group", title: "Both founders, directly", desc: "You're never working with someone we hired — you're working with us. Every session, every review." },
              { icon: "rocket_launch", title: "Project development", desc: "We help you build real projects and initiatives, not just write about ones that already exist." },
              { icon: "edit_note", title: "Full essay support", desc: "From brainstorming to final draft. Every essay reviewed by both of us before submission." },
              { icon: "psychology", title: "Profile strategy", desc: "We help you figure out what's missing and what to build to make your application whole." },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.08}>
                <InteractiveImage className="bg-card border border-border rounded-2xl p-7 cursor-pointer h-full" intensity={4} scale={1.02}>
                  <div className="w-10 h-10 rounded-xl bg-accent-light flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-[22px] text-accent">{item.icon}</span>
                  </div>
                  <h3 className="text-[16px] font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-[14px] text-muted leading-relaxed">{item.desc}</p>
                </InteractiveImage>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="pb-24 lg:pb-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-accent rounded-3xl px-8 py-14 lg:px-16 lg:py-16 text-center relative overflow-hidden">
              <div className="absolute inset-0 dot-grid-light opacity-10" />
              <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-white/[0.03]" />
              <div className="relative z-10">
                <h2 className="font-serif text-[clamp(1.8rem,3.5vw,2.5rem)] text-white mb-4">
                  Not sure which package fits?
                </h2>
                <p className="text-[16px] text-white/45 mb-8 max-w-md mx-auto leading-relaxed">
                  Book a free intro call and we&apos;ll help you figure out which option makes the most sense for where you are in the process.
                </p>
                <Link
                  href="/book"
                  className="bg-white text-accent text-[15px] font-semibold px-9 py-4 rounded-xl hover:-translate-y-[2px] hover:shadow-xl transition-all duration-300 interactive-lift inline-block"
                  style={{ opacity: 1 }}
                >
                  Book a Free Intro Call
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
