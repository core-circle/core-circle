import { cva } from 'class-variance-authority';

export const avatarContainerVariants = cva(
  'relative inline-flex items-center justify-center shrink-0 select-none overflow-visible transition-transform duration-200 hover:scale-105',
  {
    variants: {
      size: {
        xs: 'h-6 w-6 text-[10px]',
        sm: 'h-8 w-8 text-xs',
        md: 'h-10 w-10 text-sm',
        lg: 'h-12 w-12 text-base',
        xl: 'h-16 w-16 text-xl',
        '2xl': 'h-24 w-24 text-3xl',
      },
      shape: {
        circle: 'rounded-full',
        square: 'rounded-none',
        rounded: 'rounded-core-circle-xl',
      },
      bordered: {
        true: 'ring-2 ring-core-circle-primary ring-offset-2 ring-offset-white',
        false: '',
      }
    },
    defaultVariants: {
      size: 'md',
      shape: 'circle',
      bordered: false,
    },
  }
);

export const avatarImageVariants = cva(
  'h-full w-full object-cover aspect-square',
  {
    variants: {
      shape: {
        circle: 'rounded-full',
        square: 'rounded-none',
        rounded: 'rounded-core-circle-xl',
      }
    },
    defaultVariants: {
      shape: 'circle',
    }
  }
);

export const avatarFallbackVariants = cva(
  'flex h-full w-full items-center justify-center font-core-circle-bold uppercase bg-gradient-to-br from-core-circle-bg-muted to-core-circle-border-main text-core-circle-text-muted',
  {
    variants: {
      shape: {
        circle: 'rounded-full',
        square: 'rounded-none',
        rounded: 'rounded-core-circle-xl',
      }
    },
    defaultVariants: {
      shape: 'circle',
    }
  }
);

export const avatarStatusVariants = cva(
  'absolute rounded-full border-2 border-white',
  {
    variants: {
      status: {
        online: 'bg-core-circle-success',
        offline: 'bg-core-circle-text-muted',
        away: 'bg-core-circle-warning',
        busy: 'bg-core-circle-danger',
      },
      size: {
        xs: 'h-1.5 w-1.5 bottom-0 right-0',
        sm: 'h-2 w-2 bottom-0 right-0',
        md: 'h-2.5 w-2.5 bottom-0 right-0.5',
        lg: 'h-3 w-3 bottom-0.5 right-0.5',
        xl: 'h-4 w-4 bottom-1 right-1',
        '2xl': 'h-6 w-6 bottom-1.5 right-1.5',
      }
    },
    defaultVariants: {
      status: 'online',
      size: 'md',
    }
  }
);
