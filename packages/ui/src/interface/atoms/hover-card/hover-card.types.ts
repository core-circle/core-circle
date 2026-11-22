import { ReactNode } from 'react';

export type HoverCardVariant =
  | 'default'
  | 'card'
  | 'minimal'
  | 'glassmorphic'
  | 'gradient'
  | 'bordered'
  | 'dark'
  | 'compact'
  | 'pill'
  | 'accent';

export type HoverCardPosition =
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'top-start'
  | 'top-end'
  | 'bottom-start'
  | 'bottom-end';

export type HoverCardSize = 'sm' | 'md' | 'lg';

export interface HoverCardProps {
  /**
   * The trigger element that displays the card when hovered or focused.
   */
  trigger: ReactNode;

  /**
   * Content rendered inside the floating card popup.
   */
  children: ReactNode;

  /**
   * Visual aesthetic styling variant.
   * @default 'card'
   */
  variant?: HoverCardVariant;

  /**
   * Placement position of the card relative to the trigger.
   * @default 'bottom'
   */
  position?: HoverCardPosition;

  /**
   * Size scale affecting padding, typography, and dimensions.
   * @default 'md'
   */
  size?: HoverCardSize;

  /**
   * Time in milliseconds before the hovercard opens.
   * @default 200
   */
  openDelay?: number;

  /**
   * Time in milliseconds before the hovercard closes.
   * @default 150
   */
  closeDelay?: number;

  /**
   * Whether the hovercard trigger is disabled.
   * @default false
   */
  disabled?: boolean;

  /**
   * Additional classes for the trigger wrapper.
   */
  className?: string;

  /**
   * Additional classes for the floating hovercard content popover.
   */
  contentClassName?: string;
}
