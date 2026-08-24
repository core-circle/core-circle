import { ReactNode } from 'react';

export type DialogVariant =
  | 'card'
  | 'floating'
  | 'glassmorphic'
  | 'gradient'
  | 'destructive'
  | 'success'
  | 'centered-hero'
  | 'drawer'
  | 'minimal'
  | 'bordered';

export type DialogSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

export type DialogPosition = 'center' | 'top' | 'bottom';

export interface DialogProps {
  /**
   * Controlled open state.
   */
  open?: boolean;

  /**
   * Default open state for uncontrolled usage.
   * @default false
   */
  defaultOpen?: boolean;

  /**
   * Callback fired when open state changes.
   */
  onOpenChange?: (open: boolean) => void;

  /**
   * The trigger element (e.g. Button) that opens the dialog.
   */
  trigger?: ReactNode;

  /**
   * The title of the dialog.
   */
  title?: ReactNode;

  /**
   * Optional description text below the title.
   */
  description?: ReactNode;

  /**
   * Optional header icon slot (e.g. Shield, Trash, Sparkles).
   */
  icon?: ReactNode;

  /**
   * Visual style variant of the dialog modal.
   * @default 'card'
   */
  variant?: DialogVariant;

  /**
   * Size scale of the dialog.
   * @default 'md'
   */
  size?: DialogSize;

  /**
   * Screen position of the dialog window.
   * @default 'center'
   */
  position?: DialogPosition;

  /**
   * The main body content of the dialog.
   */
  children?: ReactNode;

  /**
   * Optional footer actions slot (e.g. Cancel & Confirm buttons).
   */
  footer?: ReactNode;

  /**
   * Whether to display the close (X) button in top-right corner.
   * @default true
   */
  showCloseButton?: boolean;

  /**
   * Whether clicking the backdrop overlay closes the dialog.
   * @default true
   */
  closeOnOverlayClick?: boolean;

  /**
   * Whether pressing Escape closes the dialog.
   * @default true
   */
  closeOnEsc?: boolean;

  /**
   * Additional class names for the content modal.
   */
  className?: string;

  /**
   * Additional class names for the overlay backdrop.
   */
  overlayClassName?: string;
}
