import * as React from 'react';

export type ScrollAreaOrientation = 'vertical' | 'horizontal' | 'both';
export type ScrollAreaVariant = 
  | 'default'
  | 'subtle'
  | 'thin'
  | 'glow'
  | 'gradient'
  | 'glassmorphic'
  | 'dark'
  | 'rounded'
  | 'accent'
  | 'minimal';

export interface ScrollAreaProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: ScrollAreaOrientation;
  variant?: ScrollAreaVariant;
  maxHeight?: string | number;
  maxWidth?: string | number;
  hideScrollbar?: boolean;
  children?: React.ReactNode;
}
