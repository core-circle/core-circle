import { cva } from 'class-variance-authority';

export const richTextVariants = cva(
  'max-w-none prose prose-slate prose-core-circle',
  {
    variants: {
      size: {
        sm: 'prose-sm',
        base: 'prose-base',
        lg: 'prose-lg',
      },
    },
    defaultVariants: {
      size: 'base',
    },
  }
);
