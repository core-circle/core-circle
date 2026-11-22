import { cva } from 'class-variance-authority';

export const passwordInputContainerVariants = cva(
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

export const passwordInputVariants = cva(
  'w-full font-core-circle-body text-core-circle-text-main placeholder:text-core-circle-text-muted transition-all duration-150 outline-none pr-10',
  {
    variants: {
      variant: {
        outline:
          'bg-white border border-core-circle-border-main rounded-core-circle-lg focus:border-core-circle-primary focus:ring-2 focus:ring-core-circle-primary/20 shadow-core-circle-subtle',
        filled:
          'bg-slate-100 border border-transparent rounded-core-circle-lg focus:bg-white focus:border-core-circle-primary focus:ring-2 focus:ring-core-circle-primary/20',
        material:
          'bg-transparent border-b-2 border-core-circle-border-main rounded-none px-0 focus:border-core-circle-primary',
      },
      size: {
        sm: 'h-8 px-2.5 text-xs',
        md: 'h-10 px-3.5 text-sm',
        lg: 'h-12 px-4 text-base',
      },
      hasError: {
        true: 'border-core-circle-destructive focus:border-core-circle-destructive focus:ring-core-circle-destructive/20',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'outline',
      size: 'md',
      hasError: false,
    },
  }
);

export const strengthBarVariants = cva(
  'h-1.5 rounded-full transition-all duration-300',
  {
    variants: {
      strength: {
        weak: 'w-1/4 bg-red-500',
        fair: 'w-2/4 bg-amber-500',
        good: 'w-3/4 bg-blue-500',
        strong: 'w-full bg-emerald-500',
      },
    },
    defaultVariants: {
      strength: 'weak',
    },
  }
);
