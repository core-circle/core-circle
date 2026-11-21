import React from 'react';
import { IconProps } from './types';

const AudioLinesX: React.FC<IconProps> = ({
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
    <path d="M10 3v18" />
  <path d="M14 8v6.35" />
  <path d="m17 17 5 5" />
  <path d="M18 5v8.1" />
  <path d="M2 10v3" />
  <path d="M22 10v3" />
  <path d="m22 17-5 5" />
  <path d="M6 6v11" />
  </svg>
);

export default AudioLinesX;
