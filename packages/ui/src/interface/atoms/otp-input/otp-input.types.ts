import { InputHTMLAttributes, ReactNode } from 'react';

export type OtpVariant =
  | 'outline'
  | 'filled'
  | 'floating'
  | 'glassmorphic'
  | 'pill'
  | 'material'
  | 'gradient'
  | 'bordered'
  | 'success'
  | 'ghost';

export type OtpSize = 'sm' | 'md' | 'lg' | 'xl';

export type OtpShape = 'rounded' | 'circle' | 'square';

export interface OTPInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'size' | 'value' | 'defaultValue'> {
  /**
   * Number of digit slots.
   * @default 6
   */
  length?: number;

  /**
   * Visual style variant of the input cells (10 options).
   * @default 'outline'
   */
  variant?: OtpVariant;

  /**
   * Size scale of the input cells.
   * @default 'md'
   */
  size?: OtpSize;

  /**
   * Contour shape of the digit boxes.
   * @default 'rounded'
   */
  shape?: OtpShape;

  /**
   * Controlled OTP value string.
   */
  value?: string;

  /**
   * Initial value for uncontrolled usage.
   * @default ''
   */
  defaultValue?: string;

  /**
   * Callback fired when value changes.
   */
  onChange?: (value: string) => void;

  /**
   * Callback fired automatically when all slots are filled.
   */
  onComplete?: (value: string) => void;

  /**
   * Whether to mask entered characters with bullet dots (PIN mode).
   * @default false
   */
  mask?: boolean;

  /**
   * Custom masking character.
   * @default '•'
   */
  maskChar?: string;

  /**
   * Optional separator element inserted midway (e.g. dash '-').
   */
  separator?: ReactNode;

  /**
   * Whether input is disabled.
   * @default false
   */
  disabled?: boolean;

  /**
   * Whether the first input field focuses on mount.
   * @default false
   */
  autoFocus?: boolean;

  /**
   * Error message displayed below.
   */
  error?: string;

  /**
   * Helper guidance text displayed below.
   */
  helperText?: string;

  /**
   * Additional container class names.
   */
  className?: string;
}
