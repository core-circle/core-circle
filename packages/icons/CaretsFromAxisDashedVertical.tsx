import React from 'react';
import { IconProps } from './types';

const CaretsFromAxisDashedVertical: React.FC<IconProps> = ({
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
    <path d="M12 14v2" />
  <path d="M12 20v2" />
  <path d="M12 2v2" />
  <path d="M12 8v2" />
  <path d="M17.712 16.703A1 1 0 0 1 15.999 16V8a1 1 0 0 1 1.713-.703l3.99 3.991a1 1 0 0 1 .001 1.424z" />
  <path d="M6.288 16.703A1 1 0 0 0 8.001 16V8a1 1 0 0 0-1.713-.703l-3.99 3.991a1 1 0 0 0-.001 1.424z" />
  </svg>
);

export default CaretsFromAxisDashedVertical;
