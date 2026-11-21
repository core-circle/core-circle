import React from 'react';
import { IconProps } from './types';

const Avocado: React.FC<IconProps> = ({
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
    <path d="M13.465 3.464a5 5 0 017.07 0 5 5 0 010 7.072c-1.204 1.203-2.38 2.89-2.614 4.577A8 8 0 118.886 6.08c1.687-.235 3.375-1.41 4.579-2.615" />
  <circle cx="10" cy="14" r="3" />
  </svg>
);

export default Avocado;
