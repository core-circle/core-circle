import React from 'react';
import { IconProps } from './types';

const CaretsFromAxisDashedHorizontal: React.FC<IconProps> = ({
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
  <path d="M16 12h-2" />
  <path d="M22 12h-2" />
  <path d="M4 12H2" />
  <path d="M7.298 17.712A1 1 0 0 1 8 16h8a1 1 0 0 1 .703 1.712l-3.991 3.99a1 1 0 0 1-1.424.001z" />
  <path d="M7.298 6.288A1 1 0 0 0 8 8h8a1 1 0 0 0 .703-1.712l-3.991-3.99a1 1 0 0 0-1.424-.001z" />
  </svg>
);

export default CaretsFromAxisDashedHorizontal;
