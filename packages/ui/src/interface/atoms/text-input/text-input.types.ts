import { InputHTMLAttributes, ReactNode } from 'react';

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * Visual style of the input
   * @default 'outline'
   */
  variant?: 'outline' | 'material' | 'material-animated' | 'ghost' | 'standard';
  
  /**
   * Size of the input
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';
  
  /**
   * Optional label text
   */
  label?: string;
  
  /**
   * Error message to display below the input
   */
  error?: string;
  
  /**
   * Helper text to display below the input
   */
  helperText?: string;
  
  /**
   * Icon to display at the start of the input
   */
  startIcon?: ReactNode;
  
  /**
   * Icon to display at the end of the input
   */
  endIcon?: ReactNode;
  
  /**
   * Whether the input should take up full width
   * @default false
   */
  fullWidth?: boolean;
}
