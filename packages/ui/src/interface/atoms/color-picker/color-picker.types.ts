import { ReactNode } from 'react';

export type ColorPickerVariant =
  | 'outline'
  | 'filled'
  | 'floating'
  | 'glassmorphic'
  | 'pill'
  | 'material'
  | 'gradient'
  | 'compact'
  | 'studio'
  | 'ghost';

export type ColorPickerSize = 'sm' | 'md' | 'lg';

export type ColorPickerShape = 'rounded' | 'circle' | 'square' | 'pill';

export type ColorPickerFormat = 'hex' | 'rgb' | 'hsl';

export type ColorPickerMode = 'input' | 'popover' | 'inline';

export interface ColorPickerProps {
  /**
   * The current selected color value (Hex format, e.g. #3B82F6).
   */
  value?: string;

  /**
   * Default color value for uncontrolled usage.
   * @default '#3B82F6'
   */
  defaultValue?: string;

  /**
   * Optional label displayed above the color picker.
   */
  label?: ReactNode;

  /**
   * Visual variant of the color picker container.
   * @default 'outline'
   */
  variant?: ColorPickerVariant;

  /**
   * Size scale of the color picker.
   * @default 'md'
   */
  size?: ColorPickerSize;

  /**
   * Contour shape of the color preview swatch.
   * @default 'rounded'
   */
  shape?: ColorPickerShape;

  /**
   * Display mode: compact input, popover dropdown, or embedded inline studio.
   * @default 'input'
   */
  mode?: ColorPickerMode;

  /**
   * Color string display format.
   * @default 'hex'
   */
  format?: ColorPickerFormat;

  /**
   * Whether to display the text value alongside the swatch.
   * @default true
   */
  showValue?: boolean;

  /**
   * Whether to allow cycling between Hex, RGB, and HSL formats on click.
   * @default false
   */
  allowFormatSwitch?: boolean;

  /**
   * Whether to render preset color palette chips.
   * @default false
   */
  showPresets?: boolean;

  /**
   * Array of preset color hex strings.
   */
  presets?: string[];

  /**
   * Whether to show the screen color eye dropper button (supported in modern browsers).
   * @default false
   */
  showEyeDropper?: boolean;

  /**
   * Whether to display the opacity / alpha slider.
   * @default false
   */
  showAlpha?: boolean;

  /**
   * Current alpha opacity value (0 to 100).
   * @default 100
   */
  alpha?: number;

  /**
   * Callback fired when alpha opacity changes.
   */
  onAlphaChange?: (alpha: number) => void;

  /**
   * Whether clicking the value copies it to clipboard.
   * @default true
   */
  copyable?: boolean;

  /**
   * Error message or validation state.
   */
  error?: string;

  /**
   * Subtitle helper text.
   */
  helperText?: string;

  /**
   * Whether the color picker is disabled.
   * @default false
   */
  disabled?: boolean;

  /**
   * Callback fired when color changes.
   */
  onChange?: (color: string) => void;

  /**
   * Additional class names.
   */
  className?: string;

  /**
   * Custom inline styles.
   */
  style?: React.CSSProperties;
}
