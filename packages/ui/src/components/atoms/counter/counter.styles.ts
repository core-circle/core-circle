import { cva, type VariantProps } from 'class-variance-authority';

export const counterVariants = cva(
  'inline-flex items-center justify-center rounded-full font-core-circle-bold tabular-nums transition-all',
  {
    variants: {
      variant: {
        primary: 'bg-core-circle-primary text-white',
        neutral: 'bg-core-circle-bg-muted text-core-circle-text-main',
        ghost: 'bg-transparent text-inherit',
        outline: 'bg-white border border-core-circle-border-main text-core-circle-text-main',
      },
      size: {
        xs: 'h-4 min-w-[1rem] px-1 text-[9px]',
        sm: 'h-5 min-w-[1.25rem] px-1.5 text-[11px]',
        md: 'h-6 min-w-[1.5rem] px-2 text-[13px]',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'sm',
    },
  }
);

export interface CounterProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof counterVariants> {
  count: number;
  max?: number;
  showZero?: boolean;
}
