import React from 'react';
import { IconProps } from './types';

const Binary: React.FC<IconProps> = ({
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
    <rect x="14" y="14" width="4" height="6" rx="2" />
  <rect x="6" y="4" width="4" height="6" rx="2" />
  <path d="M6 20h4" />
  <path d="M14 10h4" />
  <path d="M6 14h2v6" />
  <path d="M14 4h2v6" />
  </svg>
);

export default Binary;
