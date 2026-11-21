import React from 'react';
import { IconProps } from './types';

const ThumbUp: React.FC<IconProps> = ({
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
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.708l1.385-9a2 2 0 00-2-2.292H14zM5 11H2v11h3V11z" />
  </svg>
);

export default ThumbUp;
