import { cva } from 'class-variance-authority';

export const indicatorBadgeVariants = cva(
  'flex items-center justify-center font-core-circle-bold whitespace-nowrap transition-all select-none z-10 ring-2 ring-white',
  {
    variants: {
      variant: {
        primary: 'bg-core-circle-primary text-white shadow-sm',
        success: 'bg-emerald-500 text-white shadow-sm',
        warning: 'bg-amber-500 text-white shadow-sm',
        destructive: 'bg-red-500 text-white shadow-sm',
        info: 'bg-blue-500 text-white shadow-sm',
        gradient: 'bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-sm',
        glassmorphic: 'backdrop-blur-md bg-slate-900/85 text-white ring-white/70 shadow-sm',
        soft: 'bg-blue-100 text-blue-800 font-extrabold',
        bordered: 'bg-white text-slate-900 border-2 border-slate-900 ring-0 shadow-sm',
        neutral: 'bg-slate-500 text-white shadow-sm',
      },
      size: {
        xs: 'h-2 w-2 min-w-0 p-0 text-[0px]',
        sm: 'h-3 w-3 min-w-0 p-0 text-[0px]',
        md: 'h-5 min-w-[1.25rem] px-1.5 text-[10px] leading-none',
        lg: 'h-6 min-w-[1.5rem] px-2 text-xs leading-none',
        xl: 'h-7 min-w-[1.75rem] px-2.5 text-xs leading-none',
      },
      position: {
        'top-right': 'absolute top-0 right-0 -translate-y-1/4 translate-x-1/4',
        'top-left': 'absolute top-0 left-0 -translate-y-1/4 -translate-x-1/4',
        'bottom-right': 'absolute bottom-0 right-0 translate-y-0 translate-x-0',
        'bottom-left': 'absolute bottom-0 left-0 translate-y-0 translate-x-0',
        'top-center': 'absolute top-0 left-1/2 -translate-y-1/4 -translate-x-1/2',
        'bottom-center': 'absolute bottom-0 left-1/2 translate-y-0 -translate-x-1/2',
        'middle': 'absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2',
      },
      shape: {
        circle: 'rounded-full',
        pill: 'rounded-full px-2',
        square: 'rounded-none',
        rounded: 'rounded-md',
      },
      pulse: {
        true: 'after:absolute after:inset-0 after:rounded-full after:animate-ping after:bg-inherit after:opacity-60 after:pointer-events-none',
      },
      standalone: {
        true: 'relative static translate-x-0 translate-y-0 inline-flex',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      position: 'top-right',
      shape: 'circle',
      pulse: false,
      standalone: false,
    },
  }
);
