import * as React from 'react';
import { type VariantProps } from 'class-variance-authority';
import { skeletonVariants } from '../../../components/atoms/skeleton/skeleton.styles';

export interface SkeletonProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof skeletonVariants> {
  /**
   * If true, shows the skeleton shimmer. If false, shows the children.
   */
  loading?: boolean;
  /**
   * Width of the skeleton.
   */
  width?: string | number;
  /**
   * Height of the skeleton.
   */
  height?: string | number;
  /**
   * Custom border radius.
   */
  borderRadius?: string | number;
}
