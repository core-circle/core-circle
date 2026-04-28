import * as React from 'react';
import { type VariantProps } from 'class-variance-authority';
import { switchVariants } from '../../../components/atoms/switch/switch.styles';

export interface SwitchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof switchVariants> {
  onCheckedChange?: (checked: boolean) => void;
}
