import { cva } from 'class-variance-authority';

export const resizableContainerVariants = cva(
  'relative flex w-full h-full overflow-hidden text-core-circle-text-main',
  {
    variants: {
      direction: {
        horizontal: 'flex-row',
        vertical: 'flex-col',
      },
      variant: {
        default: 'bg-transparent',
        card: 'bg-white rounded-core-circle-2xl border border-core-circle-border-main shadow-core-circle-subtle',
        bordered: 'bg-white rounded-core-circle-xl border-2 border-core-circle-border-main',
      },
    },
    defaultVariants: {
      direction: 'horizontal',
      variant: 'default',
    },
  }
);

export const resizableHandleVariants = cva(
  'relative flex items-center justify-center select-none transition-colors duration-150 z-10 shrink-0 bg-core-circle-border-main/50 hover:bg-core-circle-primary/30 active:bg-core-circle-primary/50',
  {
    variants: {
      direction: {
        horizontal: 'w-2 cursor-col-resize h-full',
        vertical: 'h-2 cursor-row-resize w-full',
      },
      disabled: {
        true: 'cursor-not-allowed opacity-40 hover:bg-core-circle-border-main/50',
        false: '',
      },
    },
    defaultVariants: {
      direction: 'horizontal',
      disabled: false,
    },
  }
);
