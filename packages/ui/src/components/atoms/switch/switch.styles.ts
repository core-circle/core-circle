import { cva } from 'class-variance-authority';

export const switchVariants = cva(
  'relative inline-flex shrink-0 cursor-pointer items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-core-circle-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-core-circle-gray-200 data-[state=checked]:bg-core-circle-primary',
        secondary: 'bg-core-circle-gray-200 data-[state=checked]:bg-core-circle-secondary',
        warning: 'bg-core-circle-gray-200 data-[state=checked]:bg-core-circle-warning',
        destructive: 'bg-core-circle-gray-200 data-[state=checked]:bg-core-circle-destructive',
      },
      size: {
        sm: 'h-5 w-9',
        md: 'h-6 w-11',
        lg: 'h-7 w-14',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export const switchThumbVariants = cva(
  'pointer-events-none block rounded-full bg-white shadow-lg ring-0 transition-transform',
  {
    variants: {
      size: {
        sm: 'h-4 w-4 data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0.5',
        md: 'h-5 w-5 data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0.5',
        lg: 'h-6 w-6 data-[state=checked]:translate-x-7 data-[state=unchecked]:translate-x-0.5',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);
