import { ReactNode } from 'react';

export type TrendDirection = 'up' | 'down' | 'neutral';

export type TrendBadgeVariant =
  | 'soft'
  | 'filled'
  | 'outline'
  | 'minimal'
  | 'pill'
  | 'badge';

export type TrendBadgeSize = 'xs' | 'sm' | 'md' | 'lg';

export interface TrendBadgeProps {
  /**
   * The value to display (e.g. "+12.4%", "-3.8%", "0.0%").
   */
  value: ReactNode;

  /**
   * Explicit trend direction. If omitted, will be inferred from string value (+ or -).
   * @default 'neutral' (or inferred)
   */
  trend?: TrendDirection;

  /**
   * Visual aesthetic styling variant.
   * @default 'soft'
   */
  variant?: TrendBadgeVariant;

  /**
   * Size scale of the trend badge.
   * @default 'sm'
   */
  size?: TrendBadgeSize;

  /**
   * Whether to display the directional indicator icon (or pass a custom icon).
   * @default true
   */
  showIcon?: boolean;

  /**
   * Custom icon override.
   */
  icon?: ReactNode;

  /**
   * Optional prefix before the value (e.g. "+", "▲").
   */
  prefix?: ReactNode;

  /**
   * Optional suffix after the value (e.g. "vs last month", "pts").
   */
  suffix?: ReactNode;

  /**
   * Invert positive/negative semantic colors (e.g. when lower costs or latency is positive).
   * @default false
   */
  invertColors?: boolean;

  /**
   * Additional classes for the container.
   */
  className?: string;
}
