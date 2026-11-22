import * as React from 'react';
import { VariantProps } from 'class-variance-authority';
import { passwordInputVariants } from '../../../components/atoms/password-input/password-input.styles';

export type PasswordStrength = 'weak' | 'fair' | 'good' | 'strong';

export interface PasswordInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof passwordInputVariants> {
  label?: string;
  helperText?: string;
  error?: string | boolean;
  fullWidth?: boolean;
  showStrength?: boolean;
  capsLockWarning?: boolean;
  showToggle?: boolean;
  onStrengthChange?: (strength: PasswordStrength, score: number) => void;
  wrapperClassName?: string;
}
