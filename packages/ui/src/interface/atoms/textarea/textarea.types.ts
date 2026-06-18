import { TextareaHTMLAttributes, ReactNode } from 'react';

export interface TextareaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> {
  /**
   * Visual style of the textarea
   * @default 'outline'
   */
  variant?: 'outline' | 'material' | 'material-animated' | 'ghost' | 'standard';
  
  /**
   * Size of the textarea
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
   * Error message to display below the textarea
   */
  error?: string;
  
  /**
   * Helper text to display below the textarea
   */
  helperText?: string;
  
  /**
   * Whether the textarea should take up full width
   * @default false
   */
  fullWidth?: boolean;

  /**
   * Resizing behavior of the textarea
   * @default 'vertical'
   */
  resize?: 'none' | 'vertical' | 'horizontal' | 'both';

  /**
   * Optional icon to display at the start (top-left) of the textarea
   */
  startIcon?: ReactNode;

  /**
   * Optional icon to display at the end (top-right) of the textarea
   */
  endIcon?: ReactNode;
}
