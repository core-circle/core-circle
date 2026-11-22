'use client';

import * as React from 'react';
import { cn } from '../../../utils/cn';
import { PulseDotProps } from '../../../interface/atoms/pulse-dot/pulse-dot.types';
import {
  pulseDotSizeVariants,
  pulseDotColorVariants,
  pulseDotPingVariants,
} from './pulse-dot.styles';

export const PulseDot = React.forwardRef<HTMLSpanElement, PulseDotProps>(
  (
    {
      status = 'online',
      size = 'sm',
      ping = true,
      label,
      labelPlacement = 'right',
      colorClass,
      className,
    },
    ref
  ) => {
    const sizeClasses = pulseDotSizeVariants({ size });
    const isPingActive = ping && status !== 'offline';

    const dotElement = (
      <span className={cn('relative inline-flex items-center justify-center shrink-0', sizeClasses)}>
        {isPingActive && (
          <span
            className={cn(
              pulseDotPingVariants({ status }),
              colorClass && 'bg-current opacity-75'
            )}
          />
        )}
        <span
          className={cn(
            'relative inline-flex rounded-full w-full h-full shrink-0',
            pulseDotColorVariants({ status }),
            colorClass
          )}
        />
      </span>
    );

    if (!label) {
      return (
        <span ref={ref} className={cn('inline-flex items-center', className)}>
          {dotElement}
        </span>
      );
    }

    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center gap-2 select-none text-slate-700 font-medium',
          size === 'xs' && 'text-[11px]',
          size === 'sm' && 'text-xs',
          size === 'md' && 'text-sm',
          size === 'lg' && 'text-base',
          className
        )}
      >
        {labelPlacement === 'left' && <span>{label}</span>}
        {dotElement}
        {labelPlacement === 'right' && <span>{label}</span>}
      </span>
    );
  }
);

PulseDot.displayName = 'PulseDot';

export default PulseDot;
