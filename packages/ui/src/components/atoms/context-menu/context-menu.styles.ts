import { cva } from 'class-variance-authority';

export const contextMenuContentVariants = cva(
  'fixed z-50 min-w-[200px] rounded-core-circle-xl border p-1.5 shadow-core-circle-floating outline-none animate-in fade-in zoom-in-95 duration-100 flex flex-col gap-0.5',
  {
    variants: {
      variant: {
        default: 'bg-white border-core-circle-border-main text-slate-800 shadow-md',
        card: 'bg-white border-core-circle-border-main text-slate-900 shadow-core-circle-elevated',
        minimal: 'bg-white/95 border-core-circle-border-main/50 text-slate-800 shadow-sm',
        glassmorphic: 'backdrop-blur-xl bg-white/90 border-core-circle-border-main/60 text-slate-900 shadow-xl',
        gradient: 'bg-gradient-to-br from-white via-blue-50/20 to-purple-50/20 border-core-circle-blue-200/60 text-slate-900 shadow-core-circle-floating',
        bordered: 'bg-white border-2 border-core-circle-border-strong text-slate-900 shadow-md',
        dark: 'bg-slate-900 border-slate-800 text-white shadow-2xl',
        compact: 'bg-white border-core-circle-border-main text-slate-800 p-1 min-w-[160px] shadow-md',
        pill: 'bg-white border-core-circle-border-main text-slate-900 rounded-3xl p-2 shadow-lg',
        accent: 'bg-white border-core-circle-primary/40 ring-2 ring-core-circle-primary/10 text-slate-900 shadow-lg',
      },
      size: {
        sm: 'min-w-[160px] text-xs',
        md: 'min-w-[200px] text-sm',
        lg: 'min-w-[250px] text-base',
      },
    },
    defaultVariants: {
      variant: 'card',
      size: 'md',
    },
  }
);

export const contextMenuItemVariants = cva(
  'group relative flex cursor-pointer select-none items-center justify-between rounded-core-circle-lg px-2.5 py-1.5 font-medium outline-none transition-colors duration-100',
  {
    variants: {
      variant: {
        default: 'text-slate-700 hover:bg-slate-100 hover:text-slate-900',
        card: 'text-slate-700 hover:bg-slate-100 hover:text-slate-900',
        minimal: 'text-slate-600 hover:bg-slate-50 hover:text-slate-900',
        glassmorphic: 'text-slate-700 hover:bg-purple-50/60 hover:text-purple-950',
        gradient: 'text-slate-700 hover:bg-blue-50/60 hover:text-blue-950',
        bordered: 'text-slate-800 hover:bg-slate-100 hover:text-black',
        dark: 'text-slate-300 hover:bg-slate-800 hover:text-white',
        compact: 'text-slate-700 hover:bg-slate-100 py-1 px-2 text-xs',
        pill: 'text-slate-700 hover:bg-slate-100 rounded-full',
        accent: 'text-slate-700 hover:bg-core-circle-primary/10 hover:text-core-circle-primary',
      },
      destructive: {
        true: 'text-rose-600 hover:bg-rose-50 hover:text-rose-700 focus:bg-rose-50',
      },
      disabled: {
        true: 'pointer-events-none opacity-50 cursor-not-allowed',
      },
    },
    defaultVariants: {
      variant: 'card',
      destructive: false,
      disabled: false,
    },
  }
);
