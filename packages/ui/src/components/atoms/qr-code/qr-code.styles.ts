import { cva } from 'class-variance-authority';

export const qrCodeContainerVariants = cva(
  'inline-flex flex-col items-center justify-center transition-all duration-200 select-none',
  {
    variants: {
      variant: {
        default: 'bg-transparent',
        card: 'bg-white p-5 rounded-core-circle-2xl border border-core-circle-border-main shadow-core-circle-subtle hover:shadow-core-circle-md',
        bordered: 'bg-white p-4 rounded-core-circle-xl border-2 border-core-circle-border-main',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);
