'use client';

import * as React from 'react';
import { cn } from '../../../utils/cn';
import { AspectRatioProps } from '../../../interface/atoms/aspect-ratio/aspect-ratio.types';

const AspectRatio = React.forwardRef<HTMLDivElement, AspectRatioProps>(
  ({ className, ratio = 16 / 9, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('relative w-full', className)}
        style={{
          paddingBottom: `${100 / ratio}%`,
        }}
        {...props}
      >
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-inherit">
          {children}
        </div>
      </div>
    );
  }
);

AspectRatio.displayName = 'AspectRatio';

export { AspectRatio };
