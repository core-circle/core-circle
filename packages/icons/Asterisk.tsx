import React from 'react';
import { IconProps } from './types';

const Asterisk: React.FC<IconProps> = ({
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
    <path d="M12 5v14" />
  <path d="m18.065 8.496-12.125 7" />
  <path d="m5.94 8.504 12.125 7" />
  </svg>
);

export default Asterisk;
