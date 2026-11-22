'use client';

import * as React from 'react';
import { cn } from '../../../utils/cn';
import { EmptyStateProps } from '../../../interface/atoms/empty-state/empty-state.types';
import {
  emptyStateContainerVariants,
  emptyStateIconVariants,
} from './empty-state.styles';

export const EmptyState = React.forwardRef<HTMLDivElement, EmptyStateProps>(
  (
    {
      title,
      description,
      icon,
      action,
      secondaryAction,
      variant = 'default',
      size = 'md',
      className,
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(emptyStateContainerVariants({ variant, size }), className)}
      >
        {/* Central Icon Illustration */}
        {icon && (
          <div className={cn(emptyStateIconVariants({ variant, size }))}>
            {icon}
          </div>
        )}

        {/* Text Area */}
        <div className="flex flex-col gap-1.5 max-w-sm">
          <h3
            className={cn(
              'font-bold tracking-tight text-slate-900 leading-snug',
              size === 'sm' && 'text-sm font-semibold',
              size === 'md' && 'text-base font-bold',
              size === 'lg' && 'text-lg font-bold'
            )}
          >
            {title}
          </h3>

          {description && (
            <p
              className={cn(
                'text-slate-500 font-normal leading-relaxed',
                size === 'sm' && 'text-xs',
                size === 'md' && 'text-sm',
                size === 'lg' && 'text-base'
              )}
            >
              {description}
            </p>
          )}
        </div>

        {/* Call-to-Action Buttons */}
        {(action || secondaryAction) && (
          <div className="flex items-center justify-center gap-3 mt-2 flex-wrap">
            {action}
            {secondaryAction}
          </div>
        )}
      </div>
    );
  }
);

EmptyState.displayName = 'EmptyState';

export default EmptyState;
