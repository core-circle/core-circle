import { InputHTMLAttributes, ReactNode } from 'react';

export type CheckboxVariant =
  | 'solid'
  | 'outline'
  | 'card'
  | 'floating'
  | 'glassmorphic'
  | 'gradient'
  | 'pill'
  | 'bordered'
  | 'success'
  | 'ghost';

export type CheckboxSize = 'sm' | 'md' | 'lg';

export type CheckboxShape = 'rounded' | 'circle' | 'square';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange'> {
  /**
   * Visual style variant of the checkbox (10 options).
   * @default 'solid'
   */
  variant?: CheckboxVariant;

  /**
   * Size scale of the checkbox.
   * @default 'md'
   */
  size?: CheckboxSize;

  /**
   * Contour shape of the checkbox box.
   * @default 'rounded'
   */
  shape?: CheckboxShape;

  /**
   * Checked state (controlled).
   */
  checked?: boolean;

  /**
   * Default checked state (uncontrolled).
   * @default false
   */
  defaultChecked?: boolean;

  /**
   * Indeterminate partially selected state (renders minus icon).
   * @default false
   */
  indeterminate?: boolean;

  /**
   * Primary label text displayed next to the checkbox.
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
   * Error message.
   */
  error?: string;

  /**
   * Helper text.
   */
  helperText?: string;

  /**
   * Callback fired when checked state changes.
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;

  /**
   * Simplified boolean callback shorthand.
   */
  onCheckedChange?: (checked: boolean) => void;

  /**
   * Whether the checkbox is disabled.
   * @default false
   */
  disabled?: boolean;

  /**
   * Additional class names for the label text.
   */
  labelClassName?: string;

  /**
   * Additional container class names.
   */
  className?: string;
}
