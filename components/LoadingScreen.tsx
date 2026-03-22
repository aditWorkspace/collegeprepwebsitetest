"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setMounted(true);

    if (sessionStorage.getItem("aa-loaded")) {
      return;
    }

    setShowOverlay(true);

    const interval = setInterval(() => {
      setProgress((p) => {
        const next = p + Math.random() * 14 + 4;
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            sessionStorage.setItem("aa-loaded", "1");
            setShowOverlay(false);
          }, 400);
          return 100;
        }
        return next;
      });
    }, 60);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <>
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
            style={{ background: "#F7F5F2" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col items-center"
            >
              <h1
                className="font-serif italic text-2xl tracking-tight mb-10"
                style={{ color: "#1E2B45" }}
              >
                The Academic Atelier
              </h1>

              <div
                className="w-48 h-[1.5px] rounded-full overflow-hidden"
                style={{ background: "#E7EBF0" }}
              >
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: "#1E2B45" }}
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min(progress, 100)}%` }}
                  transition={{ ease: "easeOut", duration: 0.15 }}
                />
              </div>

              <p
                className="mt-4 text-[11px] tracking-[0.2em] font-light"
                style={{ color: "#6B6F76" }}
              >
                {Math.min(Math.round(progress), 100)}%
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        style={{
          opacity: showOverlay ? 0 : 1,
          transition: "opacity 0.3s ease",
        }}
      >
        {children}
      </div>
    </>
  );
}
