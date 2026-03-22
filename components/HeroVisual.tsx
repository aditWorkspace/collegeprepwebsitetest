"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroVisual() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 600], [0, -30]);
  const y2 = useTransform(scrollY, [0, 600], [0, -15]);
  const y3 = useTransform(scrollY, [0, 600], [0, -45]);

  return (
    <div className="relative hidden lg:block h-[520px]">
      {/* Essay review card */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-4 left-0 w-[340px] bg-card border border-border rounded-xl ambient-shadow-lg overflow-hidden"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Header bar */}
        <div className="flex items-center gap-2 px-5 py-3 border-b border-border bg-background">
          <div className="flex gap-1.5">
            <span className="w-2 h-2 rounded-full bg-red-300" />
            <span className="w-2 h-2 rounded-full bg-yellow-300" />
            <span className="w-2 h-2 rounded-full bg-green-300" />
          </div>
          <span className="text-[11px] text-muted ml-2">
            Personal Statement — Draft 3
          </span>
        </div>

        {/* Essay content */}
        <div className="px-5 py-4 space-y-3">
          <p className="text-[12px] text-foreground/80 leading-relaxed">
            Growing up in a small coastal town, I never imagined that my love
            for{" "}
            <span className="bg-highlight px-0.5 rounded-sm">
              marine biology
            </span>{" "}
            would teach me more about community than any textbook ever could.
          </p>
          <p className="text-[12px] text-foreground/80 leading-relaxed">
            The summer I spent cataloguing tide pool species wasn&apos;t just
            scientific fieldwork —{" "}
            <span className="bg-highlight px-0.5 rounded-sm">
              it was the first time I felt my curiosity could actually matter
            </span>
            .
          </p>
          <p className="text-[12px] text-foreground/50 leading-relaxed">
            That realization changed how I approached everything...
          </p>
        </div>
      </motion.div>

      {/* Mentor feedback bubble */}
      <motion.div
        style={{ y: y2 }}
        className="absolute top-[200px] left-[200px] w-[220px] bg-accent text-white rounded-xl rounded-bl-sm p-4 ambient-shadow-lg z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex items-center gap-2 mb-2">
          <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
            <span className="text-[9px] font-semibold">JV</span>
          </div>
          <span className="text-[10px] font-medium text-white/70">
            Dr. Vance
          </span>
        </div>
        <p className="text-[11px] text-white/90 leading-relaxed">
          &ldquo;This is strong. Try linking the tide pool moment directly to
          your research interest — make the connection explicit.&rdquo;
        </p>
      </motion.div>

      {/* Acceptance badge */}
      <motion.div
        style={{ y: y3 }}
        className="absolute top-[60px] right-0 bg-card border border-border rounded-xl p-4 ambient-shadow-lg"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center">
            <span className="material-symbols-outlined text-[18px] text-success">
              check_circle
            </span>
          </div>
          <div>
            <p className="text-[11px] font-medium text-foreground">Accepted</p>
            <p className="text-[10px] text-muted">Yale University &apos;28</p>
          </div>
        </div>
      </motion.div>

      {/* Wide image panel — landscape placeholder */}
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-8 left-4 right-12 h-[140px] bg-warm rounded-xl border border-border overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* REPLACE: Swap for a real landscape image using next/image */}
        <div className="w-full h-full flex items-center justify-center gap-6">
          <div className="flex flex-col items-center gap-1 opacity-30">
            <span className="material-symbols-outlined text-[24px] text-muted">
              photo_camera
            </span>
            <p className="text-[10px] text-muted">Landscape photo</p>
          </div>
        </div>

        {/* Subtle grid texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #111 0.5px, transparent 0.5px)",
            backgroundSize: "16px 16px",
          }}
        />
      </motion.div>

      {/* Floating stat badge */}
      <motion.div
        className="absolute bottom-[170px] right-2 bg-card border border-border rounded-lg px-3.5 py-2.5 ambient-shadow z-10"
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="font-serif text-xl text-accent leading-none">98%</p>
        <p className="text-[9px] text-muted mt-0.5">Top 20 Placement</p>
      </motion.div>
    </div>
  );
}
