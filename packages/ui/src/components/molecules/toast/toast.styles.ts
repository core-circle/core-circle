import { cva } from 'class-variance-authority';

export const toastVariants = cva(
  'group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-core-circle-xl border p-6 pr-8 shadow-core-circle-lg transition-all duration-300 animate-in slide-in-from-right-full',
  {
    variants: {
      variant: {
        default: 'bg-white border-core-circle-border-main text-core-circle-text-main',
        success: 'bg-emerald-50 border-emerald-200 text-emerald-900',
        error: 'bg-red-50 border-red-200 text-red-900',
        warning: 'bg-amber-50 border-amber-200 text-amber-900',
        info: 'bg-blue-50 border-blue-200 text-blue-900',
      }
    },
    defaultVariants: {
      variant: 'default',
    }
  }
);

export const toastIconVariants = cva(
  'flex shrink-0 items-center justify-center h-8 w-8',
  {
    variants: {
      variant: {
        default: 'text-core-circle-text-muted',
        success: 'text-emerald-500',
        error: 'text-red-500',
        warning: 'text-amber-500',
        info: 'text-blue-500',
      }
    },
    defaultVariants: {
      variant: 'default',
    }
  }
);
