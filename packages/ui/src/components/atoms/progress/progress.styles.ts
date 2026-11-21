import { cva } from 'class-variance-authority';

export const progressContainerVariants = cva(
  'w-full overflow-hidden relative transition-all duration-300',
  {
    variants: {
      variant: {
        primary: 'bg-core-circle-bg-muted',
        secondary: 'bg-core-circle-slate-200',
        success: 'bg-core-circle-green-100',
        warning: 'bg-core-circle-amber-100',
        danger: 'bg-core-circle-red-100',
        info: 'bg-core-circle-blue-100',
        gradient: 'bg-core-circle-purple-100/60',
        glassmorphic: 'backdrop-blur-md bg-white/40 border border-white/60 shadow-inner',
        striped: 'bg-core-circle-slate-100',
        glow: 'bg-core-circle-slate-900/10',
        floating: 'bg-white shadow-core-circle-subtle border border-core-circle-border-main',
        ghost: 'bg-core-circle-slate-100/70',
      },
      size: {
        sm: 'h-1.5',
        md: 'h-2.5',
        lg: 'h-4',
      },
      shape: {
        pill: 'rounded-full',
        rounded: 'rounded-core-circle-md',
        square: 'rounded-none',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      shape: 'pill',
    },
  }
);

export const progressIndicatorVariants = cva(
  'h-full transition-all duration-500 ease-out relative flex items-center justify-center overflow-hidden',
  {
    variants: {
      variant: {
        primary: 'bg-core-circle-primary',
        secondary: 'bg-core-circle-slate-700',
        success: 'bg-core-circle-success',
        warning: 'bg-core-circle-warning',
        danger: 'bg-core-circle-danger',
        info: 'bg-core-circle-blue-500',
        gradient: 'bg-gradient-to-r from-core-circle-blue-600 via-core-circle-indigo-600 to-core-circle-purple-600',
        glassmorphic: 'backdrop-blur-sm bg-gradient-to-r from-core-circle-teal-400 to-core-circle-blue-500 shadow-[0_0_12px_rgba(45,212,191,0.5)]',
        striped: 'bg-core-circle-primary bg-[linear-gradient(45deg,rgba(255,255,255,0.2)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.2)_50%,rgba(255,255,255,0.2)_75%,transparent_75%,transparent)] bg-[length:1rem_1rem] animate-[progress-striped_1s_linear_infinite]',
        glow: 'bg-core-circle-green-500 shadow-[0_0_12px_rgba(34,197,94,0.6)]',
        floating: 'bg-gradient-to-r from-core-circle-blue-600 to-core-circle-indigo-600 shadow-core-circle-subtle',
        ghost: 'bg-core-circle-slate-400',
      },
      shape: {
        pill: 'rounded-full',
        rounded: 'rounded-core-circle-md',
        square: 'rounded-none',
      },
      indeterminate: {
        true: 'w-full animate-progress-indeterminate origin-left',
        false: '',
      },
      striped: {
        true: 'bg-[linear-gradient(45deg,rgba(255,255,255,0.2)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.2)_50%,rgba(255,255,255,0.2)_75%,transparent_75%,transparent)] bg-[length:1rem_1rem] animate-[progress-striped_1s_linear_infinite]',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'primary',
      shape: 'pill',
      indeterminate: false,
      striped: false,
    },
  }
);

export const progressLabelVariants = cva(
  'font-core-circle-bold select-none',
  {
    variants: {
      position: {
        inside: 'text-[10px] text-white px-2 drop-shadow-sm font-semibold tracking-wide',
        'outside-end': 'text-sm text-core-circle-text-main ml-3 shrink-0 font-medium',
        'outside-top': 'text-sm text-core-circle-text-main mb-2 font-medium',
      },
      size: {
        sm: 'text-[9px]',
        md: 'text-xs',
        lg: 'text-sm',
      }
    },
    defaultVariants: {
      position: 'outside-end',
      size: 'md',
    }
  }
);
