import { IconProps } from './types';

const Battery = ({ 
  className = 'w-3.5 h-3.5', 
  color = 'currentColor',
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
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h11V8a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 011 1v2a1 1 0 01-1 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1v-2H3a1 1 0 01-1-1v-4a1 1 0 011-1z" />
  </svg>
);

export default Battery;
