import { InputHTMLAttributes, ReactNode } from 'react';

export type TextInputVariant = 
  | 'outline' 
  | 'material' 
  | 'material-animated' 
  | 'ghost' 
  | 'standard' 
  | 'filled' 
  | 'glassmorphic' 
  | 'floating' 
  | 'gradient' 
  | 'pill' 
  | 'accent' 
  | 'dark';

export interface TextInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'> {
  /**
   * Visual style of the input
   * @default 'outline'
   */
  variant?: TextInputVariant;

  
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
   * Size of the label text
   */
  labelSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

  /**
   * Font weight of the label text
   */
  labelWeight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold';

  /**
   * Additional classes for the label
   */
  labelClassName?: string;
  
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

  /**
   * Text or element to display at the start of the input (after the icon if present)
   */
  prefix?: ReactNode;

  /**
   * Text or element to display at the end of the input (before the icon if present)
   */
  suffix?: ReactNode;
}
