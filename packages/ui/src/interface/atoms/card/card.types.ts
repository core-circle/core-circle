import { HTMLAttributes, ReactNode } from 'react';

export type CardVariant =
  | 'outline'
  | 'shadow'
  | 'floating'
  | 'glassmorphic'
  | 'gradient'
  | 'gradient-border'
  | 'solid-brand'
  | 'solid-dark'
  | 'cover'
  | 'flat'
  | 'bordered-elevated'
  | 'minimal'
  | 'interactive'
  | 'ghost';

export type CardOrientation = 'vertical' | 'horizontal';
export type CardCornerPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
export type CardCornerShape = 'circle' | 'rounded' | 'square';
export type CardCornerSize = 'sm' | 'md' | 'lg';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The content of the card
   */
  children: ReactNode;

  /**
   * Visual styling variant of the card (14 variants)
   * @default 'outline'
   */
  variant?: CardVariant;

  /**
   * Layout orientation of children (vertical or horizontal card)
   * @default 'vertical'
   */
  orientation?: CardOrientation;

  /**
   * Whether the card should have rounded corners
   * @default true
   */
  rounded?: boolean;

  /**
   * Whether the card responds with hover lift animation
   * @default false
   */
  hoverable?: boolean;

  /**
   * Full width container
   * @default true
   */
  fullWidth?: boolean;
}

export interface CardMediaProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Direct image source URL
   */
  src?: string;

  /**
   * Alternative text for screen readers
   */
  alt?: string;

  /**
   * Position placement of media container
   * @default 'top'
   */
  position?: 'top' | 'bottom' | 'side' | 'cover';

  /**
   * Aspect ratio of the media container
   * @default 'video'
   */
  aspect?: 'video' | 'square' | 'wide' | 'auto';

  /**
   * Optional dark overlay tint on hover or over background images
   */
  overlay?: boolean;

  /**
   * Custom overlay child elements (e.g. badges, play buttons, tags)
   */
  children?: ReactNode;
}

export interface CardCornerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;

  /**
   * Corner placement anchor
   * @default 'top-right'
   */
  position?: CardCornerPosition;

  /**
   * Geometric shape of the corner container
   * @default 'rounded'
   */
  shape?: CardCornerShape;

  /**
   * Size dimension of the corner container
   * @default 'md'
   */
  size?: CardCornerSize;
}

export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  /**
   * Show a divider line below the header
   * @default false
   */
  divider?: boolean;
  /**
   * Callback function when the close icon is clicked.
   */
  onClose?: () => void;
}

export interface CardBodyProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  /**
   * Remove default body padding
   * @default false
   */
  noPadding?: boolean;
}

export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  /**
   * Show a divider line above the footer
   * @default false
   */
  divider?: boolean;
  /**
   * Alignment of footer action items
   * @default 'end'
   */
  align?: 'start' | 'center' | 'end' | 'between';
}
