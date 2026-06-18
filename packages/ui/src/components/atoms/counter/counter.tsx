import { forwardRef } from 'react';
import { cn } from '../../../utils/cn';
import { counterVariants, type CounterProps } from './counter.styles';

const Counter = forwardRef<HTMLSpanElement, CounterProps>(
  ({ className, variant, size, count, max, showZero = false, ...props }, ref) => {
    if (count === 0 && !showZero) return null;

    const displayCount = max && count > max ? `${max}+` : count;

    return (
      <span
        ref={ref}
        className={cn(counterVariants({ variant, size }), className)}
        {...props}
      >
        {displayCount}
      </span>
    );
  }
);

Counter.displayName = 'Counter';

export { Counter };
