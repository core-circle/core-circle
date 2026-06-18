import { cva } from 'class-variance-authority';

export const alertVariants = cva(
  'relative w-full rounded-core-circle-lg border p-4 [&>svg~*]:pl-7 [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-core-circle-text-main transition-all duration-200',
  {
    variants: {
      variant: {
        info: 'bg-blue-50 text-blue-900 border-blue-200 dark:bg-blue-950/30 dark:text-blue-200 dark:border-blue-800 shadow-sm',
        success: 'bg-emerald-50 text-emerald-900 border-emerald-200 dark:bg-emerald-950/30 dark:text-emerald-200 dark:border-emerald-800 shadow-sm',
        warning: 'bg-amber-50 text-amber-900 border-amber-200 dark:bg-amber-950/30 dark:text-amber-200 dark:border-amber-800 shadow-sm',
        destructive: 'bg-red-50 text-red-900 border-red-200 dark:bg-red-950/30 dark:text-red-200 dark:border-red-800 shadow-sm',
        outline: 'bg-white text-core-circle-text-main border-core-circle-border-main dark:bg-slate-950 dark:text-slate-200 dark:border-slate-800',
      },
    },
    defaultVariants: {
      variant: 'info',
    },
  }
);

export const alertTitleStyles = 'mb-1 font-core-circle-bold leading-none tracking-tight';
export const alertDescriptionStyles = 'text-sm [&_p]:leading-relaxed opacity-90';
export const alertCloseButtonStyles = 'absolute right-2 top-2 rounded-md p-1 opacity-50 transition-opacity hover:opacity-100 focus:outline-none';
