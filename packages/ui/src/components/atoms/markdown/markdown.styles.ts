import { cva } from 'class-variance-authority';

export const markdownContainerVariants = cva(
  'w-full text-sm leading-relaxed text-core-circle-text-main space-y-4 select-text',
  {
    variants: {
      variant: {
        default: '',
        card: 'bg-white p-6 rounded-core-circle-2xl border border-core-circle-border-main shadow-core-circle-subtle',
        prose: 'max-w-prose leading-7 text-slate-700',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);
