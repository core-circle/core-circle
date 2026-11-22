import * as React from 'react';
import { VariantProps } from 'class-variance-authority';
import { numberInputVariants, numberInputGroupVariants } from '../../../components/atoms/number-input/number-input.styles';

export type StepperLayout = 'stacked' | 'split' | 'none';

export interface NumberInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange' | 'value' | 'defaultValue' | 'prefix'>,
    VariantProps<typeof numberInputVariants>,
    VariantProps<typeof numberInputGroupVariants> {
  value?: number | string;
  defaultValue?: number | string;
  min?: number;
  max?: number;
  step?: number;
  precision?: number;
  allowNegative?: boolean;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  stepper?: StepperLayout;
  formatThousands?: boolean;
  label?: string;
  helperText?: string;
  error?: string | boolean;
  fullWidth?: boolean;
  onNumberChange?: (value: number | null, formattedString: string) => void;
  wrapperClassName?: string;
}
