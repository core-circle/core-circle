import React from 'react';
import { IconProps } from './types';

const TabIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', strokeWidth = 2, className = '' }) => (
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
    <rect x="3" y="8" width="8" height="8" rx="1" stroke={color} strokeWidth={strokeWidth} />
    <rect x="13" y="8" width="8" height="8" rx="1" fill={color} stroke={color} strokeWidth={strokeWidth} />
  </svg>
);

export default TabIcon;
