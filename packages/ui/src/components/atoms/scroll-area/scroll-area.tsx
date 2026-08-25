'use client';

import * as React from 'react';
import { cn } from '../../../utils/cn';
import { ScrollAreaProps } from '../../../interface/atoms/scroll-area/scroll-area.types';
import { scrollAreaVariants } from './scroll-area.styles';

export const ScrollArea = React.forwardRef<HTMLDivElement, ScrollAreaProps>(
  (
    {
      orientation = 'vertical',
      variant = 'default',
      maxHeight,
      maxWidth,
      hideScrollbar = false,
      children,
      className,
      style,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(scrollAreaVariants({ variant, orientation, hideScrollbar }), className)}
        style={{
          maxHeight: maxHeight,
          maxWidth: maxWidth,
          ...style,
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
);

ScrollArea.displayName = 'ScrollArea';
