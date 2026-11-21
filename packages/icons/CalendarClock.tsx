import React from 'react';
import { IconProps } from './types';

const CalendarClock: React.FC<IconProps> = ({
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
    <path d="M16 2v3" />
  <path d="M17 15.5v1.7l1 .625" />
  <path d="M21 8.936V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h3.935" />
  <path d="M3 9h9.873" />
  <path d="M8 2v3" />
  <circle cx="17" cy="17" r="5" />
  </svg>
);

export default CalendarClock;
