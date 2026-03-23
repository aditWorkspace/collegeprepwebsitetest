import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import InteractiveImage from "@/components/InteractiveImage";
import { footerNav } from "@/data/content";

export const metadata: Metadata = {
  title: "Contact | Prospectus Consulting",
  description: "Get in touch with Prospectus Consulting.",
};

export default function ContactPage() {
  return (
    <div className="pt-[64px]">
      <section className="py-16 lg:py-24 dot-grid-light">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-[12px] font-semibold tracking-[0.25em] uppercase text-accent-warm mb-5">/contact</p>
            <h1 className="font-serif text-[clamp(2.5rem,5vw,4rem)] text-foreground leading-[1.08] tracking-tight mb-6">
              Get in <span className="text-accent font-semibold">touch.</span>
            </h1>
            <p className="text-[17px] text-muted leading-[1.7] max-w-lg">
              Have a question before booking? Drop us a line. We typically respond within 24 hours.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-20 lg:pb-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10">
            <ScrollReveal>
              <div className="bg-card border border-border rounded-2xl p-8 lg:p-10">
                <h2 className="text-[18px] font-bold text-foreground mb-7">Send a message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-[13px] font-semibold text-muted block mb-2">Name</label>
                      <input type="text" placeholder="Your name" className="w-full bg-background border border-border rounded-xl px-5 py-3 text-[14px] text-foreground placeholder:text-muted/40 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all" />
                    </div>
                    <div>
                      <label className="text-[13px] font-semibold text-muted block mb-2">Email</label>
                      <input type="email" placeholder="you@email.com" className="w-full bg-background border border-border rounded-xl px-5 py-3 text-[14px] text-foreground placeholder:text-muted/40 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all" />
                    </div>
                  </div>
                  <div>
                    <label className="text-[13px] font-semibold text-muted block mb-2">Student grade level</label>
                    <select className="w-full bg-background border border-border rounded-xl px-5 py-3 text-[14px] text-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all">
                      <option value="">Select...</option>
                      <option>Sophomore</option>
                      <option>Junior</option>
                      <option>Senior</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[13px] font-semibold text-muted block mb-2">Message</label>
                    <textarea rows={5} placeholder="Tell us what you're looking for..." className="w-full bg-background border border-border rounded-xl px-5 py-3 text-[14px] text-foreground placeholder:text-muted/40 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all resize-none" />
                  </div>
                  <button type="submit" className="bg-accent text-white text-[14px] font-semibold px-8 py-3 rounded-xl hover:bg-accent-hover hover:-translate-y-[1px] hover:shadow-md transition-all duration-200">
                    Send Message
                  </button>
                </form>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="space-y-5">
                <InteractiveImage className="bg-card border border-border rounded-2xl p-7 cursor-pointer" intensity={4} scale={1.02}>
                  <h3 className="text-[14px] font-bold text-foreground mb-4">Contact Info</h3>
                  <div className="space-y-3">
                    <a href={`mailto:${footerNav.contact.email}`} className="flex items-center gap-3 text-[14px] text-muted hover:text-accent transition-colors">
                      <span className="material-symbols-outlined text-[20px]">mail</span>
                      {footerNav.contact.email}
                    </a>
                    <div className="flex items-center gap-3 text-[14px] text-muted">
                      <span className="material-symbols-outlined text-[20px]">language</span>
                      {footerNav.contact.location}
                    </div>
                  </div>
                </InteractiveImage>

                <InteractiveImage className="bg-card border border-border rounded-2xl p-7 cursor-pointer" intensity={4} scale={1.02}>
                  <h3 className="text-[14px] font-bold text-foreground mb-3">Prefer to talk?</h3>
                  <p className="text-[13px] text-muted leading-relaxed mb-5">
                    Skip the form. Book a free call directly.
                  </p>
                  <Link href="/book" className="bg-accent text-white text-[13px] font-semibold px-6 py-2.5 rounded-xl hover:bg-accent-hover transition-colors inline-block">
                    Book a Call
                  </Link>
                </InteractiveImage>

                <InteractiveImage className="bg-card border border-border rounded-2xl p-7 cursor-pointer" intensity={4} scale={1.02}>
                  <h3 className="text-[14px] font-bold text-foreground mb-3">Response time</h3>
                  <p className="text-[13px] text-muted leading-relaxed">Within 24 hours on weekdays.</p>
                </InteractiveImage>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
