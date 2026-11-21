import React from 'react';
import { IconProps } from './types';

const LoadingIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
  className = '',
  ...props
}: IconProps) => (
  <svg 
    className={`animate-spin ${className}`} 
    fill="none" 
    viewBox="0 0 24 24"
    width={size}
    height={size}
    {...props}
  >
    <circle 
      className="opacity-25" 
      cx="12" 
      cy="12" 
      r="10" 
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round" 
    />
    <path 
      className="opacity-75" 
      fill={color} 
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" 
    />
  </svg>
);

export default LoadingIcon;
