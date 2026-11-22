import { cva } from 'class-variance-authority';

export const promptInputContainerVariants = cva(
  'flex flex-col w-full transition-all duration-200 select-none bg-white',
  {
    variants: {
      variant: {
        default: 'border border-core-circle-border-main rounded-core-circle-2xl shadow-core-circle-md focus-within:border-core-circle-primary focus-within:ring-2 focus-within:ring-core-circle-primary/20',
        bordered: 'border-2 border-core-circle-border-main rounded-core-circle-xl shadow-none focus-within:border-core-circle-primary',
        card: 'border border-core-circle-border-main bg-slate-50/50 rounded-core-circle-2xl shadow-core-circle-sm focus-within:bg-white focus-within:shadow-core-circle-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);
