import React from 'react';
import { IconProps } from './types';

const BetweenVerticalStart: React.FC<IconProps> = ({
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
    <rect width="7" height="13" x="3" y="8" rx="1" />
  <path d="m15 2-3 3-3-3" />
  <rect width="7" height="13" x="14" y="8" rx="1" />
  </svg>
);

export default BetweenVerticalStart;
