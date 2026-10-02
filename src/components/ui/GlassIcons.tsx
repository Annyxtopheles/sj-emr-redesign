'use client';

import React from 'react';
import './GlassIcons.css';

const gradientMapping: Record<string, string> = {
  blue: 'linear-gradient(hsl(223, 90%, 50%), hsl(208, 90%, 50%))',
  purple: 'linear-gradient(hsl(283, 90%, 50%), hsl(268, 90%, 50%))',
  red: 'linear-gradient(hsl(3, 90%, 50%), hsl(348, 90%, 50%))',
  indigo: 'linear-gradient(hsl(253, 90%, 50%), hsl(238, 90%, 50%))',
  orange: 'linear-gradient(hsl(43, 90%, 50%), hsl(28, 90%, 50%))',
  green: 'linear-gradient(hsl(123, 90%, 40%), hsl(108, 90%, 40%))'
};

export interface GlassIconItem {
  icon: React.ReactNode;
  label: string;
  color: 'blue' | 'purple' | 'red' | 'indigo' | 'orange' | 'green' | string;
  customClass?: string;
  onClick?: () => void;
}

export interface GlassIconsProps {
  items: GlassIconItem[];
  className?: string;
}

export interface GlassIconBadgeProps {
  icon: React.ReactNode;
  color?: 'blue' | 'purple' | 'red' | 'indigo' | 'orange' | 'green' | string;
  size?: number;
  className?: string;
  isActive?: boolean;
}

export const GlassIconBadge: React.FC<GlassIconBadgeProps> = ({
  icon,
  color = 'green',
  size = 28,
  className = '',
  isActive = false,
}) => {
  const getBackgroundStyle = (c: string) => {
    if (gradientMapping[c]) {
      return { background: gradientMapping[c] };
    }
    return { background: c };
  };

  return (
    <div
      className={`glass-icon-badge ${className} ${isActive ? 'is-active' : ''}`}
      style={{ fontSize: `${size / 4.5}px` }}
      aria-hidden="true"
    >
      <span className="icon-btn__back" style={getBackgroundStyle(color)} />
      <span className="icon-btn__front">
        <span className="icon-btn__icon">
          {icon}
        </span>
      </span>
    </div>
  );
};

const GlassIcons: React.FC<GlassIconsProps> = ({ items, className }) => {
  const getBackgroundStyle = (color: string) => {
    if (gradientMapping[color]) {
      return { background: gradientMapping[color] };
    }
    return { background: color };
  };

  return (
    <div className={`icon-btns ${className || ''}`}>
      {items.map((item, index) => (
        <button
          key={index}
          className={`icon-btn ${item.customClass || ''}`}
          aria-label={item.label}
          type="button"
          onClick={item.onClick}
        >
          <span className="icon-btn__back" style={getBackgroundStyle(item.color)} />
          <span className="icon-btn__front">
            <span className="icon-btn__icon" aria-hidden="true">
              {item.icon}
            </span>
          </span>
          <span className="icon-btn__label">{item.label}</span>
        </button>
      ))}
    </div>
  );
};

export default GlassIcons;
