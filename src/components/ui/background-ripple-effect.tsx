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
          0% { transform: translate(-10%, -10%) scale(1); opacity: 0.25; }
          50% { transform: translate(18%, 15%) scale(1.1); opacity: 0.45; }
          100% { transform: translate(-10%, -10%) scale(1); opacity: 0.25; }
        }
        @keyframes ambientFloatSubtle2 {
          0% { transform: translate(15%, 20%) scale(1.08); opacity: 0.2; }
          50% { transform: translate(-15%, -10%) scale(0.95); opacity: 0.4; }
          100% { transform: translate(15%, 20%) scale(1.08); opacity: 0.2; }
        }
        @keyframes boxOccasionalPulse {
          0%, 100% {
            background-color: transparent;
            border-color: rgba(16, 185, 129, 0.05);
          }
          32% {
            background-color: rgba(16, 185, 129, 0.07);
            border-color: rgba(16, 185, 129, 0.20);
          }
          64% {
            background-color: transparent;
            border-color: rgba(16, 185, 129, 0.05);
          }
        }
      `}</style>

      {/* Very faint ambient light glow (subtle and non-intrusive) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-[12%] -left-[10%] w-[680px] h-[680px] rounded-full bg-emerald-400/06 blur-[160px]"
          style={{ animation: "ambientFloatSubtle1 18s ease-in-out infinite" }}
        />
        <div
          className="absolute top-[25%] -right-[12%] w-[620px] h-[620px] rounded-full bg-teal-400/05 blur-[150px]"
          style={{ animation: "ambientFloatSubtle2 22s ease-in-out infinite" }}
        />
        {/* Soft cursor hover aura */}
        {mousePos && (
          <div
            className="absolute rounded-full pointer-events-none transition-opacity duration-300"
            style={{
              left: mousePos.x,
              top: mousePos.y,
              width: 260,
              height: 260,
              transform: "translate(-50%, -50%)",
              background: "radial-gradient(circle, rgba(16, 185, 129, 0.10) 0%, rgba(16, 185, 129, 0.02) 60%, transparent 80%)",
              filter: "blur(12px)",
            }}
          />
        )}
      </div>

      {/* Full-Bleed Delicate Wireframe Grid with Radial Mask */}
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
              className="relative border-r border-b cursor-pointer transition-colors duration-700 ease-out hover:bg-emerald-500/12 hover:border-emerald-500/35 hover:duration-100"
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
