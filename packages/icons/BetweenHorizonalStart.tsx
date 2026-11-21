import React from 'react';
import { IconProps } from './types';

const BetweenHorizonalStart: React.FC<IconProps> = ({
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
    <rect width="13" height="7" x="8" y="3" rx="1" />
  <path d="m2 9 3 3-3 3" />
  <rect width="13" height="7" x="8" y="14" rx="1" />
  </svg>
);

export default BetweenHorizonalStart;
