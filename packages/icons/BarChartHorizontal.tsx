import React from 'react';
import { IconProps } from './types';

const BarChartHorizontal: React.FC<IconProps> = ({
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
    <path d="M3 3v16a2 2 0 0 0 2 2h16" />
  <path d="M7 16h8" />
  <path d="M7 11h12" />
  <path d="M7 6h3" />
  </svg>
);

export default BarChartHorizontal;
