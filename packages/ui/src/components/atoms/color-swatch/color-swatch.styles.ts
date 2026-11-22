import { cva } from 'class-variance-authority';

export const colorSwatchTileVariants = cva(
  'relative flex items-center justify-center transition-all duration-150 outline-none focus-visible:ring-2 focus-visible:ring-core-circle-primary/40 focus-visible:ring-offset-2 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer shadow-sm select-none',
  {
    variants: {
      shape: {
        circle: 'rounded-full',
        rounded: 'rounded-core-circle-lg',
        square: 'rounded-none',
      },
      size: {
        sm: 'w-6 h-6',
        md: 'w-8 h-8',
        lg: 'w-10 h-10',
      },
      active: {
        true: 'ring-2 ring-core-circle-primary ring-offset-2 scale-105 shadow-md',
        false: 'hover:scale-105 hover:shadow-md border border-black/10',
      },
    },
    defaultVariants: {
      shape: 'circle',
      size: 'md',
      active: false,
    },
  }
);
