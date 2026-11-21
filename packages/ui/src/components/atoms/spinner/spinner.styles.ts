import { cva } from 'class-variance-authority';

export const spinnerVariants = cva(
  'inline-block rounded-full border-solid animate-[spinner-spin_0.8s_linear_infinite] transition-colors',
  {
    variants: {
      variant: {
        primary: 'border-core-circle-primary border-t-transparent',
        secondary: 'border-slate-700 border-t-transparent',
        success: 'border-emerald-500 border-t-transparent',
        warning: 'border-amber-500 border-t-transparent',
        danger: 'border-rose-500 border-t-transparent',
        info: 'border-sky-500 border-t-transparent',
        gradient: 'border-purple-600 border-t-transparent shadow-[0_0_12px_rgba(147,51,234,0.4)]',
        glow: 'border-emerald-400 border-t-transparent shadow-[0_0_15px_rgba(52,211,153,0.8)]',
        glassmorphic: 'border-white/80 border-t-transparent backdrop-blur-sm shadow-sm',
        accent: 'border-blue-600 border-t-transparent',
        dark: 'border-slate-300 border-t-slate-700',
        white: 'border-white border-t-transparent',
      },
      size: {
        xs: 'w-3 h-3 border-[1.5px]',
        sm: 'w-4 h-4 border-2',
        md: 'w-8 h-8 border-[3px]',
        lg: 'w-12 h-12 border-4',
        xl: 'w-16 h-16 border-[5px]',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

