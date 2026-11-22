import * as React from 'react';
import { VariantProps } from 'class-variance-authority';
import { resizableContainerVariants, resizableHandleVariants } from '../../../components/atoms/resizable/resizable.styles';

export type ResizableDirection = 'horizontal' | 'vertical';

export interface ResizableProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof resizableContainerVariants> {
  /** Layout direction: 'horizontal' (left-right) or 'vertical' (top-bottom). Default: 'horizontal' */
  direction?: ResizableDirection;
  /** Initial size percentage of the primary panel (0 to 100). Default: 50 */
  defaultSize?: number;
  /** Minimum size percentage allowed for the primary panel. Default: 15 */
  minSize?: number;
  /** Maximum size percentage allowed for the primary panel. Default: 85 */
  maxSize?: number;
  /** Callback fired whenever panel size is modified during drag */
  onResize?: (size: number) => void;
  /** Whether drag resizing is disabled. Default: false */
  disabled?: boolean;
}

export interface ResizablePanelProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export interface ResizableHandleProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof resizableHandleVariants> {
  /** Whether to show a visual grip icon or indicator line inside the handle. Default: true */
  withHandle?: boolean;
}
