import React from 'react';
import { IconProps } from './types';

const CalendarArrowLeft: React.FC<IconProps> = ({
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
  <path d="M21 9H3" />
  <path d="M3 12.34V5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2h-7.35" />
  <path d="M3 18h6" />
  <path d="m6 21-3-3 3-3" />
  <path d="M8 2v3" />
  </svg>
);

export default CalendarArrowLeft;
