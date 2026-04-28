import { cva } from 'class-variance-authority';

export const dividerVariants = cva(
  'border-core-circle-border-main flex items-center',
  {
    variants: {
      orientation: {
        horizontal: 'w-full flex-row my-4',
        vertical: 'h-full flex-col mx-4 min-h-[1em]',
      },
      variant: {
        solid: 'border-solid',
        dashed: 'border-dashed',
        dotted: 'border-dotted',
      },
      thickness: {
        sm: '',
        md: '',
        lg: '',
      }
    },
    compoundVariants: [
      {
        orientation: 'horizontal',
        thickness: 'sm',
        className: 'border-b',
      },
      {
        orientation: 'horizontal',
        thickness: 'md',
        className: 'border-b-2',
      },
      {
        orientation: 'horizontal',
        thickness: 'lg',
        className: 'border-b-4',
      },
      {
        orientation: 'vertical',
        thickness: 'sm',
        className: 'border-r',
      },
      {
        orientation: 'vertical',
        thickness: 'md',
        className: 'border-r-2',
      },
      {
        orientation: 'vertical',
        thickness: 'lg',
        className: 'border-r-4',
      },
    ],
    defaultVariants: {
      orientation: 'horizontal',
      variant: 'solid',
      thickness: 'sm',
    },
  }
);
