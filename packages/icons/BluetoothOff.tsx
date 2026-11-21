import React from 'react';
import { IconProps } from './types';

const BluetoothOff: React.FC<IconProps> = ({
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
    <path d="m17 17-5 5V12l-5 5" />
  <path d="m2 2 20 20" />
  <path d="M14.5 9.5 17 7l-5-5v4.5" />
  </svg>
);

export default BluetoothOff;
