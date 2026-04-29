import * as React from 'react';
import { cn } from '../../../utils/cn';
import { TypographyProps } from '../../../interface/atoms/typography/typography.types';
import { typographyVariants } from './typography.styles';

export const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant = 'p', weight, align, italic, underline, as, children, ...props }, ref) => {
    const Component = as || (variant === 'lead' || variant === 'large' || variant === 'muted' ? 'p' : variant) || 'p';

    return (
      <Component
        ref={ref}
        className={cn(typographyVariants({ variant, weight, align, italic, underline, className }))}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Typography.displayName = 'Typography';
