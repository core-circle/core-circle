import * as React from 'react';
import { VariantProps } from 'class-variance-authority';
import { commandContainerVariants } from '../../../components/atoms/command/command.styles';

export interface CommandItem {
  id: string;
  label: string;
  description?: string;
  icon?: React.ReactNode;
  shortcut?: string;
  onSelect?: () => void;
  disabled?: boolean;
}

export interface CommandGroup {
  id: string;
  heading: string;
  items: CommandItem[];
}

export interface CommandProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof commandContainerVariants> {
  /** Sectioned command menu groups */
  groups: CommandGroup[];
  /** Search input placeholder */
  placeholder?: string;
  /** Whether the command palette is open (if modal mode) */
  open?: boolean;
  /** Callback when open state changes */
  onOpenChange?: (open: boolean) => void;
  /** Visual display mode: inline embedded card or floating modal overlay */
  mode?: 'inline' | 'modal';
  /** Search query state for controlled usage */
  query?: string;
  /** Callback when query string changes */
  onQueryChange?: (query: string) => void;
  /** Keyboard shortcut badge hint, e.g. "⌘K" */
  shortcutHint?: string;
}
