'use client';

import * as React from 'react';
import { cn } from '../../../utils/cn';
import { AspectRatioProps, AspectRatioPreset } from '../../../interface/atoms/aspect-ratio/aspect-ratio.types';
import { aspectRatioVariants } from './aspect-ratio.styles';

const PRESET_MAP: Record<AspectRatioPreset, number> = {
  '16:9': 16 / 9,
  '4:3': 4 / 3,
  '1:1': 1,
  '21:9': 21 / 9,
  '9:16': 9 / 16,
  '3:2': 3 / 2,
  '2:3': 2 / 3,
  '3:4': 3 / 4,
};

export const AspectRatio = React.forwardRef<HTMLDivElement, AspectRatioProps>(
  ({ ratio = '16:9', variant = 'default', children, className, style, ...props }, ref) => {
    const numericRatio = typeof ratio === 'string' ? (PRESET_MAP[ratio] || 16 / 9) : ratio;
    const paddingPercentage = `${(1 / numericRatio) * 100}%`;

    return (
      <div
        ref={ref}
        className={cn(aspectRatioVariants({ variant }), className)}
        style={style}
        {...props}
      >
        <div style={{ paddingBottom: paddingPercentage }} className="w-full" />
        <div className="absolute inset-0 h-full w-full [&>img]:h-full [&>img]:w-full [&>img]:object-cover [&>video]:h-full [&>video]:w-full [&>video]:object-cover [&>iframe]:h-full [&>iframe]:w-full">
          {children}
        </div>
      </div>
    );
  }
);

AspectRatio.displayName = 'AspectRatio';
