import { InputHTMLAttributes, ReactNode } from 'react';

export type RadioVariant =
  | 'outline'
  | 'solid'
  | 'card'
  | 'floating'
  | 'glassmorphic'
  | 'gradient'
  | 'pill'
  | 'bordered'
  | 'success'
  | 'ghost';

export type RadioSize = 'sm' | 'md' | 'lg';

export interface RadioButtonProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange'> {
  /**
   * Visual style and container variant (10 options).
   * @default 'outline'
   */
  variant?: RadioVariant;

  /**
   * Size scale of the radio button.
   * @default 'md'
   */
  size?: RadioSize;

  /**
   * Primary label text displayed next to the radio button.
   */
  label?: ReactNode;

  /**
   * Subtitle description text below the label.
   */
  description?: ReactNode;

  /**
   * Optional badge pill displayed next to the label.
   */
  badge?: ReactNode;

  /**
   * Error message displayed below.
   */
  error?: string;

  /**
   * Helper text displayed below.
   */
  helperText?: string;

  /**
   * Callback fired when this radio button is selected.
   */
  onChange?: (value: string) => void;

  /**
   * Radio value identifier.
   */
  value?: string;

  /**
   * Additional container class names.
   */
  className?: string;
}
