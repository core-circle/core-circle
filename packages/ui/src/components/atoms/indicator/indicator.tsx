'use client';

import { forwardRef } from 'react';
import { cn } from '../../../utils/cn';
import { IndicatorProps } from '../../../interface/atoms/indicator/indicator.types';
import { indicatorBadgeVariants } from './indicator.styles';

export const Indicator = forwardRef<HTMLDivElement, IndicatorProps>(
  (
    {
      className,
      wrapperClassName,
      variant = 'primary',
      size = 'md',
      position = 'top-right',
      shape = 'circle',
      pulse = false,
      standalone = false,
      content,
      count,
      max = 99,
      children,
      show = true,
      ringColor,
      style,
      ...props
    },
    ref
  ) => {
    if (!show) return <>{children}</>;

    const displayContent = count !== undefined
      ? count > max ? `${max}+` : count
      : content;

    const isDot = (size === 'xs' || size === 'sm') && !displayContent;

    const badgeElement = (
      <div
        ref={ref}
        className={cn(
          indicatorBadgeVariants({ 
            variant, 
            size, 
            position: (standalone || !children) ? undefined : position, 
            shape: isDot ? 'circle' : (shape === 'circle' && typeof displayContent === 'string' && displayContent.length > 2) ? 'pill' : shape, 
            pulse,
            standalone: standalone || !children
          }),
          ringColor,
          className
        )}
        style={style}
        {...props}
      >
        {displayContent}
      </div>
    );

    if (standalone || !children) {
      return badgeElement;
    }

    return (
      <div className={cn('relative inline-flex items-center justify-center align-middle', wrapperClassName)}>
        {children}
        {badgeElement}
      </div>
    );
  }
);

Indicator.displayName = 'Indicator';

export default Indicator;
