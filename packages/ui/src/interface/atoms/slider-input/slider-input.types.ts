import { InputHTMLAttributes } from 'react';

export type SliderInputVariant = 
  | 'standard' 
  | 'primary' 
  | 'secondary' 
  | 'success' 
  | 'warning' 
  | 'danger' 
  | 'info' 
  | 'gradient' 
  | 'glassmorphic' 
  | 'glow' 
  | 'floating' 
  | 'accent' 
  | 'dark';

export interface SliderInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  /**
   * Visual style of the slider
   * @default 'standard'
   */
  variant?: SliderInputVariant;
  
  /**
   * Size of the slider track
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
   * Error message to display below the slider
   */
  error?: string;
  
  /**
   * Helper text to display below the slider
   */
  helperText?: string;
  
  /**
   * Whether the slider should take up full width
   * @default false
   */
  fullWidth?: boolean;

  /**
   * Show the current value as a tooltip or label
   * @default false
   */
  showValue?: boolean;

  /**
   * Custom formatting for the value display
   */
  formatValue?: (value: number) => string;
}
