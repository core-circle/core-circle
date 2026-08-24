import { cva } from 'class-variance-authority';

export const labelVariants = cva(
  'inline-flex items-center gap-1.5 transition-all duration-200 select-none leading-none',
  {
    variants: {
      size: {
        xs: 'text-[11px]',
        sm: 'text-xs',
        md: 'text-sm',
        lg: 'text-base',
        xl: 'text-lg',
        '2xl': 'text-xl',
      },
      weight: {
        light: 'font-light',
        normal: 'font-normal',
        medium: 'font-medium',
        semibold: 'font-semibold',
        bold: 'font-bold',
      },
      variant: {
        default: 'text-slate-900',
        primary: 'text-core-circle-primary',
        muted: 'text-slate-500',
        success: 'text-emerald-600',
        warning: 'text-amber-600',
        destructive: 'text-red-600',
        gradient: 'bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent font-extrabold',
        glassmorphic: 'text-slate-900 backdrop-blur-sm bg-white/70 px-2 py-0.5 rounded-md border border-slate-200/80',
        pill: 'bg-slate-100 text-slate-800 px-2.5 py-0.5 rounded-full',
        'badge-label': 'bg-core-circle-primary/10 text-core-circle-primary px-2 py-0.5 rounded-md font-bold',
      },
      uppercase: {
        true: 'uppercase tracking-wider',
        false: 'normal-case tracking-tight',
      },
    },
    defaultVariants: {
      size: 'sm',
      weight: 'medium',
      variant: 'default',
      uppercase: false,
    },
  }
);
