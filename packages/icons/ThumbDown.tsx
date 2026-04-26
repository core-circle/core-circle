import { IconProps } from './types';

const ThumbDown = ({ 
  className = 'w-3.5 h-3.5', 
  color = '#000000',
  size,
  ...props 
}: IconProps) => (
  <svg 
    className={className} 
    fill="none" 
    stroke={color} 
    viewBox="0 0 24 24"
    width={size}
    height={size}
    {...props}
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 15v4a3 3 0 003 3l4-9V2H5.72a2 2 0 00-2 1.708l-1.385 9a2 2 0 002 2.292H10zM19 13h3V2h-3v11z" />
  </svg>
);

export default ThumbDown;
