import React from 'react';
import { IconProps } from './types';

const CalendarRange: React.FC<IconProps> = ({
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
    <rect x="3" y="3" width="18" height="18" rx="2" />
  <path d="M16 2v3" />
  <path d="M3 9h18" />
  <path d="M8 2v3" />
  <path d="M17 13h-6" />
  <path d="M13 17H7" />
  <path d="M7 13h.01" />
  <path d="M17 17h.01" />
  </svg>
);

export default CalendarRange;
