import React from 'react';
import { IconProps } from './types';

const AzerbaijaniManat: React.FC<IconProps> = ({
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
    <path d="M12 4v16" />
  <path d="M18 20v-8a6 6 0 00-12 0v8" />
  </svg>
);

export default AzerbaijaniManat;
