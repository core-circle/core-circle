import { cva } from 'class-variance-authority';

export const colorPickerContainerVariants = cva(
  'flex flex-col gap-1.5 transition-all duration-200',
  {
    variants: {
      disabled: {
        true: 'opacity-50 cursor-not-allowed',
        false: 'opacity-100',
      }
    },
    defaultVariants: {
      disabled: false,
    },
  }
);

export const colorPickerLabelVariants = cva(
  'text-[11px] font-core-circle-bold uppercase tracking-wider transition-colors duration-200',
  {
    variants: {
      hasError: {
        true: 'text-core-circle-warning',
        false: 'text-core-circle-text-muted',
      }
    },
    defaultVariants: {
      hasError: false,
    }
  }
);

export const colorPickerWrapperVariants = cva(
  'flex items-center gap-3 p-1.5 transition-all duration-200 border border-core-circle-border-main bg-white hover:border-core-circle-primary/50',
  {
    variants: {
      variant: {
        outline: 'rounded-core-circle-xl shadow-core-circle-subtle',
        material: 'border-t-0 border-x-0 border-b-2 rounded-none bg-core-circle-bg-page',
        ghost: 'border-none bg-transparent hover:bg-core-circle-bg-page rounded-core-circle-lg',
      },
      hasError: {
        true: 'border-core-circle-warning focus-within:border-core-circle-warning',
      }
    },
    defaultVariants: {
      variant: 'outline',
    }
  }
);

export const swatchVariants = cva(
  'rounded-core-circle-lg shadow-inner cursor-pointer transition-transform active:scale-95',
  {
    variants: {
      size: {
        sm: 'w-6 h-6',
        md: 'w-10 h-10',
        lg: 'w-14 h-14',
      }
    },
    defaultVariants: {
      size: 'md',
    }
  }
);

export const hexValueVariants = cva(
  'font-mono text-core-circle-xs text-core-circle-text-main font-core-circle-medium tracking-tight uppercase',
  {
    variants: {
      size: {
        sm: 'text-[10px]',
        md: 'text-core-circle-xs',
        lg: 'text-core-circle-sm',
      }
    }
  }
);
