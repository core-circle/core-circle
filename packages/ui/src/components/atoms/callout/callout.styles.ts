import { cva } from 'class-variance-authority';

export const calloutContainerVariants = cva(
  'relative flex items-start w-full rounded-core-circle-xl border transition-all duration-150 text-slate-800',
  {
    variants: {
      variant: {
        info: 'bg-blue-50/70 border-blue-200/80 text-blue-950',
        success: 'bg-emerald-50/70 border-emerald-200/80 text-emerald-950',
        warning: 'bg-amber-50/70 border-amber-200/80 text-amber-950',
        danger: 'bg-rose-50/70 border-rose-200/80 text-rose-950',
        brand: 'bg-indigo-50/70 border-indigo-200/80 text-indigo-950',
        neutral: 'bg-slate-50 border-slate-200 text-slate-900',
      },
      size: {
        sm: 'p-3 gap-2.5 text-xs',
        md: 'p-4 gap-3 text-sm',
        lg: 'p-5 gap-4 text-base',
      },
    },
    defaultVariants: {
      variant: 'info',
      size: 'md',
    },
  }
);

export const calloutIconVariants = cva('shrink-0 mt-0.5', {
  variants: {
    variant: {
      info: 'text-blue-600',
      success: 'text-emerald-600',
      warning: 'text-amber-600',
      danger: 'text-rose-600',
      brand: 'text-indigo-600',
      neutral: 'text-slate-600',
    },
    size: {
      sm: 'w-4 h-4',
      md: 'w-5 h-5',
      lg: 'w-6 h-6',
    },
  },
  defaultVariants: {
    variant: 'info',
    size: 'md',
  },
});
