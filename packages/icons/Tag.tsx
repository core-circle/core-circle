import { IconProps } from './types';

const Tag = ({ 
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
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M6 20l14-14m0 0a2 2 0 11-2.828-2.828L2.586 11.757a2 2 0 00-.586 1.414V19a2 2 0 002 2h5.828a2 2 0 001.414-.586L17.414 4z" />
  </svg>
);

export default Tag;
