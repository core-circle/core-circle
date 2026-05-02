import { HTMLAttributes, ReactNode } from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The content of the card
   */
  children: ReactNode;

  /**
   * Visual variant
   * @default 'outline'
   */
  variant?: 'outline' | 'shadow' | 'ghost' | 'flat';

  /**
   * Whether the card should have a border radius
   * @default true
   */
  rounded?: boolean;

  /**
   * Hover effect
   * @default false
   */
  hoverable?: boolean;

  /**
   * Full width container
   * @default true
   */
  fullWidth?: boolean;
}

export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  /**
   * Show a divider below the header
   * @default false
   */
  divider?: boolean;
  /**
   * Callback function when the close icon is clicked.
   * If provided, a close icon will be rendered.
   */
  onClose?: () => void;
}

export interface CardBodyProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  /**
   * Remove default padding
   * @default false
   */
  noPadding?: boolean;
}

export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  /**
   * Show a divider above the footer
   * @default false
   */
  divider?: boolean;
  /**
   * Alignment of footer content
   * @default 'end'
   */
  align?: 'start' | 'center' | 'end' | 'between';
}
