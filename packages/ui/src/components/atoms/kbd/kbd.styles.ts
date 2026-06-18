import { cva, type VariantProps } from 'class-variance-authority';

export const kbdVariants = cva(
  'inline-flex items-center justify-center rounded-core-circle-md font-core-circle-medium transition-colors select-none pointer-events-none',
  {
    variants: {
      variant: {
        outline: 'bg-white border border-core-circle-border-main text-core-circle-text-main shadow-[0_2px_0_0_rgba(0,0,0,0.05)]',
        solid: 'bg-core-circle-bg-muted text-core-circle-text-main border border-transparent shadow-inner',
        ghost: 'bg-transparent text-core-circle-text-muted',
      },
      size: {
        sm: 'h-5 px-1.5 text-[10px] min-w-[20px]',
        md: 'h-6 px-2 text-[12px] min-w-[24px]',
      },
    },
    defaultVariants: {
      variant: 'outline',
      size: 'md',
    },
  }
);

export interface KbdProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof kbdVariants> {
  children: React.ReactNode;
}
