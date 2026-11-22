import { ReactNode } from 'react';

export type CalloutVariant =
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'brand'
  | 'neutral';

export type CalloutSize = 'sm' | 'md' | 'lg';

export interface CalloutProps {
  /**
   * Main body content or description.
   */
  children: ReactNode;

  /**
   * Optional bold title or headline.
   */
  title?: ReactNode;

  /**
   * Semantic visual color style variant.
   * @default 'info'
   */
  variant?: CalloutVariant;

  /**
   * Proportional sizing scale.
   * @default 'md'
   */
  size?: CalloutSize;

  /**
   * Leading icon element or boolean toggle.
   * @default true
   */
  icon?: ReactNode | boolean;

  /**
   * Whether to display a close/dismiss button on the top right.
   * @default false
   */
  dismissible?: boolean;

  /**
   * Callback fired when user clicks the dismiss button.
   */
  onDismiss?: () => void;

  /**
   * Trailing action button, link, or controls slot.
   */
  action?: ReactNode;

  /**
   * Additional classes for the container.
   */
  className?: string;
}
