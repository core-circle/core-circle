import { cva } from 'class-variance-authority';

export const collapsibleContainerVariants = cva(
  'flex flex-col w-full overflow-hidden transition-all duration-200 select-none text-core-circle-text-main',
  {
    variants: {
      variant: {
        default: 'bg-transparent',
        card: 'bg-white rounded-core-circle-2xl border border-core-circle-border-main shadow-core-circle-subtle',
        bordered: 'bg-white rounded-core-circle-xl border-2 border-core-circle-border-main',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);
