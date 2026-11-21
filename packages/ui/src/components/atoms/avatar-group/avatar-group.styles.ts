import { cva } from 'class-variance-authority';

export const avatarGroupVariants = cva(
  'inline-flex items-center flex-row-reverse justify-end',
  {
    variants: {
      spacing: {
        compact: '-space-x-4 space-x-reverse',
        normal: '-space-x-2.5 space-x-reverse',
        relaxed: '-space-x-1 space-x-reverse',
      },
    },
    defaultVariants: {
      spacing: 'normal',
    },
  }
);

export const avatarGroupItemVariants = cva(
  'relative transition-transform duration-200 hover:z-20 hover:scale-110 ring-2 ring-white dark:ring-slate-900 rounded-full',
  {
    variants: {
      variant: {
        default: 'ring-white dark:ring-slate-900',
        bordered: 'ring-2 ring-slate-300 dark:ring-slate-700',
        ring: 'ring-2 ring-core-circle-primary',
        glow: 'ring-2 ring-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.5)]',
        glassmorphic: 'ring-2 ring-white/80 backdrop-blur-sm',
        gradient: 'ring-2 ring-purple-400',
        compact: 'ring-white dark:ring-slate-900',
        relaxed: 'ring-white dark:ring-slate-900',
        dark: 'ring-slate-800',
        pill: 'ring-slate-200',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export const avatarGroupOverflowVariants = cva(
  'relative inline-flex items-center justify-center font-core-circle-bold rounded-full transition-transform hover:scale-105 z-10',
  {
    variants: {
      variant: {
        default: 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 ring-2 ring-white dark:ring-slate-900',
        bordered: 'bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-white ring-2 ring-slate-400',
        ring: 'bg-blue-50 text-core-circle-primary ring-2 ring-core-circle-primary',
        glow: 'bg-slate-950 text-emerald-400 ring-2 ring-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.4)]',
        glassmorphic: 'backdrop-blur-md bg-white/70 text-slate-900 ring-2 ring-white/80',
        gradient: 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white ring-2 ring-purple-400',
        compact: 'bg-slate-100 text-slate-700 ring-2 ring-white',
        relaxed: 'bg-slate-100 text-slate-700 ring-2 ring-white',
        dark: 'bg-slate-800 text-slate-100 ring-2 ring-slate-700',
        pill: 'bg-slate-100 text-slate-700 ring-2 ring-slate-300',
      },
      size: {
        xs: 'w-6 h-6 text-[10px]',
        sm: 'w-8 h-8 text-xs',
        md: 'w-10 h-10 text-sm',
        lg: 'w-12 h-12 text-base',
        xl: 'w-16 h-16 text-lg',
        '2xl': 'w-24 h-24 text-2xl',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);
