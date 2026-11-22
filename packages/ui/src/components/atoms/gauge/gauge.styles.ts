import { cva } from 'class-variance-authority';

export const gaugeContainerVariants = cva(
  'inline-flex flex-col items-center justify-center transition-all duration-200 select-none text-core-circle-text-main',
  {
    variants: {
      variant: {
        default: 'bg-transparent',
        card: 'bg-white p-6 rounded-core-circle-2xl border border-core-circle-border-main shadow-core-circle-subtle',
        bordered: 'bg-white p-5 rounded-core-circle-xl border-2 border-core-circle-border-main',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);
