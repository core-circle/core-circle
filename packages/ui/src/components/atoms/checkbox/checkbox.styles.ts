import { cva } from 'class-variance-authority';

export const checkboxContainerVariants = cva(
  'group relative transition-all duration-200 select-none cursor-pointer',
  {
    variants: {
      variant: {
        solid: 'inline-flex items-start gap-2.5',
        outline: 'inline-flex items-start gap-2.5',
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
      variant: 'solid',
      disabled: false,
    },
  }
);

export const checkboxBoxVariants = cva(
  'relative shrink-0 flex items-center justify-center transition-all duration-200 border-2 text-white',
  {
    variants: {
      variant: {
        solid: 'border-slate-300 bg-white group-hover:border-core-circle-primary/60 data-[state=checked]:bg-core-circle-primary data-[state=checked]:border-core-circle-primary data-[state=indeterminate]:bg-core-circle-primary data-[state=indeterminate]:border-core-circle-primary',
        outline: 'border-slate-300 bg-white group-hover:border-core-circle-primary/60 data-[state=checked]:border-core-circle-primary data-[state=checked]:text-core-circle-primary data-[state=indeterminate]:border-core-circle-primary data-[state=indeterminate]:text-core-circle-primary',
        card: 'border-slate-300 bg-white group-hover:border-core-circle-primary/60 data-[state=checked]:bg-core-circle-primary data-[state=checked]:border-core-circle-primary data-[state=indeterminate]:bg-core-circle-primary data-[state=indeterminate]:border-core-circle-primary',
        floating: 'border-slate-300 bg-white group-hover:border-core-circle-primary/60 data-[state=checked]:bg-core-circle-primary data-[state=checked]:border-core-circle-primary data-[state=indeterminate]:bg-core-circle-primary data-[state=indeterminate]:border-core-circle-primary',
        glassmorphic: 'border-slate-300 bg-white group-hover:border-core-circle-primary/60 data-[state=checked]:bg-core-circle-primary data-[state=checked]:border-core-circle-primary data-[state=indeterminate]:bg-core-circle-primary data-[state=indeterminate]:border-core-circle-primary',
        pill: 'border-slate-300 bg-white group-hover:border-core-circle-primary/60 data-[state=checked]:bg-core-circle-primary data-[state=checked]:border-core-circle-primary data-[state=indeterminate]:bg-core-circle-primary data-[state=indeterminate]:border-core-circle-primary',
        bordered: 'border-slate-400 bg-white group-hover:border-core-circle-primary/60 data-[state=checked]:bg-core-circle-primary data-[state=checked]:border-core-circle-primary data-[state=indeterminate]:bg-core-circle-primary data-[state=indeterminate]:border-core-circle-primary',
        gradient: 'border-slate-300 bg-white group-hover:border-core-circle-primary/60 data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-blue-600 data-[state=checked]:to-purple-600 data-[state=checked]:border-transparent data-[state=indeterminate]:bg-gradient-to-r data-[state=indeterminate]:from-blue-600 data-[state=indeterminate]:to-purple-600 data-[state=indeterminate]:border-transparent',
        success: 'border-slate-300 bg-white group-hover:border-emerald-500/60 data-[state=checked]:bg-emerald-500 data-[state=checked]:border-emerald-500 data-[state=indeterminate]:bg-emerald-500 data-[state=indeterminate]:border-emerald-500',
        ghost: 'border-slate-300 bg-transparent group-hover:border-core-circle-primary/60 data-[state=checked]:bg-core-circle-primary data-[state=checked]:border-core-circle-primary data-[state=indeterminate]:bg-core-circle-primary data-[state=indeterminate]:border-core-circle-primary',
      },
      size: {
        sm: 'h-4 w-4',
        md: 'h-5 w-5',
        lg: 'h-6 w-6',
      },
      shape: {
        rounded: 'rounded-md',
        circle: 'rounded-full',
        square: 'rounded-none',
      },
    },
    defaultVariants: {
      variant: 'solid',
      size: 'md',
      shape: 'rounded',
    },
  }
);
