import React from 'react';
import { IconProps } from './types';

const BoomBox: React.FC<IconProps> = ({
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
    <path d="M4 9V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" />
  <path d="M8 8v1" />
  <path d="M12 8v1" />
  <path d="M16 8v1" />
  <rect width="20" height="12" x="2" y="9" rx="2" />
  <circle cx="8" cy="15" r="2" />
  <circle cx="16" cy="15" r="2" />
  </svg>
);

export default BoomBox;
