import { cva } from 'class-variance-authority';

export const numberInputContainerVariants = cva(
  'relative flex flex-col gap-1.5 transition-all duration-150',
  {
    variants: {
      fullWidth: {
        true: 'w-full',
        false: 'w-72',
      },
    },
    defaultVariants: {
      fullWidth: false,
    },
  }
);

export const numberInputGroupVariants = cva(
  'relative flex items-center transition-all duration-150 overflow-hidden',
  {
    variants: {
      variant: {
        outline:
          'bg-white border border-core-circle-border-main rounded-core-circle-lg shadow-core-circle-subtle focus-within:border-core-circle-primary focus-within:ring-2 focus-within:ring-core-circle-primary/20',
        filled:
          'bg-slate-100 border border-transparent rounded-core-circle-lg focus-within:bg-white focus-within:border-core-circle-primary focus-within:ring-2 focus-within:ring-core-circle-primary/20',
        material:
          'bg-transparent border-b-2 border-core-circle-border-main rounded-none focus-within:border-core-circle-primary',
      },
      hasError: {
        true: 'border-core-circle-destructive focus-within:border-core-circle-destructive focus-within:ring-core-circle-destructive/20',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'outline',
      hasError: false,
    },
  }
);

export const numberInputVariants = cva(
  'w-full bg-transparent font-core-circle-body text-core-circle-text-main placeholder:text-core-circle-text-muted outline-none transition-all duration-150 text-left font-mono',
  {
    variants: {
      size: {
        sm: 'h-8 px-2 text-xs',
        md: 'h-10 px-3 text-sm',
        lg: 'h-12 px-3.5 text-base',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

export const stepperButtonVariants = cva(
  'flex items-center justify-center shrink-0 text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors focus:outline-none cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed select-none',
  {
    variants: {
      size: {
        sm: 'w-6 h-full text-xs',
        md: 'w-8 h-full text-sm',
        lg: 'w-10 h-full text-base',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);
