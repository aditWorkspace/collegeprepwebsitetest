import Link from "next/link";
import { footerNav } from "@/data/content";

export default function Footer() {
  return (
    <footer className="bg-accent text-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="font-serif italic text-xl tracking-tight hover:opacity-80 transition-opacity block mb-4"
            >
              The Academic Atelier
            </Link>
            <p className="text-[13px] text-white/50 leading-relaxed max-w-[260px]">
              Personalized, student-first college consulting. We help you find
              your voice — not replace it.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/40 mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5">
              {footerNav.explore.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/40 mb-4">
              Resources
            </h4>
            <ul className="space-y-2.5">
              {footerNav.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/40 mb-4">
              Connect
            </h4>
            <ul className="space-y-2.5">
              {footerNav.connect.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${footerNav.contact.email}`}
                  className="text-[13px] text-white/60 hover:text-white transition-colors"
                >
                  {footerNav.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-[11px] text-white/30">
            &copy; {new Date().getFullYear()} The Academic Atelier. All rights
            reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link
              href="#"
              className="text-[11px] text-white/30 hover:text-white/60 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-[11px] text-white/30 hover:text-white/60 transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
