import React from 'react';
import { IconProps } from './types';

const ArrowLeftToLine: React.FC<IconProps> = ({
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
    <path d="M3 19V5" />
  <path d="m13 6-6 6 6 6" />
  <path d="M7 12h14" />
  </svg>
);

export default ArrowLeftToLine;
