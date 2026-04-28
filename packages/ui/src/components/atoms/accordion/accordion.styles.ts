import { cva } from 'class-variance-authority';

export const accordionVariants = cva(
  'w-full flex flex-col transition-all duration-500',
  {
    variants: {
      variant: {
        bordered: 'border border-core-circle-border-main/80 rounded-core-circle-2xl overflow-hidden bg-white shadow-core-circle-subtle space-y-[2px]',
        ghost: 'bg-transparent space-y-3',
        separated: 'gap-7',
      },
    },
    defaultVariants: {
      variant: 'bordered',
    },
  }
);

export const accordionItemVariants = cva(
  'flex flex-col w-full transition-all duration-500 group relative',
  {
    variants: {
      variant: {
        bordered: 'bg-white border-b border-core-circle-border-main/30 last:border-0',
        ghost: 'bg-core-circle-bg-page/40 rounded-core-circle-2xl border border-transparent hover:border-core-circle-border-main/60',
        separated: 'border border-core-circle-border-main rounded-core-circle-3xl overflow-hidden bg-white hover:border-core-circle-primary/40 hover:shadow-core-circle-2xl transition-all duration-500',
      },
      isOpen: {
        true: 'z-10 shadow-core-circle-md',
        false: '',
      },
      disabled: {
        true: 'opacity-50 cursor-not-allowed',
        false: '',
      },
    },
    compoundVariants: [
      {
        variant: 'separated',
        isOpen: true,
        className: 'border-core-circle-primary shadow-core-circle-xl ring-8 ring-core-circle-primary/5',
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
  'flex items-center justify-between w-full transition-all duration-300 text-left font-core-circle-bold outline-none focus-visible:ring-2 focus-visible:ring-core-circle-primary focus-visible:ring-inset disabled:cursor-not-allowed select-none relative overflow-hidden',
  {
    variants: {
      size: {
        sm: 'pl-10 pr-5 py-4.5 text-sm',
        md: 'pl-12 pr-6 py-5.5 text-base',
        lg: 'pl-14 pr-7 py-6.5 text-lg',
      },
      isOpen: {
        true: 'text-core-circle-primary bg-gradient-to-r from-core-circle-primary/[0.04] to-transparent',
        false: 'text-core-circle-text-main hover:bg-core-circle-bg-page/50',
      },
    },
    defaultVariants: {
      size: 'md',
      isOpen: false,
    },
  }
);

export const accordionContentVariants = cva(
  'overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]',
  {
    variants: {
      isOpen: {
        true: 'max-h-[1000px] opacity-100',
        false: 'max-h-0 opacity-0',
      },
      size: {
        sm: 'pl-10 pr-5 pb-6 text-sm leading-relaxed text-core-circle-text-muted',
        md: 'pl-12 pr-6 pb-7 text-sm leading-relaxed text-core-circle-text-muted',
        lg: 'pl-14 pr-7 pb-8 text-base leading-relaxed text-core-circle-text-muted',
      },
    },
    defaultVariants: {
      isOpen: false,
      size: 'md',
    },
  }
);
