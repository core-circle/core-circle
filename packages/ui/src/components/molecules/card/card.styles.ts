import { cva } from 'class-variance-authority';

export const cardVariants = cva(
  'flex flex-col overflow-hidden bg-white transition-all duration-300',
  {
    variants: {
      variant: {
        outline: 'border border-core-circle-border-main',
        shadow: 'border border-transparent shadow-core-circle-subtle hover:shadow-core-circle-medium',
        ghost: 'border-none bg-transparent',
        flat: 'border-none bg-core-circle-bg-page',
      },
      rounded: {
        true: 'rounded-core-circle-2xl',
        false: 'rounded-none',
      },
      hoverable: {
        true: 'cursor-pointer hover:-translate-y-1 hover:border-core-circle-primary/30',
      },
      fullWidth: {
        true: 'w-full',
        false: 'w-fit',
      }
    },
    defaultVariants: {
      variant: 'outline',
      rounded: true,
      fullWidth: true,
    }
  }
);

export const cardHeaderVariants = cva(
  'px-6 py-4 flex items-center justify-between gap-4',
  {
    variants: {
      divider: {
        true: 'border-b border-core-circle-border-main',
      }
    },
    defaultVariants: {
      divider: false,
    }
  }
);

export const cardBodyVariants = cva(
  'flex-1',
  {
    variants: {
      noPadding: {
        false: 'p-6',
        true: 'p-0',
      }
    },
    defaultVariants: {
      noPadding: false,
    }
  }
);

export const cardFooterVariants = cva(
  'px-6 py-4 flex items-center gap-4',
  {
    variants: {
      divider: {
        true: 'border-t border-core-circle-border-main',
      },
      align: {
        start: 'justify-start',
        center: 'justify-center',
        end: 'justify-end',
        between: 'justify-between',
      }
    },
    defaultVariants: {
      divider: false,
      align: 'end',
    }
  }
);
