import React from 'react';
import { IconProps } from './types';

const CaseLower: React.FC<IconProps> = ({
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
    <path d="M10 9v7" />
  <path d="M14 6v10" />
  <circle cx="17.5" cy="12.5" r="3.5" />
  <circle cx="6.5" cy="12.5" r="3.5" />
  </svg>
);

export default CaseLower;
