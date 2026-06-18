import { HTMLAttributes, ReactNode } from 'react';

export interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The type of expansion allowed
   * @default 'single'
   */
  type?: 'single' | 'multiple';
  /**
   * The initial active item(s)
   */
  defaultValue?: string | string[];
  /**
   * The controlled value of active item(s)
   */
  value?: string | string[];
  /**
   * Callback when active items change
   */
  onValueChange?: (value: string | string[]) => void;
  /**
   * Visual variant
   * @default 'bordered'
   */
  variant?: 'bordered' | 'ghost' | 'separated';
  /**
   * Accordion items (Accordion.Item)
   */
  children?: ReactNode;
}

export interface AccordionItemProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Unique identifier for the item
   */
  value: string;
  /**
   * Whether the item is disabled
   */
  disabled?: boolean;
}

export interface AccordionTriggerProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  /**
   * Optional icon to show at the start
   */
  startIcon?: ReactNode;
}

export interface AccordionContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}
