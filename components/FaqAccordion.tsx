"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

interface FaqItem {
  question: string;
  answer: string;
}

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {items.map((item, i) => (
        <ScrollReveal key={i} delay={i * 0.05}>
          <div className={`bg-card border rounded-2xl overflow-hidden transition-all duration-300 ${
            openIndex === i ? "border-accent/30 glow-shadow" : "border-border"
          }`}>
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between px-7 py-6 text-left group cursor-pointer"
            >
              <span className="text-[16px] font-semibold text-foreground pr-4 leading-snug">
                {item.question}
              </span>
              <span
                className={`material-symbols-outlined text-[22px] text-muted transition-transform duration-300 shrink-0 ${
                  openIndex === i ? "rotate-180 text-accent" : ""
                }`}
              >
                expand_more
              </span>
            </button>

            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-7 pb-6 border-t border-border pt-5">
                    <p className="text-[15px] text-muted leading-[1.7]">
                      {item.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
