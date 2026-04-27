import { ReactNode } from 'react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  icon?: ReactNode;
  prefix?: ReactNode;
  suffix?: ReactNode;
}

export interface BreadcrumbProps {
  /**
   * Array of breadcrumb items
   */
  items: BreadcrumbItem[];
  
  /**
   * Visual style variant
   * @default 'standard'
   */
  variant?: 'standard' | 'ghost' | 'pills';
  
  /**
   * Custom separator between items
   * @default '/'
   */
  separator?: ReactNode;
  
  /**
   * Optional "Go Back" link or button
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
   * Optional custom link renderer (e.g. for next/link)
   */
  renderLink?: (props: { href: string; children: ReactNode; className: string }) => ReactNode;
}
