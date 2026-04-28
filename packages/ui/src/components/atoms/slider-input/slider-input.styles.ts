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
        standard: '[&::-webkit-slider-runnable-track]:bg-core-circle-border-main [&::-webkit-slider-thumb]:bg-core-circle-primary',
        primary: '[&::-webkit-slider-runnable-track]:bg-core-circle-primary/20 [&::-webkit-slider-thumb]:bg-core-circle-primary',
        success: '[&::-webkit-slider-runnable-track]:bg-core-circle-secondary/20 [&::-webkit-slider-thumb]:bg-core-circle-secondary',
        warning: '[&::-webkit-slider-runnable-track]:bg-core-circle-warning/20 [&::-webkit-slider-thumb]:bg-core-circle-warning',
        danger: '[&::-webkit-slider-runnable-track]:bg-core-circle-destructive/20 [&::-webkit-slider-thumb]:bg-core-circle-destructive',
      },
      size: {
        sm: '[&::-webkit-slider-runnable-track]:h-1 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:-mt-1',
        md: '[&::-webkit-slider-runnable-track]:h-1.5 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:-mt-1.25',
        lg: '[&::-webkit-slider-runnable-track]:h-2 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:-mt-1.5',
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
