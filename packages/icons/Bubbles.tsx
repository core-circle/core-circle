import React from 'react';
import { IconProps } from './types';

const Bubbles: React.FC<IconProps> = ({
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
    <path d="M7.001 15.085A1.5 1.5 0 0 1 9 16.5" />
  <circle cx="18.5" cy="8.5" r="3.5" />
  <circle cx="7.5" cy="16.5" r="5.5" />
  <circle cx="7.5" cy="4.5" r="2.5" />
  </svg>
);

export default Bubbles;
