import React from 'react';
import { IconProps } from './types';

const ArrowDownLeftFromCircle: React.FC<IconProps> = ({
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
    <path d="M2 12a10 10 0 1 1 10 10" />
  <path d="m2 22 10-10" />
  <path d="M8 22H2v-6" />
  </svg>
);

export default ArrowDownLeftFromCircle;
