import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { footerNav } from "@/data/content";

export const metadata: Metadata = {
  title: "Contact | The Academic Atelier",
  description: "Get in touch with The Academic Atelier.",
};

export default function ContactPage() {
  return (
    <div className="pt-[60px]">
      {/* Header */}
      <section className="py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-muted mb-5">
              Contact
            </p>
            <h1 className="font-serif text-4xl lg:text-5xl text-foreground leading-[1.12] tracking-tight mb-6">
              Get in <em className="text-accent">touch.</em>
            </h1>
            <p className="text-[15px] text-muted leading-relaxed max-w-lg">
              Have a question before booking? Drop us a line. We typically
              respond within 24 hours.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24 lg:pb-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12">
            {/* Contact form */}
            <ScrollReveal>
              <div className="bg-card border border-border rounded-2xl p-8">
                <h2 className="text-[16px] font-semibold text-foreground mb-6">
                  Send a message
                </h2>
                {/* REPLACE: Wire up form submission to your email service */}
                <form className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[12px] font-medium text-muted block mb-1.5">
                        Name
                      </label>
                      <input
                        type="text"
                        placeholder="Your name"
                        className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-[13px] text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-[12px] font-medium text-muted block mb-1.5">
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="you@email.com"
                        className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-[13px] text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[12px] font-medium text-muted block mb-1.5">
                      Student grade level
                    </label>
                    <select className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-[13px] text-foreground focus:outline-none focus:border-accent transition-colors">
                      <option value="">Select...</option>
                      <option>Sophomore</option>
                      <option>Junior</option>
                      <option>Senior</option>
                      <option>Transfer</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[12px] font-medium text-muted block mb-1.5">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Tell us a bit about what you're looking for..."
                      className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-[13px] text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-accent text-white text-[13px] font-medium px-7 py-2.5 rounded-lg hover:bg-accent-hover hover:-translate-y-[1px] transition-all duration-200"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </ScrollReveal>

            {/* Sidebar info */}
            <ScrollReveal delay={0.15}>
              <div className="space-y-6">
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-[13px] font-semibold text-foreground mb-4">
                    Contact Info
                  </h3>
                  <div className="space-y-3">
                    <a
                      href={`mailto:${footerNav.contact.email}`}
                      className="flex items-center gap-2.5 text-[13px] text-muted hover:text-accent transition-colors"
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        mail
                      </span>
                      {footerNav.contact.email}
                    </a>
                    <div className="flex items-center gap-2.5 text-[13px] text-muted">
                      <span className="material-symbols-outlined text-[18px]">
                        location_on
                      </span>
                      {footerNav.contact.location}
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-[13px] font-semibold text-foreground mb-3">
                    Prefer to talk?
                  </h3>
                  <p className="text-[12px] text-muted leading-relaxed mb-4">
                    Skip the form and book a call directly. It&apos;s free and
                    there&apos;s no commitment.
                  </p>
                  <Link
                    href="/book"
                    className="bg-accent text-white text-[12px] font-medium px-5 py-2 rounded-lg hover:bg-accent-hover transition-colors inline-block"
                  >
                    Book a Call
                  </Link>
                </div>

                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-[13px] font-semibold text-foreground mb-3">
                    Response time
                  </h3>
                  <p className="text-[12px] text-muted leading-relaxed">
                    We typically respond within 24 hours on weekdays.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
