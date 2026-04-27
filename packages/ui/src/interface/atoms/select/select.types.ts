import { SelectHTMLAttributes, ReactNode } from 'react';

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
  variant?: 'outline' | 'material' | 'material-animated' | 'ghost' | 'standard';
  
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
