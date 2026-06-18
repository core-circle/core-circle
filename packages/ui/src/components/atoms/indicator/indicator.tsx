import { forwardRef } from 'react';
import { cn } from '../../../utils/cn';
import { indicatorVariants, type IndicatorProps } from './indicator.styles';

const Indicator = forwardRef<HTMLDivElement, IndicatorProps>(
  ({ className, variant, size, position, pulse, content, children, show = true, ...props }, ref) => {
    if (!show) return <>{children}</>;

    return (
      <div className="relative inline-flex align-middle">
        {children}
        <div
          ref={ref}
          className={cn(indicatorVariants({ variant, size, position, pulse }), className)}
          {...props}
        >
          {content}
        </div>
      </div>
    );
  }
);

Indicator.displayName = 'Indicator';

export { Indicator };
