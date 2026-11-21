import { cva } from 'class-variance-authority';

export const dialogOverlayVariants = 'fixed inset-0 z-50 bg-slate-950/45 backdrop-blur-[3px] animate-in fade-in-0 duration-200';

export const dialogContentVariants = cva(
  'fixed z-50 grid w-full gap-4 bg-white p-6 shadow-core-circle-floating duration-200 animate-in fade-in-0 zoom-in-95 transition-all',
  {
    variants: {
      variant: {
        card: 'border border-core-circle-border-main rounded-core-circle-2xl shadow-core-circle-elevated',
        floating: 'border border-core-circle-border-main/50 rounded-core-circle-3xl shadow-2xl',
        glassmorphic: 'backdrop-blur-xl bg-white/95 border border-core-circle-border-main/80 rounded-core-circle-3xl shadow-2xl',
        gradient: 'border border-core-circle-blue-200 rounded-core-circle-3xl shadow-2xl overflow-hidden',
        destructive: 'border border-core-circle-red-200 rounded-core-circle-2xl shadow-core-circle-elevated',
        success: 'border border-core-circle-green-200 rounded-core-circle-2xl shadow-core-circle-elevated',
        'centered-hero': 'border border-core-circle-border-main rounded-core-circle-3xl shadow-2xl text-center',
        drawer: 'border-t border-core-circle-border-main rounded-t-3xl sm:rounded-core-circle-2xl shadow-2xl',
        minimal: 'border-0 rounded-core-circle-2xl shadow-core-circle-elevated',
        bordered: 'border-2 border-core-circle-border-strong rounded-core-circle-2xl shadow-core-circle-subtle',
      },
      size: {
        sm: 'max-w-sm',
        md: 'max-w-md',
        lg: 'max-w-lg',
        xl: 'max-w-2xl',
        full: 'max-w-[calc(100%-2rem)] h-[calc(100%-2rem)]',
      },
      position: {
        center: 'left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]',
        top: 'left-[50%] top-12 translate-x-[-50%]',
        bottom: 'left-[50%] bottom-8 translate-x-[-50%]',
      },
    },
    defaultVariants: {
      variant: 'card',
      size: 'md',
      position: 'center',
    },
  }
);

export const dialogHeaderStyles = 'flex flex-col space-y-1 text-left relative';
export const dialogFooterStyles = 'flex flex-col-reverse sm:flex-row sm:justify-end gap-2 pt-2 border-t border-core-circle-border-main/40 mt-2';
export const dialogCloseButtonStyles = 'absolute right-4 top-4 h-8 w-8 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-900 flex items-center justify-center transition-colors cursor-pointer border-0 shadow-none outline-none focus:ring-2 focus:ring-core-circle-primary/30';
