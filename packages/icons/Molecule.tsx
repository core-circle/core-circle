import React from 'react';
import { IconProps } from './types';

const Molecule: React.FC<IconProps> = ({ size = 24, color = 'currentColor', strokeWidth = 2, className = '' }) => (
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
    <path d="M12 2v4" />
    <path d="m19 8-4 2" />
    <path d="m5 8 4 2" />
    <path d="m12 18v4" />
    <path d="m19 16-4-2" />
    <path d="m5 16 4-2" />
    <circle cx="12" cy="12" r="2" />
    <circle cx="12" cy="2" r="2" />
    <circle cx="19" cy="8" r="2" />
    <circle cx="5" cy="8" r="2" />
    <circle cx="12" cy="22" r="2" />
    <circle cx="19" cy="16" r="2" />
    <circle cx="5" cy="16" r="2" />
  </svg>
);

export default Molecule;
