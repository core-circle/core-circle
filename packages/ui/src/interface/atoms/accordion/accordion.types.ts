import { ReactNode } from 'react';

export type AccordionType = 'single' | 'multiple';
export type AccordionVariant = 'bordered' | 'ghost' | 'separated';
export type AccordionSize = 'sm' | 'md' | 'lg';

export interface AccordionItemProps {
  /**
   * Unique identifier for the item
   */
  id: string;
  /**
   * Title of the accordion item
   */
  title: ReactNode;
  /**
   * Content of the accordion item
   */
  content: ReactNode;
  /**
   * Optional icon to display before the title (alias for startIcon)
   */
  icon?: ReactNode;
  /**
   * Optional icon to display before the title
   */
  startIcon?: ReactNode;
  /**
   * Optional icon to display after the title
   */
  endIcon?: ReactNode;
  /**
   * Whether the item is disabled
   */
  disabled?: boolean;
}

export interface AccordionProps {
  /**
   * Unique identifier for the accordion
   */
  id?: string;
  /**
   * List of accordion items
   */
  items: AccordionItemProps[];
  /**
   * Whether one or multiple items can be open at a time
   * @default 'single'
   */
  type?: AccordionType;
  /**
   * Visual variant of the accordion
   * @default 'bordered'
   */
  variant?: AccordionVariant;
  /**
   * Size of the accordion padding and text
   * @default 'md'
   */
  size?: AccordionSize;
  /**
   * ID(s) of the items that should be open by default
   */
  defaultValue?: string | string[];
  /**
   * Controlled value of the open items
   */
  value?: string | string[];
  /**
   * Callback called when the open state changes
   */
  onChange?: (value: string | string[]) => void;
  /**
   * Additional class names
   */
  className?: string;
  /**
   * Whether the accordion takes up full width
   * @default true
   */
  fullWidth?: boolean;
  /**
   * Custom icon to replace the default chevron
   */
  expandIcon?: ReactNode;
}
