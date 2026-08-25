import * as React from 'react';

export type DrawerPosition = 'right' | 'left' | 'top' | 'bottom';
export type DrawerSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';
export type DrawerVariant = 
  | 'default'
  | 'subtle'
  | 'bordered'
  | 'glassmorphic'
  | 'gradient'
  | 'glow'
  | 'dark'
  | 'sidebar'
  | 'accent'
  | 'minimal';

export interface DrawerProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose: () => void;
  position?: DrawerPosition;
  size?: DrawerSize;
  variant?: DrawerVariant;
  title?: React.ReactNode;
  description?: React.ReactNode;
  footer?: React.ReactNode;
  showCloseButton?: boolean;
  closeOnOverlayClick?: boolean;
  closeOnEsc?: boolean;
  children?: React.ReactNode;
  overlayClassName?: string;
}
