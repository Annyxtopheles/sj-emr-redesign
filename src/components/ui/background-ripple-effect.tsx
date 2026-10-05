"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";
import { cn } from "@/lib/utils";

interface BackgroundRippleEffectProps {
  className?: string;
  borderColor?: string;
  fillColor?: string;
}

export const BackgroundRippleEffect = ({
  className,
  borderColor = "rgba(16, 185, 129, 0.10)",
  fillColor = "rgba(16, 185, 129, 0.015)",
}: BackgroundRippleEffectProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [gridSize, setGridSize] = useState<{ cols: number; rows: number }>({
    cols: 36,
    rows: 14,
  });
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);

  // Dynamically compute columns and rows to ensure 100% edge-to-edge coverage with ZERO gaps
  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const width = containerRef.current.clientWidth || window.innerWidth;
        const height = containerRef.current.clientHeight || 750;
        const targetBoxSize = 50; // pixels per box outline
        const cols = Math.max(10, Math.ceil(width / targetBoxSize));
        const rows = Math.max(8, Math.ceil(height / targetBoxSize));
        setGridSize({ cols, rows });
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const totalCells = useMemo(() => {
    return Array.from({ length: gridSize.cols * gridSize.rows }, (_, idx) => idx);
  }, [gridSize.cols, gridSize.rows]);

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
        @keyframes ambientFloat1 {
          0% { transform: translate(-15%, -10%) scale(1); opacity: 0.45; }
          50% { transform: translate(25%, 20%) scale(1.2); opacity: 0.75; }
          100% { transform: translate(-15%, -10%) scale(1); opacity: 0.45; }
        }
        @keyframes ambientFloat2 {
          0% { transform: translate(20%, 25%) scale(1.15); opacity: 0.4; }
          50% { transform: translate(-20%, -15%) scale(0.95); opacity: 0.7; }
          100% { transform: translate(20%, 25%) scale(1.15); opacity: 0.4; }
        }
        @keyframes boxAmbientPulse {
          0%, 100% {
            background-color: transparent;
            border-color: rgba(16, 185, 129, 0.08);
          }
          50% {
            background-color: rgba(16, 185, 129, 0.06);
            border-color: rgba(16, 185, 129, 0.22);
          }
        }
      `}</style>

      {/* Ambient Looping Lights (drifting continuously throughout in seamless loop) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-[10%] -left-[10%] w-[650px] h-[650px] rounded-full bg-emerald-400/20 blur-[120px]"
          style={{ animation: "ambientFloat1 14s ease-in-out infinite" }}
        />
        <div
          className="absolute top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-teal-400/15 blur-[110px]"
          style={{ animation: "ambientFloat2 18s ease-in-out infinite" }}
        />
        {/* Soft radial cursor glow that follows mouse movement across the grid */}
        {mousePos && (
          <div
            className="absolute rounded-full pointer-events-none transition-opacity duration-300"
            style={{
              left: mousePos.x,
              top: mousePos.y,
              width: 320,
              height: 320,
              transform: "translate(-50%, -50%)",
              background: "radial-gradient(circle, rgba(16, 185, 129, 0.16) 0%, rgba(16, 185, 129, 0.04) 50%, transparent 80%)",
              filter: "blur(10px)",
            }}
          />
        )}
      </div>

      {/* Full-Bleed Box Outlines Grid (Edge-to-edge, zero side gaps) */}
      <div
        className="relative z-10 w-full h-full border-t border-l"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${gridSize.cols}, 1fr)`,
          gridTemplateRows: `repeat(${gridSize.rows}, minmax(46px, 1fr))`,
          borderColor: borderColor,
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0.4) 88%, rgba(0,0,0,0) 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0.4) 88%, rgba(0,0,0,0) 100%)",
        }}
      >
        {totalCells.map((idx) => {
          const row = Math.floor(idx / gridSize.cols);
          const col = idx % gridSize.cols;
          // Staggered continuous diagonal wave animation so boxes breathe in a seamless loop
          const pulseDelay = ((row + col) % 8) * 0.85;

          return (
            <div
              key={idx}
              className="relative border-r border-b cursor-pointer transition-colors duration-700 ease-out hover:bg-emerald-500/20 hover:border-emerald-500/45 hover:shadow-[0_0_14px_rgba(16,185,129,0.22)] hover:duration-75"
              style={{
                backgroundColor: fillColor,
                borderColor: borderColor,
                animation: `boxAmbientPulse 6.8s ease-in-out infinite ${pulseDelay}s`,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
