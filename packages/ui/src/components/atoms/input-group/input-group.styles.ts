import { cva } from 'class-variance-authority';

export const inputGroupVariants = cva(
  'relative flex items-stretch transition-all duration-150',
  {
    variants: {
      size: {
        sm: '[&>*]:h-8 [&>*]:text-xs',
        md: '[&>*]:h-10 [&>*]:text-sm',
        lg: '[&>*]:h-12 [&>*]:text-base',
      },
      joined: {
        true: '[&>*:not(:first-child):not(:last-child)]:rounded-none [&>*:not(:first-child):not(:last-child)]:border-l-0 [&>*:not(:first-child):not(:last-child)]:border-r-0 [&>*:first-child]:rounded-r-none [&>*:last-child]:rounded-l-none [&>*:last-child]:border-l-0',
        false: 'gap-2',
      },
      fullWidth: {
        true: 'w-full',
        false: 'w-auto max-w-md',
      },
    },
    defaultVariants: {
      size: 'md',
      joined: true,
      fullWidth: false,
    },
  }
);

export const inputGroupTextVariants = cva(
  'inline-flex items-center px-3.5 bg-slate-50 border border-core-circle-border-main text-slate-600 font-medium select-none whitespace-nowrap shrink-0 transition-colors',
  {
    variants: {
      position: {
        prefix: 'rounded-l-core-circle-lg border-r-0',
        suffix: 'rounded-r-core-circle-lg border-l-0',
        middle: 'rounded-none',
      },
    },
    defaultVariants: {
      position: 'prefix',
    },
  }
);
