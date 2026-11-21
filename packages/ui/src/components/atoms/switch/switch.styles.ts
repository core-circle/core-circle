import { cva } from 'class-variance-authority';

export const switchVariants = cva(
  'relative inline-flex shrink-0 cursor-pointer items-center rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-core-circle-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-slate-200 data-[state=checked]:bg-core-circle-primary',
        secondary: 'bg-slate-200 data-[state=checked]:bg-slate-800',
        success: 'bg-slate-200 data-[state=checked]:bg-emerald-600',
        warning: 'bg-slate-200 data-[state=checked]:bg-amber-500',
        danger: 'bg-slate-200 data-[state=checked]:bg-rose-600',
        info: 'bg-slate-200 data-[state=checked]:bg-sky-500',
        gradient: 'bg-slate-200 data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-purple-600 data-[state=checked]:to-indigo-600',
        glassmorphic: 'bg-slate-200/60 backdrop-blur-sm border border-slate-300/50 data-[state=checked]:bg-blue-600/80 data-[state=checked]:border-blue-400',
        glow: 'bg-slate-200 border border-emerald-300 data-[state=checked]:bg-emerald-600 data-[state=checked]:shadow-[0_0_15px_rgba(52,211,153,0.5)]',
        floating: 'bg-slate-200 shadow-inner data-[state=checked]:bg-core-circle-primary data-[state=checked]:shadow-md',
        accent: 'bg-slate-200 data-[state=checked]:bg-blue-600',
        dark: 'bg-slate-200 border border-slate-300 data-[state=checked]:bg-slate-800',
      },
      size: {
        sm: 'h-5 w-9',
        md: 'h-6 w-11',
        lg: 'h-7 w-14',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export const switchThumbVariants = cva(
  'pointer-events-none block rounded-full bg-white shadow-md ring-0 transition-transform duration-300 flex items-center justify-center',
  {
    variants: {
      size: {
        sm: 'h-4 w-4 data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0.5',
        md: 'h-5 w-5 data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0.5',
        lg: 'h-6 w-6 data-[state=checked]:translate-x-7 data-[state=unchecked]:translate-x-0.5',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

