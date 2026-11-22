import * as React from 'react';
import { VariantProps } from 'class-variance-authority';
import { segmentedControlVariants } from '../../../components/atoms/segmented-control/segmented-control.styles';

export interface SegmentedControlOption {
  label: React.ReactNode;
  value: string;
  icon?: React.ReactNode;
  disabled?: boolean;
}

export interface SegmentedControlProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'defaultValue'>,
    VariantProps<typeof segmentedControlVariants> {
  options: SegmentedControlOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  label?: string;
  helperText?: string;
  fullWidth?: boolean;
  disabled?: boolean;
}
