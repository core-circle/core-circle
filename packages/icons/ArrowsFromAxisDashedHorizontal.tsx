import React from 'react';
import { IconProps } from './types';

const ArrowsFromAxisDashedHorizontal: React.FC<IconProps> = ({
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
    <path d="M10 12H8" />
  <path d="M12 16v6" />
  <path d="M12 2v6" />
  <path d="M16 12h-2" />
  <path d="M22 12h-2" />
  <path d="M4 12H2" />
  <path d="m9 19 3 3 3-3" />
  <path d="m9 5 3-3 3 3" />
  </svg>
);

export default ArrowsFromAxisDashedHorizontal;
