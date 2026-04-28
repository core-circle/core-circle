'use client';

import * as React from 'react';
import { cn } from '../../../utils/cn';
import { SkeletonProps } from '../../../interface/atoms/skeleton/skeleton.types';
import { skeletonVariants } from './skeleton.styles';

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, variant, animation, width, height, borderRadius, loading = true, children, style, ...props }, ref) => {
    // If we have children and loading is false, just render the children
    if (children && !loading) {
      return <>{children}</>;
    }

    // If we have children and loading is true, we wrap the children to maintain dimensions
    if (children && loading) {
      return (
        <div 
          ref={ref}
          className={cn('relative inline-block overflow-hidden', className)}
          style={{ width, height, borderRadius, ...style }}
          {...props}
        >
          <div className="invisible pointer-events-none">
            {children}
          </div>
          <div className={cn(skeletonVariants({ animation }), "absolute inset-0")} />
        </div>
      );
    }

    // Default standalone skeleton
    return (
      <div
        ref={ref}
        className={cn(skeletonVariants({ variant, animation }), className)}
        style={{
          width,
          height,
          borderRadius,
          ...style,
        }}
        {...props}
      />
    );
  }
);

Skeleton.displayName = 'Skeleton';

export { Skeleton };
