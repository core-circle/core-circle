import { cva } from 'class-variance-authority';

export const stepperContainerVariants = cva(
  'flex w-full transition-all duration-300',
  {
    variants: {
      orientation: {
        horizontal: 'flex-row items-start gap-0',
        vertical: 'flex-col items-start gap-0',
      },
      variant: {
        numbers: '',
        dots: '',
        circles: '',
        pill: '',
        gradient: '',
        glow: '',
        glassmorphic: 'p-4 bg-white/40 backdrop-blur-md border border-white/60 rounded-2xl shadow-sm',
        cards: 'gap-3',
        timeline: '',
        dark: 'p-6 bg-slate-50 text-slate-900 rounded-2xl border border-slate-200',
      }
    },
    defaultVariants: {
      orientation: 'horizontal',
      variant: 'numbers',
    }
  }
);

export const stepItemVariants = cva(
  'flex relative group transition-all duration-300',
  {
    variants: {
      orientation: {
        horizontal: 'flex-1 flex-col items-center text-center',
        vertical: 'flex-row items-start gap-4 pb-8 last:pb-0',
      },
      variant: {
        numbers: '',
        dots: '',
        circles: '',
        pill: '',
        gradient: '',
        glow: '',
        glassmorphic: '',
        cards: 'p-4 bg-white border border-core-circle-border-main rounded-2xl shadow-sm hover:border-core-circle-primary/40',
        timeline: '',
        dark: '',
      }
    },
    defaultVariants: {
      orientation: 'horizontal',
      variant: 'numbers',
    }
  }
);

export const stepIndicatorVariants = cva(
  'flex items-center justify-center rounded-full z-10 transition-all duration-300 font-core-circle-bold',
  {
    variants: {
      variant: {
        numbers: 'border-2',
        dots: 'border-0',
        circles: 'border-2',
        pill: 'rounded-full px-3 py-1 text-xs border',
        gradient: 'border-0 shadow-md',
        glow: 'border-2 shadow-[0_0_12px_rgba(52,211,153,0.7)]',
        glassmorphic: 'border border-white/60 backdrop-blur-sm shadow-sm',
        cards: 'border-2',
        timeline: 'border-2',
        dark: 'border-2 border-slate-700',
      },
      status: {
        pending: 'bg-white border-core-circle-border-main text-core-circle-text-muted',
        active: 'bg-core-circle-primary/10 border-core-circle-primary text-core-circle-primary shadow-sm',
        completed: 'bg-core-circle-primary border-core-circle-primary text-white',
        error: 'bg-core-circle-warning/10 border-core-circle-warning text-core-circle-warning',
      },
      size: {
        sm: 'w-6 h-6 text-[10px]',
        md: 'w-8 h-8 text-xs',
        lg: 'w-10 h-10 text-sm',
      }
    },
    compoundVariants: [
      {
        variant: 'gradient',
        status: 'active',
        className: 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white',
      },
      {
        variant: 'gradient',
        status: 'completed',
        className: 'bg-gradient-to-r from-purple-600 to-indigo-700 text-white',
      },
      {
        variant: 'glow',
        status: 'active',
        className: 'bg-emerald-50 border-emerald-400 text-emerald-700',
      },
      {
        variant: 'glow',
        status: 'completed',
        className: 'bg-emerald-500 border-emerald-400 text-white',
      },
      {
        variant: 'dark',
        status: 'pending',
        className: 'bg-slate-100 border-slate-300 text-slate-500',
      },
      {
        variant: 'dark',
        status: 'active',
        className: 'bg-core-circle-primary/10 border-core-circle-primary text-core-circle-primary',
      },
      {
        variant: 'dark',
        status: 'completed',
        className: 'bg-core-circle-primary border-core-circle-primary text-white',
      },
    ],
    defaultVariants: {
      variant: 'numbers',
      status: 'pending',
      size: 'md',
    }
  }
);

export const connectorVariants = cva(
  'absolute transition-all duration-300',
  {
    variants: {
      orientation: {
        horizontal: 'top-4 left-[calc(50%+1.5rem)] right-[calc(-50%+1.5rem)] h-[2px]',
        vertical: 'left-4 top-10 bottom-2 w-[2px]',
      },
      status: {
        pending: 'bg-core-circle-border-main',
        completed: 'bg-core-circle-primary',
        active: 'bg-core-circle-primary/30',
        error: 'bg-core-circle-warning/30',
      },
      variant: {
        numbers: '',
        dots: '',
        circles: '',
        pill: '',
        gradient: 'bg-gradient-to-r from-purple-500 to-indigo-600',
        glow: 'bg-emerald-500/50',
        glassmorphic: 'bg-white/60',
        cards: 'hidden',
        timeline: 'bg-slate-300',
        dark: 'bg-slate-200',
      }
    },
    compoundVariants: [
      {
        variant: 'dark',
        status: 'completed',
        className: 'bg-core-circle-primary',
      },
      {
        variant: 'glow',
        status: 'completed',
        className: 'bg-emerald-400',
      }
    ],
    defaultVariants: {
      orientation: 'horizontal',
      status: 'pending',
      variant: 'numbers',
    }
  }
);

export const stepContentVariants = cva(
  'flex flex-col mt-2',
  {
    variants: {
      orientation: {
        horizontal: 'items-center',
        vertical: 'items-start mt-0',
      }
    }
  }
);

