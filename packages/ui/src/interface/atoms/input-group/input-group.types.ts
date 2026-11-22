import * as React from 'react';
import { VariantProps } from 'class-variance-authority';
import { inputGroupVariants } from '../../../components/atoms/input-group/input-group.styles';

export interface InputGroupProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof inputGroupVariants> {
  label?: string;
  helperText?: string;
  error?: string | boolean;
  fullWidth?: boolean;
  joined?: boolean;
  children: React.ReactNode;
}

export interface InputGroupTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  className?: string;
}

export interface InputGroupButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'outline';
  className?: string;
}
