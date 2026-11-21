import { cva } from 'class-variance-authority';

export const avatarGroupVariants = cva(
  'inline-flex items-center justify-start',
  {
    variants: {
      spacing: {
        compact: '-space-x-4',
        normal: '-space-x-2.5',
        relaxed: '-space-x-1',
      },
    },
    defaultVariants: {
      spacing: 'normal',
    },
  }
);

export const avatarGroupItemVariants = cva(
  'relative inline-flex items-center justify-center shrink-0 rounded-full transition-all duration-200 hover:z-30 hover:scale-110',
  {
    variants: {
      variant: {
        default: 'ring-2 ring-white',
        bordered: 'ring-2 ring-slate-200',
        ring: 'ring-2 ring-core-circle-primary',
        glow: 'ring-2 ring-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.4)]',
        glassmorphic: 'ring-2 ring-white/80 backdrop-blur-sm',
        gradient: 'ring-2 ring-purple-400',
        compact: 'ring-2 ring-white',
        relaxed: 'ring-2 ring-white',
        dark: 'ring-2 ring-slate-200',
        pill: 'ring-2 ring-slate-200',
      },
      size: {
        xs: 'h-6 w-6',
        sm: 'h-8 w-8',
        md: 'h-10 w-10',
        lg: 'h-12 w-12',
        xl: 'h-16 w-16',
        '2xl': 'h-24 w-24',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

export const avatarGroupOverflowVariants = cva(
  'relative inline-flex items-center justify-center font-core-circle-bold rounded-full transition-transform hover:scale-105',
  {
    variants: {
      variant: {
        default: 'bg-slate-100 text-slate-700 ring-2 ring-white',
        bordered: 'bg-slate-100 text-slate-800 ring-2 ring-slate-300',
        ring: 'bg-blue-50 text-core-circle-primary ring-2 ring-core-circle-primary',
        glow: 'bg-emerald-50 text-emerald-700 ring-2 ring-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.3)]',
        glassmorphic: 'backdrop-blur-md bg-white/80 text-slate-900 ring-2 ring-white/80',
        gradient: 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white ring-2 ring-purple-400',
        compact: 'bg-slate-100 text-slate-700 ring-2 ring-white',
        relaxed: 'bg-slate-100 text-slate-700 ring-2 ring-white',
        dark: 'bg-slate-100 text-slate-700 ring-2 ring-slate-300',
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
