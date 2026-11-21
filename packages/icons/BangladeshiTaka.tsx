import React from 'react';
import { IconProps } from './types';

const BangladeshiTaka: React.FC<IconProps> = ({
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
    <path d="M6 5a2 2 0 0 1 4 0v12a4 4 0 0 0 8 0 2 2 0 0 0-4 0" />
  <path d="M6 9h12" />
  </svg>
);

export default BangladeshiTaka;
