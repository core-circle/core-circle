import { cva } from 'class-variance-authority';

export const tooltipVariants = cva(
  'absolute z-core-circle-tooltip min-w-[200px] max-w-[300px] rounded-core-circle-lg bg-white p-4 shadow-core-circle-floating border border-core-circle-border-main transition-all duration-core-circle-fast',
  {
    variants: {
      variant: {
        primary: 'border-core-circle-primary/20',
        info: 'border-core-circle-blue-200',
        warning: 'border-core-circle-warning/20',
        destructive: 'border-core-circle-destructive/20',
      },
      position: {
        top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
        bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
        left: 'right-full top-1/2 -translate-y-1/2 mr-2',
        right: 'left-full top-1/2 -translate-y-1/2 ml-2',
      },
      isOpen: {
        true: 'opacity-100 scale-100 visible',
        false: 'opacity-0 scale-95 invisible',
      },
    },
    defaultVariants: {
      variant: 'primary',
      position: 'top',
      isOpen: false,
    },
  }
);
