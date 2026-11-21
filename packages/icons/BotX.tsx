import React from 'react';
import { IconProps } from './types';

const BotX: React.FC<IconProps> = ({
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
    <path d="M12 8V4H8" />
  <path d="M15 13v1.5" />
  <path d="m18 17 4 4" />
  <path d="M2 14h2" />
  <path d="M20 13.5V10a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8" />
  <path d="m22 17-4 4" />
  <path d="M9 13v2" />
  </svg>
);

export default BotX;
