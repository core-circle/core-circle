import { cva } from 'class-variance-authority';

export const otpContainerVariants = cva(
  'flex flex-col gap-2 transition-all duration-200 select-none w-fit',
  {
    variants: {
      disabled: {
        true: 'opacity-50 pointer-events-none cursor-not-allowed',
        false: 'opacity-100',
      },
    },
    defaultVariants: {
      disabled: false,
    },
  }
);

export const otpSlotVariants = cva(
  'flex items-center justify-center text-center font-core-circle-bold transition-all duration-200 outline-none select-none',
  {
    variants: {
      variant: {
        outline: 'border border-core-circle-border-main bg-white text-slate-900 focus:border-core-circle-primary focus:ring-2 focus:ring-core-circle-primary/20 shadow-sm',
        filled: 'border border-transparent bg-core-circle-bg-page text-slate-900 focus:bg-white focus:border-core-circle-primary focus:ring-2 focus:ring-core-circle-primary/20',
        floating: 'border border-core-circle-border-main/60 bg-white text-slate-900 shadow-md focus:shadow-xl focus:border-core-circle-primary focus:-translate-y-0.5',
        glassmorphic: 'backdrop-blur-md bg-white/85 border border-core-circle-border-main/70 text-slate-900 focus:bg-white focus:border-core-circle-primary shadow-sm',
        pill: 'border border-core-circle-border-main bg-white rounded-full text-slate-900 focus:border-core-circle-primary shadow-sm',
        material: 'border-b-2 border-core-circle-border-main rounded-none bg-transparent text-slate-900 focus:border-core-circle-primary px-0',
        gradient: 'border border-core-circle-blue-200/80 bg-white text-slate-900 focus:border-transparent focus:ring-2 focus:ring-blue-500 shadow-sm',
        bordered: 'border-2 border-core-circle-border-strong bg-white text-slate-900 focus:border-core-circle-primary shadow-sm',
        success: 'border border-emerald-500/50 bg-emerald-50/30 text-emerald-900 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20',
        ghost: 'border-0 bg-transparent text-slate-900 hover:bg-core-circle-bg-page focus:bg-core-circle-bg-page',
      },
      size: {
        sm: 'h-9 w-9 text-sm rounded-lg',
        md: 'h-12 w-12 text-lg rounded-xl',
        lg: 'h-14 w-14 text-xl rounded-2xl',
        xl: 'h-16 w-16 text-2xl rounded-2xl',
      },
      shape: {
        rounded: '',
        circle: 'rounded-full',
        square: 'rounded-none',
      },
      hasError: {
        true: 'border-core-circle-warning ring-2 ring-core-circle-warning/20',
      },
    },
    defaultVariants: {
      variant: 'outline',
      size: 'md',
      shape: 'rounded',
    },
  }
);
