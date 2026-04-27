import React from 'react';
import { IconProps } from './types';

const Atom: React.FC<IconProps> = ({ size = 24, color = 'currentColor', strokeWidth = 2, className = '' }) => (
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
  >
    <circle cx="12" cy="12" r="1" fill={color} />
    <path d="M12 12m-10 0a10 4 0 1 0 20 0a10 4 0 1 0 -20 0" transform="rotate(0 12 12)" />
    <path d="M12 12m-10 0a10 4 0 1 0 20 0a10 4 0 1 0 -20 0" transform="rotate(60 12 12)" />
    <path d="M12 12m-10 0a10 4 0 1 0 20 0a10 4 0 1 0 -20 0" transform="rotate(120 12 12)" />
  </svg>
);

export default Atom;
