import { cva } from 'class-variance-authority';

export const typographyVariants = cva(
  'transition-colors duration-200',
  {
    variants: {
      variant: {
        h1: 'scroll-m-20 text-core-circle-4xl font-core-circle-bold tracking-tight lg:text-core-circle-5xl',
        h2: 'scroll-m-20 border-b border-core-circle-border-main pb-2 text-core-circle-3xl font-core-circle-semibold tracking-tight first:mt-0',
        h3: 'scroll-m-20 text-core-circle-2xl font-core-circle-semibold tracking-tight',
        h4: 'scroll-m-20 text-core-circle-xl font-core-circle-semibold tracking-tight',
        h5: 'scroll-m-20 text-core-circle-lg font-core-circle-semibold tracking-tight',
        h6: 'scroll-m-20 text-core-circle-base font-core-circle-semibold tracking-tight',
        p: 'leading-7 [&:not(:first-child)]:mt-4',
        blockquote: 'mt-6 border-l-2 border-core-circle-border-strong pl-6 italic',
        code: 'relative rounded bg-slate-100 px-[0.4rem] py-[0.2rem] font-mono text-sm font-semibold text-slate-800',
        lead: 'text-core-circle-xl text-core-circle-text-muted',
        large: 'text-core-circle-lg font-semibold',
        small: 'text-sm font-medium leading-none',
        muted: 'text-sm text-core-circle-text-muted',
        span: '',
      },
      color: {
        default: 'text-core-circle-text-main',
        primary: 'text-core-circle-primary',
        secondary: 'text-slate-600',
        success: 'text-emerald-600',
        warning: 'text-amber-600',
        danger: 'text-rose-600',
        info: 'text-blue-600',
        gradient: 'bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 bg-clip-text text-transparent',
        glow: 'text-emerald-500 drop-shadow-[0_0_12px_rgba(52,211,153,0.5)]',
        accent: 'text-blue-700',
        muted: 'text-core-circle-text-muted',
        white: 'text-white',
      },
      weight: {
        light: 'font-core-circle-light',
        normal: 'font-core-circle-normal',
        medium: 'font-core-circle-medium',
        semibold: 'font-core-circle-semibold',
        bold: 'font-core-circle-bold',
      },
      align: {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right',
        justify: 'text-justify',
      },
      italic: {
        true: 'italic',
        false: '',
      },
      underline: {
        true: 'underline underline-offset-4',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'p',
      color: 'default',
      weight: 'normal',
      align: 'left',
      italic: false,
      underline: false,
    },
  }
);

