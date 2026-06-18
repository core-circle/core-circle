import { cva } from 'class-variance-authority';

export const toastVariants = cva(
  'group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-core-circle-lg border p-6 pr-8 shadow-core-circle-floating transition-all animate-in slide-in-from-top-full md:max-w-[420px]',
  {
    variants: {
      variant: {
        default: 'bg-white border-core-circle-border-main text-core-circle-text-main dark:bg-slate-900 dark:border-slate-800 dark:text-slate-200',
        success: 'bg-emerald-600 border-emerald-600 text-white shadow-emerald-200 dark:shadow-none',
        warning: 'bg-amber-600 border-amber-600 text-white shadow-amber-200 dark:shadow-none',
        destructive: 'bg-red-600 border-red-600 text-white shadow-red-200 dark:shadow-none',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export const toastTitleStyles = 'text-sm font-core-circle-bold';
export const toastDescriptionStyles = 'text-sm opacity-90';
export const toastActionStyles = 'inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-white/10 focus:outline-none focus:ring-1 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-white/40 group-[.destructive]:hover:border-white/70 group-[.destructive]:hover:bg-white/10 group-[.destructive]:focus:ring-white';
export const toastCloseButtonStyles = 'absolute right-2 top-2 rounded-md p-1 opacity-0 transition-opacity hover:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100';
