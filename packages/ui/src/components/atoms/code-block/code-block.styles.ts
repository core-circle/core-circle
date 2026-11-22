import { cva } from 'class-variance-authority';

export const codeBlockContainerVariants = cva(
  'relative flex flex-col w-full overflow-hidden rounded-core-circle-xl font-mono text-xs transition-all duration-200 select-text',
  {
    variants: {
      variant: {
        default: 'bg-slate-900 border border-slate-800 text-slate-100 shadow-core-circle-md',
        card: 'bg-slate-950 border border-slate-800/80 text-slate-100 shadow-core-circle-lg',
        bordered: 'bg-slate-900 border-2 border-slate-700 text-slate-100 shadow-none',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);
