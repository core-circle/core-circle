import { cva } from 'class-variance-authority';

export const ratingContainerVariants = cva(
  'inline-flex items-center gap-1 transition-colors',
  {
    variants: {
      disabled: {
        true: 'opacity-50 pointer-events-none cursor-not-allowed',
        false: '',
      },
      readOnly: {
        true: 'cursor-default',
        false: 'cursor-pointer',
      },
    },
    defaultVariants: {
      disabled: false,
      readOnly: false,
    },
  }
);

export const ratingItemVariants = cva(
  'transition-all duration-150 relative inline-flex items-center justify-center',
  {
    variants: {
      variant: {
        default: 'text-amber-400',
        amber: 'text-amber-500',
        gold: 'text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]',
        rose: 'text-rose-500',
        emerald: 'text-emerald-500',
        indigo: 'text-indigo-500',
        gradient: 'text-purple-500',
        glow: 'text-emerald-400 drop-shadow-[0_0_12px_rgba(52,211,153,0.8)]',
        glassmorphic: 'text-blue-500',
        dark: 'text-slate-700',
      },
      size: {
        sm: 'w-4 h-4 text-sm',
        md: 'w-5 h-5 text-base',
        lg: 'w-7 h-7 text-xl',
        xl: 'w-9 h-9 text-2xl',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

export const ratingEmptyStyles = 'text-slate-300 transition-colors';
export const ratingScoreStyles = 'ml-2.5 font-core-circle-bold text-core-circle-text-main leading-none';
