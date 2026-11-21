import { cva } from 'class-variance-authority';

export const tooltipVariants = cva(
  'absolute z-core-circle-tooltip min-w-[220px] max-w-[320px] rounded-core-circle-lg p-4 shadow-core-circle-floating border transition-all duration-core-circle-fast',
  {
    variants: {
      variant: {
        primary: 'bg-white border-core-circle-primary/20 text-core-circle-text-main shadow-md',
        secondary: 'bg-slate-100 border-slate-300 text-slate-900 shadow-md',
        success: 'bg-emerald-50/95 border-emerald-300 text-emerald-950 shadow-md',
        warning: 'bg-amber-50/95 border-amber-300 text-amber-950 shadow-md',
        danger: 'bg-rose-50/95 border-rose-300 text-rose-950 shadow-md',
        destructive: 'bg-rose-50/95 border-rose-300 text-rose-950 shadow-md',
        info: 'bg-blue-50/95 border-blue-300 text-blue-950 shadow-md',
        gradient: 'bg-gradient-to-r from-purple-50 via-indigo-50 to-pink-50 border-purple-200 text-purple-950 shadow-lg',
        glow: 'bg-emerald-50 border-emerald-300 text-emerald-950 shadow-[0_0_20px_rgba(16,185,129,0.3)]',
        glassmorphic: 'backdrop-blur-md bg-white/80 border-white/80 text-slate-900 shadow-xl',
        dark: 'bg-slate-900 border-slate-800 text-white shadow-2xl',
      },
      position: {
        top: 'bottom-full left-1/2 -translate-x-1/2 mb-2.5',
        bottom: 'top-full left-1/2 -translate-x-1/2 mt-2.5',
        left: 'right-full top-1/2 -translate-y-1/2 mr-2.5',
        right: 'left-full top-1/2 -translate-y-1/2 ml-2.5',
      },
      isOpen: {
        true: 'opacity-100 scale-100 visible',
        false: 'opacity-0 scale-95 invisible pointer-events-none',
      },
    },
    defaultVariants: {
      variant: 'primary',
      position: 'top',
      isOpen: false,
    },
  }
);

export const tooltipArrowVariants = cva(
  'absolute w-2 h-2 rotate-45 z-[-1] border',
  {
    variants: {
      variant: {
        primary: 'bg-white border-core-circle-primary/20',
        secondary: 'bg-slate-100 border-slate-300',
        success: 'bg-emerald-50 border-emerald-300',
        warning: 'bg-amber-50 border-amber-300',
        danger: 'bg-rose-50 border-rose-300',
        destructive: 'bg-rose-50 border-rose-300',
        info: 'bg-blue-50 border-blue-300',
        gradient: 'bg-purple-50 border-purple-200',
        glow: 'bg-emerald-50 border-emerald-300',
        glassmorphic: 'bg-white/80 border-white/80',
        dark: 'bg-slate-900 border-slate-800',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
);

