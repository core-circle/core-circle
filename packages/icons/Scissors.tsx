import React from 'react';
import { IconProps } from './types';

const Scissors: React.FC<IconProps> = ({
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
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.414M9 11l-3-3m0 0a2 2 0 10-2.828 2.828L6 11m0-3l3 3m1 2l3 3m0 0a2 2 0 102.828-2.828L13 13" />
  </svg>
);

export default Scissors;
