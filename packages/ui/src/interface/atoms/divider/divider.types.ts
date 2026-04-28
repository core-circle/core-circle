import * as React from 'react';
import { type VariantProps } from 'class-variance-authority';
import { dividerVariants } from '../../../components/atoms/divider/divider.styles';

export interface DividerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof dividerVariants> {
  /**
   * Optional content to be rendered within the divider (horizontal only).
   */
  children?: React.ReactNode;
}
