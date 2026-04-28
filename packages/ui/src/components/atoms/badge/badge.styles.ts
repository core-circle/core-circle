import { cva } from 'class-variance-authority';

export const badgeVariants = cva(
  'inline-flex items-center justify-center font-core-circle-bold select-none transition-all duration-200 gap-1.5 border whitespace-nowrap',
  {
    variants: {
      variant: {
        primary: 'bg-core-circle-primary text-white border-transparent shadow-core-circle-subtle',
        secondary: 'bg-core-circle-secondary text-white border-transparent',
        success: 'bg-core-circle-success/10 text-core-circle-success border-core-circle-success/20',
        warning: 'bg-core-circle-warning/10 text-core-circle-warning border-core-circle-warning/20',
        danger: 'bg-core-circle-danger/10 text-core-circle-danger border-core-circle-danger/20',
        ghost: 'bg-core-circle-bg-muted text-core-circle-text-muted border-transparent',
        outline: 'bg-transparent text-core-circle-text-main border-core-circle-border-strong',
      },
      size: {
        sm: 'px-1.5 py-0.5 text-[10px] h-5',
        md: 'px-2.5 py-0.5 text-xs h-6',
        lg: 'px-3.5 py-1 text-sm h-8',
      },
      shape: {
        rounded: 'rounded-core-circle-md',
        pill: 'rounded-full',
        square: 'rounded-none',
      },
      pulse: {
        true: 'animate-pulse',
        false: '',
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      shape: 'rounded',
      pulse: false,
    },
  }
);

export const badgeRemoveButtonVariants = cva(
  'inline-flex items-center justify-center rounded-full hover:bg-black/10 transition-colors p-0.5 -mr-1 cursor-pointer',
  {
    variants: {
      size: {
        sm: 'h-3 w-3',
        md: 'h-3.5 w-3.5',
        lg: 'h-4 w-4',
      }
    },
    defaultVariants: {
      size: 'md',
    }
  }
);
