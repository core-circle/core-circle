import React from 'react';
import { IconProps } from './types';

const ArrowDown01: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
  className = '',
  ...props
}) => (
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
    {...props}
  >
    <path d="m3 16 4 4 4-4" />
  <path d="M7 20V4" />
  <rect x="15" y="4" width="4" height="6" ry="2" />
  <path d="M17 20v-6h-2" />
  <path d="M15 20h4" />
  </svg>
);

export default ArrowDown01;
