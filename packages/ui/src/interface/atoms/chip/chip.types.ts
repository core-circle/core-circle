import * as React from 'react';
import { VariantProps } from 'class-variance-authority';
import { chipVariants } from '../../../components/atoms/chip/chip.styles';

export interface ChipProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onSelect'>,
    VariantProps<typeof chipVariants> {
  label: React.ReactNode;
  selected?: boolean;
  removable?: boolean;
  onRemove?: (e: React.MouseEvent) => void;
  onSelect?: (selected: boolean) => void;
  icon?: React.ReactNode;
  count?: number | string;
  disabled?: boolean;
}
