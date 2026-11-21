import * as React from 'react';
import { type VariantProps } from 'class-variance-authority';
import { typographyVariants } from '../../../components/atoms/typography/typography.styles';

export type TypographyVariant = 
  | 'h1' 
  | 'h2' 
  | 'h3' 
  | 'h4' 
  | 'h5' 
  | 'h6' 
  | 'p' 
  | 'span' 
  | 'blockquote' 
  | 'code' 
  | 'lead' 
  | 'large' 
  | 'small' 
  | 'muted';

export type TypographyColor = 
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'gradient'
  | 'glow'
  | 'accent'
  | 'muted'
  | 'white';

export type TypographyWeight = 'light' | 'normal' | 'medium' | 'semibold' | 'bold';

export interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  variant?: TypographyVariant;
  color?: TypographyColor;
  weight?: TypographyWeight;
  as?: React.ElementType;
  children?: React.ReactNode;
}

