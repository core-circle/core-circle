'use client';

import * as React from 'react';
import { cn } from '../../../utils/cn';
import { XIcon } from '@core-circle/icons';
import { BadgeProps } from '../../../interface/atoms/badge/badge.types';
import { badgeVariants, badgeRemoveButtonVariants } from './badge.styles';

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      shape = 'rounded',
      startIcon,
      endIcon,
      removable = false,
      onRemove,
      pulse = false,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <span
        ref={ref}
        className={cn(badgeVariants({ variant, size, shape, pulse }), className)}
        {...props}
      >
        {startIcon && (
          <span className="inline-flex shrink-0">
            {startIcon}
          </span>
        )}
        
        <span className="truncate">{children}</span>
        
        {endIcon && !removable && (
          <span className="inline-flex shrink-0">
            {endIcon}
          </span>
        )}
        
        {removable && (
          <button
            type="button"
            className={cn(badgeRemoveButtonVariants({ size }))}
            onClick={(e) => {
              e.stopPropagation();
              onRemove?.();
            }}
            aria-label="Remove"
          >
            <XIcon size={size === 'sm' ? 10 : size === 'lg' ? 14 : 12} />
          </button>
        )}
      </span>
    );
  }
);

Badge.displayName = 'Badge';
