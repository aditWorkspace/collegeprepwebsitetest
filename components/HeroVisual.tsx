"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import InteractiveImage from "./InteractiveImage";

export default function HeroVisual() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 600], [0, -35]);
  const y2 = useTransform(scrollY, [0, 600], [0, -18]);
  const y3 = useTransform(scrollY, [0, 600], [0, -50]);

  return (
    <div className="relative hidden lg:block h-[560px]">
      {/* Essay review card */}
      <motion.div style={{ y: y1 }}>
        <InteractiveImage
          className="absolute top-[20px] left-0 w-[340px] bg-card rounded-xl ambient-shadow-lg z-10 overflow-hidden cursor-pointer border border-border"
          intensity={4}
          scale={1.02}
        >
          <div className="flex items-center gap-2 px-5 py-2.5 border-b border-border bg-cream">
            <div className="flex gap-1.5">
              <span className="w-[7px] h-[7px] rounded-full bg-red-300/80" />
              <span className="w-[7px] h-[7px] rounded-full bg-yellow-300/80" />
              <span className="w-[7px] h-[7px] rounded-full bg-green-300/80" />
            </div>
            <span className="text-[10px] text-muted font-medium ml-1.5 tracking-wide">
              Personal Statement, Draft 3
            </span>
          </div>
          <div className="px-5 py-4 space-y-2.5">
            <p className="text-[12px] text-foreground/80 leading-[1.7]">
              Growing up in a small coastal town, I never imagined that my love
              for{" "}
              <span className="bg-highlight px-1 rounded-sm font-medium">
                marine biology
              </span>{" "}
              would teach me more about community than any textbook ever could.
            </p>
            <p className="text-[12px] text-foreground/50 leading-[1.7]">
              The summer I spent cataloguing tide pool species wasn&apos;t just
              fieldwork,{" "}
              <span className="bg-highlight px-1 rounded-sm">
                it was the first time I felt my curiosity could matter
              </span>
              ...
            </p>
          </div>
        </InteractiveImage>
      </motion.div>

      {/* Mentor feedback bubble */}
      <motion.div
        style={{ y: y3 }}
        className="absolute top-[10px] right-[-10px] z-20"
      >
        <InteractiveImage
          className="w-[200px] bg-accent text-white rounded-xl rounded-bl-sm p-4 cursor-pointer"
          intensity={6}
          scale={1.04}
          glowColor="rgba(26, 35, 64, 0.25)"
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center border border-white/10">
              <span className="text-[9px] font-bold">AM</span>
            </div>
            <span className="text-[10px] font-medium text-white/60">
              Adit
            </span>
          </div>
          <p className="text-[11px] text-white/85 leading-[1.6]">
            &ldquo;Love this opening. Let&apos;s connect the tide pool moment
            back to your research. That&apos;s the thread that ties everything
            together.&rdquo;
          </p>
        </InteractiveImage>
      </motion.div>

      {/* Profile-building card */}
      <motion.div style={{ y: y2 }}>
        <InteractiveImage
          className="absolute top-[250px] left-[200px] w-[280px] bg-card border border-border rounded-xl p-5 cursor-pointer z-10"
          intensity={4}
          scale={1.02}
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="material-symbols-outlined text-[18px] text-accent">rocket_launch</span>
            <p className="text-[12px] font-semibold text-foreground">Project Pipeline</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
              <p className="text-[11px] text-muted">Student-run consulting org, 12 clients served</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
              <p className="text-[11px] text-muted">Financial literacy nonprofit, 200+ students</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
              <p className="text-[11px] text-muted">Market research blog, 15 articles live</p>
            </div>
          </div>
        </InteractiveImage>
      </motion.div>

      {/* Second mentor note */}
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-[120px] right-0 z-10"
      >
        <InteractiveImage
          className="w-[210px] bg-accent text-white rounded-xl rounded-br-sm p-4 cursor-pointer"
          intensity={5}
          scale={1.04}
          glowColor="rgba(26, 35, 64, 0.25)"
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center border border-white/10">
              <span className="text-[9px] font-bold">AN</span>
            </div>
            <span className="text-[10px] font-medium text-white/60">
              Aum
            </span>
          </div>
          <p className="text-[11px] text-white/85 leading-[1.6]">
            &ldquo;This works really well. Let&apos;s make sure your activities
            list tells the same story.&rdquo;
          </p>
        </InteractiveImage>
      </motion.div>

      {/* Dot grid background element */}
      <div className="absolute bottom-0 left-4 right-12 h-[120px] rounded-xl bg-accent-light/40 dot-grid-light opacity-60" />
    </div>
  );
}
