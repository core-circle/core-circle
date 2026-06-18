import { ReactNode } from 'react';

export type PopoverPosition = 'top' | 'bottom' | 'left' | 'right';
export type PopoverAlign = 'start' | 'center' | 'end';

export interface PopoverProps {
  /**
   * The trigger element.
   */
  trigger: ReactNode;
  
  /**
   * The content to display in the popover.
   */
  children: ReactNode;
  
  /**
   * The position of the popover relative to the trigger.
   * @default 'bottom'
   */
  position?: PopoverPosition;
  
  /**
   * The alignment of the popover relative to the trigger.
   * @default 'center'
   */
  align?: PopoverAlign;
  
  /**
   * Whether the popover is open.
   */
  open?: boolean;
  
  /**
   * Initial open state.
   */
  defaultOpen?: boolean;
  
  /**
   * Callback when open state changes.
   */
  onOpenChange?: (open: boolean) => void;
  
  /**
   * Additional class names for the content.
   */
  className?: string;
}
