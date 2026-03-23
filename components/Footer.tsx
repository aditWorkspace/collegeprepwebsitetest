import Link from "next/link";
import { footerNav } from "@/data/content";

export default function Footer() {
  return (
    <footer className="bg-accent text-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="text-[22px] font-serif tracking-tight hover:opacity-80 transition-opacity block mb-5 font-semibold"
            >
              Prospectus
            </Link>
            <p className="text-[14px] text-white/40 leading-[1.7] max-w-[280px]">
              Personalized college counseling focused on building real profiles,
              not just polishing applications.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/30 mb-5">
              Explore
            </h4>
            <ul className="space-y-3">
              {footerNav.explore.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[14px] text-white/55 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/30 mb-5">
              Resources
            </h4>
            <ul className="space-y-3">
              {footerNav.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[14px] text-white/55 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/30 mb-5">
              Connect
            </h4>
            <ul className="space-y-3">
              {footerNav.connect.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[14px] text-white/55 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${footerNav.contact.email}`}
                  className="text-[14px] text-white/55 hover:text-white transition-colors"
                >
                  {footerNav.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/8 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-[12px] text-white/25">
            &copy; {new Date().getFullYear()} Prospectus Consulting. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-[12px] text-white/25 hover:text-white/50 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-[12px] text-white/25 hover:text-white/50 transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
