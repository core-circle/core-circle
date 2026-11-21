import { cva } from 'class-variance-authority';

export const datePickerContainerVariants = cva(
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

export const datePickerTriggerVariants = cva(
  'flex items-center gap-3 transition-all duration-300 relative cursor-pointer select-none',
  {
    variants: {
      variant: {
        outline: 'border border-core-circle-border-main bg-white rounded-core-circle-2xl shadow-core-circle-subtle hover:border-core-circle-primary/50 px-4 py-2.5',
        filled: 'border border-transparent bg-core-circle-bg-page hover:bg-core-circle-slate-100 rounded-core-circle-2xl px-4 py-2.5',
        floating: 'border border-core-circle-border-main/50 bg-white rounded-core-circle-2xl shadow-core-circle-elevated hover:shadow-core-circle-floating hover:-translate-y-0.5 px-4 py-2.5',
        glassmorphic: 'backdrop-blur-md bg-white/80 border border-core-circle-border-main/70 rounded-core-circle-2xl shadow-core-circle-subtle hover:bg-white/95 px-4 py-2.5',
        pill: 'border border-core-circle-border-main bg-white rounded-full shadow-core-circle-subtle hover:border-core-circle-primary/50 px-5 py-2.5',
        material: 'border-b-2 border-core-circle-border-main rounded-none bg-transparent hover:border-core-circle-primary px-2 py-2',
        gradient: 'border border-core-circle-blue-200/80 bg-gradient-to-r from-blue-50/60 via-indigo-50/40 to-purple-50/60 rounded-core-circle-2xl px-4 py-2.5 shadow-core-circle-subtle',
        compact: 'border border-core-circle-border-main/60 bg-white hover:bg-core-circle-bg-page rounded-core-circle-lg px-2.5 py-1.5 text-xs',
        'calendar-card': 'border border-core-circle-border-main bg-white rounded-core-circle-2xl shadow-core-circle-floating p-4',
        ghost: 'border-0 bg-transparent hover:bg-core-circle-bg-page rounded-core-circle-xl px-3 py-2',
      },
      size: {
        sm: 'text-xs h-9',
        md: 'text-sm h-11',
        lg: 'text-base h-13',
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

export const calendarPopoverVariants = cva(
  'absolute top-full left-0 z-50 mt-2 p-4 bg-white border border-core-circle-border-main rounded-core-circle-2xl shadow-core-circle-floating animate-in fade-in zoom-in-95 duration-200 origin-top flex flex-col gap-3.5',
  {
    variants: {
      variant: {
        outline: 'bg-white border-core-circle-border-main',
        filled: 'bg-white border-core-circle-border-main',
        floating: 'bg-white border-core-circle-border-main/50 shadow-2xl',
        glassmorphic: 'backdrop-blur-xl bg-white/90 border-core-circle-border-main/80',
        pill: 'bg-white border-core-circle-border-main rounded-3xl',
        material: 'bg-white border-core-circle-border-main rounded-xl shadow-lg',
        gradient: 'bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 border-core-circle-blue-200/80',
        compact: 'bg-white border-core-circle-border-main p-3 rounded-xl',
        'calendar-card': 'static mt-0 shadow-none border-0 p-0',
        ghost: 'bg-white border-core-circle-border-main shadow-xl',
      },
    },
    defaultVariants: {
      variant: 'outline',
    },
  }
);

export const dayCellVariants = cva(
  'flex items-center justify-center font-core-circle-medium text-xs rounded-xl transition-all duration-200 select-none relative',
  {
    variants: {
      status: {
        default: 'text-core-circle-text-main hover:bg-core-circle-bg-page cursor-pointer hover:font-bold hover:scale-105',
        selected: 'bg-core-circle-primary text-white font-core-circle-bold shadow-md scale-105 ring-2 ring-core-circle-primary/20',
        today: 'text-core-circle-primary font-core-circle-bold border border-core-circle-primary/40 bg-core-circle-primary/10',
        outside: 'text-core-circle-text-muted/40 hover:bg-transparent cursor-default',
        disabled: 'text-core-circle-text-muted/30 cursor-not-allowed pointer-events-none line-through',
        'range-start': 'bg-core-circle-primary text-white font-core-circle-bold rounded-r-none shadow-md',
        'range-end': 'bg-core-circle-primary text-white font-core-circle-bold rounded-l-none shadow-md',
        'range-between': 'bg-core-circle-primary/15 text-core-circle-primary font-bold rounded-none hover:bg-core-circle-primary/25',
      },
      size: {
        sm: 'w-7 h-7 text-[11px]',
        md: 'w-8.5 h-8.5 text-xs',
        lg: 'w-10 h-10 text-sm',
      },
    },
    defaultVariants: {
      status: 'default',
      size: 'md',
    },
  }
);
