import { cva } from 'class-variance-authority';

export const segmentedControlVariants = cva(
  'relative inline-flex items-center p-1 bg-slate-100 rounded-core-circle-xl transition-all select-none',
  {
    variants: {
      variant: {
        default: 'bg-slate-100 border border-core-circle-border-main/50',
        pills: 'bg-slate-200/70 rounded-full p-1.5',
        soft: 'bg-blue-50/70 border border-blue-100/60',
        bordered: 'bg-white border-2 border-core-circle-border-main',
      },
      size: {
        sm: 'h-8 text-xs',
        md: 'h-10 text-sm',
        lg: 'h-12 text-base',
      },
      fullWidth: {
        true: 'w-full flex',
        false: 'w-auto inline-flex',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
      fullWidth: false,
    },
  }
);

export const segmentOptionVariants = cva(
  'relative flex items-center justify-center gap-1.5 font-medium transition-all duration-200 outline-none cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed z-10 shrink-0',
  {
    variants: {
      active: {
        true: 'bg-white text-slate-900 shadow-core-circle-subtle font-semibold',
        false: 'text-slate-600 hover:text-slate-900 hover:bg-black/5',
      },
      shape: {
        default: 'rounded-core-circle-lg',
        pill: 'rounded-full',
      },
      size: {
        sm: 'px-2.5 py-1 text-xs',
        md: 'px-4 py-1.5 text-sm',
        lg: 'px-5 py-2 text-base',
      },
      fullWidth: {
        true: 'flex-1 text-center',
        false: '',
      },
    },
    defaultVariants: {
      active: false,
      shape: 'default',
      size: 'md',
      fullWidth: false,
    },
  }
);
