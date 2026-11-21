import React from 'react';
import { IconProps } from './types';

const ArrowLeftFromLine: React.FC<IconProps> = ({
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
    <path d="m9 6-6 6 6 6" />
  <path d="M3 12h14" />
  <path d="M21 19V5" />
  </svg>
);

export default ArrowLeftFromLine;
