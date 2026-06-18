import { ReactNode } from 'react';

export type ToastVariant = 'default' | 'success' | 'warning' | 'destructive';

export interface ToastProps {
  id?: string;
  variant?: ToastVariant;
  title?: string;
  description?: string;
  action?: ReactNode;
  icon?: ReactNode;
  onClose?: () => void;
  className?: string;
}

export interface ToastProviderProps {
  children: ReactNode;
}
