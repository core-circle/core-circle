import { cva } from 'class-variance-authority';

export const radioWrapperVariants = cva(
  'group relative transition-all duration-200 select-none cursor-pointer',
  {
    variants: {
      variant: {
        outline: 'inline-flex items-start gap-2.5',
        solid: 'inline-flex items-start gap-2.5',
        card: 'flex items-start gap-3.5 p-4 bg-white border border-core-circle-border-main rounded-core-circle-2xl shadow-core-circle-subtle hover:border-core-circle-primary/50 w-full',
        floating: 'flex items-start gap-3.5 p-4 bg-white border border-core-circle-border-main/50 rounded-core-circle-2xl shadow-core-circle-elevated hover:shadow-core-circle-floating hover:-translate-y-0.5 w-full',
        glassmorphic: 'flex items-start gap-3.5 p-4 backdrop-blur-md bg-white/85 border border-core-circle-border-main/70 rounded-core-circle-2xl shadow-core-circle-subtle w-full',
        pill: 'inline-flex items-center gap-2.5 px-4 py-2 bg-slate-50 border border-slate-200 rounded-full hover:bg-slate-100',
        bordered: 'flex items-start gap-3.5 p-4 bg-white border-2 border-core-circle-border-strong rounded-core-circle-2xl shadow-sm w-full',
        gradient: 'inline-flex items-start gap-2.5',
        success: 'inline-flex items-start gap-2.5',
        ghost: 'inline-flex items-start gap-2.5 hover:bg-core-circle-bg-page p-1.5 rounded-core-circle-lg',
      },
      disabled: {
        true: 'opacity-50 cursor-not-allowed pointer-events-none',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'outline',
      disabled: false,
    },
  }
);

export const radioCircleVariants = cva(
  'relative shrink-0 flex items-center justify-center rounded-full border-2 transition-all duration-200',
  {
    variants: {
      variant: {
        outline: 'border-slate-300 bg-white group-hover:border-core-circle-primary/60 data-[state=checked]:border-core-circle-primary',
        solid: 'border-slate-300 bg-white group-hover:border-core-circle-primary/60 data-[state=checked]:border-core-circle-primary data-[state=checked]:bg-core-circle-primary/10',
        card: 'border-slate-300 bg-white group-hover:border-core-circle-primary/60 data-[state=checked]:border-core-circle-primary',
        floating: 'border-slate-300 bg-white group-hover:border-core-circle-primary/60 data-[state=checked]:border-core-circle-primary',
        glassmorphic: 'border-slate-300 bg-white group-hover:border-core-circle-primary/60 data-[state=checked]:border-core-circle-primary',
        pill: 'border-slate-300 bg-white group-hover:border-core-circle-primary/60 data-[state=checked]:border-core-circle-primary',
        bordered: 'border-slate-400 bg-white group-hover:border-core-circle-primary/60 data-[state=checked]:border-core-circle-primary',
        gradient: 'border-slate-300 bg-white group-hover:border-core-circle-primary/60 data-[state=checked]:border-core-circle-primary',
        success: 'border-slate-300 bg-white group-hover:border-emerald-500/60 data-[state=checked]:border-emerald-500',
        ghost: 'border-slate-300 bg-transparent group-hover:border-core-circle-primary/60 data-[state=checked]:border-core-circle-primary',
      },
      size: {
        sm: 'h-4 w-4',
        md: 'h-5 w-5',
        lg: 'h-6 w-6',
      },
      hasError: {
        true: 'border-core-circle-warning ring-2 ring-core-circle-warning/20',
      },
    },
    defaultVariants: {
      variant: 'outline',
      size: 'md',
    },
  }
);

export const innerDotVariants = cva(
  'rounded-full transition-all duration-200 transform scale-0',
  {
    variants: {
      variant: {
        outline: 'bg-core-circle-primary',
        solid: 'bg-core-circle-primary',
        card: 'bg-core-circle-primary',
        floating: 'bg-core-circle-primary',
        glassmorphic: 'bg-core-circle-primary',
        pill: 'bg-core-circle-primary',
        bordered: 'bg-core-circle-primary',
        gradient: 'bg-gradient-to-r from-blue-600 to-purple-600',
        success: 'bg-emerald-500',
        ghost: 'bg-core-circle-primary',
      },
      size: {
        sm: 'h-1.5 w-1.5',
        md: 'h-2 w-2',
        lg: 'h-2.5 w-2.5',
      },
      checked: {
        true: 'scale-100',
        false: 'scale-0',
      },
    },
    defaultVariants: {
      variant: 'outline',
      size: 'md',
      checked: false,
    },
  }
);
