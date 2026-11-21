import React from 'react';
import { IconProps } from './types';

const BoxDashed: React.FC<IconProps> = ({
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
    <path d="M12 12v3" />
  <path d="M12 22v-3" />
  <path d="m18.268 18.732 1.732-1a2 2 0 001-1.733V14" />
  <path d="M20.7 7 18 8.552" />
  <path d="M21 10V8a2 2 0 00-1-1.73l-1.732-1" />
  <path d="M3 10V8a2 2 0 011-1.73l1.732-1" />
  <path d="M3.3 7 6 8.552" />
  <path d="m5.732 18.732-1.732-1A2 2 0 013 16v-2" />
  <path d="m9.268 20.732 1.732 1a2 2 0 002-.002l1.732-.998" />
  <path d="m9.268 3.27 1.732-1a2 2 0 012 0l1.732 1" />
  <path d="m9.468 10.54 2.533 1.462 2.533-1.463" />
  </svg>
);

export default BoxDashed;
