import { cva } from 'class-variance-authority';

export const popoverContentVariants = cva(
  'z-50 rounded-core-circle-2xl border bg-white p-4 text-slate-900 shadow-core-circle-floating outline-none animate-in fade-in zoom-in-95 duration-200 flex flex-col gap-2.5',
  {
    variants: {
      variant: {
        card: 'bg-white border-core-circle-border-main shadow-core-circle-elevated',
        floating: 'bg-white border-core-circle-border-main/60 shadow-2xl rounded-3xl',
        glassmorphic: 'backdrop-blur-xl bg-white/95 border-core-circle-border-main/80 shadow-core-circle-floating',
        gradient: 'bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 border-core-circle-blue-200/80 shadow-core-circle-floating',
        bordered: 'bg-white border-2 border-core-circle-border-strong shadow-md',
        pill: 'bg-white border-core-circle-border-main rounded-3xl shadow-core-circle-elevated',
        primary: 'bg-white border-core-circle-primary/30 ring-2 ring-core-circle-primary/10 shadow-core-circle-floating',
        success: 'bg-white border-emerald-500/30 ring-2 ring-emerald-500/10 shadow-core-circle-floating',
        warning: 'bg-white border-amber-500/30 ring-2 ring-amber-500/10 shadow-core-circle-floating',
        compact: 'bg-white border-core-circle-border-main p-2.5 rounded-xl shadow-md text-xs',
      },
      size: {
        sm: 'w-60',
        md: 'w-72',
        lg: 'w-88',
        xl: 'w-96',
        auto: 'w-auto min-w-[220px]',
      },
    },
    defaultVariants: {
      variant: 'card',
      size: 'md',
    },
  }
);

export const popoverArrowStyles = 'fill-white stroke-core-circle-border-main';
