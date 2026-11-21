import * as React from 'react';

export type AspectRatioPreset = '16:9' | '4:3' | '1:1' | '21:9' | '9:16' | '3:2' | '2:3' | '3:4';
export type AspectRatioVariant = 
  | 'default'
  | 'bordered'
  | 'rounded'
  | 'glassmorphic'
  | 'gradient'
  | 'glow'
  | 'dark'
  | 'shadow'
  | 'accent'
  | 'minimal';

export interface AspectRatioProps extends React.HTMLAttributes<HTMLDivElement> {
  ratio?: number | AspectRatioPreset;
  variant?: AspectRatioVariant;
  children?: React.ReactNode;
}
