import { cva } from 'class-variance-authority';

export const drawerOverlayStyles = cva(
  'fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity duration-300',
  {
    variants: {
      isOpen: {
        true: 'opacity-100 visible',
        false: 'opacity-0 invisible pointer-events-none',
      },
    },
    defaultVariants: {
      isOpen: false,
    },
  }
);

export const drawerPanelStyles = cva(
  'fixed z-50 flex flex-col transition-transform duration-300 ease-in-out shadow-2xl focus:outline-none overflow-hidden',
  {
    variants: {
      variant: {
        default: 'bg-white text-core-circle-text-main border-core-circle-border-main',
        subtle: 'bg-slate-50 text-slate-900 border-slate-200',
        bordered: 'bg-white text-core-circle-text-main border-2 border-core-circle-border-strong',
        glassmorphic: 'backdrop-blur-xl bg-white/85 border border-white/80 text-slate-900',
        gradient: 'bg-gradient-to-b from-purple-50/90 via-white to-indigo-50/90 border-purple-200 text-purple-950',
        glow: 'bg-slate-950 border border-emerald-500/40 text-white shadow-[0_0_30px_rgba(16,185,129,0.25)]',
        dark: 'bg-slate-900 text-white border-slate-800',
        sidebar: 'bg-slate-900 text-slate-100 border-slate-800 shadow-2xl',
        accent: 'bg-white border-t-4 border-core-circle-primary border-l border-r border-b border-core-circle-border-main text-core-circle-text-main',
        minimal: 'bg-white text-core-circle-text-main border-0 shadow-xl',
      },
      position: {
        right: 'top-0 right-0 h-full border-l',
        left: 'top-0 left-0 h-full border-r',
        top: 'top-0 left-0 right-0 border-b',
        bottom: 'bottom-0 left-0 right-0 border-t',
      },
      size: {
        sm: '',
        md: '',
        lg: '',
        xl: '',
        full: '',
      },
    },
    compoundVariants: [
      // Right/Left Widths
      { position: ['right', 'left'], size: 'sm', className: 'w-full max-w-sm' },
      { position: ['right', 'left'], size: 'md', className: 'w-full max-w-md' },
      { position: ['right', 'left'], size: 'lg', className: 'w-full max-w-lg' },
      { position: ['right', 'left'], size: 'xl', className: 'w-full max-w-xl' },
      { position: ['right', 'left'], size: 'full', className: 'w-full max-w-full' },
      // Top/Bottom Heights
      { position: ['top', 'bottom'], size: 'sm', className: 'h-64' },
      { position: ['top', 'bottom'], size: 'md', className: 'h-80' },
      { position: ['top', 'bottom'], size: 'lg', className: 'h-96' },
      { position: ['top', 'bottom'], size: 'xl', className: 'h-[32rem]' },
      { position: ['top', 'bottom'], size: 'full', className: 'h-full' },
    ],
    defaultVariants: {
      variant: 'default',
      position: 'right',
      size: 'md',
    },
  }
);
