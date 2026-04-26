import { IconProps } from './types';

const Speaker = ({ 
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
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M12 18.364l-4.432-3.324a1 1 0 00-.6-.2H4a1 1 0 01-1-1v-4.32a1 1 0 011-1h2.968a1 1 0 00.6-.2L12 5.636v12.728z" />
  </svg>
);

export default Speaker;
