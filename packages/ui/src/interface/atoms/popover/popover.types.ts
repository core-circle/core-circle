import { ReactNode } from 'react';

export type PopoverPosition = 'top' | 'bottom' | 'left' | 'right';
export type PopoverAlign = 'start' | 'center' | 'end';

export type PopoverVariant =
  | 'card'
  | 'floating'
  | 'glassmorphic'
  | 'gradient'
  | 'bordered'
  | 'pill'
  | 'primary'
  | 'success'
  | 'warning'
  | 'compact';

export type PopoverSize = 'sm' | 'md' | 'lg' | 'xl' | 'auto';

export interface PopoverProps {
  /**
   * The trigger element that toggles the popover.
   */
  trigger: ReactNode;
  
  /**
   * Content inside the popover body.
   */
  children?: ReactNode;

  /**
   * Optional header title displayed at top.
   */
  title?: ReactNode;

  /**
   * Optional subtitle description text.
   */
  description?: ReactNode;

  /**
   * Optional header leading icon.
   */
  icon?: ReactNode;

  /**
   * Visual style variant of the popover card (10 options).
   * @default 'card'
   */
  variant?: PopoverVariant;

  /**
   * Size / width scale of the popover card.
   * @default 'md'
   */
  size?: PopoverSize;
  
  /**
   * Placement relative to the trigger.
   * @default 'bottom'
   */
  position?: PopoverPosition;
  
  /**
   * Alignment relative to the trigger.
   * @default 'center'
   */
  align?: PopoverAlign;

  /**
   * Whether to show an arrow pointer pointing toward the trigger.
   * @default false
   */
  showArrow?: boolean;

  /**
   * Whether to render an accessible top-right close (x) button.
   * @default false
   */
  showClose?: boolean;
  
  /**
   * Controlled open state.
   */
  open?: boolean;
  
  /**
   * Initial open state for uncontrolled usage.
   * @default false
   */
  defaultOpen?: boolean;
  
  /**
   * Callback fired when open state changes.
   */
  onOpenChange?: (open: boolean) => void;
  
  /**
   * Additional class names for the popover content box.
   */
  className?: string;

  /**
   * Additional class names for the trigger wrapper.
   */
  triggerClassName?: string;
}
