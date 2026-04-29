import { ReactNode } from 'react';

export type AlertVariant = 'info' | 'success' | 'warning' | 'destructive' | 'outline';

export interface AlertProps {
  /**
   * The variant of the alert.
   * @default 'info'
   */
  variant?: AlertVariant;
  
  /**
   * Optional title for the alert.
   */
  title?: string;
  
  /**
   * The content of the alert.
   */
  children: ReactNode;
  
  /**
   * Optional icon to display.
   */
  icon?: ReactNode;
  
  /**
   * Whether the alert can be closed.
   */
  onClose?: () => void;
  
  /**
   * Additional class names.
   */
  className?: string;
}
