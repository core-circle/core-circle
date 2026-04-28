import { InputHTMLAttributes } from 'react';

export type CheckboxVariant = 'outline' | 'solid';
export type CheckboxSize = 'sm' | 'md' | 'lg';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange'> {
  variant?: CheckboxVariant;
  size?: CheckboxSize;
  label?: string;
  labelSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  labelWeight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
  labelClassName?: string;
  error?: string;
  helperText?: string;
  indeterminate?: boolean;
  onChange?: (checked: boolean) => void;
}
