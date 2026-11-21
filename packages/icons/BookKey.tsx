import React from 'react';
import { IconProps } from './types';

const BookKey: React.FC<IconProps> = ({
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
    <path d="M13 2H6.5A2.5 2.5 0 0 0 4 4.5v15" />
  <path d="M17 2v6" />
  <path d="M17 4h2" />
  <path d="M20 15.2V21a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
  <circle cx="17" cy="10" r="2" />
  </svg>
);

export default BookKey;
