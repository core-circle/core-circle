import React from 'react';
import { IconProps } from './types';

const Can: React.FC<IconProps> = ({
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
    <path d="M21 10.5a9 2.5 0 01-18 0v8a9 2.5 0 0018 0z" />
  <path d="M21 10.5A9 2.5 25.32 004.59 3.47 9 2.5 25.32 0021 10.5" />
  <path d="M3 10.5a9 2.5 0 016.527-2.405" />
  <path d="M9 16.858a31 31 0 006 0" />
  </svg>
);

export default Can;
