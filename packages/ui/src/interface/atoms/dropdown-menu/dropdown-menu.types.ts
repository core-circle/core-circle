import { ReactNode } from 'react';

export type DropdownMenuVariant =
  | 'default'
  | 'card'
  | 'minimal'
  | 'glassmorphic'
  | 'gradient'
  | 'bordered'
  | 'dark'
  | 'compact'
  | 'pill'
  | 'accent';

export type DropdownMenuSize = 'sm' | 'md' | 'lg';

export type DropdownMenuPosition =
  | 'bottom-start'
  | 'bottom-end'
  | 'bottom-center'
  | 'top-start'
  | 'top-end'
  | 'left'
  | 'right';

export interface DropdownMenuItem {
  id: string;
  label: ReactNode;
  icon?: ReactNode;
  shortcut?: string;
  disabled?: boolean;
  destructive?: boolean;
  badge?: ReactNode;
  onClick?: () => void;
  divider?: boolean;
}

export interface DropdownMenuProps {
  /**
   * The trigger element that toggles the dropdown on click.
   */
  trigger: ReactNode;

  /**
   * Array of items to display in the menu.
   */
  items?: DropdownMenuItem[];

  /**
   * Optional custom children if using compound composition.
   */
  children?: ReactNode;

  /**
   * Controlled open state.
   */
  open?: boolean;

  /**
   * Initial open state in uncontrolled mode.
   * @default false
   */
  defaultOpen?: boolean;

  /**
   * Callback fired when open state changes.
   */
  onOpenChange?: (open: boolean) => void;

  /**
   * Visual aesthetic variant of the dropdown popover.
   * @default 'card'
   */
  variant?: DropdownMenuVariant;

  /**
   * Size scale affecting padding, typography, and min-width.
   * @default 'md'
   */
  size?: DropdownMenuSize;

  /**
   * Anchor alignment and position relative to trigger.
   * @default 'bottom-start'
   */
  position?: DropdownMenuPosition;

  /**
   * Additional class names for dropdown content container.
   */
  className?: string;

  /**
   * Additional class names for trigger wrapper.
   */
  triggerClassName?: string;
}

export interface DropdownMenuItemProps {
  children: ReactNode;
  icon?: ReactNode;
  shortcut?: string;
  disabled?: boolean;
  destructive?: boolean;
  badge?: ReactNode;
  onClick?: () => void;
  className?: string;
}

export interface DropdownMenuSeparatorProps {
  className?: string;
}

export interface DropdownMenuLabelProps {
  children: ReactNode;
  className?: string;
}
