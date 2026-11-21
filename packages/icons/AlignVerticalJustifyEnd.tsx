import React from 'react';
import { IconProps } from './types';

const AlignVerticalJustifyEnd: React.FC<IconProps> = ({
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
    <rect width="14" height="6" x="5" y="12" rx="2" />
  <rect width="10" height="6" x="7" y="2" rx="2" />
  <path d="M2 22h20" />
  </svg>
);

export default AlignVerticalJustifyEnd;
