import { forwardRef } from 'react';
import { cn } from '../../../utils/cn';
import { kbdVariants, type KbdProps } from './kbd.styles';

const Kbd = forwardRef<HTMLElement, KbdProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <kbd
        ref={ref}
        className={cn(kbdVariants({ variant, size }), className)}
        {...props}
      >
        {children}
      </kbd>
    );
  }
);

Kbd.displayName = 'Kbd';

export { Kbd };
