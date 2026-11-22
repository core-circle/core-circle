import { cva } from 'class-variance-authority';

export const trendBadgeVariants = cva(
  'inline-flex items-center font-semibold transition-colors select-none tracking-tight',
  {
    variants: {
      variant: {
        soft: 'rounded-md',
        filled: 'rounded-md text-white',
        outline: 'rounded-md border bg-transparent',
        minimal: 'bg-transparent p-0',
        pill: 'rounded-full',
        badge: 'rounded-lg border shadow-sm',
      },
      trend: {
        up: '',
        down: '',
        neutral: '',
      },
      size: {
        xs: 'text-[10px] gap-0.5 px-1.5 py-0.5',
        sm: 'text-xs gap-1 px-2 py-0.5',
        md: 'text-sm gap-1.5 px-2.5 py-1',
        lg: 'text-base gap-2 px-3 py-1.5',
      },
    },
    compoundVariants: [
      // Soft variants
      { variant: 'soft', trend: 'up', class: 'bg-emerald-50 text-emerald-700' },
      { variant: 'soft', trend: 'down', class: 'bg-rose-50 text-rose-700' },
      { variant: 'soft', trend: 'neutral', class: 'bg-slate-100 text-slate-700' },

      // Filled variants
      { variant: 'filled', trend: 'up', class: 'bg-emerald-600' },
      { variant: 'filled', trend: 'down', class: 'bg-rose-600' },
      { variant: 'filled', trend: 'neutral', class: 'bg-slate-600' },

      // Outline variants
      { variant: 'outline', trend: 'up', class: 'border-emerald-300 text-emerald-700' },
      { variant: 'outline', trend: 'down', class: 'border-rose-300 text-rose-700' },
      { variant: 'outline', trend: 'neutral', class: 'border-slate-300 text-slate-700' },

      // Minimal variants
      { variant: 'minimal', trend: 'up', class: 'text-emerald-600' },
      { variant: 'minimal', trend: 'down', class: 'text-rose-600' },
      { variant: 'minimal', trend: 'neutral', class: 'text-slate-600' },

      // Pill variants
      { variant: 'pill', trend: 'up', class: 'bg-emerald-50 text-emerald-700 border border-emerald-200' },
      { variant: 'pill', trend: 'down', class: 'bg-rose-50 text-rose-700 border border-rose-200' },
      { variant: 'pill', trend: 'neutral', class: 'bg-slate-100 text-slate-700 border border-slate-200' },

      // Badge variants
      { variant: 'badge', trend: 'up', class: 'bg-emerald-50/80 text-emerald-800 border-emerald-200/80' },
      { variant: 'badge', trend: 'down', class: 'bg-rose-50/80 text-rose-800 border-rose-200/80' },
      { variant: 'badge', trend: 'neutral', class: 'bg-slate-50 text-slate-800 border-slate-200' },
    ],
    defaultVariants: {
      variant: 'soft',
      trend: 'neutral',
      size: 'sm',
    },
  }
);
