'use client';

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string; // e.g. "16, 185, 129" for emerald
  enableTilt?: boolean;
}

export default function GlowCard({
  children,
  className = '',
  glowColor = '16, 185, 129',
  enableTilt = true
}: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    // Check if user prefers reduced motion or is on touch screen
    const isTouch = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);
    if (isTouch) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      if (enableTilt) {
        const rotateX = ((y - centerY) / centerY) * -5;
        const rotateY = ((x - centerX) / centerX) * 5;

        gsap.to(el, {
          rotateX,
          rotateY,
          duration: 0.15,
          ease: 'power2.out',
          transformPerspective: 1000
        });
      }

      el.style.setProperty('--glow-x', `${(x / rect.width) * 100}%`);
      el.style.setProperty('--glow-y', `${(y / rect.height) * 100}%`);
      el.style.setProperty('--glow-opacity', '1');
    };

    const handleMouseLeave = () => {
      if (enableTilt) {
        gsap.to(el, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.4,
          ease: 'power2.out'
        });
      }
      el.style.setProperty('--glow-opacity', '0');
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [enableTilt]);

  return (
    <div
      ref={cardRef}
      className={`relative transition-shadow duration-300 ${className}`}
      style={
        {
          '--glow-color': glowColor,
          '--glow-opacity': '0',
          '--glow-x': '50%',
          '--glow-y': '50%'
        } as React.CSSProperties
      }
    >
      {/* Subtle border highlight that follows mouse */}
      <div
        className="pointer-events-none absolute -inset-px rounded-[inherit] transition-opacity duration-300 opacity-[var(--glow-opacity)]"
        style={{
          background: `radial-gradient(350px circle at var(--glow-x) var(--glow-y), rgba(var(--glow-color), 0.35) 0%, transparent 70%)`,
          zIndex: 1,
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude',
          WebkitMaskComposite: 'xor',
          padding: '1.5px'
        }}
      />
      <div className="relative z-[2] h-full flex flex-col justify-between">{children}</div>
    </div>
  );
}
