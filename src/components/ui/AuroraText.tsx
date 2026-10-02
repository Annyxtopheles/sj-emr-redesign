"use client";

import React, { memo } from "react";
import "./AuroraText.css";

interface AuroraTextProps {
  children: React.ReactNode;
  className?: string;
  colors?: string[];
  speed?: number;
  as?: React.ElementType;
}

// Tailored clinical emerald/teal brand palette with subtle medical cyan shimmer
const DEFAULT_CLINICAL_COLORS = [
  "#047857", // Deep Emerald
  "#059669", // Vibrant Emerald
  "#0d9488", // Ocean Teal
  "#10b981", // Bright Mint
  "#0284c7", // Medical Sky Blue
  "#047857", // Deep Emerald loop
];

export const AuroraText = memo(
  ({
    children,
    className = "",
    colors = DEFAULT_CLINICAL_COLORS,
    speed = 1,
    as: Component = "span",
  }: AuroraTextProps) => {
    const gradientColors = colors.length > 0 ? colors : DEFAULT_CLINICAL_COLORS;
    const gradient = `linear-gradient(135deg, ${gradientColors.join(", ")}, ${gradientColors[0]})`;

    const style: React.CSSProperties = {
      backgroundImage: gradient,
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      animationDuration: `${Math.max(1, 8 / speed)}s`,
    };

    return (
      <Component className={`aurora-text ${className}`}>
        <span className="sr-only">{children}</span>
        <span
          className="aurora-text-animated"
          style={style}
          aria-hidden="true"
        >
          {children}
        </span>
      </Component>
    );
  }
);

AuroraText.displayName = "AuroraText";

export default AuroraText;
