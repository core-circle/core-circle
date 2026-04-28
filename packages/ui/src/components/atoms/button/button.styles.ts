import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer',
  {
    variants: {
      variant: {
        primary:
          'bg-core-circle-primary text-white hover:bg-core-circle-primary-hover active:bg-core-circle-primary-active shadow-core-circle-subtle',
        secondary:
          'bg-core-circle-secondary text-white hover:bg-core-circle-secondary-hover active:bg-core-circle-secondary-active shadow-core-circle-subtle',
        warning:
          'bg-core-circle-warning text-white hover:bg-core-circle-warning-hover active:bg-core-circle-warning-active shadow-core-circle-subtle',
        ghost:
          'bg-transparent text-gray-700',
        destructive:
          'bg-core-circle-destructive text-white hover:bg-core-circle-destructive-hover active:bg-core-circle-destructive shadow-core-circle-subtle',
        outline:
          'bg-transparent border-2 border-core-circle-primary text-core-circle-primary hover:bg-core-circle-primary/10',
      },
      size: {
        sm: 'px-3 py-1.5 text-sm rounded-core-circle-md',
        md: 'px-4 py-2 text-sm rounded-core-circle-lg',
        lg: 'px-6 py-3 text-base rounded-core-circle-xl',
        icon: 'h-10 w-10 rounded-full',
      },
      labelSize: {
        xs: 'text-xs',
        sm: 'text-sm',
        base: 'text-base',
        lg: 'text-lg',
        xl: 'text-xl',
        '2xl': 'text-2xl',
      },
      labelWeight: {
        light: 'font-light',
        normal: 'font-normal',
        medium: 'font-medium',
        semibold: 'font-semibold',
        bold: 'font-bold',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      labelWeight: 'medium',
    },
  }
);
