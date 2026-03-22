"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

const SCROLL_SPEED = 0.5; // px per frame
const IMAGE_WIDTH = 320;
const IMAGE_GAP = 16;

// Placeholder school images — replace src values with real photos
const carouselImages = [
  { src: "/carousel/school-1.jpg", alt: "Campus architecture" },
  { src: "/carousel/school-2.jpg", alt: "University quad" },
  { src: "/carousel/school-3.jpg", alt: "Library interior" },
  { src: "/carousel/school-4.jpg", alt: "College campus" },
  { src: "/carousel/school-5.jpg", alt: "Student life" },
  { src: "/carousel/school-6.jpg", alt: "Graduation ceremony" },
  { src: "/carousel/school-7.jpg", alt: "Campus at sunset" },
  { src: "/carousel/school-8.jpg", alt: "Research lab" },
];

export default function ImageCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number>(0);
  const offsetRef = useRef(0);
  const [paused, setPaused] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  // Triple the images for seamless looping
  const images = [...carouselImages, ...carouselImages, ...carouselImages];
  const singleSetWidth = carouselImages.length * (IMAGE_WIDTH + IMAGE_GAP);

  const animate = useCallback(() => {
    if (!paused && trackRef.current) {
      offsetRef.current -= SCROLL_SPEED;
      if (Math.abs(offsetRef.current) >= singleSetWidth) {
        offsetRef.current += singleSetWidth;
      }
      trackRef.current.style.transform = `translateX(${offsetRef.current}px)`;
    }
    animRef.current = requestAnimationFrame(animate);
  }, [paused, singleSetWidth]);

  useEffect(() => {
    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, [animate]);

  return (
    <div className="w-full overflow-hidden py-2">
      <div
        ref={trackRef}
        className="flex"
        style={{ gap: `${IMAGE_GAP}px`, willChange: "transform" }}
      >
        {images.map((img, i) => {
          const isHovered = hoveredIdx === i;
          return (
            <motion.div
              key={i}
              className="flex-shrink-0 rounded-2xl overflow-hidden relative cursor-pointer"
              style={{ width: IMAGE_WIDTH, height: 200 }}
              onMouseEnter={() => {
                setPaused(true);
                setHoveredIdx(i);
              }}
              onMouseLeave={() => {
                setPaused(false);
                setHoveredIdx(null);
              }}
              animate={{
                scale: isHovered ? 1.06 : 1,
                filter: isHovered ? "brightness(1)" : "brightness(0.85)",
              }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Placeholder gradient — replace with <Image> when you add real photos */}
              <div
                className="w-full h-full"
                style={{
                  background: `linear-gradient(${135 + (i % carouselImages.length) * 25}deg,
                    ${["#2C3E50", "#34495E", "#5B2C6F", "#1A2340", "#2d4b43", "#462721", "#1e3a5f", "#3d1f56"][i % carouselImages.length]},
                    ${["#4A6741", "#5D7B6F", "#9B59B6", "#2C3A5C", "#4a7c6c", "#8B4513", "#2980B9", "#6C3483"][i % carouselImages.length]})`,
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <span className="material-symbols-outlined text-white/20 text-[40px] block mb-2">school</span>
                    <p className="text-white/30 text-[11px] font-medium tracking-wide">{img.alt}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
