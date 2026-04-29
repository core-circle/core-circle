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

export interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  variant?: TypographyVariant;
  as?: React.ElementType;
  children: React.ReactNode;
}
