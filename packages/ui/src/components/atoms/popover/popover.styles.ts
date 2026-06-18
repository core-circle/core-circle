import { cva } from 'class-variance-authority';

export const popoverContentVariants = cva(
  'z-50 w-72 rounded-core-circle-md border bg-white p-4 text-core-circle-text-main shadow-core-circle-floating outline-none animate-in fade-in-0 zoom-in-95 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-200',
  {
    variants: {
      align: {
        start: 'items-start',
        center: 'items-center',
        end: 'items-end',
      },
    },
    defaultVariants: {
      align: 'center',
    },
  }
);

export const popoverArrowStyles = 'fill-white dark:fill-slate-900 stroke-core-circle-border-main dark:stroke-slate-800';
