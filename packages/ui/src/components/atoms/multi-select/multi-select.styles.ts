import { cva } from 'class-variance-authority';

export const multiSelectContainerVariants = cva(
  'relative flex flex-col gap-1.5 transition-all duration-200 w-fit',
  {
    variants: {
      fullWidth: {
        true: 'w-full',
        false: 'w-fit',
      },
      disabled: {
        true: 'opacity-50 cursor-not-allowed pointer-events-none',
        false: 'opacity-100',
      },
    },
    defaultVariants: {
      fullWidth: false,
      disabled: false,
    },
  }
);

export const multiSelectTriggerVariants = cva(
  'flex items-center justify-between gap-2.5 transition-all duration-300 relative cursor-pointer select-none min-h-[2.75rem] px-3.5 py-1.5',
  {
    variants: {
      variant: {
        outline: 'border border-core-circle-border-main bg-white rounded-core-circle-2xl shadow-core-circle-subtle hover:border-core-circle-primary/50',
        filled: 'border border-transparent bg-core-circle-bg-page hover:bg-core-circle-slate-100 rounded-core-circle-2xl',
        floating: 'border border-core-circle-border-main/50 bg-white rounded-core-circle-2xl shadow-core-circle-elevated hover:shadow-core-circle-floating hover:-translate-y-0.5',
        glassmorphic: 'backdrop-blur-md bg-white/80 border border-core-circle-border-main/70 rounded-core-circle-2xl shadow-core-circle-subtle hover:bg-white/95',
        pill: 'border border-core-circle-border-main bg-white rounded-full shadow-core-circle-subtle hover:border-core-circle-primary/50 px-4',
        material: 'border-b-2 border-core-circle-border-main rounded-none bg-transparent hover:border-core-circle-primary px-2',
        gradient: 'border border-core-circle-blue-200/80 bg-gradient-to-r from-blue-50/60 via-indigo-50/40 to-purple-50/60 rounded-core-circle-2xl shadow-core-circle-subtle',
        compact: 'border border-core-circle-border-main/60 bg-white rounded-core-circle-lg px-2.5 py-1 min-h-[2rem] text-xs',
        chips: 'border border-core-circle-border-main bg-slate-50/60 rounded-core-circle-2xl p-2 min-h-[3rem]',
        ghost: 'border-0 bg-transparent hover:bg-core-circle-bg-page rounded-core-circle-xl px-2',
      },
      size: {
        sm: 'text-xs min-h-[2.25rem]',
        md: 'text-sm min-h-[2.75rem]',
        lg: 'text-base min-h-[3.25rem]',
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

export const multiSelectDropdownVariants = cva(
  'absolute top-full left-0 z-50 mt-2 w-full min-w-[240px] max-h-64 overflow-y-auto bg-white border border-core-circle-border-main rounded-core-circle-2xl shadow-core-circle-floating animate-in fade-in zoom-in-95 duration-200 p-1.5 flex flex-col gap-1',
  {
    variants: {
      variant: {
        outline: 'bg-white border-core-circle-border-main',
        filled: 'bg-white border-core-circle-border-main',
        floating: 'bg-white border-core-circle-border-main/50 shadow-2xl',
        glassmorphic: 'backdrop-blur-xl bg-white/95 border-core-circle-border-main/80',
        pill: 'bg-white border-core-circle-border-main rounded-3xl',
        material: 'bg-white border-core-circle-border-main rounded-xl shadow-lg',
        gradient: 'bg-gradient-to-br from-white via-blue-50/20 to-purple-50/20 border-core-circle-blue-200/80',
        compact: 'bg-white border-core-circle-border-main rounded-xl p-1',
        chips: 'bg-white border-core-circle-border-main rounded-2xl',
        ghost: 'bg-white border-core-circle-border-main shadow-xl',
      },
    },
    defaultVariants: {
      variant: 'outline',
    },
  }
);

export const multiSelectOptionVariants = cva(
  'flex items-center justify-between gap-2 px-3 py-2 text-xs font-core-circle-medium rounded-xl cursor-pointer transition-colors select-none',
  {
    variants: {
      selected: {
        true: 'bg-core-circle-primary/10 text-core-circle-primary font-core-circle-bold',
        false: 'text-core-circle-text-main hover:bg-core-circle-bg-page',
      },
      disabled: {
        true: 'opacity-40 cursor-not-allowed pointer-events-none',
        false: '',
      },
    },
    defaultVariants: {
      selected: false,
      disabled: false,
    },
  }
);
