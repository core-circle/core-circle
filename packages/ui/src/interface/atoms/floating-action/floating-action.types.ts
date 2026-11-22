import * as React from 'react';
import { VariantProps } from 'class-variance-authority';
import { fabContainerVariants } from '../../../components/atoms/floating-action/floating-action.styles';

export type FabPosition = 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
export type FabDirection = 'up' | 'down' | 'left' | 'right';
export type FabVariant = 'primary' | 'secondary' | 'dark' | 'gradient';
export type FabSize = 'sm' | 'md' | 'lg';

export interface FabAction {
  id: string;
  label: string;
  icon: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

export interface FloatingActionProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof fabContainerVariants> {
  /** Array of speed-dial child action items */
  actions?: FabAction[];
  /** Corner anchor position */
  position?: FabPosition;
  /** Whether positioning is CSS fixed to viewport or absolute within parent container. Default: true */
  fixed?: boolean;
  /** Fan-out direction for action items. Default: 'up' */
  direction?: FabDirection;
  /** Controlled open state */
  open?: boolean;
  /** Default open state when uncontrolled */
  defaultOpen?: boolean;
  /** Callback fired when expanded/collapsed state changes */
  onOpenChange?: (open: boolean) => void;
  /** Main trigger button icon */
  icon?: React.ReactNode;
  /** Active trigger button icon when open */
  activeIcon?: React.ReactNode;
  /** Surface color variant */
  variant?: FabVariant;
  /** Button sizing scale */
  size?: FabSize;
  /** Optional text label next to trigger */
  label?: string;
  /** Disabled interaction */
  disabled?: boolean;
}
