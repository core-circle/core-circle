import React from 'react';
import { IconProps } from './types';

const ArrowDownFromLine: React.FC<IconProps> = ({
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
    <path d="M19 3H5" />
  <path d="M12 21V7" />
  <path d="m6 15 6 6 6-6" />
  </svg>
);

export default ArrowDownFromLine;
