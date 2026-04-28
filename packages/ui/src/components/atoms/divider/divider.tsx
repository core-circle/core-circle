'use client';

import * as React from 'react';
import { cn } from '../../../utils/cn';
import { DividerProps } from '../../../interface/atoms/divider/divider.types';
import { dividerVariants } from './divider.styles';

const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  ({ className, orientation, variant, thickness, children, ...props }, ref) => {
    const hasChildren = !!children && orientation === 'horizontal';

    if (hasChildren) {
      return (
        <div
          ref={ref}
          role="separator"
          aria-orientation={orientation || undefined}
          className={cn(
            'flex items-center w-full my-4',
            className
          )}
          {...props}
        >
          <div className={cn(dividerVariants({ orientation, variant, thickness }), 'flex-1 border-b-0 border-t')} />
          <span className="mx-4 text-xs font-core-circle-medium text-core-circle-text-muted whitespace-nowrap uppercase tracking-wider">
            {children}
          </span>
          <div className={cn(dividerVariants({ orientation, variant, thickness }), 'flex-1 border-b-0 border-t')} />
        </div>
      );
    }

    return (
      <div
        ref={ref}
        role="separator"
        aria-orientation={orientation || undefined}
        className={cn(dividerVariants({ orientation, variant, thickness }), className)}
        {...props}
      />
    );
  }
);

Divider.displayName = 'Divider';

export { Divider };
