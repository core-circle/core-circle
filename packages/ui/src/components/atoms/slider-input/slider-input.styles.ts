import { cva } from 'class-variance-authority';

export const sliderContainerVariants = cva(
  'relative flex flex-col w-full transition-all duration-200',
  {
    variants: {
      fullWidth: {
        true: 'w-full',
        false: 'w-fit',
      }
    },
    defaultVariants: {
      fullWidth: false,
    },
  }
);

export const sliderWrapperVariants = cva(
  'relative flex items-center group w-full font-core-circle-medium transition-all duration-200 outline-none h-6',
  {
    variants: {
      disabled: {
        true: 'cursor-not-allowed opacity-50',
      }
    }
  }
);

export const sliderVariants = cva(
  'w-full bg-transparent appearance-none cursor-pointer disabled:cursor-not-allowed transition-all duration-200',
  {
    variants: {
      variant: {
        standard: '[&::-webkit-slider-runnable-track]:bg-core-circle-border-main [&::-webkit-slider-thumb]:bg-core-circle-primary [&::-moz-range-track]:bg-core-circle-border-main [&::-moz-range-thumb]:bg-core-circle-primary',
        primary: '[&::-webkit-slider-runnable-track]:bg-core-circle-primary/20 [&::-webkit-slider-thumb]:bg-core-circle-primary [&::-moz-range-track]:bg-core-circle-primary/20 [&::-moz-range-thumb]:bg-core-circle-primary',
        secondary: '[&::-webkit-slider-runnable-track]:bg-slate-300 [&::-webkit-slider-thumb]:bg-slate-800 [&::-moz-range-track]:bg-slate-300 [&::-moz-range-thumb]:bg-slate-800',
        success: '[&::-webkit-slider-runnable-track]:bg-emerald-100 [&::-webkit-slider-thumb]:bg-emerald-600 [&::-moz-range-track]:bg-emerald-100 [&::-moz-range-thumb]:bg-emerald-600',
        warning: '[&::-webkit-slider-runnable-track]:bg-amber-100 [&::-webkit-slider-thumb]:bg-amber-500 [&::-moz-range-track]:bg-amber-100 [&::-moz-range-thumb]:bg-amber-500',
        danger: '[&::-webkit-slider-runnable-track]:bg-rose-100 [&::-webkit-slider-thumb]:bg-rose-600 [&::-moz-range-track]:bg-rose-100 [&::-moz-range-thumb]:bg-rose-600',
        info: '[&::-webkit-slider-runnable-track]:bg-sky-100 [&::-webkit-slider-thumb]:bg-sky-500 [&::-moz-range-track]:bg-sky-100 [&::-moz-range-thumb]:bg-sky-500',
        gradient: '[&::-webkit-slider-runnable-track]:bg-gradient-to-r [&::-webkit-slider-runnable-track]:from-indigo-400 [&::-webkit-slider-runnable-track]:via-purple-500 [&::-webkit-slider-runnable-track]:to-pink-500 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-purple-600',
        glassmorphic: '[&::-webkit-slider-runnable-track]:bg-white/40 [&::-webkit-slider-runnable-track]:backdrop-blur-md [&::-webkit-slider-runnable-track]:border [&::-webkit-slider-runnable-track]:border-white/60 [&::-webkit-slider-thumb]:bg-indigo-600 [&::-webkit-slider-thumb]:shadow-lg',
        glow: '[&::-webkit-slider-runnable-track]:bg-emerald-950 [&::-webkit-slider-thumb]:bg-emerald-400 [&::-webkit-slider-thumb]:shadow-[0_0_12px_rgba(52,211,153,0.8)]',
        floating: '[&::-webkit-slider-runnable-track]:bg-slate-200 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-core-circle-lg [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-slate-300',
        accent: '[&::-webkit-slider-runnable-track]:bg-blue-100 [&::-webkit-slider-thumb]:bg-core-circle-primary [&::-webkit-slider-thumb]:ring-4 [&::-webkit-slider-thumb]:ring-blue-100',
        dark: '[&::-webkit-slider-runnable-track]:bg-slate-700 [&::-webkit-slider-thumb]:bg-slate-200 [&::-webkit-slider-thumb]:hover:bg-white',
      },
      size: {
        sm: '[&::-webkit-slider-runnable-track]:h-1 [&::-webkit-slider-thumb]:w-3.5 [&::-webkit-slider-thumb]:h-3.5 [&::-webkit-slider-thumb]:-mt-1.25',
        md: '[&::-webkit-slider-runnable-track]:h-1.5 [&::-webkit-slider-thumb]:w-4.5 [&::-webkit-slider-thumb]:h-4.5 [&::-webkit-slider-thumb]:-mt-1.5',
        lg: '[&::-webkit-slider-runnable-track]:h-2.5 [&::-webkit-slider-thumb]:w-5.5 [&::-webkit-slider-thumb]:h-5.5 [&::-webkit-slider-thumb]:-mt-1.5',
      }
    },
    defaultVariants: {
      variant: 'standard',
      size: 'md',
    },
  }
);

export const valueDisplayVariants = cva(
  'ml-3 text-core-circle-sm font-core-circle-medium text-core-circle-text-main min-w-[2rem]',
  {
    variants: {
      size: {
        sm: 'text-core-circle-xs',
        md: 'text-core-circle-sm',
        lg: 'text-core-circle-md',
      }
    },
    defaultVariants: {
      size: 'md',
    }
  }
);
