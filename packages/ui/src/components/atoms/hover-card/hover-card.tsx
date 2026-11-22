'use client';

import * as React from 'react';
import { cn } from '../../../utils/cn';
import { HoverCardProps, HoverCardPosition } from '../../../interface/atoms/hover-card/hover-card.types';
import { hoverCardContentVariants } from './hover-card.styles';

const positionClasses: Record<HoverCardPosition, string> = {
  top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
  bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
  left: 'right-full top-1/2 -translate-y-1/2 mr-2',
  right: 'left-full top-1/2 -translate-y-1/2 ml-2',
  'top-start': 'bottom-full left-0 mb-2',
  'top-end': 'bottom-full right-0 mb-2',
  'bottom-start': 'top-full left-0 mt-2',
  'bottom-end': 'top-full right-0 mt-2',
};

export const HoverCard = React.forwardRef<HTMLDivElement, HoverCardProps>(
  (
    {
      trigger,
      children,
      variant = 'card',
      position = 'bottom',
      size = 'md',
      openDelay = 200,
      closeDelay = 150,
      disabled = false,
      className,
      contentClassName,
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const openTimeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);
    const closeTimeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

    const clearTimers = React.useCallback(() => {
      if (openTimeoutRef.current) {
        clearTimeout(openTimeoutRef.current);
        openTimeoutRef.current = null;
      }
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
        closeTimeoutRef.current = null;
      }
    }, []);

    const handleMouseEnter = React.useCallback(() => {
      if (disabled) return;
      clearTimers();
      openTimeoutRef.current = setTimeout(() => {
        setIsOpen(true);
      }, openDelay);
    }, [disabled, clearTimers, openDelay]);

    const handleMouseLeave = React.useCallback(() => {
      clearTimers();
      closeTimeoutRef.current = setTimeout(() => {
        setIsOpen(false);
      }, closeDelay);
    }, [clearTimers, closeDelay]);

    const handleFocus = React.useCallback(() => {
      if (disabled) return;
      clearTimers();
      setIsOpen(true);
    }, [disabled, clearTimers]);

    const handleBlur = React.useCallback(() => {
      clearTimers();
      setIsOpen(false);
    }, [clearTimers]);

    const handleKeyDown = React.useCallback(
      (e: React.KeyboardEvent) => {
        if (e.key === 'Escape' && isOpen) {
          clearTimers();
          setIsOpen(false);
        }
      },
      [isOpen, clearTimers]
    );

    React.useEffect(() => {
      return () => {
        clearTimers();
      };
    }, [clearTimers]);

    return (
      <div
        ref={ref}
        className={cn('relative inline-flex', className)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
      >
        <div
          role="button"
          tabIndex={0}
          aria-haspopup="dialog"
          aria-expanded={isOpen}
          className="inline-flex cursor-pointer select-none"
        >
          {trigger}
        </div>

        {isOpen && (
          <div
            role="dialog"
            aria-modal="false"
            className={cn(
              hoverCardContentVariants({ variant, size }),
              positionClasses[position],
              contentClassName
            )}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {children}
          </div>
        )}
      </div>
    );
  }
);

HoverCard.displayName = 'HoverCard';

export default HoverCard;
