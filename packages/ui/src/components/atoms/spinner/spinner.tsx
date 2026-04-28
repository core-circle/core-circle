'use client';

import * as React from 'react';
import { cn } from '../../../utils/cn';
import { SpinnerProps } from '../../../interface/atoms/spinner/spinner.types';
import { spinnerVariants } from './spinner.styles';

const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  ({ className, variant, size, thickness, speed, style, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(spinnerVariants({ variant, size }), className)}
        style={{
          borderWidth: thickness,
          animationDuration: speed ? `${speed}s` : undefined,
          ...style,
        }}
        role="status"
        aria-label="loading"
        {...props}
      >
        <span className="sr-only">Loading...</span>
      </div>
    );
  }
);

Spinner.displayName = 'Spinner';

export { Spinner };
