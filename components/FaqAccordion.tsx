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
    <div className="space-y-3">
      {items.map((item, i) => (
        <ScrollReveal key={i} delay={i * 0.05}>
          <div className="bg-card border border-border rounded-xl overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between px-6 py-5 text-left group cursor-pointer"
            >
              <span className="text-[14px] font-medium text-foreground pr-4 leading-snug">
                {item.question}
              </span>
              <span
                className={`material-symbols-outlined text-[20px] text-muted transition-transform duration-300 shrink-0 ${
                  openIndex === i ? "rotate-180" : ""
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
                  <div className="px-6 pb-5 border-t border-border pt-4">
                    <p className="text-[14px] text-muted leading-relaxed">
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
