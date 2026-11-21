import React from 'react';
import { IconProps } from './types';

const ArrowUpRightSquare: React.FC<IconProps> = ({
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
    <path d="M15 15V9H9" />
  <path d="m9 15 6-6" />
  <rect x="3" y="3" width="18" height="18" rx="2" />
  </svg>
);

export default ArrowUpRightSquare;
