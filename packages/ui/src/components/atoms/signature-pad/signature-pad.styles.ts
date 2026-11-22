import { cva } from 'class-variance-authority';

export const signaturePadVariants = cva(
  'relative flex flex-col bg-white border rounded-core-circle-xl transition-all duration-150 overflow-hidden shadow-core-circle-subtle',
  {
    variants: {
      variant: {
        default: 'border-core-circle-border-main',
        bordered: 'border-2 border-core-circle-border-strong',
        soft: 'border-blue-100 bg-blue-50/20',
      },
      hasError: {
        true: 'border-core-circle-destructive focus-within:ring-2 focus-within:ring-core-circle-destructive/20',
        false: 'focus-within:border-core-circle-primary focus-within:ring-2 focus-within:ring-core-circle-primary/20',
      },
    },
    defaultVariants: {
      variant: 'default',
      hasError: false,
    },
  }
);
