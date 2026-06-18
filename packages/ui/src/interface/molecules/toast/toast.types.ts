import { ReactNode } from 'react';

export type ToastVariant = 'default' | 'success' | 'error' | 'warning' | 'info';

export interface ToastProps {
  id: string;
  title?: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
  variant?: ToastVariant;
  duration?: number;
  onClose?: (id: string) => void;
}

export interface ToastActionElement {
  label: string;
  onClick: () => void;
}

export type ToastPosition = 
  | 'top-left' 
  | 'top-right' 
  | 'top-center' 
  | 'bottom-left' 
  | 'bottom-right' 
  | 'bottom-center';

export interface ToasterProps {
  /**
   * The position of the toast notifications
   * @default 'bottom-right'
   */
  position?: ToastPosition;
}
