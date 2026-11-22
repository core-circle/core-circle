import * as React from 'react';
import { VariantProps } from 'class-variance-authority';
import { colorSwatchTileVariants } from '../../../components/atoms/color-swatch/color-swatch.styles';

export type SwatchItem = string | { label: string; value: string };

export interface ColorSwatchProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'defaultValue'>,
    VariantProps<typeof colorSwatchTileVariants> {
  colors: SwatchItem[];
  value?: string;
  defaultValue?: string;
  onChange?: (color: string) => void;
  label?: string;
  helperText?: string;
  columns?: number;
  disabled?: boolean;
}
