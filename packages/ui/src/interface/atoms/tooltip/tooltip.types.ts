import * as React from 'react';
import { type VariantProps } from 'class-variance-authority';
import { tooltipVariants } from '../../../components/atoms/tooltip/tooltip.styles';

export interface TooltipProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tooltipVariants> {
  title: string;
  description: string;
  icon?: React.ReactNode;
  trigger?: 'click' | 'hover';
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  showCloseIcon?: boolean;
}
