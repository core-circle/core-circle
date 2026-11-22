'use client';

import * as React from 'react';
import { cn } from '../../../utils/cn';
import {
  FloatingActionProps,
  FabAction,
} from '../../../interface/atoms/floating-action/floating-action.types';
import {
  fabContainerVariants,
  fabTriggerVariants,
  fabActionsListVariants,
} from './floating-action.styles';
import { Plus } from '@core-circle/icons';

export const FloatingAction = React.forwardRef<HTMLDivElement, FloatingActionProps>(
  (
    {
      className,
      actions = [],
      position = 'bottom-right',
      fixed = true,
      direction = 'up',
      open: controlledOpen,
      defaultOpen = false,
      onOpenChange,
      icon,
      activeIcon,
      variant = 'primary',
      size = 'md',
      label,
      disabled = false,
      ...props
    },
    ref
  ) => {
    const [internalOpen, setInternalOpen] = React.useState<boolean>(defaultOpen);
    const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen;
    const containerRef = React.useRef<HTMLDivElement | null>(null);

    const toggleOpen = React.useCallback(() => {
      if (disabled) return;
      const next = !isOpen;
      if (controlledOpen === undefined) {
        setInternalOpen(next);
      }
      onOpenChange?.(next);
    }, [disabled, isOpen, controlledOpen, onOpenChange]);

    const handleClose = React.useCallback(() => {
      if (controlledOpen === undefined) {
        setInternalOpen(false);
      }
      onOpenChange?.(false);
    }, [controlledOpen, onOpenChange]);

    React.useEffect(() => {
      if (!isOpen) return;

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          handleClose();
        }
      };

      const handleClickOutside = (e: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
          handleClose();
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleClickOutside);

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [isOpen, handleClose]);

    // Forward ref merging
    const handleRef = React.useCallback(
      (node: HTMLDivElement | null) => {
        containerRef.current = node;
        if (typeof ref === 'function') {
          ref(node);
        } else if (ref) {
          (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
        }
      },
      [ref]
    );

    const defaultMainIcon = icon || <Plus size={size === 'sm' ? 16 : size === 'lg' ? 24 : 20} />;

    return (
      <div
        {...props}
        ref={handleRef}
        data-state={isOpen ? 'open' : 'closed'}
        className={cn(
          fabContainerVariants({ position, fixed, direction }),
          className
        )}
      >
        {/* Child Actions Speed-Dial */}
        {isOpen && actions.length > 0 && (
          <div
            role="menu"
            aria-orientation="vertical"
            className={cn(fabActionsListVariants({ direction }))}
          >
            {actions.map((action: FabAction, idx: number) => (
              <div
                key={action.id || idx}
                className="flex items-center gap-2 group animate-in fade-in zoom-in-75 duration-150"
              >
                {/* Horizontal label before or after depending on position */}
                {action.label && (direction === 'up' || direction === 'down') && (
                  <span className="px-2.5 py-1 text-xs font-medium rounded-core-circle-md bg-slate-900/90 text-white shadow-core-circle-subtle whitespace-nowrap pointer-events-none">
                    {action.label}
                  </span>
                )}
                <button
                  type="button"
                  disabled={action.disabled}
                  onClick={() => {
                    action.onClick?.();
                    handleClose();
                  }}
                  className={cn(
                    'w-10 h-10 rounded-full flex items-center justify-center shadow-core-circle-subtle transition-all duration-150 cursor-pointer',
                    'bg-white text-core-circle-text-main border border-core-circle-border-main hover:bg-slate-50 hover:scale-105 active:scale-95',
                    action.disabled && 'opacity-40 cursor-not-allowed pointer-events-none'
                  )}
                  aria-label={action.label}
                >
                  {action.icon}
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Primary Trigger Button */}
        <button
          type="button"
          disabled={disabled}
          aria-expanded={isOpen}
          onClick={toggleOpen}
          className={cn(
            fabTriggerVariants({ variant, size, disabled }),
            label && 'px-5 w-auto rounded-core-circle-full gap-2'
          )}
        >
          <span
            className={cn(
              'inline-flex items-center justify-center transition-transform duration-200',
              isOpen && !activeIcon && 'rotate-45'
            )}
          >
            {isOpen && activeIcon ? activeIcon : defaultMainIcon}
          </span>
          {label && <span className="font-semibold">{label}</span>}
        </button>
      </div>
    );
  }
);

FloatingAction.displayName = 'FloatingAction';
export default FloatingAction;
