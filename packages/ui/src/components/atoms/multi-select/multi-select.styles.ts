import { cva } from 'class-variance-authority';

export const multiSelectWrapperVariants = cva(
  'relative flex items-center group w-full font-core-circle-medium transition-all duration-200 outline-none cursor-pointer min-h-[42px]',
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

export const multiSelectContentVariants = cva(
  'flex flex-wrap gap-1.5 w-full items-center',
  {
    variants: {
      size: {
        sm: 'px-3 py-1 text-core-circle-xs',
        md: 'px-4 py-1.5 text-core-circle-sm',
        lg: 'px-6 py-2.5 text-core-circle-md',
      }
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

export const tagVariants = cva(
  'flex items-center gap-1 bg-core-circle-bg-muted text-core-circle-text-main rounded-core-circle-sm border border-core-circle-border-main transition-colors hover:bg-core-circle-border-main',
  {
    variants: {
      size: {
        sm: 'px-1.5 py-0.5 text-[10px]',
        md: 'px-2 py-1 text-core-circle-xs',
        lg: 'px-3 py-1.5 text-core-circle-sm',
      }
    },
    defaultVariants: {
      size: 'md',
    }
  }
);

export const dropdownVariants = cva(
  'absolute z-50 top-full left-0 right-0 mt-2 bg-white border border-core-circle-border-main rounded-core-circle-lg shadow-core-circle-2xl max-h-60 overflow-y-auto overflow-x-hidden transition-all duration-300 origin-top [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-core-circle-border-main/60 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent',
  {
    variants: {
      isOpen: {
        true: 'opacity-100 scale-y-100',
        false: 'opacity-0 scale-y-0 pointer-events-none',
      }
    },
    defaultVariants: {
      isOpen: false,
    }
  }
);

export const optionVariants = cva(
  'flex items-center gap-2.5 px-3 py-2 cursor-pointer transition-all duration-200 border-l-2 border-transparent',
  {
    variants: {
      isSelected: {
        true: 'bg-core-circle-primary/5 text-core-circle-primary font-core-circle-bold border-core-circle-primary',
        false: 'text-core-circle-text-main hover:bg-core-circle-bg-page',
      },
      disabled: {
        true: 'opacity-40 cursor-not-allowed grayscale',
      }
    },
    defaultVariants: {
      isSelected: false,
    }
  }
);
