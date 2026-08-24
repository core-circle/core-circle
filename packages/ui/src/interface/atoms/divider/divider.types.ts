import * as React from 'react';
import { ReactNode } from 'react';

export type DividerVariant =
  | 'solid'
  | 'dashed'
  | 'dotted'
  | 'gradient'
  | 'fade'
  | 'accent'
  | 'subtle'
  | 'thick'
  | 'double'
  | 'glow';

export type DividerOrientation = 'horizontal' | 'vertical';
export type DividerThickness = 'sm' | 'md' | 'lg';
export type DividerAlign = 'start' | 'center' | 'end';

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The visual style of the divider line (10 variants).
   * @default 'solid'
   */
  variant?: DividerVariant;

  /**
   * Orientation of the divider.
   * @default 'horizontal'
   */
  orientation?: DividerOrientation;

  /**
   * Line thickness.
   * @default 'sm'
   */
  thickness?: DividerThickness;

  /**
   * Alignment of embedded children text/badge.
   * @default 'center'
   */
  align?: DividerAlign;

  /**
   * Optional content to be rendered within the divider (horizontal only).
   */
  children?: ReactNode;
}
