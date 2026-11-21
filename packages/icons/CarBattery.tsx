import React from 'react';
import { IconProps } from './types';

const CarBattery: React.FC<IconProps> = ({
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
    <path d="M14 13h4" />
  <path d="M16 15v-4" />
  <path d="M18 5v2" />
  <path d="M6 13h4" />
  <path d="M6 5v2" />
  <rect x="2" y="7" width="20" height="12" rx="2" />
  </svg>
);

export default CarBattery;
