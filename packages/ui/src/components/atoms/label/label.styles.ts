import { cva } from 'class-variance-authority';

export const labelVariants = cva(
  'transition-all duration-200 pointer-events-none select-none font-core-circle-body',
  {
    variants: {
      size: {
        xs: 'text-core-circle-sm',
        sm: 'text-core-circle-base',
        md: 'text-core-circle-lg',
        lg: 'text-core-circle-xl',
        xl: 'text-core-circle-2xl',
        '2xl': 'text-core-circle-3xl',
      },
      weight: {
        light: 'font-core-circle-light',
        normal: 'font-core-circle-normal',
        medium: 'font-core-circle-medium',
        semibold: 'font-core-circle-semibold',
        bold: 'font-core-circle-bold',
      },
      variant: {
        default: 'text-core-circle-text-main',
        muted: 'text-core-circle-text-muted',
        primary: 'text-core-circle-primary',
        warning: 'text-core-circle-warning',
        error: 'text-core-circle-warning',
      },
      uppercase: {
        true: 'uppercase tracking-wider',
        false: 'capitalize tracking-normal',
      },
    },
    defaultVariants: {
      size: 'xs',
      weight: 'normal',
      variant: 'muted',
      uppercase: false,
    },
  }
);
