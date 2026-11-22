import { ReactNode } from 'react';

export type EmptyStateVariant =
  | 'default'
  | 'card'
  | 'dashed'
  | 'minimal'
  | 'glassmorphic'
  | 'dark';

export type EmptyStateSize = 'sm' | 'md' | 'lg';

export interface EmptyStateProps {
  /**
   * Primary title or heading explaining the empty state.
   */
  title: ReactNode;

  /**
   * Explanatory paragraph or guidance on next steps.
   */
  description?: ReactNode;

  /**
   * Central icon or illustration element.
   */
  icon?: ReactNode;

  /**
   * Primary call to action (typically a Button).
   */
  action?: ReactNode;

  /**
   * Optional secondary action button or link.
   */
  secondaryAction?: ReactNode;

  /**
   * Visual aesthetic styling variant.
   * @default 'default'
   */
  variant?: EmptyStateVariant;

  /**
   * Proportional sizing scale.
   * @default 'md'
   */
  size?: EmptyStateSize;

  /**
   * Additional classes for the container.
   */
  className?: string;
}
