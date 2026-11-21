import { cva } from 'class-variance-authority';

export const scrollAreaVariants = cva(
  'relative overflow-auto transition-colors',
  {
    variants: {
      variant: {
        default: '[&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-slate-300 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent hover:[&::-webkit-scrollbar-thumb]:bg-slate-400',
        subtle: '[&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-slate-200 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent hover:[&::-webkit-scrollbar-thumb]:bg-slate-300',
        thin: '[&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-slate-300 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent',
        glow: '[&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-emerald-500 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-slate-900 [&::-webkit-scrollbar-thumb]:shadow-[0_0_10px_rgba(16,185,129,0.8)]',
        gradient: '[&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-gradient-to-b [&::-webkit-scrollbar-thumb]:from-purple-500 [&::-webkit-scrollbar-thumb]:to-pink-500 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-purple-50/50',
        glassmorphic: '[&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-white/50 [&::-webkit-scrollbar-thumb]:backdrop-blur-sm [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-white/10',
        dark: '[&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-slate-700 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-slate-900 hover:[&::-webkit-scrollbar-thumb]:bg-slate-600',
        rounded: '[&::-webkit-scrollbar]:w-2.5 [&::-webkit-scrollbar-thumb]:bg-slate-300 [&::-webkit-scrollbar-thumb]:rounded-xl [&::-webkit-scrollbar-track]:bg-slate-100 [&::-webkit-scrollbar-track]:rounded-xl',
        accent: '[&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-core-circle-primary [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-blue-50',
        minimal: '[&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-slate-400/40 [&::-webkit-scrollbar-thumb]:rounded-none [&::-webkit-scrollbar-track]:bg-transparent',
      },
      orientation: {
        vertical: 'overflow-y-auto overflow-x-hidden',
        horizontal: 'overflow-x-auto overflow-y-hidden',
        both: 'overflow-auto',
      },
      hideScrollbar: {
        true: '[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      orientation: 'vertical',
      hideScrollbar: false,
    },
  }
);
