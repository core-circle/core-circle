import { HTMLAttributes, ReactNode } from 'react';

export type IndicatorVariant =
  | 'primary'
  | 'success'
  | 'warning'
  | 'destructive'
  | 'info'
  | 'gradient'
  | 'glassmorphic'
  | 'soft'
  | 'bordered'
  | 'neutral';

export type IndicatorSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type IndicatorPosition =
  | 'top-right'
  | 'top-left'
  | 'bottom-right'
  | 'bottom-left'
  | 'top-center'
  | 'bottom-center'
  | 'middle';

export type IndicatorShape = 'circle' | 'pill' | 'square' | 'rounded';

export interface IndicatorProps extends Omit<HTMLAttributes<HTMLDivElement>, 'content'> {
  /**
   * Target element to anchor the indicator onto (e.g. Avatar, Button, Icon).
   */
  children?: ReactNode;

  /**
   * Custom label or count content inside the indicator (e.g. 5, 'NEW', '99+').
   */
  content?: ReactNode;

  /**
   * Numeric count value for automatic formatting.
   */
  count?: number;

  /**
   * Max numeric count before displaying '+' suffix.
   * @default 99
   */
  max?: number;

  /**
   * Visual style variant of the indicator.
   * @default 'primary'
   */
  variant?: IndicatorVariant;

  /**
   * Size scale of the indicator.
   * @default 'md'
   */
  size?: IndicatorSize;

  /**
   * Anchor position relative to the child element.
   * @default 'top-right'
   */
  position?: IndicatorPosition;

  /**
   * Contour shape of the indicator badge.
   * @default 'circle'
   */
  shape?: IndicatorShape;

  /**
   * Whether to animate a pulsing radar ping ring around the indicator.
   * @default false
   */
  pulse?: boolean;

  /**
   * Whether to render as an inline standalone indicator without anchoring children.
   * @default false
   */
  standalone?: boolean;

  /**
   * Visibility flag. If false, renders children without indicator.
   * @default true
   */
  show?: boolean;

  /**
   * Optional custom border / ring color class.
   */
  ringColor?: string;

  /**
   * Additional class names for the indicator badge.
   */
  className?: string;

  /**
   * Additional class names for the outer wrapper container.
   */
  wrapperClassName?: string;
}
