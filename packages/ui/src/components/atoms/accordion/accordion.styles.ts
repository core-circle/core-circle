import { cva } from 'class-variance-authority';

export const accordionVariants = cva(
  'w-full flex flex-col transition-all duration-300',
  {
    variants: {
      variant: {
        bordered: 'border border-core-circle-border-main rounded-core-circle-2xl overflow-hidden bg-white shadow-core-circle-subtle space-y-[1px]',
        separated: 'space-y-4',
        card: 'space-y-4',
        floating: 'space-y-4',
        filled: 'space-y-3',
        glassmorphic: 'space-y-4',
        gradient: 'space-y-4',
        pill: 'space-y-3',
        minimal: 'space-y-3 bg-transparent',
        ghost: 'space-y-2 bg-transparent',
      },
    },
    defaultVariants: {
      variant: 'bordered',
    },
  }
);

export const accordionItemVariants = cva(
  'flex flex-col w-full transition-all duration-300 group relative',
  {
    variants: {
      variant: {
        bordered: 'bg-white border-b border-core-circle-border-main/50 last:border-0',
        separated: 'border border-core-circle-border-main rounded-core-circle-2xl overflow-hidden bg-white shadow-core-circle-subtle hover:border-core-circle-primary/40 hover:shadow-core-circle-elevated transition-all duration-300',
        card: 'border border-core-circle-border-main rounded-core-circle-2xl overflow-hidden bg-white shadow-core-circle-subtle hover:border-core-circle-primary/50 hover:shadow-core-circle-elevated transition-all duration-300',
        floating: 'bg-white rounded-core-circle-2xl border border-core-circle-border-main/40 shadow-core-circle-elevated hover:shadow-core-circle-floating hover:-translate-y-0.5 transition-all duration-300 overflow-hidden',
        filled: 'bg-core-circle-bg-page rounded-core-circle-2xl border border-transparent hover:bg-core-circle-slate-100 transition-all duration-300 overflow-hidden',
        glassmorphic: 'backdrop-blur-md bg-white/70 border border-core-circle-border-main/60 rounded-core-circle-2xl shadow-core-circle-subtle hover:bg-white/90 hover:shadow-core-circle-elevated transition-all duration-300 overflow-hidden',
        gradient: 'rounded-core-circle-2xl border border-core-circle-blue-200/60 bg-gradient-to-r from-core-circle-blue-50/60 via-core-circle-indigo-50/40 to-core-circle-purple-50/60 hover:border-core-circle-primary/40 transition-all duration-300 overflow-hidden',
        pill: 'rounded-full bg-white border border-core-circle-border-main shadow-core-circle-subtle hover:border-core-circle-primary/40 transition-all duration-300 overflow-hidden',
        minimal: 'bg-transparent border-0',
        ghost: 'bg-transparent rounded-core-circle-xl border-0 hover:bg-core-circle-bg-page/60',
      },
      isOpen: {
        true: 'z-10',
        false: '',
      },
      disabled: {
        true: 'opacity-50 cursor-not-allowed pointer-events-none',
        false: '',
      },
    },
    compoundVariants: [
      {
        variant: 'bordered',
        isOpen: true,
        className: 'bg-white',
      },
      {
        variant: 'separated',
        isOpen: true,
        className: 'border-core-circle-primary/80 shadow-core-circle-elevated ring-4 ring-core-circle-primary/10',
      },
      {
        variant: 'card',
        isOpen: true,
        className: 'border-core-circle-primary/60 shadow-core-circle-floating ring-4 ring-core-circle-primary/10',
      },
      {
        variant: 'floating',
        isOpen: true,
        className: 'border-core-circle-primary/50 -translate-y-0.5 shadow-core-circle-floating ring-4 ring-core-circle-primary/10',
      },
      {
        variant: 'filled',
        isOpen: true,
        className: 'bg-core-circle-slate-100 border-core-circle-primary/40 ring-2 ring-core-circle-primary/15',
      },
      {
        variant: 'glassmorphic',
        isOpen: true,
        className: 'bg-white/95 border-core-circle-primary shadow-core-circle-elevated ring-4 ring-core-circle-primary/10',
      },
      {
        variant: 'gradient',
        isOpen: true,
        className: 'border-core-circle-primary/70 shadow-core-circle-elevated ring-4 ring-core-circle-primary/10 bg-gradient-to-r from-core-circle-blue-50 via-core-circle-indigo-50/70 to-core-circle-purple-50',
      },
      {
        variant: 'pill',
        isOpen: true,
        className: 'rounded-core-circle-2xl border-core-circle-primary shadow-core-circle-elevated ring-4 ring-core-circle-primary/10',
      },
      {
        variant: 'minimal',
        isOpen: true,
        className: 'border-b-core-circle-primary/70',
      },
      {
        variant: 'ghost',
        isOpen: true,
        className: 'bg-core-circle-bg-page/80',
      },
    ],
    defaultVariants: {
      variant: 'bordered',
      isOpen: false,
      disabled: false,
    },
  }
);

export const accordionTriggerVariants = cva(
  'flex items-center justify-between w-full transition-all duration-300 text-left font-core-circle-bold outline-none focus-visible:ring-2 focus-visible:ring-core-circle-primary focus-visible:ring-inset disabled:cursor-not-allowed select-none relative overflow-hidden text-core-circle-text-main',
  {
    variants: {
      variant: {
        bordered: 'hover:bg-core-circle-bg-page/50',
        separated: 'hover:bg-core-circle-bg-page/40',
        card: 'hover:bg-core-circle-bg-page/40',
        floating: 'hover:bg-core-circle-bg-page/30',
        filled: 'hover:bg-core-circle-slate-200/50',
        glassmorphic: 'hover:bg-white/50',
        gradient: 'hover:bg-white/40',
        pill: 'hover:bg-core-circle-bg-page/60',
        minimal: 'px-0 py-3.5 hover:bg-transparent border-b border-core-circle-border-main rounded-none',
        ghost: 'px-4 py-3 hover:bg-core-circle-bg-page/80 rounded-core-circle-xl',
      },
      size: {
        sm: 'px-4 py-3 text-core-circle-sm',
        md: 'px-6 py-4 text-core-circle-base',
        lg: 'px-7 py-5 text-core-circle-lg',
      },
      isOpen: {
        true: 'text-core-circle-primary',
        false: 'text-core-circle-text-main',
      },
    },
    compoundVariants: [
      {
        variant: 'minimal',
        size: 'sm',
        className: 'px-0 py-2.5',
      },
      {
        variant: 'minimal',
        size: 'md',
        className: 'px-0 py-3.5',
      },
      {
        variant: 'minimal',
        size: 'lg',
        className: 'px-0 py-4.5',
      },
      {
        variant: 'minimal',
        isOpen: true,
        className: 'border-b-core-circle-primary/80',
      },
    ],
    defaultVariants: {
      variant: 'bordered',
      size: 'md',
      isOpen: false,
    },
  }
);

export const accordionContentVariants = cva(
  'overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)]',
  {
    variants: {
      variant: {
        bordered: '',
        separated: '',
        card: '',
        floating: '',
        filled: '',
        glassmorphic: '',
        gradient: '',
        pill: '',
        minimal: '',
        ghost: '',
      },
      isOpen: {
        true: 'max-h-[1000px] opacity-100',
        false: 'max-h-0 opacity-0 !py-0 !pb-0 !pt-0 !my-0 !mb-0 !border-0 pointer-events-none',
      },
      size: {
        sm: 'text-core-circle-sm leading-relaxed text-core-circle-text-muted',
        md: 'text-core-circle-sm leading-relaxed text-core-circle-text-muted',
        lg: 'text-core-circle-base leading-relaxed text-core-circle-text-muted',
      },
    },
    compoundVariants: [
      {
        variant: 'bordered',
        isOpen: true,
        size: 'sm',
        className: 'px-4 pb-4 pt-1',
      },
      {
        variant: 'bordered',
        isOpen: true,
        size: 'md',
        className: 'px-6 pb-5 pt-1',
      },
      {
        variant: 'bordered',
        isOpen: true,
        size: 'lg',
        className: 'px-7 pb-6 pt-1',
      },
      {
        variant: 'card',
        isOpen: true,
        size: 'sm',
        className: 'bg-core-circle-bg-page/70 border-t border-core-circle-border-main/50 rounded-b-core-circle-2xl mx-1 mb-1 px-4 py-3',
      },
      {
        variant: 'card',
        isOpen: true,
        size: 'md',
        className: 'bg-core-circle-bg-page/70 border-t border-core-circle-border-main/50 rounded-b-core-circle-2xl mx-1 mb-1 px-5 py-4',
      },
      {
        variant: 'card',
        isOpen: true,
        size: 'lg',
        className: 'bg-core-circle-bg-page/70 border-t border-core-circle-border-main/50 rounded-b-core-circle-2xl mx-1 mb-1 px-6 py-5',
      },
      {
        variant: 'floating',
        isOpen: true,
        size: 'sm',
        className: 'px-4 pb-4 pt-1',
      },
      {
        variant: 'floating',
        isOpen: true,
        size: 'md',
        className: 'px-6 pb-5 pt-1',
      },
      {
        variant: 'floating',
        isOpen: true,
        size: 'lg',
        className: 'px-7 pb-6 pt-1',
      },
      {
        variant: 'separated',
        isOpen: true,
        size: 'sm',
        className: 'px-4 pb-4 pt-1',
      },
      {
        variant: 'separated',
        isOpen: true,
        size: 'md',
        className: 'px-6 pb-5 pt-1',
      },
      {
        variant: 'separated',
        isOpen: true,
        size: 'lg',
        className: 'px-7 pb-6 pt-1',
      },
      {
        variant: 'filled',
        isOpen: true,
        size: 'sm',
        className: 'px-4 pb-4 pt-1',
      },
      {
        variant: 'filled',
        isOpen: true,
        size: 'md',
        className: 'px-6 pb-5 pt-1',
      },
      {
        variant: 'filled',
        isOpen: true,
        size: 'lg',
        className: 'px-7 pb-6 pt-1',
      },
      {
        variant: 'glassmorphic',
        isOpen: true,
        size: 'sm',
        className: 'px-4 pb-4 pt-1',
      },
      {
        variant: 'glassmorphic',
        isOpen: true,
        size: 'md',
        className: 'px-6 pb-5 pt-1',
      },
      {
        variant: 'glassmorphic',
        isOpen: true,
        size: 'lg',
        className: 'px-7 pb-6 pt-1',
      },
      {
        variant: 'gradient',
        isOpen: true,
        size: 'sm',
        className: 'px-4 pb-4 pt-1',
      },
      {
        variant: 'gradient',
        isOpen: true,
        size: 'md',
        className: 'px-6 pb-5 pt-1',
      },
      {
        variant: 'gradient',
        isOpen: true,
        size: 'lg',
        className: 'px-7 pb-6 pt-1',
      },
      {
        variant: 'pill',
        isOpen: true,
        size: 'sm',
        className: 'px-6 pb-4 pt-1',
      },
      {
        variant: 'pill',
        isOpen: true,
        size: 'md',
        className: 'px-7 pb-5 pt-1',
      },
      {
        variant: 'pill',
        isOpen: true,
        size: 'lg',
        className: 'px-8 pb-6 pt-1',
      },
      {
        variant: 'minimal',
        isOpen: true,
        size: 'sm',
        className: 'px-0 pb-3 pt-2',
      },
      {
        variant: 'minimal',
        isOpen: true,
        size: 'md',
        className: 'px-0 pb-4 pt-2.5',
      },
      {
        variant: 'minimal',
        isOpen: true,
        size: 'lg',
        className: 'px-0 pb-5 pt-3',
      },
      {
        variant: 'ghost',
        isOpen: true,
        size: 'sm',
        className: 'px-4 pb-3 pt-1',
      },
      {
        variant: 'ghost',
        isOpen: true,
        size: 'md',
        className: 'px-4 pb-4 pt-1',
      },
      {
        variant: 'ghost',
        isOpen: true,
        size: 'lg',
        className: 'px-4 pb-5 pt-1',
      },
    ],
    defaultVariants: {
      variant: 'bordered',
      isOpen: false,
      size: 'md',
    },
  }
);
