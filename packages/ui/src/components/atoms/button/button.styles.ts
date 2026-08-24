import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 select-none font-core-circle-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-core-circle-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer',
  {
    variants: {
      variant: {
        primary:
          'bg-core-circle-primary text-white hover:bg-core-circle-primary-hover active:bg-core-circle-primary-active shadow-core-circle-subtle border border-transparent',
        secondary:
          'bg-core-circle-secondary text-white hover:bg-core-circle-secondary-hover active:bg-core-circle-secondary-active shadow-core-circle-subtle border border-transparent',
        success:
          'bg-core-circle-green-600 text-white hover:bg-core-circle-green-700 active:bg-core-circle-green-800 shadow-core-circle-subtle border border-transparent',
        warning:
          'bg-core-circle-orange-500 text-white hover:bg-core-circle-orange-600 active:bg-core-circle-orange-700 shadow-core-circle-subtle border border-transparent',
        destructive:
          'bg-core-circle-red-600 text-white hover:bg-core-circle-red-700 active:bg-core-circle-red-800 shadow-core-circle-subtle border border-transparent',
        outline:
          'bg-transparent border border-core-circle-border-strong text-core-circle-text-main hover:bg-core-circle-bg-page hover:border-core-circle-primary hover:text-core-circle-primary',
        ghost:
          'bg-transparent text-core-circle-text-main hover:bg-core-circle-bg-page border border-transparent',
        glassmorphic:
          'backdrop-blur-md bg-white/75 border border-white/80 text-core-circle-text-main shadow-core-circle-subtle hover:bg-white/90',
        gradient:
          'bg-gradient-to-r from-core-circle-blue-600 via-core-circle-indigo-600 to-core-circle-purple-600 text-white shadow-core-circle-subtle hover:opacity-95 hover:shadow-core-circle-floating border border-transparent',
        floating:
          'bg-white text-core-circle-text-main border border-core-circle-border-main/60 shadow-core-circle-elevated hover:shadow-core-circle-floating hover:-translate-y-0.5',
        pill:
          'bg-core-circle-primary text-white rounded-full px-6 shadow-core-circle-subtle hover:bg-core-circle-primary-hover border border-transparent',
        soft:
          'bg-core-circle-blue-50 text-core-circle-primary hover:bg-core-circle-blue-100/80 border border-transparent',
      },
      size: {
        sm: 'px-3 py-1.5 text-xs rounded-core-circle-md h-8',
        md: 'px-4 py-2 text-sm rounded-core-circle-lg h-10',
        lg: 'px-6 py-2.5 text-base rounded-core-circle-xl h-12',
        icon: 'h-10 w-10 p-0 rounded-full shrink-0',
      },
      shape: {
        rounded: 'rounded-core-circle-lg',
        pill: 'rounded-full',
        square: 'rounded-none',
      },
      labelSize: {
        xs: 'text-xs',
        sm: 'text-sm',
        base: 'text-base',
        lg: 'text-lg',
        xl: 'text-xl',
        '2xl': 'text-2xl',
      },
      labelWeight: {
        light: 'font-core-circle-light',
        normal: 'font-core-circle-normal',
        medium: 'font-core-circle-medium',
        semibold: 'font-core-circle-semibold',
        bold: 'font-core-circle-bold',
      },
      fullWidth: {
        true: 'w-full',
        false: 'w-fit',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      labelWeight: 'medium',
      fullWidth: false,
    },
  }
);
