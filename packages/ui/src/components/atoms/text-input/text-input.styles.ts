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

export const inputWrapperVariants = cva(
  'relative flex items-center group w-full font-core-circle-medium transition-all duration-200 outline-none',
  {
    variants: {
      variant: {
        outline: 'border border-core-circle-border-main bg-white rounded-core-circle-lg focus-within:border-core-circle-primary focus-within:ring-2 focus-within:ring-core-circle-primary/10',
        material: 'border-b-2 border-core-circle-border-main bg-core-circle-bg-page hover:bg-core-circle-bg-muted focus-within:border-core-circle-primary rounded-t-core-circle-md',
        'material-animated': 'border-b-2 border-core-circle-border-main bg-core-circle-bg-page hover:bg-core-circle-bg-muted focus-within:border-core-circle-primary rounded-t-core-circle-md',
        ghost: 'bg-transparent border-none hover:bg-core-circle-bg-page focus-within:bg-core-circle-bg-page',
        standard: 'border-b border-core-circle-border-main bg-transparent focus-within:border-core-circle-primary',
      },
      hasError: {
        true: 'border-core-circle-warning focus-within:border-core-circle-warning focus-within:ring-core-circle-warning/10',
      },
      disabled: {
        true: 'cursor-not-allowed opacity-50',
      }
    },
    defaultVariants: {
      variant: 'outline',
    },
  }
);

export const inputVariants = cva(
  'w-full bg-transparent border-none outline-none text-core-circle-text-main placeholder:text-core-circle-text-muted disabled:cursor-not-allowed',
  {
    variants: {
      size: {
        sm: 'px-3 py-1.5 text-core-circle-xs',
        md: 'px-4 py-2.5 text-core-circle-sm',
        lg: 'px-6 py-4 text-core-circle-md',
      },
      variant: {
        outline: '',
        material: '',
        'material-animated': '',
        ghost: '',
        standard: '',
      }
    },
    compoundVariants: [
      {
        variant: 'material-animated',
        className: 'pt-6 pb-1.5',
      }
    ],
    defaultVariants: {
      size: 'md',
    },
  }
);

export const prefixSuffixVariants = cva(
  'flex items-center justify-center text-core-circle-text-muted transition-colors whitespace-nowrap select-none',
  {
    variants: {
      size: {
        sm: 'text-core-circle-xs',
        md: 'text-core-circle-sm',
        lg: 'text-core-circle-md',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

export const labelVariants = cva(
  'mb-1.5 text-core-circle-sm font-core-circle-normal capitalize font-core-circle-body tracking-normal transition-all duration-200 pointer-events-none',
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
        className: '-translate-y-8 left-0 scale-100 text-core-circle-primary font-core-circle-bold capitalize tracking-normal text-[10px]',
      }
    ],
    defaultVariants: {
      variant: 'outline',
    },
  }
);
