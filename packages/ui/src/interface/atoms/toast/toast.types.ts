import { ReactNode } from 'react';

export type ToastVariant =
  | 'default'
  | 'success'
  | 'warning'
  | 'destructive'
  | 'error'
  | 'info'
  | 'card'
  | 'glassmorphic'
  | 'gradient'
  | 'floating'
  | 'pill'
  | 'minimal'
  | 'glow'
  | 'accent'
  | 'dark';

export interface ToastProps {
  id?: string;
  variant?: ToastVariant;
  title?: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
  icon?: ReactNode;
  duration?: number;
  onClose?: (id?: string) => void;
  className?: string;
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

export interface ToastProviderProps {
  children: ReactNode;
}
