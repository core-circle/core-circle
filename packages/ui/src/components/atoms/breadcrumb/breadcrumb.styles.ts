import { cva } from 'class-variance-authority';

export const breadcrumbVariants = cva(
  'flex items-center flex-wrap transition-all duration-300 font-core-circle-medium',
  {
    variants: {
      variant: {
        standard: 'text-core-circle-text-muted gap-2',
        pills: 'gap-2.5',
        card: 'bg-white border border-core-circle-border-main p-2.5 rounded-core-circle-2xl shadow-core-circle-subtle gap-2',
        glassmorphic: 'backdrop-blur-md bg-white/75 border border-white/80 p-2.5 rounded-core-circle-2xl shadow-core-circle-subtle gap-2',
        gradient: 'bg-gradient-to-r from-core-circle-blue-50/80 via-white to-core-circle-indigo-50/80 border border-core-circle-blue-200/50 p-2.5 rounded-core-circle-2xl shadow-core-circle-subtle gap-2',
        floating: 'bg-white border border-core-circle-border-main/50 p-2.5 rounded-core-circle-2xl shadow-core-circle-floating gap-2',
        underlined: 'text-core-circle-text-muted gap-2',
        'bordered-segment': 'border border-core-circle-border-main rounded-core-circle-xl bg-white p-1.5 gap-1.5 shadow-core-circle-subtle',
        soft: 'bg-core-circle-bg-page border border-transparent p-2 rounded-core-circle-xl gap-2',
        ghost: 'text-core-circle-text-muted bg-core-circle-bg-page/60 px-3 py-1.5 rounded-core-circle-lg gap-2',
      },
      size: {
        sm: 'text-[11px]',
        md: 'text-xs',
        lg: 'text-sm',
      },
    },
    defaultVariants: {
      variant: 'standard',
      size: 'md',
    },
  }
);

export const breadcrumbItemVariants = cva(
  'inline-flex items-center gap-1.5 transition-all duration-200 select-none',
  {
    variants: {
      variant: {
        standard: 'hover:text-core-circle-primary',
        pills: 'px-3 py-1 bg-white border border-core-circle-border-main rounded-full hover:border-core-circle-primary hover:text-core-circle-primary hover:shadow-core-circle-subtle',
        card: 'px-2.5 py-1 rounded-core-circle-lg hover:bg-core-circle-bg-page hover:text-core-circle-primary',
        glassmorphic: 'px-2.5 py-1 rounded-core-circle-lg hover:bg-white/80 hover:text-core-circle-primary',
        gradient: 'px-2.5 py-1 rounded-core-circle-lg hover:bg-white/80 hover:text-core-circle-primary',
        floating: 'px-2.5 py-1 rounded-core-circle-lg hover:bg-core-circle-bg-page hover:text-core-circle-primary',
        underlined: 'hover:text-core-circle-primary hover:underline underline-offset-4',
        'bordered-segment': 'px-2.5 py-1 rounded-core-circle-md hover:bg-core-circle-bg-page hover:text-core-circle-primary',
        soft: 'px-2.5 py-1 rounded-core-circle-md bg-white border border-core-circle-border-main/40 hover:text-core-circle-primary',
        ghost: 'hover:text-core-circle-primary',
      },
      isCurrent: {
        true: 'text-core-circle-text-main font-core-circle-bold pointer-events-none',
        false: 'text-core-circle-text-muted cursor-pointer',
      },
    },
    compoundVariants: [
      {
        variant: 'pills',
        isCurrent: true,
        className: 'bg-core-circle-primary border-core-circle-primary text-white shadow-core-circle-subtle',
      },
      {
        variant: ['card', 'glassmorphic', 'gradient', 'floating', 'bordered-segment', 'soft'],
        isCurrent: true,
        className: 'bg-core-circle-primary/10 text-core-circle-primary font-core-circle-bold',
      },
    ],
    defaultVariants: {
      variant: 'standard',
      isCurrent: false,
    },
  }
);

export const backLinkStyles = 'inline-flex items-center gap-1 text-core-circle-primary hover:opacity-80 transition-opacity font-core-circle-bold pr-3 border-r border-core-circle-border-main mr-1';
