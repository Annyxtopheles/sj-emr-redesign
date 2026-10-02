"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface ProgressiveBlurProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  height?: string;
  position?: "top" | "bottom" | "left" | "right" | "both";
  blurLevels?: number[];
  tint?: "light" | "dark" | "none";
}

export function ProgressiveBlur({
  className,
  height = "35%",
  position = "bottom",
  blurLevels = [0.5, 1, 2, 4, 8, 12, 18, 24],
  tint = "light",
  ...props
}: ProgressiveBlurProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-x-0 z-20 overflow-hidden",
        position === "top" && "top-0 bottom-auto",
        position === "bottom" && "bottom-0 top-auto",
        className
      )}
      style={{ height }}
      {...props}
    >
      {/* Multi-tier progressive backdrop blur layers */}
      {blurLevels.map((level, i) => {
        const step = (i + 1) / blurLevels.length;
        const start = Math.max(0, Math.round((i / blurLevels.length) * 100));
        const end = Math.min(100, Math.round(step * 100));

        const maskDirection = position === "top" ? "to top" : "to bottom";

        return (
          <div
            key={i}
            className="absolute inset-0"
            style={{
              backdropFilter: `blur(${level}px)`,
              WebkitBackdropFilter: `blur(${level}px)`,
              maskImage: `linear-gradient(${maskDirection}, transparent ${start}%, black ${end}%)`,
              WebkitMaskImage: `linear-gradient(${maskDirection}, transparent ${start}%, black ${end}%)`,
            }}
          />
        );
      })}

      {/* Subtle blend wash matching container tone */}
      {tint === "light" && (
        <div
          className={cn(
            "absolute inset-0",
            position === "top"
              ? "bg-gradient-to-t from-transparent via-white/20 to-white/70"
              : "bg-gradient-to-b from-transparent via-white/20 to-white/70"
          )}
        />
      )}
      {tint === "dark" && (
        <div
          className={cn(
            "absolute inset-0",
            position === "top"
              ? "bg-gradient-to-t from-transparent via-slate-950/20 to-slate-950/80"
              : "bg-gradient-to-b from-transparent via-slate-950/20 to-slate-950/80"
          )}
        />
      )}
    </div>
  );
}

export default ProgressiveBlur;
