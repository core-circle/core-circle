import { ReactNode } from 'react';

export type AlertVariant =
  | 'info'
  | 'success'
  | 'warning'
  | 'destructive'
  | 'card'
  | 'floating'
  | 'glassmorphic'
  | 'gradient'
  | 'pill'
  | 'minimal'
  | 'outline'
  | 'soft';

export interface AlertProps {
  /**
   * The visual style variant of the alert.
   * @default 'info'
   */
  variant?: AlertVariant;

  /**
   * Optional title for the alert.
   */
  title?: ReactNode;

  /**
   * Optional description text for the alert.
   */
  description?: ReactNode;

  /**
   * The content / description of the alert.
   */
  children?: ReactNode;

  /**
   * Optional icon to display before the title/description.
   */
  icon?: ReactNode;

  /**
   * Optional action element slot (e.g., Button or Link).
   */
  action?: ReactNode;

  /**
   * Whether the alert shows a dismiss/close button.
   * @default false
   */
  dismissible?: boolean;

  /**
   * Callback fired when the dismiss button is clicked.
   */
  onDismiss?: () => void;

  /**
   * Callback fired when the close button is clicked (alias for onDismiss).
   */
  onClose?: () => void;

  /**
   * Whether the alert occupies the full width of its container.
   * @default true
   */
  fullWidth?: boolean;

  /**
   * Additional class names.
   */
  className?: string;
}
