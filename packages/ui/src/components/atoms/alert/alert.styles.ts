import { cva } from 'class-variance-authority';

export const alertVariants = cva(
  'relative flex w-full flex-col p-4 pr-11 transition-all duration-300',
  {
    variants: {
      variant: {
        info: 'bg-core-circle-blue-50/80 text-core-circle-text-main border border-core-circle-blue-200 rounded-core-circle-2xl shadow-core-circle-subtle',
        success: 'bg-core-circle-green-50/80 text-core-circle-text-main border border-core-circle-green-200 rounded-core-circle-2xl shadow-core-circle-subtle',
        warning: 'bg-core-circle-orange-50/80 text-core-circle-text-main border border-core-circle-orange-200 rounded-core-circle-2xl shadow-core-circle-subtle',
        destructive: 'bg-core-circle-red-50/80 text-core-circle-text-main border border-core-circle-red-200 rounded-core-circle-2xl shadow-core-circle-subtle',
        card: 'bg-white text-core-circle-text-main border border-core-circle-border-main rounded-core-circle-2xl shadow-core-circle-elevated hover:shadow-core-circle-floating',
        floating: 'bg-white text-core-circle-text-main border border-core-circle-border-main/50 rounded-core-circle-2xl shadow-core-circle-floating hover:-translate-y-0.5',
        glassmorphic: 'backdrop-blur-md bg-white/75 text-core-circle-text-main border border-core-circle-border-main/80 rounded-core-circle-2xl shadow-core-circle-subtle',
        gradient: 'bg-gradient-to-r from-core-circle-blue-50/90 via-core-circle-indigo-50/80 to-core-circle-purple-50/90 text-core-circle-text-main border border-core-circle-blue-200/60 rounded-core-circle-2xl shadow-core-circle-subtle',
        pill: 'bg-white text-core-circle-text-main border border-core-circle-border-main rounded-full px-6 py-3.5 shadow-core-circle-subtle',
        minimal: 'bg-transparent text-core-circle-text-main border-l-4 border-core-circle-primary rounded-none pl-4 py-2 border-y-0 border-r-0',
        outline: 'bg-white text-core-circle-text-main border-2 border-core-circle-border-strong rounded-core-circle-2xl shadow-core-circle-subtle',
        soft: 'bg-core-circle-bg-page text-core-circle-text-main border border-transparent rounded-core-circle-2xl',
      },
    },
    defaultVariants: {
      variant: 'info',
    },
  }
);

export const alertTitleStyles = 'font-core-circle-bold leading-tight tracking-tight text-core-circle-text-main';
export const alertDescriptionStyles = 'text-sm leading-relaxed text-core-circle-text-muted/90';
export const alertCloseButtonStyles = 'absolute top-3.5 right-3.5 inline-flex items-center justify-center rounded-full p-1.5 text-core-circle-text-muted hover:bg-black/5 hover:text-core-circle-text-main transition-colors focus:outline-none cursor-pointer h-8 w-8 min-w-0 border-0 shadow-none';
