import React from 'react';
import { IconProps } from './types';

const ArrowUpNarrowWide: React.FC<IconProps> = ({
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
    <path d="m3 8 4-4 4 4" />
  <path d="M7 4v16" />
  <path d="M11 12h4" />
  <path d="M11 16h7" />
  <path d="M11 20h10" />
  </svg>
);

export default ArrowUpNarrowWide;
