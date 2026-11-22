import { cva } from 'class-variance-authority';

export const countdownContainerVariants = cva(
  'inline-flex items-center justify-center font-mono select-none text-core-circle-text-main transition-all duration-200',
  {
    variants: {
      variant: {
        boxes: 'gap-3',
        cards: 'gap-4 p-4 bg-white rounded-core-circle-2xl border border-core-circle-border-main shadow-core-circle-subtle',
        minimal: 'gap-1.5 font-bold',
      },
      size: {
        sm: 'text-sm',
        md: 'text-xl',
        lg: 'text-3xl',
      },
    },
    defaultVariants: {
      variant: 'boxes',
      size: 'md',
    },
  }
);
