'use client';

import * as React from 'react';
import { cn } from '../../../utils/cn';
import {
  CollapsibleProps,
  CollapsibleTriggerProps,
  CollapsibleContentProps,
} from '../../../interface/atoms/collapsible/collapsible.types';
import { collapsibleContainerVariants } from './collapsible.styles';

interface CollapsibleContextValue {
  isOpen: boolean;
  toggle: () => void;
  disabled?: boolean;
  unmountOnExit?: boolean;
}

const CollapsibleContext = React.createContext<CollapsibleContextValue | null>(null);

function useCollapsible() {
  const ctx = React.useContext(CollapsibleContext);
  if (!ctx) {
    throw new Error('Collapsible compound components must be used within <Collapsible>');
  }
  return ctx;
}

const CollapsibleTrigger = React.forwardRef<HTMLButtonElement, CollapsibleTriggerProps>(
  ({ className, children, onClick, ...props }, ref) => {
    const { isOpen, toggle, disabled } = useCollapsible();

    return (
      <button
        {...props}
        ref={ref}
        type="button"
        disabled={disabled}
        aria-expanded={isOpen}
        onClick={(e) => {
          onClick?.(e);
          toggle();
        }}
        className={cn(
          'w-full flex items-center justify-between text-left transition-colors cursor-pointer',
          disabled && 'opacity-50 cursor-not-allowed',
          className
        )}
      >
        {children}
      </button>
    );
  }
);
CollapsibleTrigger.displayName = 'CollapsibleTrigger';

const CollapsibleContent = React.forwardRef<HTMLDivElement, CollapsibleContentProps>(
  ({ className, children, ...props }, ref) => {
    const { isOpen, unmountOnExit } = useCollapsible();

    if (unmountOnExit && !isOpen) return null;

    return (
      <div
        {...props}
        ref={ref}
        data-state={isOpen ? 'open' : 'closed'}
        className={cn(
          'grid transition-all duration-300 ease-in-out',
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
          className
        )}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
    );
  }
);
CollapsibleContent.displayName = 'CollapsibleContent';

const CollapsibleRoot = React.forwardRef<HTMLDivElement, CollapsibleProps>(
  (
    {
      className,
      open: controlledOpen,
      defaultOpen = false,
      onOpenChange,
      disabled = false,
      unmountOnExit = false,
      variant = 'default',
      children,
      ...props
    },
    ref
  ) => {
    const [internalOpen, setInternalOpen] = React.useState<boolean>(defaultOpen);
    const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen;

    const toggle = React.useCallback(() => {
      if (disabled) return;
      const next = !isOpen;
      if (controlledOpen === undefined) setInternalOpen(next);
      onOpenChange?.(next);
    }, [disabled, isOpen, controlledOpen, onOpenChange]);

    const contextValue = React.useMemo(
      () => ({
        isOpen,
        toggle,
        disabled,
        unmountOnExit,
      }),
      [isOpen, toggle, disabled, unmountOnExit]
    );

    return (
      <CollapsibleContext.Provider value={contextValue}>
        <div
          {...props}
          ref={ref}
          data-state={isOpen ? 'open' : 'closed'}
          className={cn(collapsibleContainerVariants({ variant }), className)}
        >
          {children}
        </div>
      </CollapsibleContext.Provider>
    );
  }
);

CollapsibleRoot.displayName = 'Collapsible';

export const Collapsible = Object.assign(CollapsibleRoot, {
  Trigger: CollapsibleTrigger,
  Content: CollapsibleContent,
});

export default Collapsible;
