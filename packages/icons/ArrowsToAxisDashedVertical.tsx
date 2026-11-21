import React from 'react';
import { IconProps } from './types';

const ArrowsToAxisDashedVertical: React.FC<IconProps> = ({
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
    <path d="M12 10V8" />
  <path d="M12 16v-2" />
  <path d="M12 22v-2" />
  <path d="M12 4V2" />
  <path d="M16 12h6" />
  <path d="m19 15-3-3 3-3" />
  <path d="M2 12h6" />
  <path d="m5 15 3-3-3-3" />
  </svg>
);

export default ArrowsToAxisDashedVertical;
