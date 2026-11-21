import React from 'react';
import { IconProps } from './types';

const BluetoothConnected: React.FC<IconProps> = ({
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
  <line x1="18" x2="21" y1="12" y2="12" />
  <line x1="3" x2="6" y1="12" y2="12" />
  </svg>
);

export default BluetoothConnected;
