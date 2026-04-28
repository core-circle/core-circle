import React from 'react';
import { IconProps } from './types';

const SwitchIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', strokeWidth = 2, className = '' }) => (
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
    <rect x="4" y="8" width="16" height="8" rx="4" />
    <circle cx="16" cy="12" r="2" />
  </svg>
);

export default SwitchIcon;
