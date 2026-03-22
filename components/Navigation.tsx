"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/data/content";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[rgba(245,243,238,0.95)] backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 lg:px-8 flex items-center justify-between h-[64px]">
        {/* Logo */}
        <Link
          href="/"
          className="font-serif italic text-[19px] text-accent tracking-tight select-none hover:opacity-70 transition-opacity font-semibold"
        >
          Vergre
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[13px] font-medium transition-all duration-200 ${
                pathname === link.href
                  ? "text-accent font-semibold"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center">
          <Link
            href="/book"
            className="bg-accent text-white text-[13px] font-semibold px-6 py-2.5 rounded-xl hover:bg-accent-hover hover:-translate-y-[1px] hover:shadow-md transition-all duration-200"
          >
            Book a Call
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="lg:hidden flex flex-col gap-[5px] p-2 -mr-2"
        >
          <span
            className={`block w-5 h-[2px] bg-accent transition-all duration-300 origin-center ${
              menuOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block w-5 h-[2px] bg-accent transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-[2px] bg-accent transition-all duration-300 origin-center ${
              menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden bg-card border-b border-border overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[16px] font-medium transition-colors ${
                    pathname === link.href
                      ? "text-accent font-semibold"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-4 pt-3 border-t border-border">
                <Link
                  href="/testimonials"
                  className="text-[16px] font-medium text-muted hover:text-foreground transition-colors"
                >
                  Testimonials
                </Link>
                <Link
                  href="/faq"
                  className="text-[16px] font-medium text-muted hover:text-foreground transition-colors"
                >
                  FAQ
                </Link>
                <Link
                  href="/contact"
                  className="text-[16px] font-medium text-muted hover:text-foreground transition-colors"
                >
                  Contact
                </Link>
              </div>
              <Link
                href="/book"
                className="bg-accent text-white text-[15px] font-semibold px-6 py-3.5 rounded-xl text-center mt-2"
              >
                Book a Call
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
