'use client';

import * as React from 'react';
import { cn } from '../../../utils/cn';
import { XIcon } from '@core-circle/icons';
import { BadgeProps } from '../../../interface/atoms/badge/badge.types';
import { badgeVariants, badgeRemoveButtonVariants } from './badge.styles';
import { Button } from '../button/button';

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      shape = 'rounded',
      dot = false,
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
    const showDot = dot || variant === 'dot';

    return (
      <span
        ref={ref}
        className={cn(badgeVariants({ variant, size, shape, pulse }), className)}
        {...props}
      >
        {showDot && (
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-core-circle-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-core-circle-primary" />
          </span>
        )}

        {startIcon && !showDot && (
          <span className="inline-flex shrink-0">
            {startIcon}
          </span>
        )}
        
        {children && <span className="truncate">{children}</span>}
        
        {endIcon && !removable && (
          <span className="inline-flex shrink-0">
            {endIcon}
          </span>
        )}
        
        {removable && (
          <Button
            variant="ghost"
            className={cn(badgeRemoveButtonVariants({ size }))}
            onClick={(e) => {
              e.stopPropagation();
              onRemove?.();
            }}
            aria-label="Remove badge"
          >
            <XIcon size={size === 'sm' ? 10 : size === 'lg' ? 14 : 12} />
          </Button>
        )}
      </span>
    );
  }
);

Badge.displayName = 'Badge';
