import React from 'react';
import { IconProps } from './types';

const Annoyed: React.FC<IconProps> = ({
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
    <path d="M14 10h2" />
  <path d="M8 10h2" />
  <path d="M8 16h8" />
  <circle cx="12" cy="12" r="10" />
  </svg>
);

export default Annoyed;
