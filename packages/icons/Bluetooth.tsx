import React from 'react';
import { IconProps } from './types';

const Bluetooth: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
  className = '',
  ...props
}: IconProps) => (
  <svg 
    className={className} 
    fill="none" 
    stroke={color} 
    viewBox="0 0 24 24"
    width={size}
    height={size}
    {...props}
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M7 7l10 10-5 5V2l5 5L7 17" />
  </svg>
);

export default Bluetooth;
