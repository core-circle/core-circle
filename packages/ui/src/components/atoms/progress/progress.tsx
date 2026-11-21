'use client';

import * as React from 'react';
import { cn } from '../../../utils/cn';
import { ProgressProps } from '../../../interface/atoms/progress/progress.types';
import {
  progressContainerVariants,
  progressIndicatorVariants,
  progressLabelVariants,
} from './progress.styles';

export const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  (
    {
      value = 0,
      max = 100,
      variant = 'primary',
      size = 'md',
      shape = 'pill',
      striped = false,
      showLabel = false,
      labelPosition = 'outside-end',
      label,
      animate = true,
      indeterminate = false,
      className,
      barClassName,
      ...props
    },
    ref
  ) => {
    // Calculate percentage, clamped between 0 and 100
    const percentage = indeterminate 
      ? 100 
      : Math.min(Math.max(0, (value / max) * 100), 100);

    const renderLabel = () => {
      if (!showLabel) return null;
      
      const labelContent = label !== undefined ? label : `${Math.round(percentage)}%`;
      
      return (
        <span className={cn(progressLabelVariants({ position: labelPosition, size }))}>
          {labelContent}
        </span>
      );
    };

    return (
      <div className={cn("w-full flex flex-col", className)}>
        {showLabel && labelPosition === 'outside-top' && renderLabel()}
        
        <div className="flex items-center w-full">
          <div
            ref={ref}
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={max}
            aria-valuenow={indeterminate ? undefined : value}
            className={cn(progressContainerVariants({ variant, size, shape }))}
            {...props}
          >
            <div
              className={cn(
                progressIndicatorVariants({ variant, shape, indeterminate, striped }),
                !animate && 'transition-none',
                barClassName
              )}
              style={{
                width: indeterminate ? '100%' : `${percentage}%`,
              }}
            >
              {showLabel && labelPosition === 'inside' && renderLabel()}
            </div>
          </div>
          
          {showLabel && labelPosition === 'outside-end' && renderLabel()}
        </div>
      </div>
    );
  }
);

Progress.displayName = 'Progress';
