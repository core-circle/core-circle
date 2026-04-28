import React from 'react';
import { IconProps } from './types';

const AccordionIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', strokeWidth = 2, className = '' }) => (
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
    <rect x="3" y="3" width="18" height="6" rx="1" />
    <rect x="3" y="11" width="18" height="10" rx="1" />
    <path d="M7 15h10" />
    <path d="M12 7h.01" />
  </svg>
);

export default AccordionIcon;
