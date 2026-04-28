import * as React from 'react';
import { cn } from '../../../utils/cn';
import { labelVariants } from './label.styles';
import { type VariantProps } from 'class-variance-authority';

export interface LabelProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof labelVariants> {
  as?: 'label' | 'span' | 'div';
  htmlFor?: string;
}

export const Label = React.forwardRef<HTMLElement, LabelProps>(
  ({ className, size, weight, variant, uppercase, as: Component = 'label', children, ...props }, ref) => {
    return (
      <Component
        ref={ref as any}
        className={cn(labelVariants({ size, weight, variant, uppercase, className }))}
        {...(props as any)}
      >
        {children}
      </Component>
    );
  }
);

Label.displayName = 'Label';

export default Label;
