import { cva } from 'class-variance-authority';

export const progressContainerVariants = cva(
  'w-full bg-core-circle-bg-muted overflow-hidden relative',
  {
    variants: {
      size: {
        sm: 'h-1 rounded-full',
        md: 'h-2.5 rounded-full',
        lg: 'h-4 rounded-xl',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

export const progressIndicatorVariants = cva(
  'h-full transition-all duration-500 ease-out relative flex items-center justify-center overflow-hidden',
  {
    variants: {
      variant: {
        primary: 'bg-core-circle-primary',
        secondary: 'bg-core-circle-secondary',
        success: 'bg-core-circle-success',
        warning: 'bg-core-circle-warning',
        danger: 'bg-core-circle-danger',
        ghost: 'bg-core-circle-text-muted/20',
      },
      indeterminate: {
        true: 'w-full animate-progress-indeterminate origin-left',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'primary',
      indeterminate: false,
    },
  }
);

export const progressLabelVariants = cva(
  'font-core-circle-bold select-none',
  {
    variants: {
      position: {
        inside: 'text-[10px] text-white px-2',
        'outside-end': 'text-sm text-core-circle-text-main ml-3 shrink-0',
        'outside-top': 'text-sm text-core-circle-text-main mb-2',
      },
      size: {
        sm: 'text-[8px]',
        md: 'text-[10px]',
        lg: 'text-xs',
      }
    },
    defaultVariants: {
      position: 'outside-end',
      size: 'md',
    }
  }
);
