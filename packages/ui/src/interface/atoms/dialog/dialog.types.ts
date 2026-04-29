import { ReactNode } from 'react';

export interface DialogProps {
  /**
   * Whether the dialog is open.
   */
  open?: boolean;
  
  /**
   * Initial open state.
   */
  defaultOpen?: boolean;
  
  /**
   * Callback when open state changes.
   */
  onOpenChange?: (open: boolean) => void;
  
  /**
   * The element that triggers the dialog.
   */
  trigger?: ReactNode;
  
  /**
   * The title of the dialog.
   */
  title?: string;
  
  /**
   * The description or content of the dialog.
   */
  children: ReactNode;
  
  /**
   * Optional footer content (usually buttons).
   */
  footer?: ReactNode;
  
  /**
   * Size of the dialog.
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  
  /**
   * Additional class names for the content.
   */
  className?: string;
  
  /**
   * Whether clicking the overlay closes the dialog.
   * @default true
   */
  closeOnOverlayClick?: boolean;
}
