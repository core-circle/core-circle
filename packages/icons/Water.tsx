import React from 'react';
import { IconProps } from './types';

const Water: React.FC<IconProps> = ({
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
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M12 21a6 6 0 01-6-6c0-4 6-9 6-9s6 5 6 9a6 6 0 01-6 6z" />
  </svg>
);

export default Water;
