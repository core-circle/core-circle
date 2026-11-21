import React from 'react';
import { IconProps } from './types';

const CalendarChevronsRight: React.FC<IconProps> = ({
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
    <path d="m13 21 3-3-3-3" />
  <path d="M16 2v3" />
  <path d="m19 21 3-3-3-3" />
  <path d="M21 11.5V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h4" />
  <path d="M3 9h18" />
  <path d="M8 2v3" />
  </svg>
);

export default CalendarChevronsRight;
