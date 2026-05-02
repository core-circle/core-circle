import { cva } from 'class-variance-authority';

export const otpContainerVariants = cva(
  'flex flex-col gap-2 transition-all duration-200',
  {
    variants: {
      fullWidth: {
        true: 'w-full',
        false: 'w-fit',
      }
    },
    defaultVariants: {
      fullWidth: false,
    },
  }
);

export const otpGroupVariants = cva(
  'flex items-center gap-2',
  {
    variants: {
      size: {
        sm: 'gap-1.5',
        md: 'gap-2',
        lg: 'gap-3',
      }
    },
    defaultVariants: {
      size: 'md',
    }
  }
);

export const otpInputVariants = cva(
  'text-center font-core-circle-bold transition-all duration-200 outline-none border border-core-circle-border-main bg-white text-core-circle-text-main placeholder:text-core-circle-text-muted disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        outline: 'rounded-core-circle-lg focus:border-core-circle-primary focus:ring-2 focus:ring-core-circle-primary/10',
        material: 'border-t-0 border-x-0 border-b-2 rounded-none focus:border-core-circle-primary bg-core-circle-bg-page',
        ghost: 'border-none bg-transparent hover:bg-core-circle-bg-page focus:bg-core-circle-bg-page rounded-core-circle-md',
        standard: 'border-t-0 border-x-0 border-b focus:border-core-circle-primary bg-transparent rounded-none',
      },
      size: {
        sm: 'w-8 h-10 text-core-circle-sm',
        md: 'w-12 h-14 text-core-circle-md',
        lg: 'w-16 h-20 text-core-circle-lg',
      },
      hasError: {
        true: 'border-core-circle-warning focus:border-core-circle-warning focus:ring-core-circle-warning/10',
      }
    },
    defaultVariants: {
      variant: 'outline',
      size: 'md',
    }
  }
);
