import { cva } from 'class-variance-authority';

export const fabContainerVariants = cva(
  'z-50 flex items-center select-none',
  {
    variants: {
      position: {
        'bottom-right': 'bottom-6 right-6',
        'bottom-left': 'bottom-6 left-6',
        'top-right': 'top-6 right-6',
        'top-left': 'top-6 left-6',
      },
      fixed: {
        true: 'fixed',
        false: 'absolute',
      },
      direction: {
        up: 'flex-col-reverse items-center',
        down: 'flex-col items-center',
        left: 'flex-row-reverse items-center',
        right: 'flex-row items-center',
      },
    },
    defaultVariants: {
      position: 'bottom-right',
      fixed: true,
      direction: 'up',
    },
  }
);

export const fabTriggerVariants = cva(
  'rounded-full flex items-center justify-center font-medium transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-core-circle-primary focus:ring-offset-2 active:scale-95',
  {
    variants: {
      variant: {
        primary: 'bg-core-circle-primary text-white hover:bg-core-circle-primary/90 shadow-core-circle-lg',
        secondary: 'bg-white text-core-circle-text-main border border-core-circle-border-main hover:bg-slate-50 shadow-core-circle-lg',
        dark: 'bg-slate-900 text-white hover:bg-slate-800 shadow-core-circle-lg',
        gradient: 'bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-core-circle-lg hover:opacity-95',
      },
      size: {
        sm: 'w-10 h-10 text-sm',
        md: 'w-14 h-14 text-base',
        lg: 'w-16 h-16 text-lg',
      },
      disabled: {
        true: 'opacity-50 cursor-not-allowed pointer-events-none shadow-none',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      disabled: false,
    },
  }
);

export const fabActionsListVariants = cva(
  'flex items-center gap-3 transition-all duration-300',
  {
    variants: {
      direction: {
        up: 'flex-col-reverse mb-3',
        down: 'flex-col mt-3',
        left: 'flex-row-reverse mr-3',
        right: 'flex-row ml-3',
      },
    },
    defaultVariants: {
      direction: 'up',
    },
  }
);
