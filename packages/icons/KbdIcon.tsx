import React from 'react';
import { IconProps } from './types';

const KbdIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', strokeWidth = 2, className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
    <line x1="7" y1="15" x2="17" y2="15" />
    <path d="M7 10h.01" />
    <path d="M11 10h.01" />
    <path d="M15 10h.01" />
    <path d="M19 10h.01" />
  </svg>
);

export default KbdIcon;
