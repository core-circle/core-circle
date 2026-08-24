'use client';

import * as React from 'react';
import { cn } from '../../../utils/cn';
import { DividerProps } from '../../../interface/atoms/divider/divider.types';
import { dividerVariants } from './divider.styles';

const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  (
    {
      className,
      orientation = 'horizontal',
      variant = 'solid',
      thickness = 'sm',
      align = 'center',
      children,
      ...props
    },
    ref
  ) => {
    const hasChildren = !!children && orientation === 'horizontal';

    if (hasChildren) {
      return (
        <div
          ref={ref}
          role="separator"
          aria-orientation={orientation}
          className={cn('flex items-center w-full my-4 gap-4', className)}
          {...props}
        >
          {align !== 'start' && (
            <div className={cn(dividerVariants({ orientation, variant, thickness }), align === 'end' ? 'flex-1' : 'flex-1')} />
          )}
          <span className="text-xs font-core-circle-bold text-core-circle-text-muted whitespace-nowrap tracking-wider uppercase">
            {children}
          </span>
          {align !== 'end' && (
            <div className={cn(dividerVariants({ orientation, variant, thickness }), align === 'start' ? 'flex-1' : 'flex-1')} />
          )}
        </div>
      );
    }

    return (
      <div
        ref={ref}
        role="separator"
        aria-orientation={orientation}
        className={cn(dividerVariants({ orientation, variant, thickness, align }), className)}
        {...props}
      />
    );
  }
);

Divider.displayName = 'Divider';

export { Divider };
