import { cva } from 'class-variance-authority';

export const fileUploadDropzoneVariants = cva(
  'relative flex flex-col items-center justify-center text-center transition-all duration-200 cursor-pointer rounded-2xl p-8 focus:outline-none select-none',
  {
    variants: {
      variant: {
        default: 'bg-white border-2 border-dashed border-core-circle-border-main hover:border-core-circle-primary hover:bg-blue-50/20 text-core-circle-text-main shadow-sm',
        dashed: 'bg-slate-50 border-2 border-dashed border-slate-300 hover:border-slate-400 text-slate-800',
        subtle: 'bg-slate-100 border border-slate-200 hover:bg-slate-200/70 text-slate-800',
        bordered: 'bg-white border-2 border-core-circle-border-strong hover:border-core-circle-primary text-core-circle-text-main shadow-md',
        glassmorphic: 'backdrop-blur-xl bg-white/70 border border-white/80 hover:bg-white/90 text-slate-900 shadow-lg',
        gradient: 'bg-gradient-to-br from-purple-50/60 via-white to-indigo-50/60 border-2 border-dashed border-purple-200 hover:border-purple-400 text-purple-950',
        glow: 'bg-emerald-50/50 border-2 border-dashed border-emerald-300 hover:border-emerald-500 text-emerald-950 shadow-[0_0_25px_rgba(16,185,129,0.1)]',
        dark: 'bg-slate-50 border-2 border-dashed border-slate-300 hover:border-slate-500 text-slate-900',
        compact: 'bg-white border border-dashed border-core-circle-border-main p-4 hover:border-core-circle-primary',
        accent: 'bg-white border-2 border-dashed border-core-circle-primary/40 hover:border-core-circle-primary hover:bg-blue-50/30 text-core-circle-text-main',
      },
      isDragging: {
        true: 'border-core-circle-primary bg-blue-50/40 scale-[1.01] shadow-lg ring-4 ring-blue-500/10',
        false: '',
      },
      disabled: {
        true: 'opacity-50 pointer-events-none cursor-not-allowed',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      isDragging: false,
      disabled: false,
    },
  }
);

export const fileItemVariants = cva(
  'flex items-center justify-between p-3.5 rounded-xl border text-sm transition-all duration-150',
  {
    variants: {
      status: {
        pending: 'bg-white border-slate-200 text-slate-700',
        uploading: 'bg-blue-50/60 border-blue-200 text-blue-950',
        success: 'bg-emerald-50/60 border-emerald-200 text-emerald-950',
        error: 'bg-rose-50/60 border-rose-200 text-rose-950',
      },
    },
    defaultVariants: {
      status: 'pending',
    },
  }
);
