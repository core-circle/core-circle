import { cva } from 'class-variance-authority';

export const badgeVariants = cva(
  'inline-flex items-center justify-center font-core-circle-bold select-none transition-all duration-200 gap-1.5 border whitespace-nowrap',
  {
    variants: {
      variant: {
        primary: 'bg-core-circle-primary text-white border-transparent shadow-core-circle-subtle',
        secondary: 'bg-core-circle-secondary text-white border-transparent shadow-core-circle-subtle',
        success: 'bg-core-circle-green-50 text-core-circle-green-700 border-core-circle-green-200',
        warning: 'bg-core-circle-orange-50 text-core-circle-orange-700 border-core-circle-orange-200',
        destructive: 'bg-core-circle-red-50 text-core-circle-red-700 border-core-circle-red-200',
        danger: 'bg-core-circle-red-50 text-core-circle-red-700 border-core-circle-red-200',
        info: 'bg-core-circle-blue-50 text-core-circle-blue-700 border-core-circle-blue-200',
        ghost: 'bg-core-circle-bg-page text-core-circle-text-muted border-transparent',
        outline: 'bg-transparent text-core-circle-text-main border-core-circle-border-strong',
        glassmorphic: 'backdrop-blur-md bg-white/70 text-core-circle-text-main border-white/80 shadow-core-circle-subtle',
        gradient: 'bg-gradient-to-r from-core-circle-blue-600 via-core-circle-indigo-600 to-core-circle-purple-600 text-white border-transparent shadow-core-circle-subtle',
        floating: 'bg-white text-core-circle-text-main border-core-circle-border-main shadow-core-circle-elevated hover:-translate-y-0.5',
        dot: 'bg-white text-core-circle-text-main border-core-circle-border-main shadow-core-circle-subtle',
      },
      size: {
        sm: 'px-1.5 py-0.5 text-[10px] h-5',
        md: 'px-2.5 py-0.5 text-xs h-6',
        lg: 'px-3.5 py-1 text-sm h-8',
      },
      shape: {
        rounded: 'rounded-core-circle-md',
        pill: 'rounded-full',
        square: 'rounded-none',
      },
      pulse: {
        true: 'animate-pulse',
        false: '',
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      shape: 'rounded',
      pulse: false,
    },
  }
);

export const badgeRemoveButtonVariants = cva(
  'inline-flex items-center justify-center rounded-full hover:bg-black/10 transition-colors p-0.5 -mr-1 cursor-pointer',
  {
    variants: {
      size: {
        sm: 'h-3 w-3',
        md: 'h-3.5 w-3.5',
        lg: 'h-4 w-4',
      }
    },
    defaultVariants: {
      size: 'md',
    }
  }
);
