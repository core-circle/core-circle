import { cva, type VariantProps } from 'class-variance-authority';

export const indicatorVariants = cva(
  'absolute flex items-center justify-center rounded-full ring-2 ring-white whitespace-nowrap',
  {
    variants: {
      variant: {
        primary: 'bg-core-circle-primary text-white',
        success: 'bg-core-circle-success text-white',
        warning: 'bg-core-circle-warning text-white',
        danger: 'bg-core-circle-destructive text-white',
        info: 'bg-core-circle-info text-white',
      },
      size: {
        sm: 'h-2 w-2 text-[8px]',
        md: 'h-4 min-w-[1rem] px-1 text-[10px] font-core-circle-bold',
        lg: 'h-5 min-w-[1.25rem] px-1.5 text-[12px] font-core-circle-bold',
      },
      position: {
        'top-right': 'top-0 right-0 -translate-y-1/2 translate-x-1/2',
        'top-left': 'top-0 left-0 -translate-y-1/2 -translate-x-1/2',
        'bottom-right': 'bottom-0 right-0 translate-y-1/2 translate-x-1/2',
        'bottom-left': 'bottom-0 left-0 translate-y-1/2 -translate-x-1/2',
      },
      pulse: {
        true: 'after:absolute after:inset-0 after:rounded-full after:animate-ping after:bg-inherit after:opacity-75',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      position: 'top-right',
      pulse: false,
    },
  }
);

export interface IndicatorProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'content'>,
    VariantProps<typeof indicatorVariants> {
  children?: React.ReactNode;
  content?: React.ReactNode;
  show?: boolean;
}
