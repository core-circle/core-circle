import React from 'react';
import { IconProps } from './types';

const BriefcasePlus: React.FC<IconProps> = ({
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
    <path d="M13.354 20H4a2 2 0 01-2-2V8a2 2 0 012-2h16a2 2 0 012 2v3.354" />
  <path d="M16 11.354V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
  <path d="M16 17h6" />
  <path d="M19 14v6" />
  </svg>
);

export default BriefcasePlus;
