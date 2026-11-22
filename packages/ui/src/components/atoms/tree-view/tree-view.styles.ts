import { cva } from 'class-variance-authority';

export const treeViewContainerVariants = cva(
  'flex flex-col w-full text-sm select-none transition-all duration-200 text-core-circle-text-main',
  {
    variants: {
      variant: {
        default: 'bg-transparent',
        card: 'bg-white p-4 rounded-core-circle-2xl border border-core-circle-border-main shadow-core-circle-subtle',
        bordered: 'bg-white p-3 rounded-core-circle-xl border-2 border-core-circle-border-main',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);
