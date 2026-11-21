import React from 'react';
import { IconProps } from './types';

const AlignHorizontalSpaceAround: React.FC<IconProps> = ({
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
    <rect width="6" height="10" x="9" y="7" rx="2" />
  <path d="M4 22V2" />
  <path d="M20 22V2" />
  </svg>
);

export default AlignHorizontalSpaceAround;
