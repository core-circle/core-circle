import React from 'react';
import { IconProps } from './types';

const MousePointer: React.FC<IconProps> = ({ size = 24, color = 'currentColor', strokeWidth = 2, className = '' }) => (
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
    <path d="m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/>
    <path d="m13 13 6 6"/>
  </svg>
);

export default MousePointer;
