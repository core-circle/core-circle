import { cva } from 'class-variance-authority';

export const colorPickerContainerVariants = cva(
  'flex flex-col gap-1.5 transition-all duration-200 w-fit',
  {
    variants: {
      disabled: {
        true: 'opacity-50 cursor-not-allowed pointer-events-none',
        false: 'opacity-100',
      },
    },
    defaultVariants: {
      disabled: false,
    },
  }
);

export const colorPickerLabelVariants = cva(
  'text-xs font-core-circle-bold tracking-tight text-core-circle-text-main flex items-center justify-between gap-2',
  {
    variants: {
      hasError: {
        true: 'text-core-circle-warning',
        false: 'text-core-circle-text-main',
      },
    },
    defaultVariants: {
      hasError: false,
    },
  }
);

export const colorPickerWrapperVariants = cva(
  'flex items-center gap-3 transition-all duration-300 relative',
  {
    variants: {
      variant: {
        outline: 'border border-core-circle-border-main bg-white rounded-core-circle-2xl shadow-core-circle-subtle hover:border-core-circle-primary/50 p-2',
        filled: 'border border-transparent bg-core-circle-bg-page hover:bg-core-circle-slate-100 rounded-core-circle-2xl p-2',
        floating: 'border border-core-circle-border-main/50 bg-white rounded-core-circle-2xl shadow-core-circle-elevated hover:shadow-core-circle-floating hover:-translate-y-0.5 p-2',
        glassmorphic: 'backdrop-blur-md bg-white/80 border border-core-circle-border-main/70 rounded-core-circle-2xl shadow-core-circle-subtle hover:bg-white/95 p-2',
        pill: 'border border-core-circle-border-main bg-white rounded-full shadow-core-circle-subtle hover:border-core-circle-primary/50 px-3.5 py-1.5',
        material: 'border-b-2 border-core-circle-border-main rounded-none bg-transparent hover:border-core-circle-primary px-2 py-1.5',
        gradient: 'border border-core-circle-blue-200/80 bg-gradient-to-r from-blue-50/60 via-indigo-50/40 to-purple-50/60 rounded-core-circle-2xl p-2 shadow-core-circle-subtle',
        compact: 'border-0 bg-transparent p-0 w-fit',
        studio: 'border border-core-circle-border-main bg-white rounded-core-circle-2xl shadow-core-circle-floating p-4 flex flex-col items-stretch gap-3 w-72',
        ghost: 'border-0 bg-transparent hover:bg-core-circle-bg-page rounded-core-circle-xl p-1.5',
      },
      hasError: {
        true: 'border-core-circle-warning ring-2 ring-core-circle-warning/20',
      },
    },
    defaultVariants: {
      variant: 'outline',
    },
  }
);

export const swatchVariants = cva(
  'relative shrink-0 cursor-pointer shadow-sm transition-transform duration-200 active:scale-95 border border-black/10 overflow-hidden group',
  {
    variants: {
      shape: {
        rounded: 'rounded-core-circle-lg',
        circle: 'rounded-full',
        square: 'rounded-none',
        pill: 'rounded-full',
      },
      size: {
        sm: 'w-7 h-7',
        md: 'w-9 h-9',
        lg: 'w-12 h-12',
      },
    },
    defaultVariants: {
      shape: 'rounded',
      size: 'md',
    },
  }
);

export const valueBadgeVariants = cva(
  'font-mono font-core-circle-bold text-core-circle-text-main select-all tracking-tight uppercase flex items-center gap-1.5 transition-colors cursor-pointer hover:text-core-circle-primary',
  {
    variants: {
      size: {
        sm: 'text-xs',
        md: 'text-sm',
        lg: 'text-base',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);
