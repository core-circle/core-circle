import { cva } from 'class-variance-authority';

export const commandContainerVariants = cva(
  'flex flex-col w-full overflow-hidden bg-white text-core-circle-text-main transition-all duration-200 select-none',
  {
    variants: {
      variant: {
        default: 'border border-core-circle-border-main rounded-core-circle-2xl shadow-core-circle-lg',
        bordered: 'border-2 border-core-circle-border-main rounded-core-circle-xl shadow-none',
        minimal: 'border-b border-core-circle-border-main rounded-none shadow-none',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);
