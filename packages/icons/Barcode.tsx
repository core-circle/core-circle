import React from 'react';
import { IconProps } from './types';

const Barcode: React.FC<IconProps> = ({
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
    <path d="M3 5v14" />
  <path d="M8 5v14" />
  <path d="M12 5v14" />
  <path d="M17 5v14" />
  <path d="M21 5v14" />
  </svg>
);

export default Barcode;
