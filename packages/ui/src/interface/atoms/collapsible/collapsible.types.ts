import * as React from 'react';
import { VariantProps } from 'class-variance-authority';
import { collapsibleContainerVariants } from '../../../components/atoms/collapsible/collapsible.styles';

export interface CollapsibleProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof collapsibleContainerVariants> {
  /** Controlled open state */
  open?: boolean;
  /** Initial open state when uncontrolled */
  defaultOpen?: boolean;
  /** Callback fired when open state transitions */
  onOpenChange?: (open: boolean) => void;
  /** Whether the collapsible trigger is disabled */
  disabled?: boolean;
  /** Whether to completely unmount child content from the DOM when closed. Default: false */
  unmountOnExit?: boolean;
}

export interface CollapsibleTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export interface CollapsibleContentProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}
