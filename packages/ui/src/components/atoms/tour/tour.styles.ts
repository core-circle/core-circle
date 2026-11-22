import { cva } from 'class-variance-authority';

export const tourCardVariants = cva(
  'relative flex flex-col p-5 bg-white border rounded-core-circle-2xl shadow-core-circle-elevated transition-all duration-200 z-50 max-w-sm w-full',
  {
    variants: {
      variant: {
        card: 'bg-white border-core-circle-border-main',
        elevated: 'bg-white border-core-circle-border-main shadow-core-circle-floating ring-1 ring-black/5',
        glassmorphic: 'backdrop-blur-xl bg-white/90 border-white/60 shadow-xl',
      },
    },
    defaultVariants: {
      variant: 'card',
    },
  }
);

export const hotspotVariants = cva(
  'relative inline-flex items-center justify-center rounded-full transition-all cursor-pointer focus:outline-none',
  {
    variants: {
      size: {
        sm: 'w-3 h-3',
        md: 'w-4 h-4',
        lg: 'w-5 h-5',
      },
      color: {
        primary: 'bg-core-circle-primary text-white',
        emerald: 'bg-emerald-500 text-white',
        amber: 'bg-amber-500 text-white',
      },
    },
    defaultVariants: {
      size: 'md',
      color: 'primary',
    },
  }
);
