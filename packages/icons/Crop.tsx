import React from 'react';
import { IconProps } from './types';

const Crop: React.FC<IconProps> = ({
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
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M5 3v14c0 1.1.9 2 2 2h14M3 5h14c1.1 0 2 .9 2 2v14" />
  </svg>
);

export default Crop;
