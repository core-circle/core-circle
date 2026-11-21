import * as React from 'react';

export type TooltipVariant = 
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'destructive'
  | 'info'
  | 'gradient'
  | 'glow'
  | 'glassmorphic'
  | 'dark';

export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';

export interface TooltipProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  variant?: TooltipVariant;
  position?: TooltipPosition;
  icon?: React.ReactNode;
  trigger?: 'click' | 'hover';
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  showCloseIcon?: boolean;
}

