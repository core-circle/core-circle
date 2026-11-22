'use client';

import * as React from 'react';
import { cn } from '../../../utils/cn';
import { StatProps } from '../../../interface/atoms/stat/stat.types';
import {
  statContainerVariants,
  statValueVariants,
  statLabelVariants,
  statDescriptionVariants,
  statIconWrapperVariants,
} from './stat.styles';

export const Stat = React.forwardRef<HTMLDivElement, StatProps>(
  (
    {
      label,
      value,
      description,
      trend,
      icon,
      badge,
      footer,
      variant = 'card',
      size = 'md',
      orientation = 'vertical',
      className,
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          statContainerVariants({ variant, size, orientation }),
          className
        )}
      >
        {/* Top Header Row (Label + Icon/Badge) */}
        <div className="flex items-center justify-between w-full gap-2">
          <span className={cn(statLabelVariants({ variant, size }))}>{label}</span>
          <div className="flex items-center gap-2 shrink-0">
            {badge && <span>{badge}</span>}
            {icon && (
              <span className={cn(statIconWrapperVariants({ variant }))}>
                {icon}
              </span>
            )}
          </div>
        </div>

        {/* Center Metric & Trend Row */}
        <div className="flex flex-col gap-1.5 w-full">
          <div className="flex items-baseline gap-3 flex-wrap">
            <span className={cn(statValueVariants({ variant, size }))}>{value}</span>
            {trend && <span className="inline-flex shrink-0">{trend}</span>}
          </div>

          {description && (
            <p className={cn(statDescriptionVariants({ variant, size }))}>
              {description}
            </p>
          )}
        </div>

        {/* Optional Footer Slot */}
        {footer && (
          <div
            className={cn(
              'w-full pt-2 border-t',
              variant === 'dark'
                ? 'border-slate-800 text-slate-400'
                : 'border-slate-100 text-slate-500'
            )}
          >
            {footer}
          </div>
        )}
      </div>
    );
  }
);

Stat.displayName = 'Stat';

export default Stat;
