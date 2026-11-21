import React from 'react';
import { IconProps } from './types';

const BluetoothSearching: React.FC<IconProps> = ({
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
    <path d="m7 7 10 10-5 5V2l5 5L7 17" />
  <path d="M20.83 14.83a4 4 0 0 0 0-5.66" />
  <path d="M18 12h.01" />
  </svg>
);

export default BluetoothSearching;
