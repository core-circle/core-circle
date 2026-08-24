import { ReactNode } from 'react';

export type BadgeVariant =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'destructive'
  | 'danger'
  | 'info'
  | 'ghost'
  | 'outline'
  | 'glassmorphic'
  | 'gradient'
  | 'floating'
  | 'dot';

export type BadgeSize = 'sm' | 'md' | 'lg';
export type BadgeShape = 'rounded' | 'pill' | 'square';

export interface BadgeProps {
  /**
   * The content of the badge
   */
  children?: ReactNode;

  /**
   * The visual style variant of the badge
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
   * Whether to display an active status dot
   * @default false
   */
  dot?: boolean;

  /**
   * Optional icon to display at the start
   */
  startIcon?: ReactNode;

  /**
   * Optional icon to display at the end
   */
  endIcon?: ReactNode;

  /**
   * Whether the badge is removable with an 'X' button.
   */
  removable?: boolean;

  /**
   * Callback when the remove button is clicked
   */
  onRemove?: () => void;

  /**
   * Whether the badge should have an animated pulse
   * @default false
   */
  pulse?: boolean;

  /**
   * Additional class names for the badge
   */
  className?: string;
}
