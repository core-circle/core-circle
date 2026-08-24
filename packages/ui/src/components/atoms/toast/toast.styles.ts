import { cva } from 'class-variance-authority';

export const toastVariants = cva(
  'group pointer-events-auto relative flex w-full items-start justify-between gap-3 overflow-hidden rounded-core-circle-2xl border p-4 shadow-core-circle-floating transition-all duration-300 animate-in slide-in-from-top-full md:max-w-[420px]',
  {
    variants: {
      variant: {
        default: 'bg-white border-core-circle-border-main text-core-circle-text-main shadow-core-circle-floating',
        success: 'bg-core-circle-green-50/90 border-core-circle-green-200 text-core-circle-text-main shadow-core-circle-floating',
        warning: 'bg-core-circle-orange-50/90 border-core-circle-orange-200 text-core-circle-text-main shadow-core-circle-floating',
        destructive: 'bg-core-circle-red-50/90 border-core-circle-red-200 text-core-circle-text-main shadow-core-circle-floating',
        error: 'bg-core-circle-red-50/90 border-core-circle-red-200 text-core-circle-text-main shadow-core-circle-floating',
        info: 'bg-core-circle-blue-50/90 border-core-circle-blue-200 text-core-circle-text-main shadow-core-circle-floating',
        card: 'bg-white border-2 border-core-circle-border-strong text-core-circle-text-main shadow-core-circle-elevated',
        glassmorphic: 'backdrop-blur-md bg-white/75 border border-white/80 text-core-circle-text-main shadow-core-circle-floating',
        gradient: 'bg-gradient-to-r from-core-circle-blue-50 via-core-circle-indigo-50 to-core-circle-purple-50 border border-core-circle-blue-200/70 text-core-circle-text-main shadow-core-circle-floating',
        floating: 'bg-white border border-core-circle-border-main/50 text-core-circle-text-main shadow-core-circle-floating hover:-translate-y-0.5',
        pill: 'bg-white border border-core-circle-border-main rounded-full px-6 py-3.5 shadow-core-circle-floating',
        minimal: 'bg-white border-l-4 border-core-circle-primary border-y border-r border-core-circle-border-main text-core-circle-text-main shadow-core-circle-subtle',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export const toastTitleStyles = 'text-sm font-core-circle-bold leading-snug text-core-circle-text-main';
export const toastDescriptionStyles = 'text-xs text-core-circle-text-muted mt-0.5 leading-relaxed';
export const toastActionStyles = 'inline-flex h-8 shrink-0 items-center justify-center rounded-core-circle-md border border-core-circle-border-main bg-white px-3 text-xs font-core-circle-bold text-core-circle-text-main transition-colors hover:bg-core-circle-bg-page focus:outline-none';
export const toastCloseButtonStyles = 'shrink-0 rounded-full p-1 text-core-circle-text-muted hover:bg-core-circle-bg-page hover:text-core-circle-text-main transition-colors focus:outline-none';
