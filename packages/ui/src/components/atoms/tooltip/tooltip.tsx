'use client';

import * as React from 'react';
import { cn } from '../../../utils/cn';
import { TooltipProps } from '../../../interface/atoms/tooltip/tooltip.types';
import { tooltipVariants } from './tooltip.styles';
import { Info, XIcon } from '@core-circle/icons';

export const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  (
    {
      className,
      title,
      description,
      icon,
      trigger = 'click',
      variant,
      position = 'top',
      isOpen: controlledOpen,
      onOpenChange,
      showCloseIcon = true,
      ...props
    },
    ref
  ) => {
    const [uncontrolledOpen, setUncontrolledOpen] = React.useState(false);
    const isOpen = controlledOpen !== undefined ? controlledOpen : uncontrolledOpen;

    const setOpen = (open: boolean) => {
      if (controlledOpen === undefined) {
        setUncontrolledOpen(open);
      }
      onOpenChange?.(open);
    };

    const handleToggle = () => {
      if (trigger === 'click') {
        setOpen(!isOpen);
      }
    };

    const handleMouseEnter = () => {
      if (trigger === 'hover') {
        setOpen(true);
      }
    };

    const handleMouseLeave = () => {
      if (trigger === 'hover') {
        setOpen(false);
      }
    };

    const triggerIcon = icon || <Info className="text-core-circle-primary cursor-pointer" size={20} />;

    return (
      <div 
        className="relative inline-block" 
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}
      >
        <div onClick={handleToggle} className="flex items-center justify-center">
          {triggerIcon}
        </div>

        <div
          ref={ref}
          className={cn(tooltipVariants({ variant, position, isOpen }), className)}
          {...props}
        >
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between gap-4">
              <h4 className="text-sm font-core-circle-bold text-core-circle-text-main m-0">
                {title}
              </h4>
              {showCloseIcon && trigger === 'click' && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpen(false);
                  }}
                  className="text-core-circle-text-subtle hover:text-core-circle-text-main transition-colors"
                >
                  <XIcon size={16} />
                </button>
              )}
            </div>
            <p className="text-xs text-core-circle-text-muted m-0 leading-relaxed">
              {description}
            </p>
          </div>
          
          {/* Arrow */}
          <div 
            className={cn(
              "absolute w-2 h-2 bg-white border border-core-circle-border-main rotate-45 z-[-1]",
              position === 'top' && "bottom-[-5px] left-1/2 -translate-x-1/2 border-t-0 border-l-0",
              position === 'bottom' && "top-[-5px] left-1/2 -translate-x-1/2 border-b-0 border-r-0",
              position === 'left' && "right-[-5px] top-1/2 -translate-y-1/2 border-b-0 border-l-0",
              position === 'right' && "left-[-5px] top-1/2 -translate-y-1/2 border-t-0 border-r-0",
            )}
          />
        </div>
      </div>
    );
  }
);

Tooltip.displayName = 'Tooltip';
