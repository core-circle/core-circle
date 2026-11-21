'use client';

import * as React from 'react';
import { cn } from '../../../utils/cn';
import { AccordionProps } from '../../../interface/atoms/accordion/accordion.types';
import { 
  accordionVariants, 
  accordionItemVariants, 
  accordionTriggerVariants, 
  accordionContentVariants 
} from './accordion.styles';
import { ChevronDown } from '@core-circle/icons';

export const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  (
    {
      className,
      items = [],
      type = 'single',
      collapsible = true,
      variant = 'bordered',
      size = 'md',
      defaultValue,
      value,
      onChange,
      fullWidth = true,
      id,
      expandIcon,
      collapseIcon,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId();
    const accordionId = id || generatedId;

    const [internalValue, setInternalValue] = React.useState<string | string[]>(
      defaultValue || (type === 'multiple' ? [] : '')
    );

    React.useEffect(() => {
      if (defaultValue === undefined && value === undefined) {
        setInternalValue(type === 'multiple' ? [] : '');
      }
    }, [type, defaultValue, value]);

    const activeValue = value !== undefined ? value : internalValue;

    const handleToggle = (itemId: string) => {
      let newValue: string | string[];

      if (type === 'single') {
        if (activeValue === itemId) {
          newValue = collapsible ? '' : itemId;
        } else {
          newValue = itemId;
        }
      } else {
        const currentArray = Array.isArray(activeValue) ? activeValue : [activeValue].filter(Boolean);
        newValue = currentArray.includes(itemId)
          ? currentArray.filter((v) => v !== itemId)
          : [...currentArray, itemId];
      }

      if (value === undefined) {
        setInternalValue(newValue);
      }
      onChange?.(newValue);
    };

    const isItemOpen = (itemId: string) => {
      if (type === 'single') {
        return activeValue === itemId;
      }
      return Array.isArray(activeValue) ? activeValue.includes(itemId) : activeValue === itemId;
    };

    return (
      <div
        ref={ref}
        id={accordionId}
        className={cn(accordionVariants({ variant }), !fullWidth && 'w-fit', className)}
        {...props}
      >
        {items.map((item) => {
          const isOpen = isItemOpen(item.id);
          const isDisabled = item.disabled;

          const itemExpandIcon = item.expandIcon || expandIcon;
          const itemCollapseIcon = item.collapseIcon || collapseIcon;
          const hasDynamicIcon = typeof itemExpandIcon === 'function' || Boolean(itemCollapseIcon);

          const renderedIcon = typeof itemExpandIcon === 'function'
            ? itemExpandIcon(isOpen)
            : (isOpen && itemCollapseIcon)
              ? itemCollapseIcon
              : (itemExpandIcon || <ChevronDown size={size === 'sm' ? 14 : size === 'lg' ? 20 : 18} />);

          return (
            <div
              key={item.id}
              className={cn(accordionItemVariants({ variant, isOpen, disabled: isDisabled }))}
            >
              {/* Vertical accent line - only for bordered variant */}
              {variant === 'bordered' && (
                <div 
                  className={cn(
                    "absolute left-0 top-0 bottom-0 w-1 transition-all duration-500 origin-top bg-core-circle-primary z-20",
                    isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
                  )}
                />
              )}

              <button
                type="button"
                disabled={isDisabled}
                onClick={() => handleToggle(item.id)}
                aria-expanded={isOpen}
                className={cn(
                  accordionTriggerVariants({ size, isOpen, variant }),
                  "cursor-pointer"
                )}
              >
                <div className="flex-1 flex items-center gap-3 min-w-0 mr-4">
                  {(item.startIcon || item.icon) && (
                    <span className="shrink-0 text-core-circle-primary/80">
                      {item.startIcon || item.icon}
                    </span>
                  )}
                  <div className="flex-1 min-w-0 text-left font-core-circle-bold tracking-tight">
                    {item.title}
                  </div>
                  {item.endIcon && (
                    <span className="shrink-0 text-core-circle-text-muted/60">
                      {item.endIcon}
                    </span>
                  )}
                </div>

                {/* Chevron Toggle Icon Container */}
                {variant === 'minimal' ? (
                  <div className={cn(
                    "transition-transform duration-300 shrink-0",
                    !hasDynamicIcon && isOpen ? "rotate-180 text-core-circle-primary" : "text-core-circle-text-muted"
                  )}>
                    {renderedIcon}
                  </div>
                ) : (
                  <div
                    className={cn(
                      "flex items-center justify-center rounded-full transition-all duration-500 shrink-0",
                      isOpen ? "bg-core-circle-primary text-white shadow-sm" : "bg-core-circle-bg-page text-core-circle-text-muted",
                      !hasDynamicIcon && isOpen && "rotate-180"
                    )}
                    style={{
                      width: size === 'sm' ? 24 : size === 'lg' ? 32 : 28,
                      height: size === 'sm' ? 24 : size === 'lg' ? 32 : 28
                    }}
                  >
                    {renderedIcon}
                  </div>
                )}
              </button>

              <div
                className={cn(accordionContentVariants({ isOpen, size, variant }))}
                aria-hidden={!isOpen}
              >
                <div className="text-core-circle-text-muted/90">
                  {item.content}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
);

Accordion.displayName = 'Accordion';

export default Accordion;
