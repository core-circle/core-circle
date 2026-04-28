import { ReactNode } from 'react';

export type ProgressVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'ghost';
export type ProgressSize = 'sm' | 'md' | 'lg';
export type LabelPosition = 'inside' | 'outside-end' | 'outside-top';

export interface ProgressProps {
  /**
   * The current value of the progress bar
   * @default 0
   */
  value?: number;
  /**
   * The maximum value of the progress bar
   * @default 100
   */
  max?: number;
  /**
   * The visual variant of the progress bar
   * @default 'primary'
   */
  variant?: ProgressVariant;
  /**
   * The size of the progress bar
   * @default 'md'
   */
  size?: ProgressSize;
  /**
   * Whether to show the percentage label
   * @default false
   */
  showLabel?: boolean;
  /**
   * Where to position the label
   * @default 'outside-end'
   */
  labelPosition?: LabelPosition;
  /**
   * Custom label content
   */
  label?: ReactNode;
  /**
   * Whether to animate the progress bar transition
   * @default true
   */
  animate?: boolean;
  /**
   * Whether the progress bar is indeterminate
   * @default false
   */
  indeterminate?: boolean;
  /**
   * Additional class names for the container
   */
  className?: string;
  /**
   * Additional class names for the bar indicator
   */
  barClassName?: string;
}
