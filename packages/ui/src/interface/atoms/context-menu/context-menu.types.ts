import { ReactNode } from 'react';

export type ContextMenuVariant =
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

export type ContextMenuSize = 'sm' | 'md' | 'lg';

export interface ContextMenuItem {
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

export interface ContextMenuProps {
  /**
   * The trigger region or element that opens the menu on right-click.
   */
  children: ReactNode;

  /**
   * Array of items to display in the context menu.
   */
  items?: ContextMenuItem[];

  /**
   * Visual aesthetic styling variant.
   * @default 'card'
   */
  variant?: ContextMenuVariant;

  /**
   * Size scale affecting padding, typography, and min-width.
   * @default 'md'
   */
  size?: ContextMenuSize;

  /**
   * Whether the right-click menu is disabled.
   * @default false
   */
  disabled?: boolean;

  /**
   * Additional class names for context menu floating popover.
   */
  className?: string;

  /**
   * Additional class names for trigger wrapper container.
   */
  triggerClassName?: string;
}

export interface ContextMenuItemProps {
  children: ReactNode;
  icon?: ReactNode;
  shortcut?: string;
  disabled?: boolean;
  destructive?: boolean;
  badge?: ReactNode;
  onClick?: () => void;
  className?: string;
}

export interface ContextMenuSeparatorProps {
  className?: string;
}

export interface ContextMenuLabelProps {
  children: ReactNode;
  className?: string;
}
