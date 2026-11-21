import { cva } from 'class-variance-authority';

export const aspectRatioVariants = cva(
  'relative w-full overflow-hidden transition-all duration-200',
  {
    variants: {
      variant: {
        default: 'rounded-xl',
        bordered: 'rounded-2xl border border-core-circle-border-main bg-white shadow-sm',
        rounded: 'rounded-3xl shadow-md',
        glassmorphic: 'rounded-2xl backdrop-blur-md bg-white/70 border border-white/80 shadow-lg',
        gradient: 'rounded-2xl p-1 bg-gradient-to-tr from-purple-500 via-indigo-500 to-pink-500 shadow-xl',
        glow: 'rounded-2xl border border-emerald-500/50 shadow-[0_0_20px_rgba(16,185,129,0.3)] bg-slate-950',
        dark: 'rounded-2xl bg-slate-900 border border-slate-800 text-white shadow-2xl',
        shadow: 'rounded-2xl shadow-2xl',
        accent: 'rounded-2xl ring-4 ring-core-circle-primary/20 border border-core-circle-primary',
        minimal: 'rounded-none border-0',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);
