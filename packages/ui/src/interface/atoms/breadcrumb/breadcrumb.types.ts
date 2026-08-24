import { ReactNode } from 'react';

export type BreadcrumbVariant =
  | 'standard'
  | 'pills'
  | 'card'
  | 'glassmorphic'
  | 'gradient'
  | 'floating'
  | 'underlined'
  | 'bordered-segment'
  | 'soft'
  | 'ghost';

export type BreadcrumbSize = 'sm' | 'md' | 'lg';

export interface BreadcrumbItem {
  label: ReactNode;
  href?: string;
  icon?: ReactNode;
  prefix?: ReactNode;
  suffix?: ReactNode;
}

export interface BreadcrumbProps {
  /**
   * Array of breadcrumb trail items
   */
  items: BreadcrumbItem[];

  /**
   * Visual style variant of the breadcrumb trail (10 options)
   * @default 'standard'
   */
  variant?: BreadcrumbVariant;

  /**
   * Size scale of the breadcrumb trail
   * @default 'md'
   */
  size?: BreadcrumbSize;

  /**
   * Custom separator between trail items
   * @default '/'
   */
  separator?: ReactNode;

  /**
   * Optional "Go Back" button leading the trail
   */
  showBack?: boolean;

  /**
   * Custom text for the back link
   * @default 'Back'
   */
  backLabel?: string;

  /**
   * Optional custom class name
   */
  className?: string;

  /**
   * Optional custom link renderer (e.g. Next.js Link)
   */
  renderLink?: (props: { href: string; children: ReactNode; className: string }) => ReactNode;
}
