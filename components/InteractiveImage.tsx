"use client";

import { useRef, useState, type ReactNode } from "react";

interface InteractiveImageProps {
  children: ReactNode;
  className?: string;
  intensity?: number; // tilt degrees, default 4
  scale?: number; // hover scale, default 1.03
  glowColor?: string;
}

export default function InteractiveImage({
  children,
  className = "",
  intensity = 4,
  scale = 1.03,
  glowColor = "rgba(26, 35, 64, 0.12)",
}: InteractiveImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    setStyle({
      transform: `perspective(800px) rotateY(${x * intensity}deg) rotateX(${-y * intensity}deg) scale(${scale})`,
      boxShadow: `
        ${-x * 16}px ${y * 16}px 32px ${glowColor},
        0 8px 24px rgba(0, 0, 0, 0.08),
        0 0 0 1px rgba(26, 35, 64, 0.06)
      `,
    });
  };

  const handleMouseLeave = () => {
    setStyle({});
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{
        transition:
          "transform 0.25s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
        willChange: "transform",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
