import { cva } from 'class-variance-authority';

export const breadcrumbVariants = cva(
  'flex items-center gap-2 text-core-circle-xs font-core-circle-medium',
  {
    variants: {
      variant: {
        standard: 'text-core-circle-text-muted',
        ghost: 'text-core-circle-text-muted bg-core-circle-bg-page/50 px-3 py-1.5 rounded-core-circle-lg',
        pills: 'gap-3',
      },
    },
    defaultVariants: {
      variant: 'standard',
    },
  }
);

export const breadcrumbItemVariants = cva(
  'flex items-center gap-1.5 transition-all duration-200',
  {
    variants: {
      variant: {
        standard: 'hover:text-core-circle-primary',
        ghost: 'hover:text-core-circle-primary',
        pills: 'px-3 py-1 bg-white border border-core-circle-border-main rounded-full hover:border-core-circle-primary hover:text-core-circle-primary hover:shadow-core-circle-subtle',
      },
      isCurrent: {
        true: 'text-core-circle-text-main font-core-circle-bold pointer-events-none',
        false: 'cursor-pointer',
      },
    },
    compoundVariants: [
      {
        variant: 'pills',
        isCurrent: true,
        className: 'bg-core-circle-primary border-core-circle-primary text-white shadow-core-circle-floating',
      },
    ],
    defaultVariants: {
      variant: 'standard',
      isCurrent: false,
    },
  }
);

export const backLinkStyles = 'flex items-center gap-1.5 text-core-circle-primary hover:opacity-80 transition-opacity font-core-circle-bold pr-4 border-r border-core-circle-border-main mr-2';
