import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { services } from "@/data/content";

export const metadata: Metadata = {
  title: "Services | The Academic Atelier",
  description: "Our consulting packages: Full Program, Essay Intensive, and Hourly Advising.",
};

export default function ServicesPage() {
  return (
    <div className="pt-[60px]">
      {/* Header */}
      <section className="py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-muted mb-5">
              Services
            </p>
            <h1 className="font-serif text-4xl lg:text-5xl text-foreground leading-[1.12] tracking-tight mb-6">
              Find the right <em className="text-accent">level of support.</em>
            </h1>
            <p className="text-[15px] text-muted leading-relaxed max-w-lg">
              Whether you need end-to-end guidance or targeted essay help,
              we&apos;ll match the level of support to where you actually are.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Service cards */}
      <section className="pb-20 lg:pb-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ScrollReveal key={service.name} delay={i * 0.1}>
                <div
                  className={`rounded-2xl p-8 h-full flex flex-col ${
                    service.highlighted
                      ? "bg-accent text-white border-0"
                      : "bg-card border border-border"
                  }`}
                >
                  {service.highlighted && (
                    <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/50 mb-4">
                      Most Popular
                    </span>
                  )}

                  <h2
                    className={`font-serif text-2xl mb-2 ${
                      service.highlighted ? "text-white" : "text-foreground"
                    }`}
                  >
                    {service.name}
                  </h2>

                  <p
                    className={`text-[13px] leading-relaxed mb-6 ${
                      service.highlighted ? "text-white/60" : "text-muted"
                    }`}
                  >
                    {service.description}
                  </p>

                  <p
                    className={`font-serif text-3xl mb-6 ${
                      service.highlighted ? "text-white" : "text-foreground"
                    }`}
                  >
                    {service.price}
                  </p>

                  <ul className="space-y-2.5 mb-8 flex-1">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <span
                          className={`material-symbols-outlined text-[14px] mt-0.5 shrink-0 ${
                            service.highlighted
                              ? "text-white/60"
                              : "text-accent"
                          }`}
                        >
                          check
                        </span>
                        <span
                          className={`text-[13px] ${
                            service.highlighted
                              ? "text-white/80"
                              : "text-muted"
                          }`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/book"
                    className={`text-[13px] font-medium px-6 py-2.5 rounded-lg text-center transition-all duration-200 hover:-translate-y-[1px] ${
                      service.highlighted
                        ? "bg-white text-accent hover:shadow-lg"
                        : "bg-accent text-white hover:bg-accent-hover"
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="pb-24 lg:pb-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-card border border-border rounded-xl p-7 text-center">
              <p className="text-[14px] text-muted leading-relaxed">
                Not sure which option is right for you?{" "}
                <Link
                  href="/book"
                  className="text-accent font-medium hover:underline"
                >
                  Book a free intro call
                </Link>{" "}
                and we&apos;ll help you figure it out. No pressure, no pitch.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
