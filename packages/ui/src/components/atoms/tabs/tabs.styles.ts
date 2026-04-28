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

export const tabListVariants = cva('flex items-center flex-wrap', {
  variants: {
    variant: {
      underline: 'border-b border-core-circle-border-main gap-8',
      pills: 'gap-2 bg-core-circle-bg-muted p-1 rounded-core-circle-lg inline-flex w-fit',
      enclosed: 'border-b border-core-circle-border-main gap-1',
    },
    fullWidth: {
      true: '',
      false: '',
    },
  },
  compoundVariants: [
    {
      variant: 'pills',
      fullWidth: true,
      className: 'w-full flex',
    },
  ],
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
        underline: 'border-b-2 hover:text-core-circle-text-main pb-4',
        pills: 'rounded-core-circle-md hover:bg-white hover:shadow-core-circle-sm hover:text-core-circle-text-main',
        enclosed: 'border border-transparent rounded-t-core-circle-lg hover:bg-core-circle-bg-muted hover:text-core-circle-text-main',
      },
      size: {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-sm',
        lg: 'px-5 py-2.5 text-base',
      },
      active: {
        true: 'text-core-circle-text-main',
        false: 'text-core-circle-text-muted',
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
      {
        variant: 'underline',
        active: true,
        className: 'border-core-circle-primary text-core-circle-primary hover:text-core-circle-primary font-semibold mb-[-1px]',
      },
      {
        variant: 'underline',
        active: false,
        className: 'border-transparent',
      },
      {
        variant: 'pills',
        active: true,
        className: 'bg-white shadow-core-circle-sm text-core-circle-text-main',
      },
      {
        variant: 'pills',
        active: false,
        className: 'bg-transparent',
      },
      {
        variant: 'enclosed',
        active: true,
        className: 'border-core-circle-border-main border-b-white bg-white mb-[-1px] z-10 text-core-circle-text-main hover:bg-white',
      },
      {
        variant: 'enclosed',
        active: false,
        className: 'border-transparent',
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
