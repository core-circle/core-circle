import { cva } from 'class-variance-authority';

export const pulseDotSizeVariants = cva('', {
  variants: {
    size: {
      xs: 'w-1.5 h-1.5',
      sm: 'w-2 h-2',
      md: 'w-2.5 h-2.5',
      lg: 'w-3 h-3',
    },
  },
  defaultVariants: {
    size: 'sm',
  },
});

export const pulseDotColorVariants = cva('rounded-full shrink-0', {
  variants: {
    status: {
      online: 'bg-emerald-500',
      offline: 'bg-slate-400',
      busy: 'bg-rose-500',
      away: 'bg-amber-500',
      deploying: 'bg-indigo-500',
      neutral: 'bg-slate-500',
    },
  },
  defaultVariants: {
    status: 'online',
  },
});

export const pulseDotPingVariants = cva(
  'absolute inline-flex h-full w-full rounded-full animate-ping opacity-75',
  {
    variants: {
      status: {
        online: 'bg-emerald-400',
        offline: 'bg-slate-300',
        busy: 'bg-rose-400',
        away: 'bg-amber-400',
        deploying: 'bg-indigo-400',
        neutral: 'bg-slate-400',
      },
    },
    defaultVariants: {
      status: 'online',
    },
  }
);
