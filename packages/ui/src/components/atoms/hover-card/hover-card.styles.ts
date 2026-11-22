import { cva } from 'class-variance-authority';

export const hoverCardContentVariants = cva(
  'absolute z-50 rounded-core-circle-xl border shadow-core-circle-floating outline-none animate-in fade-in zoom-in-95 duration-150',
  {
    variants: {
      variant: {
        default: 'bg-white border-core-circle-border-main text-slate-800 shadow-md',
        card: 'bg-white border-core-circle-border-main text-slate-900 shadow-core-circle-elevated',
        minimal: 'bg-white/95 border-core-circle-border-main/60 text-slate-800 shadow-sm',
        glassmorphic: 'backdrop-blur-xl bg-white/90 border-core-circle-border-main/60 text-slate-900 shadow-xl',
        gradient: 'bg-gradient-to-br from-white via-blue-50/20 to-purple-50/20 border-core-circle-blue-200/60 text-slate-900 shadow-core-circle-floating',
        bordered: 'bg-white border-2 border-core-circle-border-strong text-slate-900 shadow-md',
        dark: 'bg-slate-900 border-slate-800 text-white shadow-2xl',
        compact: 'bg-white border-core-circle-border-main text-slate-800 shadow-md',
        pill: 'bg-white border-core-circle-border-main text-slate-900 rounded-3xl shadow-lg',
        accent: 'bg-white border-core-circle-primary/40 ring-2 ring-core-circle-primary/10 text-slate-900 shadow-lg',
      },
      size: {
        sm: 'w-64 p-3 text-xs',
        md: 'w-80 p-4 text-sm',
        lg: 'w-96 p-5 text-base',
      },
    },
    defaultVariants: {
      variant: 'card',
      size: 'md',
    },
  }
);
