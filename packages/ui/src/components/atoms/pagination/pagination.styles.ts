import { cva } from 'class-variance-authority';

export const paginationItemVariants = cva(
  'inline-flex items-center justify-center font-medium transition-all duration-150 select-none cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-core-circle-primary/40 disabled:pointer-events-none disabled:opacity-40',
  {
    variants: {
      variant: {
        default: 'rounded-core-circle-lg text-slate-700 hover:bg-slate-100',
        pills: 'rounded-full text-slate-700 hover:bg-slate-100',
        bordered: 'rounded-core-circle-lg border border-slate-200 text-slate-700 hover:bg-slate-50 shadow-sm',
        minimal: 'rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100/60',
      },
      size: {
        sm: 'min-w-[28px] h-7 px-1.5 text-xs',
        md: 'min-w-[36px] h-9 px-2.5 text-sm',
        lg: 'min-w-[44px] h-11 px-3.5 text-base',
      },
      isActive: {
        true: 'font-bold shadow-sm',
        false: '',
      },
    },
    compoundVariants: [
      {
        variant: 'default',
        isActive: true,
        class: 'bg-core-circle-primary text-white hover:bg-core-circle-primary/90',
      },
      {
        variant: 'pills',
        isActive: true,
        class: 'bg-core-circle-primary text-white hover:bg-core-circle-primary/90',
      },
      {
        variant: 'bordered',
        isActive: true,
        class: 'border-core-circle-primary bg-core-circle-primary text-white hover:bg-core-circle-primary/90',
      },
      {
        variant: 'minimal',
        isActive: true,
        class: 'text-core-circle-primary bg-core-circle-primary/10 hover:bg-core-circle-primary/15 font-bold',
      },
    ],
    defaultVariants: {
      variant: 'default',
      size: 'md',
      isActive: false,
    },
  }
);
