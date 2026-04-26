import { cva } from 'class-variance-authority';

export const inputContainerVariants = cva(
  'relative flex flex-col w-full transition-all duration-200',
  {
    variants: {
      fullWidth: {
        true: 'w-full',
        false: 'w-fit',
      },
      hasFloatingLabel: {
        true: 'mt-6',
      }
    },
    defaultVariants: {
      fullWidth: false,
    },
  }
);

export const inputVariants = cva(
  'w-full font-core-circle-medium transition-all duration-200 outline-none disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        outline: 'border border-core-circle-border-main bg-white text-core-circle-text-main rounded-core-circle-lg focus:border-core-circle-primary focus:ring-2 focus:ring-core-circle-primary/10',
        material: 'border-b-2 border-core-circle-border-main bg-core-circle-bg-page hover:bg-core-circle-bg-muted focus:border-core-circle-primary rounded-t-core-circle-md',
        'material-animated': 'border-b-2 border-core-circle-border-main bg-core-circle-bg-page hover:bg-core-circle-bg-muted focus:border-core-circle-primary rounded-t-core-circle-md pt-6 pb-1.5',
        ghost: 'bg-transparent border-none text-core-circle-text-main hover:bg-core-circle-bg-page focus:bg-core-circle-bg-page',
        standard: 'border-b border-core-circle-border-main bg-transparent text-core-circle-text-main focus:border-core-circle-primary',
      },
      size: {
        sm: 'px-3 py-1.5 text-core-circle-xs',
        md: 'px-4 py-2.5 text-core-circle-sm',
        lg: 'px-6 py-4 text-core-circle-md',
      },
      hasError: {
        true: 'border-core-circle-warning focus:border-core-circle-warning focus:ring-core-circle-warning/10',
      }
    },
    defaultVariants: {
      variant: 'outline',
      size: 'md',
    },
  }
);

export const labelVariants = cva(
  'mb-1.5 text-core-circle-xs font-core-circle-bold uppercase tracking-wider transition-all duration-200 pointer-events-none',
  {
    variants: {
      variant: {
        outline: 'text-core-circle-text-muted',
        material: 'text-core-circle-primary',
        'material-animated': 'absolute left-4 top-4 mb-0 text-core-circle-sm font-core-circle-medium normal-case tracking-normal text-core-circle-text-muted',
        ghost: 'text-core-circle-text-muted',
        standard: 'text-core-circle-text-muted',
      },
      hasError: {
        true: 'text-core-circle-warning',
      },
      isFloating: {
        true: '',
      }
    },
    compoundVariants: [
      {
        variant: 'material-animated',
        isFloating: true,
        className: '-translate-y-8 left-0 scale-100 text-core-circle-primary font-core-circle-bold uppercase tracking-wider text-[10px]',
      }
    ],
    defaultVariants: {
      variant: 'outline',
    },
  }
);
