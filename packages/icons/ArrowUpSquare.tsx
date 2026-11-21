import React from 'react';
import { IconProps } from './types';

const ArrowUpSquare: React.FC<IconProps> = ({
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
    <rect width="18" height="18" x="3" y="3" rx="2" />
  <path d="m16 12-4-4-4 4" />
  <path d="M12 16V8" />
  </svg>
);

export default ArrowUpSquare;
