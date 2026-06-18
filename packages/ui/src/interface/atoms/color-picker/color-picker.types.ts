import { InputHTMLAttributes } from 'react';

export interface ColorPickerProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type' | 'value' | 'defaultValue'> {
  /**
   * The current color value (Hex format)
   */
  value?: string;

  /**
   * Label for the color picker
   */
  label?: string;

  /**
   * Visual variant
   * @default 'outline'
   */
  variant?: 'outline' | 'material' | 'ghost';

  /**
   * Size of the swatch
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * Whether to show the hex code next to the swatch
   * @default true
   */
  showValue?: boolean;

  /**
   * Error message
   */
  error?: string;

  /**
   * Helper text
   */
  helperText?: string;

  /**
   * Callback when color changes
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
