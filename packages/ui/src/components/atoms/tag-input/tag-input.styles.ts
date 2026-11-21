import { cva } from 'class-variance-authority';

export const tagInputWrapperVariants = cva(
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

export const tagInputContainerVariants = cva(
  'flex flex-wrap items-center gap-1.5 p-2 rounded-core-circle-md border bg-white transition-all duration-200 focus-within:ring-2 min-h-[42px]',
  {
    variants: {
      variant: {
        outline: 'border-core-circle-border-main focus-within:border-core-circle-primary focus-within:ring-core-circle-primary/20',
        pills: 'rounded-full px-3 py-1.5 border-core-circle-border-main focus-within:border-core-circle-primary',
        gradient: 'border-purple-200 bg-gradient-to-r from-purple-50/40 via-white to-indigo-50/40 focus-within:border-purple-400 focus-within:ring-purple-400/20',
        glow: 'bg-emerald-50 border-emerald-300 text-emerald-950 focus-within:ring-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.15)]',
        glassmorphic: 'backdrop-blur-md bg-white/70 border-white/80 focus-within:bg-white/90 shadow-sm',
        subtle: 'bg-slate-50 border-slate-200 focus-within:bg-white focus-within:border-core-circle-primary',
        dark: 'bg-slate-50 border-slate-300 text-slate-900 focus-within:border-core-circle-primary',
        bordered: 'border-2 border-core-circle-border-strong focus-within:border-core-circle-primary',
        accent: 'border-2 border-core-circle-primary focus-within:ring-core-circle-primary/30',
        minimal: 'border-0 border-b border-core-circle-border-main rounded-none bg-transparent px-0 focus-within:border-core-circle-primary focus-within:ring-0',
      },
      hasError: {
        true: 'border-core-circle-destructive focus-within:border-core-circle-destructive focus-within:ring-core-circle-destructive/20',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'outline',
      hasError: false,
    },
  }
);

export const tagChipVariants = cva(
  'inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-core-circle-semibold rounded-md transition-all duration-150',
  {
    variants: {
      variant: {
        outline: 'bg-blue-50 text-core-circle-primary border border-blue-200/60',
        pills: 'rounded-full bg-blue-50 text-core-circle-primary border border-blue-200/60',
        gradient: 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-sm',
        glow: 'bg-emerald-950 text-emerald-300 border border-emerald-500/50 shadow-[0_0_8px_rgba(16,185,129,0.4)]',
        glassmorphic: 'bg-white/80 text-slate-800 border border-white/80 backdrop-blur-sm shadow-sm',
        subtle: 'bg-slate-200 text-slate-800',
        dark: 'bg-slate-200 text-slate-800 border border-slate-300',
        bordered: 'bg-white text-slate-900 border-2 border-slate-300',
        accent: 'bg-core-circle-primary text-white',
        minimal: 'bg-slate-100 text-slate-800',
      },
    },
    defaultVariants: {
      variant: 'outline',
    },
  }
);

export const tagInputLabelStyles = 'text-xs font-core-circle-bold text-core-circle-text-main leading-none';
export const tagInputHelperStyles = 'text-[11px] text-core-circle-text-muted mt-0.5';
export const tagInputErrorStyles = 'text-[11px] text-core-circle-destructive mt-0.5';
