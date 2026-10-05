"use client";

import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ProgressiveBlur } from "@/components/ui/ProgressiveBlur";

interface BackgroundRippleEffectProps {
  className?: string;
  borderColor?: string;
  fillColor?: string;
}

// 7 naturally scattered box positions across the hero grid
const OCCASIONAL_BOXES = [
  { top: "14%", left: "12%", delay: 0 },
  { top: "20%", right: "14%", delay: 1.4 },
  { top: "36%", left: "6%", delay: 2.8 },
  { top: "42%", right: "8%", delay: 4.2 },
  { top: "54%", left: "15%", delay: 5.6 },
  { top: "64%", right: "16%", delay: 7.0 },
  { top: "72%", left: "22%", delay: 8.4 },
];

export const BackgroundRippleEffect = ({
  className,
  borderColor = "rgba(16, 185, 129, 0.05)",
  fillColor = "transparent",
}: BackgroundRippleEffectProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      if (
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
      ) {
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      } else {
        setMousePos(null);
      }
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none",
        className
      )}
    >
      <style>{`
        @keyframes ambientFloatSubtle1 {
          0% { transform: translate(-10%, -10%) scale(1); opacity: 0.2; }
          50% { transform: translate(18%, 15%) scale(1.1); opacity: 0.35; }
          100% { transform: translate(-10%, -10%) scale(1); opacity: 0.2; }
        }
        @keyframes ambientFloatSubtle2 {
          0% { transform: translate(15%, 20%) scale(1.08); opacity: 0.15; }
          50% { transform: translate(-15%, -10%) scale(0.95); opacity: 0.3; }
          100% { transform: translate(15%, 20%) scale(1.08); opacity: 0.15; }
        }
        @keyframes boxOccasionalPulse {
          0%, 100% {
            background-color: transparent;
            border-color: rgba(16, 185, 129, 0.05);
          }
          32% {
            background-color: rgba(16, 185, 129, 0.07);
            border-color: rgba(16, 185, 129, 0.22);
          }
          64% {
            background-color: transparent;
            border-color: rgba(16, 185, 129, 0.05);
          }
        }
      `}</style>

      {/* Very faint ambient light glow (subtle and non-intrusive, no cursor blob) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-[12%] -left-[10%] w-[680px] h-[680px] rounded-full bg-emerald-400/05 blur-[160px]"
          style={{ animation: "ambientFloatSubtle1 18s ease-in-out infinite" }}
        />
        <div
          className="absolute top-[25%] -right-[12%] w-[620px] h-[620px] rounded-full bg-teal-400/04 blur-[150px]"
          style={{ animation: "ambientFloatSubtle2 22s ease-in-out infinite" }}
        />
      </div>

      {/* Full-Bleed Infinite Wireframe Grid Lines (No finite cell limits, fades out smoothly toward bottom) */}
      <div
        className="relative z-10 w-full h-full border-t border-l"
        style={{
          backgroundImage: `
            linear-gradient(to right, ${borderColor} 1px, transparent 1px),
            linear-gradient(to bottom, ${borderColor} 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          maskImage: "linear-gradient(to bottom, black 0%, black 65%, rgba(0,0,0,0.5) 82%, transparent 98%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 65%, rgba(0,0,0,0.5) 82%, transparent 98%)",
        }}
      >
        {OCCASIONAL_BOXES.map((box, idx) => (
          <div
            key={idx}
            className="absolute w-[48px] h-[48px] border transition-colors duration-700 ease-out"
            style={{
              top: box.top,
              left: box.left,
              right: box.right,
              backgroundColor: fillColor,
              borderColor: borderColor,
              animation: `boxOccasionalPulse 9.5s ease-in-out infinite ${box.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Prominent Box Outlines Layer: reveals crisp grid lines directly around the cursor location */}
      {mousePos && (
        <div
          className="absolute inset-0 z-15 w-full h-full border-t border-l pointer-events-none transition-opacity duration-150"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(16, 185, 129, 0.28) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(16, 185, 129, 0.28) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
            maskImage: `radial-gradient(190px circle at ${mousePos.x}px ${mousePos.y}px, black 20%, transparent 100%)`,
            WebkitMaskImage: `radial-gradient(190px circle at ${mousePos.x}px ${mousePos.y}px, black 20%, transparent 100%)`,
          }}
        />
      )}

      {/* Selective Soft Blur Patches (softens and blurs grid outlines at organic intervals) */}
      <div
        className="absolute top-[8%] left-[10%] w-80 h-72 rounded-full backdrop-blur-[2.5px] bg-white/20 pointer-events-none z-20"
        aria-hidden="true"
      />
      <div
        className="absolute top-[32%] right-[8%] w-96 h-80 rounded-full backdrop-blur-[3px] bg-white/25 pointer-events-none z-20"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[10%] left-[30%] w-88 h-64 rounded-full backdrop-blur-[2px] bg-white/20 pointer-events-none z-20"
        aria-hidden="true"
      />

      {/* Progressive blur vanishing smoothly at the bottom edge, in sync with the screen showcase */}
      <ProgressiveBlur position="bottom" height="26%" tint="light" className="z-25" />
    </div>
  );
};
