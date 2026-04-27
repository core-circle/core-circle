import { IconProps } from './types';

const Crop = ({ 
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
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v14c0 1.1.9 2 2 2h14M3 5h14c1.1 0 2 .9 2 2v14" />
  </svg>
);

export default Crop;
