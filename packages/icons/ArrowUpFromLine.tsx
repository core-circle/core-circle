import React from 'react';
import { IconProps } from './types';

const ArrowUpFromLine: React.FC<IconProps> = ({
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
    <path d="m18 9-6-6-6 6" />
  <path d="M12 3v14" />
  <path d="M5 21h14" />
  </svg>
);

export default ArrowUpFromLine;
