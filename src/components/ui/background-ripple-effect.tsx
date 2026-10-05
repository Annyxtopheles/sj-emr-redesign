"use client";

import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface BackgroundRippleEffectProps {
  className?: string;
  borderColor?: string;
  fillColor?: string;
}


export const BackgroundRippleEffect = ({
  className,
  borderColor = "rgba(16, 185, 129, 0.05)",
  fillColor = "transparent",
}: BackgroundRippleEffectProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: -1000, y: -1000 });
  const [isHovered, setIsHovered] = useState(false);
  const fadeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const isInside =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

      if (isInside) {
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
        setIsHovered(true);

        if (fadeTimeoutRef.current) clearTimeout(fadeTimeoutRef.current);
        fadeTimeoutRef.current = setTimeout(() => {
          setIsHovered(false);
        }, 1600);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMove);
      if (fadeTimeoutRef.current) clearTimeout(fadeTimeoutRef.current);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0",
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

      {/* Full-Bleed Infinite Wireframe Grid Lines (Clean, no blur, smoothly dissolves along with the screen showcase) */}
      <div
        className="relative z-0 w-full h-full"
        style={{
          backgroundImage: `
            linear-gradient(to right, ${borderColor} 1px, transparent 1px),
            linear-gradient(to bottom, ${borderColor} 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          maskImage: "linear-gradient(to bottom, black 0%, black 45%, rgba(0,0,0,0.4) 68%, transparent 88%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 45%, rgba(0,0,0,0.4) 68%, transparent 88%)",
        }}
      />

      {/* Prominent Box Outlines Layer: reveals crisp grid lines around cursor with smooth fade-in/fade-out */}
      <div
        className={cn(
          "absolute inset-0 z-0 w-full h-full pointer-events-none transition-opacity duration-700 ease-out",
          isHovered ? "opacity-100" : "opacity-0"
        )}
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(16, 185, 129, 0.26) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(16, 185, 129, 0.26) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          maskImage: `radial-gradient(180px circle at ${mousePos.x}px ${mousePos.y}px, black 15%, transparent 100%)`,
          WebkitMaskImage: `radial-gradient(180px circle at ${mousePos.x}px ${mousePos.y}px, black 15%, transparent 100%)`,
        }}
      />
    </div>
  );
};
