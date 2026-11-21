import React from 'react';
import { IconProps } from './types';

const Trophy: React.FC<IconProps> = ({
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
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M12 14l3 3m0 0l3-3m-3 3V10m5-1a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

export default Trophy;
