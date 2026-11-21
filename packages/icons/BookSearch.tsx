import React from 'react';
import { IconProps } from './types';

const BookSearch: React.FC<IconProps> = ({
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
    <path d="M11 22H5.5a1 1 0 0 1 0-5h4.501" />
  <path d="m21 22-1.879-1.878" />
  <path d="M3 19.5v-15A2.5 2.5 0 0 1 5.5 2H18a1 1 0 0 1 1 1v8" />
  <circle cx="17" cy="18" r="3" />
  </svg>
);

export default BookSearch;
