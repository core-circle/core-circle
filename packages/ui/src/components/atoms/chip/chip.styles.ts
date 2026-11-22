import { cva } from 'class-variance-authority';

export const chipVariants = cva(
  'inline-flex items-center gap-1.5 font-medium transition-all duration-150 select-none outline-none focus-visible:ring-2 focus-visible:ring-core-circle-primary/30 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer',
  {
    variants: {
      variant: {
        default:
          'bg-slate-100 hover:bg-slate-200 text-slate-800 border border-core-circle-border-main/60',
        outline:
          'bg-white hover:bg-slate-50 text-slate-700 border border-core-circle-border-main',
        soft:
          'bg-blue-50/80 hover:bg-blue-100/70 text-core-circle-primary border border-blue-200/50',
        gradient:
          'bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 text-slate-800 border border-indigo-200/60',
        ghost:
          'bg-transparent hover:bg-slate-100 text-slate-700 border border-transparent',
      },
      selected: {
        true: 'bg-core-circle-primary text-white border-core-circle-primary hover:bg-core-circle-primary/90 shadow-core-circle-subtle',
        false: '',
      },
      size: {
        sm: 'h-6 px-2 text-[11px] rounded-full gap-1',
        md: 'h-8 px-3 text-xs rounded-full gap-1.5',
        lg: 'h-9 px-4 text-sm rounded-full gap-2',
      },
    },
    defaultVariants: {
      variant: 'default',
      selected: false,
      size: 'md',
    },
  }
);
