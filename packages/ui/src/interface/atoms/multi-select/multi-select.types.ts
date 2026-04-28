import { ReactNode } from 'react';

export interface MultiSelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface MultiSelectProps {
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
  options: MultiSelectOption[];

  /**
   * Selected values
   */
  value?: string[];

  /**
   * Default selected values
   */
  defaultValue?: string[];

  /**
   * Callback when selection changes
   */
  onChange?: (value: string[]) => void;

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
   * Text or element to display at the start of the select
   */
  prefix?: ReactNode;

  /**
   * Placeholder text when no items are selected
   */
  placeholder?: string;

  /**
   * Whether the component is disabled
   */
  disabled?: boolean;

  /**
   * Custom class name for the container
   */
  className?: string;
}
