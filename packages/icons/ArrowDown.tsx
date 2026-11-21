import React from 'react';
import { IconProps } from './types';

const ArrowDown: React.FC<IconProps> = ({
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
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
  </svg>
);

export default ArrowDown;
