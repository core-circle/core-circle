import React from 'react';
import { IconProps } from './types';

const BuildingComplexPlus: React.FC<IconProps> = ({
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
    <path d="M10 12h4" />
  <path d="M10 21v-3a2 2 0 013.05-1.702" />
  <path d="M10 8h4" />
  <path d="M16 19h6" />
  <path d="M18 7h2a2 2 0 012 2v4.355" />
  <path d="M19 16v6" />
  <path d="M6 10H4a2 2 0 00-2 2v7a2 2 0 002 2h8.535" />
  <path d="M6 21V5a2 2 0 012-2h8a2 2 0 012 2v7.126" />
  </svg>
);

export default BuildingComplexPlus;
