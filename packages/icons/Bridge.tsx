import React from 'react';
import { IconProps } from './types';

const Bridge: React.FC<IconProps> = ({
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
    <path d="M10 9.728V16" />
  <path d="M14 9.728V16" />
  <path d="M18 20V4" />
  <path d="m22 11-4-4A7.5 7.5 0 0 1 6 7l-4 4" />
  <path d="M22 16H2" />
  <path d="M6 20V4" />
  </svg>
);

export default Bridge;
