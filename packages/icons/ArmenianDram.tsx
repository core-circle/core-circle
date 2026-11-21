import React from 'react';
import { IconProps } from './types';

const ArmenianDram: React.FC<IconProps> = ({
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
    <path d="M11 10h8" />
  <path d="M11 14h8" />
  <path d="M17 20V10a6 6 0 0 0-12 0" />
  </svg>
);

export default ArmenianDram;
