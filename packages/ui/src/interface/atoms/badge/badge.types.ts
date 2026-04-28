import { ReactNode } from 'react';

export type BadgeVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'ghost' | 'outline';
export type BadgeSize = 'sm' | 'md' | 'lg';
export type BadgeShape = 'rounded' | 'pill' | 'square';

export interface BadgeProps {
  /**
   * The content of the badge
   */
  children?: ReactNode;
  /**
   * The visual variant of the badge
   * @default 'primary'
   */
  variant?: BadgeVariant;
  /**
   * The size of the badge
   * @default 'md'
   */
  size?: BadgeSize;
  /**
   * The shape of the badge
   * @default 'rounded'
   */
  shape?: BadgeShape;
  /**
   * Optional icon to display at the start
   */
  startIcon?: ReactNode;
  /**
   * Optional icon to display at the end
   */
  endIcon?: ReactNode;
  /**
   * Whether the badge is removable. If true, an 'X' button will be shown.
   */
  removable?: boolean;
  /**
   * Callback when the remove button is clicked
   */
  onRemove?: () => void;
  /**
   * Additional class names for the badge
   */
  className?: string;
  /**
   * Whether the badge should have a subtle pulse animation
   * @default false
   */
  pulse?: boolean;
}
