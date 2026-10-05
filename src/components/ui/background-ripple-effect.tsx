"use client";

import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface BackgroundRippleEffectProps {
  className?: string;
  borderColor?: string;
  fillColor?: string;
}

const STATIC_CELLS = Array.from({ length: 420 }, (_, idx) => idx);

// Exactly 7 naturally scattered box positions across the entire grid
const OCCASIONAL_BOX_INDICES = [28, 74, 137, 195, 252, 318, 381];

export const BackgroundRippleEffect = ({
  className,
  borderColor = "rgba(16, 185, 129, 0.05)",
  fillColor = "transparent",
}: BackgroundRippleEffectProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    setMousePos(null);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "absolute inset-0 w-full h-full overflow-hidden pointer-events-auto select-none",
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

      {/* Full-Bleed Delicate Base Wireframe Grid */}
      <div
        className="relative z-10 w-full h-full border-t border-l"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(48px, 1fr))",
          gridAutoRows: "48px",
          borderColor: borderColor,
          maskImage: "radial-gradient(ellipse 85% 70% at 50% 25%, black 20%, rgba(0,0,0,0.45) 55%, transparent 88%)",
          WebkitMaskImage: "radial-gradient(ellipse 85% 70% at 50% 25%, black 20%, rgba(0,0,0,0.45) 55%, transparent 88%)",
        }}
      >
        {STATIC_CELLS.map((idx) => {
          const occasionalIndex = OCCASIONAL_BOX_INDICES.indexOf(idx);
          const isOccasional = occasionalIndex !== -1;
          const delay = isOccasional ? occasionalIndex * 1.35 : 0;

          return (
            <div
              key={idx}
              className="relative border-r border-b cursor-pointer transition-colors duration-700 ease-out hover:border-emerald-500/40 hover:duration-100"
              style={{
                backgroundColor: fillColor,
                borderColor: borderColor,
                animation: isOccasional
                  ? `boxOccasionalPulse 9.5s ease-in-out infinite ${delay}s`
                  : undefined,
              }}
            />
          );
        })}
      </div>

      {/* Prominent Box Outlines Layer: reveals crisp outlines directly around the cursor location */}
      {mousePos && (
        <div
          className="absolute inset-0 z-15 w-full h-full border-t border-l pointer-events-none transition-opacity duration-150"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(48px, 1fr))",
            gridAutoRows: "48px",
            borderColor: "rgba(16, 185, 129, 0.28)",
            maskImage: `radial-gradient(190px circle at ${mousePos.x}px ${mousePos.y}px, black 20%, transparent 100%)`,
            WebkitMaskImage: `radial-gradient(190px circle at ${mousePos.x}px ${mousePos.y}px, black 20%, transparent 100%)`,
          }}
        >
          {STATIC_CELLS.map((idx) => (
            <div
              key={idx}
              className="relative border-r border-b"
              style={{
                borderColor: "rgba(16, 185, 129, 0.28)",
                backgroundColor: "transparent",
              }}
            />
          ))}
        </div>
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
        className="absolute bottom-[6%] left-[30%] w-88 h-64 rounded-full backdrop-blur-[2px] bg-white/20 pointer-events-none z-20"
        aria-hidden="true"
      />
    </div>
  );
};
