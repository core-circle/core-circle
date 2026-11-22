import { ReactNode } from 'react';

export type PaginationVariant =
  | 'default'
  | 'pills'
  | 'bordered'
  | 'minimal';

export type PaginationSize = 'sm' | 'md' | 'lg';

export interface PaginationProps {
  /**
   * Current active page (1-indexed).
   */
  currentPage: number;

  /**
   * Total number of pages available.
   */
  totalPages: number;

  /**
   * Callback fired when a page item or control is selected.
   */
  onPageChange?: (page: number) => void;

  /**
   * Number of page siblings to display on either side of the current page.
   * @default 1
   */
  siblingCount?: number;

  /**
   * Visual aesthetic styling variant.
   * @default 'default'
   */
  variant?: PaginationVariant;

  /**
   * Proportional sizing scale.
   * @default 'md'
   */
  size?: PaginationSize;

  /**
   * Whether to display previous & next directional buttons.
   * @default true
   */
  showControls?: boolean;

  /**
   * Custom previous button label or icon.
   */
  prevLabel?: ReactNode;

  /**
   * Custom next button label or icon.
   */
  nextLabel?: ReactNode;

  /**
   * Whether pagination navigation is globally disabled.
   * @default false
   */
  disabled?: boolean;

  /**
   * Additional classes for the nav container.
   */
  className?: string;
}
