"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";

const SCROLL_SPEED = 0.4;
const IMAGE_WIDTH = 340;
const IMAGE_HEIGHT = 200;
const IMAGE_GAP = 14;

const carouselImages = [
  { src: "/carousel/berkeleycampus.jpg", alt: "UC Berkeley" },
  { src: "/carousel/stanfordcampus.webp", alt: "Stanford" },
  { src: "/carousel/nyusterncampus.jpg", alt: "NYU Stern" },
  { src: "/carousel/uchicagocampus.webp", alt: "UChicago" },
  { src: "/carousel/dukecampus.webp", alt: "Duke" },
  { src: "/carousel/uclacampus.webp", alt: "UCLA" },
  { src: "/carousel/whartoncampus.jpeg", alt: "Wharton" },
  { src: "/carousel/utaustincampus.avif", alt: "UT Austin" },
];

export default function ImageCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number>(0);
  const offsetRef = useRef(0);
  const pausedRef = useRef(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  // Triple for seamless loop
  const images = [...carouselImages, ...carouselImages, ...carouselImages];
  const singleSetWidth = carouselImages.length * (IMAGE_WIDTH + IMAGE_GAP);

  const animate = useCallback(() => {
    if (!pausedRef.current && trackRef.current) {
      offsetRef.current -= SCROLL_SPEED;
      if (Math.abs(offsetRef.current) >= singleSetWidth) {
        offsetRef.current += singleSetWidth;
      }
      trackRef.current.style.transform = `translateX(${offsetRef.current}px)`;
    }
    animRef.current = requestAnimationFrame(animate);
  }, [singleSetWidth]);

  useEffect(() => {
    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, [animate]);

  return (
    <div className="w-full overflow-hidden py-6">
      <div
        ref={trackRef}
        className="flex"
        style={{ gap: `${IMAGE_GAP}px`, willChange: "transform" }}
      >
        {images.map((img, i) => {
          const isHovered = hoveredIdx === i;
          return (
            <div
              key={i}
              className="flex-shrink-0 rounded-xl overflow-hidden relative cursor-pointer"
              style={{
                width: IMAGE_WIDTH,
                height: IMAGE_HEIGHT,
                transform: isHovered ? "scale(1.15)" : "scale(1)",
                zIndex: isHovered ? 10 : 1,
                transition: "transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)",
              }}
              onMouseEnter={() => {
                pausedRef.current = true;
                setHoveredIdx(i);
              }}
              onMouseLeave={() => {
                pausedRef.current = false;
                setHoveredIdx(null);
              }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={IMAGE_WIDTH * 2}
                height={IMAGE_HEIGHT * 2}
                className="w-full h-full"
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                  filter: isHovered ? "brightness(1)" : "brightness(0.8)",
                  transition: "filter 0.35s cubic-bezier(0.22, 1, 0.36, 1)",
                }}
                draggable={false}
              />
              {/* School label on hover */}
              <div
                className="absolute inset-x-0 bottom-0 flex items-end justify-center pb-4"
                style={{
                  height: "55%",
                  background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 60%, transparent 100%)",
                  opacity: isHovered ? 1 : 0,
                  transition: "opacity 0.3s ease",
                }}
              >
                <p className="text-white text-[14px] font-bold tracking-wide">
                  {img.alt}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
