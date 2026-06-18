import { cva } from 'class-variance-authority';

export const dialogOverlayVariants = 'fixed inset-0 z-50 bg-black/40 backdrop-blur-[2px] animate-in fade-in-0 duration-200 dark:bg-black/70';

export const dialogContentVariants = cva(
  'fixed left-[50%] top-[50%] z-50 grid w-full translate-x-[-50%] translate-y-[-50%] gap-4 border bg-white p-6 shadow-core-circle-floating duration-200 animate-in fade-in-0 zoom-in-95 slide-in-from-left-1/2 slide-in-from-top-[48%] sm:rounded-core-circle-lg dark:bg-slate-900 dark:border-slate-800 dark:text-slate-200',
  {
    variants: {
      size: {
        sm: 'max-w-sm',
        md: 'max-w-md',
        lg: 'max-w-lg',
        xl: 'max-w-2xl',
        full: 'max-w-[calc(100%-2rem)] h-[calc(100%-2rem)]',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

export const dialogHeaderStyles = 'flex flex-col space-y-1.5 text-center sm:text-left';
export const dialogFooterStyles = 'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2';
export const dialogCloseButtonStyles = 'absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground';
