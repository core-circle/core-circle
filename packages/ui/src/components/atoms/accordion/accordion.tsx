'use client';

import * as React from 'react';
import { cn } from '../../../utils/cn';
import { AccordionProps } from '../../../interface/atoms/accordion/accordion.types';
import { Button } from '../button/button';
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
      variant = 'bordered',
      size = 'md',
      defaultValue,
      value,
      onChange,
      fullWidth = true,
      id,
      expandIcon,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId();
    const accordionId = id || generatedId;

    const [internalValue, setInternalValue] = React.useState<string | string[]>(
      defaultValue || (type === 'multiple' ? [] : '')
    );

    const activeValue = value !== undefined ? value : internalValue;

    const handleToggle = (itemId: string) => {
      let newValue: string | string[];

      if (type === 'single') {
        newValue = activeValue === itemId ? '' : itemId;
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

          return (
            <div
              key={item.id}
              className={cn(accordionItemVariants({ variant, isOpen, disabled: isDisabled }))}
            >
              {/* Vertical accent line */}
              <div 
                className={cn(
                  "absolute left-0 top-0 bottom-0 w-1 transition-all duration-500 origin-top bg-core-circle-primary z-20",
                  isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
                )}
              />

              <Button
                variant="ghost"
                disabled={isDisabled}
                onClick={() => handleToggle(item.id)}
                aria-expanded={isOpen}
                className={cn(
                  accordionTriggerVariants({ size, isOpen }),
                  "justify-between hover:bg-transparent"
                )}
                fullWidth
                endIcon={
                  <div className={cn(
                    "flex items-center justify-center rounded-full transition-all duration-500",
                    isOpen ? "bg-core-circle-primary text-white rotate-180" : "bg-core-circle-bg-page text-core-circle-text-muted"
                  )}
                  style={{ width: size === 'sm' ? 24 : size === 'lg' ? 32 : 28, height: size === 'sm' ? 24 : size === 'lg' ? 32 : 28 }}
                  >
                    {expandIcon ? (
                      <div className={cn("transition-transform duration-500", isOpen && "rotate-0")}>
                        {expandIcon}
                      </div>
                    ) : (
                      <ChevronDown
                        size={size === 'sm' ? 14 : size === 'lg' ? 20 : 18}
                      />
                    )}
                  </div>
                }
              >
                <div className="flex items-center gap-4">
                  {(item.startIcon || item.icon) && (
                    <span className="shrink-0 text-core-circle-primary/80">
                      {item.startIcon || item.icon}
                    </span>
                  )}
                  <span className="font-core-circle-bold tracking-tight">{item.title}</span>
                  {item.endIcon && (
                    <span className="shrink-0 text-core-circle-text-muted/60">
                      {item.endIcon}
                    </span>
                  )}
                </div>
              </Button>

              <div
                className={cn(accordionContentVariants({ isOpen, size }))}
                aria-hidden={!isOpen}
              >
                <div className="pt-2 text-core-circle-text-muted/90">
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
