import { ReactNode } from 'react';

export type TimelineStatus = 'completed' | 'current' | 'upcoming' | 'error';

export type TimelineOrientation = 'vertical' | 'horizontal';

export type TimelineVariant = 'solid' | 'dashed' | 'gradient';

export type TimelineSize = 'sm' | 'md' | 'lg';

export interface TimelineItem {
  id: string;
  title: ReactNode;
  description?: ReactNode;
  timestamp?: ReactNode;
  icon?: ReactNode;
  status?: TimelineStatus;
  badge?: ReactNode;
  className?: string;
}

export interface TimelineProps {
  /**
   * List of sequential milestone items in chronological order.
   */
  items: TimelineItem[];

  /**
   * Layout alignment of the timeline tracks.
   * @default 'vertical'
   */
  orientation?: TimelineOrientation;

  /**
   * Connecting line styling variant.
   * @default 'solid'
   */
  variant?: TimelineVariant;

  /**
   * Proportional sizing scale.
   * @default 'md'
   */
  size?: TimelineSize;

  /**
   * Additional classes for the timeline container.
   */
  className?: string;
}
