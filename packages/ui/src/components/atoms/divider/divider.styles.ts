import { cva } from 'class-variance-authority';

export const dividerVariants = cva(
  'flex items-center text-core-circle-text-muted transition-all duration-200 select-none',
  {
    variants: {
      orientation: {
        horizontal: 'w-full flex-row my-4',
        vertical: 'h-full flex-col mx-4 min-h-[1em] self-stretch',
      },
      variant: {
        solid: 'border-core-circle-border-main border-solid',
        dashed: 'border-core-circle-border-main border-dashed',
        dotted: 'border-core-circle-border-main border-dotted',
        gradient: 'border-0 bg-gradient-to-r from-core-circle-blue-500 via-core-circle-indigo-500 to-core-circle-purple-500',
        fade: 'border-0 bg-gradient-to-r from-transparent via-core-circle-border-strong to-transparent',
        accent: 'border-core-circle-primary border-solid',
        subtle: 'border-core-circle-border-main/40 border-solid',
        thick: 'border-core-circle-border-strong border-solid',
        double: 'border-core-circle-border-main border-double',
        glow: 'border-0 bg-gradient-to-r from-core-circle-blue-400 via-core-circle-primary to-core-circle-blue-400 shadow-sm',
      },
      thickness: {
        sm: '',
        md: '',
        lg: '',
      },
      align: {
        start: 'justify-start',
        center: 'justify-center',
        end: 'justify-end',
      }
    },
    compoundVariants: [
      // Horizontal Borders
      { orientation: 'horizontal', variant: ['solid', 'dashed', 'dotted', 'accent', 'subtle', 'double'], thickness: 'sm', className: 'border-b' },
      { orientation: 'horizontal', variant: ['solid', 'dashed', 'dotted', 'accent', 'subtle', 'double'], thickness: 'md', className: 'border-b-2' },
      { orientation: 'horizontal', variant: ['solid', 'dashed', 'dotted', 'accent', 'subtle', 'double'], thickness: 'lg', className: 'border-b-4' },
      { orientation: 'horizontal', variant: 'thick', className: 'border-b-4' },
      // Horizontal Heights for background-based variants (gradient, fade, glow)
      { orientation: 'horizontal', variant: ['gradient', 'fade', 'glow'], thickness: 'sm', className: 'h-[1px]' },
      { orientation: 'horizontal', variant: ['gradient', 'fade', 'glow'], thickness: 'md', className: 'h-[2px]' },
      { orientation: 'horizontal', variant: ['gradient', 'fade', 'glow'], thickness: 'lg', className: 'h-[4px]' },

      // Vertical Borders
      { orientation: 'vertical', variant: ['solid', 'dashed', 'dotted', 'accent', 'subtle', 'double'], thickness: 'sm', className: 'border-r' },
      { orientation: 'vertical', variant: ['solid', 'dashed', 'dotted', 'accent', 'subtle', 'double'], thickness: 'md', className: 'border-r-2' },
      { orientation: 'vertical', variant: ['solid', 'dashed', 'dotted', 'accent', 'subtle', 'double'], thickness: 'lg', className: 'border-r-4' },
      { orientation: 'vertical', variant: 'thick', className: 'border-r-4' },
      // Vertical Widths for background-based variants (gradient, fade, glow)
      { orientation: 'vertical', variant: ['gradient', 'fade', 'glow'], thickness: 'sm', className: 'w-[1px]' },
      { orientation: 'vertical', variant: ['gradient', 'fade', 'glow'], thickness: 'md', className: 'w-[2px]' },
      { orientation: 'vertical', variant: ['gradient', 'fade', 'glow'], thickness: 'lg', className: 'w-[4px]' },
    ],
    defaultVariants: {
      orientation: 'horizontal',
      variant: 'solid',
      thickness: 'sm',
      align: 'center',
    },
  }
);
