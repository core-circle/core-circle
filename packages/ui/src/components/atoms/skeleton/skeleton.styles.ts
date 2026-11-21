import { cva } from 'class-variance-authority';

export const skeletonVariants = cva(
  'relative overflow-hidden transition-all duration-300',
  {
    variants: {
      variant: {
        default: 'bg-slate-200/80 rounded-core-circle-md',
        rectangular: 'bg-slate-200/80 rounded-core-circle-md',
        circular: 'bg-slate-200/80 rounded-full',
        text: 'h-4 w-full bg-slate-200/80 rounded-core-circle-xs mb-2',
        card: 'bg-slate-100 border border-slate-200/70 shadow-sm rounded-2xl',
        avatar: 'w-12 h-12 rounded-full bg-slate-200/90 flex-shrink-0',
        button: 'h-10 w-28 rounded-core-circle-lg bg-slate-200/90',
        badge: 'h-6 w-16 rounded-full bg-slate-200/80',
        image: 'w-full aspect-video rounded-2xl bg-slate-200/80',
        glassmorphic: 'bg-white/40 backdrop-blur-md border border-white/50 shadow-sm rounded-2xl',
        gradient: 'bg-gradient-to-r from-indigo-100/80 via-purple-100/70 to-pink-100/80 rounded-2xl',
        dark: 'bg-slate-200/90 border border-slate-300/60 rounded-2xl',
      },
      animation: {
        shimmer: 'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/70 before:to-transparent',
        pulse: 'animate-pulse',
        wave: 'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/90 before:to-transparent',
        glow: 'animate-pulse ring-2 ring-emerald-400/30',
        none: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      animation: 'shimmer',
    },
  }
);

