import { cva } from 'class-variance-authority';

export const skeletonVariants = cva(
  'bg-slate-200/80 relative overflow-hidden',
  {
    variants: {
      variant: {
        text: 'h-4 w-full rounded-core-circle-xs mb-2',
        circular: 'rounded-full',
        rectangular: 'rounded-core-circle-md',
      },
      animation: {
        none: '',
        pulse: 'animate-pulse',
        shimmer: 'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white before:to-transparent dark:before:via-white/10',
      },
    },
    defaultVariants: {
      variant: 'rectangular',
      animation: 'shimmer',
    },
  }
);
