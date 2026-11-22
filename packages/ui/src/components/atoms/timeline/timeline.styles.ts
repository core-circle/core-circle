import { cva } from 'class-variance-authority';

export const timelineNodeVariants = cva(
  'relative z-10 flex items-center justify-center rounded-full border-2 shrink-0 transition-colors',
  {
    variants: {
      status: {
        completed: 'bg-emerald-500 border-emerald-500 text-white',
        current: 'bg-white border-core-circle-primary text-core-circle-primary ring-4 ring-core-circle-primary/20',
        upcoming: 'bg-white border-slate-300 text-slate-400',
        error: 'bg-rose-500 border-rose-500 text-white',
      },
      size: {
        sm: 'w-6 h-6 text-[10px]',
        md: 'w-8 h-8 text-xs',
        lg: 'w-10 h-10 text-sm',
      },
    },
    defaultVariants: {
      status: 'upcoming',
      size: 'md',
    },
  }
);

export const timelineTrackVariants = cva('absolute transition-colors', {
  variants: {
    variant: {
      solid: 'bg-slate-200',
      dashed: 'border-l-2 border-dashed border-slate-300 bg-transparent',
      gradient: 'bg-gradient-to-b from-core-circle-primary via-indigo-300 to-slate-200',
    },
    orientation: {
      vertical: 'top-8 bottom-0 left-[15px] w-0.5 -ml-[1px]',
      horizontal: 'top-[15px] left-8 right-0 h-0.5 -mt-[1px]',
    },
  },
  defaultVariants: {
    variant: 'solid',
    orientation: 'vertical',
  },
});
