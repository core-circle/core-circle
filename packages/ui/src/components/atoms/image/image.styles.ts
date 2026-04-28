import { cva, type VariantProps } from 'class-variance-authority';

export const imageVariants = cva(
  'relative overflow-hidden transition-all duration-500',
  {
    variants: {
      fit: {
        cover: 'object-cover',
        contain: 'object-contain',
        fill: 'object-fill',
        none: 'object-none',
        scaleDown: 'object-scale-down',
      },
      rounded: {
        none: 'rounded-none',
        sm: 'rounded-core-circle-sm',
        md: 'rounded-core-circle-md',
        lg: 'rounded-core-circle-lg',
        xl: 'rounded-core-circle-xl',
        full: 'rounded-full',
      },
    },
    defaultVariants: {
      fit: 'cover',
      rounded: 'none',
    },
  }
);

export interface ImageProps
  extends React.ImgHTMLAttributes<HTMLImageElement>,
    VariantProps<typeof imageVariants> {
  fallback?: React.ReactNode;
  aspectRatio?: number;
  width?: string | number;
  height?: string | number;
}
