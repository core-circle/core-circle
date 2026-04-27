import { InputHTMLAttributes } from 'react';

export type RadioVariant = 'outline' | 'solid';
export type RadioSize = 'sm' | 'md' | 'lg';

export interface RadioButtonProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange'> {
  variant?: RadioVariant;
  size?: RadioSize;
  label?: string;
  error?: string;
  helperText?: string;
  onChange?: (value: string) => void;
}
