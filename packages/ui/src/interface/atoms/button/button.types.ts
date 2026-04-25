import * as React from 'react';
import { type VariantProps } from 'class-variance-authority';
import { buttonVariants } from '../../../components/atoms/button/Button.styles';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
  startLoadingIcon?: React.ReactNode;
  endLoadingIcon?: React.ReactNode;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}
