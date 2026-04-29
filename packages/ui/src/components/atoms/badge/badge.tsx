'use client';

import * as React from 'react';
import { cn } from '../../../utils/cn';
import { XIcon } from '@core-circle/icons';
import { BadgeProps } from '../../../interface/atoms/badge/badge.types';
import { badgeVariants, badgeRemoveButtonVariants } from './badge.styles';
import { Typography } from '../typography/typography';
import { Button } from '../button/button';

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
      <Typography
        as="span"
        ref={ref as any}
        className={cn(badgeVariants({ variant, size, shape, pulse }), className)}
        {...props}
      >
        {startIcon && (
          <Typography as="span" className="inline-flex shrink-0">
            {startIcon}
          </Typography>
        )}
        
        <Typography variant="span" className="truncate">{children}</Typography>
        
        {endIcon && !removable && (
          <Typography as="span" className="inline-flex shrink-0">
            {endIcon}
          </Typography>
        )}
        
        {removable && (
          <Button
            variant="ghost"
            className={cn(badgeRemoveButtonVariants({ size }))}
            onClick={(e) => {
              e.stopPropagation();
              onRemove?.();
            }}
            aria-label="Remove"
          >
            <XIcon size={size === 'sm' ? 10 : size === 'lg' ? 14 : 12} />
          </Button>
        )}
      </Typography>
    );
  }
);

Badge.displayName = 'Badge';
