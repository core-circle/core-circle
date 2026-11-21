import { SelectHTMLAttributes, ReactNode } from 'react';

export type SelectVariant = 
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

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size' | 'prefix'> {
  /**
   * Visual style of the select
   * @default 'outline'
   */
  variant?: SelectVariant;
  
  /**
   * Size of the select
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
   * Error message to display below the select
   */
  error?: string;
  
  /**
   * Helper text to display below the select
   */
  helperText?: string;
  
  /**
   * Options for the select
   */
  options?: SelectOption[];

  /**
   * Icon to display at the start of the select
   */
  startIcon?: ReactNode;
  
  /**
   * Whether the select should take up full width
   * @default false
   */
  fullWidth?: boolean;

  /**
   * Text or element to display at the start of the select (after the icon if present)
   */
  prefix?: ReactNode;

  /**
   * Placeholder text when no value is selected
   */
  placeholder?: string;
}
