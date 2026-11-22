import { cva } from 'class-variance-authority';

export const watermarkContainerVariants = cva(
  'relative overflow-hidden w-full',
  {
    variants: {
      variant: {
        default: '',
        card: 'bg-white border border-core-circle-border-main rounded-core-circle-xl shadow-core-circle-subtle',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);
