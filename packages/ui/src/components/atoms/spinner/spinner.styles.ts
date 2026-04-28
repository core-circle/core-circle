import { cva } from 'class-variance-authority';

export const spinnerVariants = cva(
  'inline-block rounded-full border-solid animate-[spinner-spin_0.8s_linear_infinite]',
  {
    variants: {
      variant: {
        primary: 'border-core-circle-primary border-t-transparent',
        secondary: 'border-core-circle-secondary border-t-transparent',
        warning: 'border-core-circle-warning border-t-transparent',
        destructive: 'border-core-circle-destructive border-t-transparent',
        info: 'border-core-circle-blue-500 border-t-transparent',
        white: 'border-white border-t-transparent',
      },
      size: {
        sm: 'w-4 h-4 border-2',
        md: 'w-8 h-8 border-[3px]',
        lg: 'w-12 h-12 border-4',
        xl: 'w-16 h-16 border-[5px]',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);
