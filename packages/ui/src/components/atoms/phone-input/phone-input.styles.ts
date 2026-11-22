import { cva } from 'class-variance-authority';

export const phoneInputContainerVariants = cva(
  'relative flex flex-col gap-1.5 transition-all duration-150',
  {
    variants: {
      fullWidth: {
        true: 'w-full',
        false: 'w-80',
      },
    },
    defaultVariants: {
      fullWidth: false,
    },
  }
);

export const phoneInputGroupVariants = cva(
  'relative flex items-center transition-all duration-150',
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

export const phoneInputVariants = cva(
  'w-full bg-transparent font-core-circle-body text-core-circle-text-main placeholder:text-core-circle-text-muted outline-none transition-all duration-150',
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

export const countryTriggerVariants = cva(
  'flex items-center gap-1.5 shrink-0 px-3 py-1 font-medium text-slate-700 hover:text-slate-900 border-r border-core-circle-border-main/70 transition-colors focus:outline-none cursor-pointer select-none',
  {
    variants: {
      size: {
        sm: 'text-xs h-8',
        md: 'text-sm h-10',
        lg: 'text-base h-12',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);
