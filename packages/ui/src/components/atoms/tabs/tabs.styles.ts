import { cva } from 'class-variance-authority';

export const tabsContainerVariants = cva('flex flex-col w-full', {
  variants: {
    fullWidth: {
      true: 'w-full',
      false: '',
    },
  },
  defaultVariants: {
    fullWidth: true,
  },
});

export const tabListVariants = cva('flex items-center flex-wrap transition-all duration-300', {
  variants: {
    variant: {
      underline: 'border-b border-core-circle-border-main gap-8',
      pills: 'gap-2 bg-slate-100 p-1.5 rounded-2xl inline-flex w-fit',
      enclosed: 'border-b border-core-circle-border-main gap-1',
      cards: 'gap-3',
      glassmorphic: 'gap-2 bg-white/40 backdrop-blur-md p-1.5 border border-white/60 rounded-2xl shadow-sm inline-flex',
      gradient: 'gap-2 bg-gradient-to-r from-purple-50 via-indigo-50 to-purple-50 p-1.5 rounded-2xl inline-flex border border-purple-100',
      glow: 'gap-2 bg-emerald-50/60 p-1.5 rounded-2xl border border-emerald-200 inline-flex shadow-sm',
      segmented: 'bg-slate-100 p-1 rounded-xl inline-flex border border-slate-200 shadow-inner',
      bordered: 'border border-core-circle-border-main rounded-xl p-1 gap-2 inline-flex bg-white',
      dark: 'gap-2 bg-slate-100 p-1.5 rounded-2xl border border-slate-200 inline-flex text-slate-800',
    },
    fullWidth: {
      true: 'w-full flex',
      false: '',
    },
  },
  defaultVariants: {
    variant: 'underline',
    fullWidth: false,
  },
});

export const tabItemVariants = cva(
  'inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-core-circle-primary focus-visible:ring-offset-1',
  {
    variants: {
      variant: {
        underline: 'border-b-2 hover:text-core-circle-text-main pb-3.5',
        pills: 'rounded-xl hover:text-core-circle-text-main',
        enclosed: 'border border-transparent rounded-t-xl hover:bg-slate-100 hover:text-core-circle-text-main',
        cards: 'rounded-xl border border-core-circle-border-main hover:border-core-circle-primary/40 bg-white shadow-sm',
        glassmorphic: 'rounded-xl hover:bg-white/60 text-slate-700',
        gradient: 'rounded-xl text-purple-900',
        glow: 'rounded-xl text-emerald-800',
        segmented: 'rounded-lg text-slate-700',
        bordered: 'rounded-lg text-slate-700',
        dark: 'rounded-xl text-slate-600',
      },
      size: {
        sm: 'px-3 py-1.5 text-xs',
        md: 'px-4 py-2 text-sm',
        lg: 'px-5 py-2.5 text-base',
      },
      active: {
        true: '',
        false: '',
      },
      disabled: {
        true: 'opacity-50 cursor-not-allowed pointer-events-none',
        false: '',
      },
      fullWidth: {
        true: 'flex-1',
        false: '',
      },
    },
    compoundVariants: [
      // 1. Underline
      {
        variant: 'underline',
        active: true,
        className: 'border-core-circle-primary text-core-circle-primary font-semibold mb-[-1px]',
      },
      {
        variant: 'underline',
        active: false,
        className: 'border-transparent text-core-circle-text-muted hover:text-core-circle-text-main',
      },
      // 2. Pills
      {
        variant: 'pills',
        active: true,
        className: 'bg-white shadow-sm text-core-circle-primary font-semibold',
      },
      {
        variant: 'pills',
        active: false,
        className: 'bg-transparent text-core-circle-text-muted hover:bg-white/50',
      },
      // 3. Enclosed
      {
        variant: 'enclosed',
        active: true,
        className: 'border-core-circle-border-main border-b-white bg-white mb-[-1px] z-10 text-core-circle-primary font-semibold',
      },
      {
        variant: 'enclosed',
        active: false,
        className: 'border-transparent text-core-circle-text-muted',
      },
      // 4. Cards
      {
        variant: 'cards',
        active: true,
        className: 'border-core-circle-primary bg-core-circle-primary/5 text-core-circle-primary font-bold shadow-md ring-1 ring-core-circle-primary/20',
      },
      {
        variant: 'cards',
        active: false,
        className: 'border-core-circle-border-main text-core-circle-text-muted hover:bg-slate-50',
      },
      // 5. Glassmorphic
      {
        variant: 'glassmorphic',
        active: true,
        className: 'bg-white/80 shadow-sm text-blue-600 font-bold border border-white',
      },
      {
        variant: 'glassmorphic',
        active: false,
        className: 'bg-transparent text-slate-500 hover:bg-white/40',
      },
      // 6. Gradient
      {
        variant: 'gradient',
        active: true,
        className: 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold shadow-md',
      },
      {
        variant: 'gradient',
        active: false,
        className: 'bg-transparent text-purple-700/70 hover:bg-purple-100/50',
      },
      // 7. Glow
      {
        variant: 'glow',
        active: true,
        className: 'bg-emerald-600 text-white shadow-sm font-bold',
      },
      {
        variant: 'glow',
        active: false,
        className: 'border border-transparent text-emerald-800/70 hover:text-emerald-950',
      },
      // 8. Segmented
      {
        variant: 'segmented',
        active: true,
        className: 'bg-white shadow-sm text-slate-900 font-bold',
      },
      {
        variant: 'segmented',
        active: false,
        className: 'bg-transparent text-slate-500 hover:text-slate-900',
      },
      // 9. Bordered
      {
        variant: 'bordered',
        active: true,
        className: 'bg-core-circle-primary text-white font-bold',
      },
      {
        variant: 'bordered',
        active: false,
        className: 'bg-transparent text-slate-600 hover:bg-slate-100',
      },
      // 10. Dark
      {
        variant: 'dark',
        active: true,
        className: 'bg-slate-800 text-white font-bold shadow-sm',
      },
      {
        variant: 'dark',
        active: false,
        className: 'bg-transparent text-slate-600 hover:text-slate-900',
      },
    ],
    defaultVariants: {
      variant: 'underline',
      size: 'md',
      active: false,
      disabled: false,
      fullWidth: false,
    },
  }
);

export const tabContentVariants = cva('mt-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-core-circle-primary rounded-core-circle-md', {
  variants: {},
  defaultVariants: {},
});

