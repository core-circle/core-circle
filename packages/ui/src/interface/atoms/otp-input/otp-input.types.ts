import { InputHTMLAttributes } from 'react';

export interface OTPInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'size' | 'value' | 'defaultValue'> {
  /**
   * Number of input slots
   * @default 4
   */
  length?: number;

  /**
   * Visual style of the inputs
   * @default 'outline'
   */
  variant?: 'outline' | 'material' | 'ghost' | 'standard';

  /**
   * Size of the inputs
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * Callback when the value changes
   */
  onChange?: (value: string) => void;

  /**
   * Callback when all slots are filled
   */
  onComplete?: (value: string) => void;

  /**
   * Error message to display below
   */
  error?: string;

  /**
   * Helper text to display below
   */
  helperText?: string;

  /**
   * Initial value
   */
  value?: string;

  /**
   * Whether to mask the input (e.g. for passwords)
   * @default false
   */
  mask?: boolean;
}
