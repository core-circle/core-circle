import { IconProps } from './types';

const Gift = ({ 
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
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V6a2 2 0 10-2 2h2zm0 0h5a2 2 0 012 2v11a2 2 0 01-2 2H7a2 2 0 01-2-2V10a2 2 0 012-2h5z" />
  </svg>
);

export default Gift;
