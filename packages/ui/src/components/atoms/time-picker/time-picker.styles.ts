import { cva } from 'class-variance-authority';

export const timePickerWrapperVariants = cva(
  'inline-flex flex-col gap-1.5 transition-all duration-200',
  {
    variants: {
      fullWidth: {
        true: 'w-full',
        false: 'w-auto',
      },
      disabled: {
        true: 'opacity-50 pointer-events-none cursor-not-allowed',
        false: '',
      },
    },
    defaultVariants: {
      fullWidth: false,
      disabled: false,
    },
  }
);

export const timePickerInputContainerVariants = cva(
  'inline-flex items-center justify-between border rounded-core-circle-md bg-white transition-all duration-200 focus-within:ring-2',
  {
    variants: {
      variant: {
        outline: 'border-core-circle-border-main focus-within:border-core-circle-primary focus-within:ring-core-circle-primary/20',
        material: 'border-b-2 border-t-0 border-x-0 rounded-none bg-transparent focus-within:border-core-circle-primary focus-within:ring-0',
        ghost: 'border-transparent bg-transparent hover:bg-slate-100 focus-within:bg-slate-100 focus-within:ring-0',
        standard: 'border-core-circle-border-main bg-slate-50 focus-within:bg-white focus-within:border-core-circle-primary',
        filled: 'border-0 bg-slate-100 hover:bg-slate-200/80 focus-within:bg-slate-100 focus-within:ring-core-circle-primary/20',
        glassmorphic: 'backdrop-blur-md bg-white/70 border border-white/80 focus-within:bg-white/90 shadow-sm',
        gradient: 'border border-purple-200 bg-gradient-to-r from-purple-50/50 to-indigo-50/50 focus-within:border-purple-500 focus-within:ring-purple-500/20',
        glow: 'bg-slate-950 border border-emerald-500/50 text-white focus-within:ring-emerald-500/30 focus-within:shadow-[0_0_15px_rgba(16,185,129,0.3)]',
        accent: 'border-2 border-core-circle-primary focus-within:ring-core-circle-primary/30',
        dark: 'bg-slate-900 border border-slate-700 text-white focus-within:border-slate-500',
      },
      size: {
        sm: 'px-2.5 py-1 text-xs h-8',
        md: 'px-3.5 py-2 text-sm h-10',
        lg: 'px-4 py-2.5 text-base h-12',
      },
      hasError: {
        true: 'border-core-circle-destructive focus-within:border-core-circle-destructive focus-within:ring-core-circle-destructive/20',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'outline',
      size: 'md',
      hasError: false,
    },
  }
);

export const timePickerLabelStyles = 'text-xs font-core-circle-bold text-core-circle-text-main leading-none';
export const timePickerHelperStyles = 'text-[11px] text-core-circle-text-muted mt-0.5';
export const timePickerErrorStyles = 'text-[11px] text-core-circle-destructive mt-0.5';
