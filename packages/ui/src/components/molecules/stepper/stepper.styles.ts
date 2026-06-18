import { cva } from 'class-variance-authority';

export const stepperContainerVariants = cva(
  'flex w-full',
  {
    variants: {
      orientation: {
        horizontal: 'flex-row items-start gap-0',
        vertical: 'flex-col items-start gap-0',
      }
    },
    defaultVariants: {
      orientation: 'horizontal',
    }
  }
);

export const stepItemVariants = cva(
  'flex relative group',
  {
    variants: {
      orientation: {
        horizontal: 'flex-1 flex-col items-center text-center',
        vertical: 'flex-row items-start gap-4 pb-8 last:pb-0',
      }
    }
  }
);

export const stepIndicatorVariants = cva(
  'flex items-center justify-center rounded-full z-10 transition-all duration-300 border-2 font-core-circle-bold',
  {
    variants: {
      status: {
        pending: 'bg-white border-core-circle-border-main text-core-circle-text-muted',
        active: 'bg-core-circle-primary/10 border-core-circle-primary text-core-circle-primary shadow-sm',
        completed: 'bg-core-circle-primary border-core-circle-primary text-white',
        error: 'bg-core-circle-warning/10 border-core-circle-warning text-core-circle-warning',
      },
      size: {
        sm: 'w-6 h-6 text-[10px]',
        md: 'w-8 h-8 text-xs',
        lg: 'w-10 h-10 text-sm',
      }
    },
    defaultVariants: {
      status: 'pending',
      size: 'md',
    }
  }
);

export const connectorVariants = cva(
  'absolute transition-all duration-300',
  {
    variants: {
      orientation: {
        horizontal: 'top-4 left-[calc(50%+1.5rem)] right-[calc(-50%+1.5rem)] h-[2px]',
        vertical: 'left-4 top-10 bottom-2 w-[2px]',
      },
      status: {
        pending: 'bg-core-circle-border-main',
        completed: 'bg-core-circle-primary',
        active: 'bg-core-circle-primary/30',
        error: 'bg-core-circle-warning/30',
      }
    },
    defaultVariants: {
      orientation: 'horizontal',
      status: 'pending',
    }
  }
);

export const stepContentVariants = cva(
  'flex flex-col mt-2',
  {
    variants: {
      orientation: {
        horizontal: 'items-center',
        vertical: 'items-start mt-0',
      }
    }
  }
);
