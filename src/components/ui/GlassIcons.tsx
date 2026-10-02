'use client';

import React from 'react';
import './GlassIcons.css';

const gradientMapping: Record<string, string> = {
  indigo: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
  purple: 'linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)',
  emerald: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
  green: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
  rose: 'linear-gradient(135deg, #f43f5e 0%, #e11d48 100%)',
  red: 'linear-gradient(135deg, #f43f5e 0%, #e11d48 100%)',
  sky: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
  blue: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
  amber: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
  orange: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
  teal: 'linear-gradient(135deg, #14b8a6 0%, #0f766e 100%)',
  violet: 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)',
  cyan: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
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
