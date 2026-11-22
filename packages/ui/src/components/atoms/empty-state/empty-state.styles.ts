import { cva } from 'class-variance-authority';

export const emptyStateContainerVariants = cva(
  'flex flex-col items-center justify-center text-center transition-all duration-150',
  {
    variants: {
      variant: {
        default: 'bg-transparent text-slate-800',
        card: 'bg-white border border-core-circle-border-main rounded-core-circle-2xl shadow-sm text-slate-900',
        dashed: 'bg-slate-50/60 border-2 border-dashed border-slate-300 rounded-core-circle-2xl text-slate-800',
        minimal: 'bg-transparent text-slate-700 p-2',
        glassmorphic: 'backdrop-blur-xl bg-white/70 border border-white/60 rounded-core-circle-2xl shadow-lg text-slate-900',
        dark: 'bg-slate-900 border border-slate-800 rounded-core-circle-2xl text-white shadow-xl',
      },
      size: {
        sm: 'p-6 max-w-sm gap-3',
        md: 'p-10 max-w-md gap-4',
        lg: 'p-14 max-w-xl gap-6',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

export const emptyStateIconVariants = cva(
  'flex items-center justify-center rounded-2xl text-slate-400 shrink-0 transition-transform duration-200',
  {
    variants: {
      variant: {
        default: 'bg-slate-100 text-slate-500',
        card: 'bg-slate-50 border border-slate-200/80 text-core-circle-primary',
        dashed: 'bg-white border border-slate-200 shadow-sm text-slate-500',
        minimal: 'bg-transparent text-slate-400',
        glassmorphic: 'bg-white/90 border border-white/80 shadow-md text-core-circle-primary',
        dark: 'bg-slate-800 text-slate-300 border border-slate-700',
      },
      size: {
        sm: 'w-12 h-12 p-2.5 mb-1',
        md: 'w-16 h-16 p-3.5 mb-2',
        lg: 'w-20 h-20 p-4 mb-3',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);
