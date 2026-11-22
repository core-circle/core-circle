import { ReactNode } from 'react';

export type StatVariant =
  | 'card'
  | 'bordered'
  | 'minimal'
  | 'glassmorphic'
  | 'gradient'
  | 'dark'
  | 'accent';

export type StatSize = 'sm' | 'md' | 'lg';

export type StatOrientation = 'vertical' | 'horizontal';

export interface StatProps {
  /**
   * Primary title or metric label (e.g. "Total Revenue", "Monthly Recurring Revenue").
   */
  label: ReactNode;

  /**
   * Prominent metric value (e.g. "$128,450", "4,289").
   */
  value: ReactNode;

  /**
   * Contextual description or comparison caption (e.g. "vs. prior 30 days").
   */
  description?: ReactNode;

  /**
   * Trend indicator or TrendBadge component.
   */
  trend?: ReactNode;

  /**
   * Icon element to display alongside the metric.
   */
  icon?: ReactNode;

  /**
   * Optional status badge or pill in the header.
   */
  badge?: ReactNode;

  /**
   * Optional custom footer content (e.g. sparkline micro-chart or progress bar).
   */
  footer?: ReactNode;

  /**
   * Visual aesthetic styling variant.
   * @default 'card'
   */
  variant?: StatVariant;

  /**
   * Size scale affecting typography and padding.
   * @default 'md'
   */
  size?: StatSize;

  /**
   * Layout orientation of content elements.
   * @default 'vertical'
   */
  orientation?: StatOrientation;

  /**
   * Additional classes for the container.
   */
  className?: string;
}
