'use client';

import * as React from 'react';
import { cn } from '../../../utils/cn';
import { LabelProps } from '../../../interface/atoms/label/label.types';
import { labelVariants } from './label.styles';

export const Label = React.forwardRef<HTMLElement, LabelProps>(
  (
    {
      className,
      size = 'sm',
      weight = 'medium',
      variant = 'default',
      uppercase = false,
      required = false,
      optional = false,
      helperIcon,
      badge,
      as: Component = 'label',
      children,
      ...props
    },
    ref
  ) => {
    return (
      <Component
        ref={ref as any}
        className={cn(labelVariants({ size, weight, variant, uppercase }), className)}
        {...(props as any)}
      >
        <span>{children}</span>

        {required && (
          <span className="text-red-500 font-bold ml-0.5" aria-hidden="true">
            *
          </span>
        )}

        {optional && (
          <span className="text-[11px] text-slate-400 font-normal ml-1">
            (Optional)
          </span>
        )}

        {badge && (
          <span className="ml-1.5 inline-flex items-center">
            {badge}
          </span>
        )}

        {helperIcon && (
          <span className="text-slate-400 hover:text-slate-600 transition-colors cursor-help inline-flex items-center ml-1">
            {helperIcon}
          </span>
        )}
      </Component>
    );
  }
);

Label.displayName = 'Label';

export default Label;
