'use client';

import * as React from 'react';
import { cn } from '../../../utils/cn';
import { PopoverProps } from '../../../interface/atoms/popover/popover.types';
import { popoverContentVariants, popoverArrowStyles } from './popover.styles';
import { XIcon } from '@core-circle/icons';

export const Popover: React.FC<PopoverProps> = ({
  trigger,
  children,
  title,
  description,
  icon,
  variant = 'card',
  size = 'md',
  position = 'bottom',
  align = 'center',
  showArrow = false,
  showClose = false,
  open: controlledOpen,
  defaultOpen = false,
  onOpenChange,
  className,
  triggerClassName,
}) => {
  const [internalOpen, setInternalOpen] = React.useState(defaultOpen);
  const isControlled = controlledOpen !== undefined;
  const isOpen = isControlled ? controlledOpen : internalOpen;

  const popoverRef = React.useRef<HTMLDivElement>(null);
  const triggerRef = React.useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    const nextState = !isOpen;
    if (!isControlled) {
      setInternalOpen(nextState);
    }
    onOpenChange?.(nextState);
  };

  const handleClose = React.useCallback(() => {
    if (!isControlled) {
      setInternalOpen(false);
    }
    onOpenChange?.(false);
  }, [isControlled, onOpenChange]);

  // Close on outside click
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        triggerRef.current &&
        !popoverRef.current.contains(event.target as Node) &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, handleClose]);

  // Close on Escape key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleClose]);

  // Position classes
  const getPositionClasses = () => {
    switch (position) {
      case 'top':
        return 'bottom-full mb-2.5';
      case 'bottom':
        return 'top-full mt-2.5';
      case 'left':
        return 'right-full mr-2.5 top-1/2 -translate-y-1/2';
      case 'right':
        return 'left-full ml-2.5 top-1/2 -translate-y-1/2';
      default:
        return 'top-full mt-2.5';
    }
  };

  const getAlignClasses = () => {
    if (position === 'left' || position === 'right') return '';
    switch (align) {
      case 'start':
        return 'left-0';
      case 'end':
        return 'right-0';
      case 'center':
      default:
        return 'left-1/2 -translate-x-1/2';
    }
  };

  return (
    <div className="relative inline-flex">
      {/* Trigger */}
      <div
        ref={triggerRef}
        onClick={handleToggle}
        className={cn('inline-flex cursor-pointer select-none', triggerClassName)}
      >
        {trigger}
      </div>

      {/* Popover Content */}
      {isOpen && (
        <div
          ref={popoverRef}
          className={cn(
            'absolute',
            getPositionClasses(),
            getAlignClasses(),
            popoverContentVariants({ variant, size }),
            className
          )}
        >
          {/* Header (Title, Subtitle & Close Action) */}
          {(title || description || icon || showClose) && (
            <div className="flex items-start justify-between gap-3 border-b border-core-circle-border-main/50 pb-2.5">
              <div className="flex items-start gap-2.5 min-w-0">
                {icon && <span className="text-core-circle-primary shrink-0 mt-0.5">{icon}</span>}
                <div className="flex flex-col min-w-0">
                  {title && (
                    <h4 className="text-xs font-core-circle-bold text-slate-900 tracking-tight leading-snug">
                      {title}
                    </h4>
                  )}
                  {description && (
                    <p className="text-[11px] text-slate-500 leading-tight mt-0.5">
                      {description}
                    </p>
                  )}
                </div>
              </div>

              {showClose && (
                <button
                  type="button"
                  onClick={handleClose}
                  className="rounded-full p-1 text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer shrink-0"
                  aria-label="Close Popover"
                >
                  <XIcon size={14} />
                </button>
              )}
            </div>
          )}

          {/* Body Content */}
          <div className="flex flex-col gap-2">{children}</div>

          {/* Optional Arrow */}
          {showArrow && (
            <div
              className={cn(
                'absolute h-2.5 w-2.5 rotate-45 border bg-white',
                popoverArrowStyles,
                position === 'bottom' && '-top-1.5 left-1/2 -translate-x-1/2 border-b-0 border-r-0',
                position === 'top' && '-bottom-1.5 left-1/2 -translate-x-1/2 border-t-0 border-l-0',
                position === 'left' && '-right-1.5 top-1/2 -translate-y-1/2 border-l-0 border-b-0',
                position === 'right' && '-left-1.5 top-1/2 -translate-y-1/2 border-r-0 border-t-0'
              )}
            />
          )}
        </div>
      )}
    </div>
  );
};

Popover.displayName = 'Popover';

export default Popover;
