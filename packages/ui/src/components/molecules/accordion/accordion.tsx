'use client';

import * as React from 'react';
import { cn } from '../../../utils/cn';
import { ChevronDown } from '@core-circle/icons';
import { 
  AccordionProps, 
  AccordionItemProps, 
  AccordionTriggerProps, 
  AccordionContentProps 
} from '../../../interface/molecules/accordion/accordion.types';
import { 
  accordionContainerVariants, 
  accordionItemVariants, 
  accordionTriggerVariants, 
  accordionContentVariants 
} from './accordion.styles';

// Context for state management
type AccordionContextValue = {
  activeValues: string[];
  toggleItem: (value: string) => void;
  variant: 'bordered' | 'ghost' | 'separated';
};

const AccordionContext = React.createContext<AccordionContextValue | undefined>(undefined);

const useAccordion = () => {
  const context = React.useContext(AccordionContext);
  if (!context) throw new Error('Accordion compound components must be used within Accordion');
  return context;
};

// Main Component
const AccordionRoot = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ children, type = 'single', defaultValue, value, onValueChange, variant = 'bordered', className, ...props }, ref) => {
    const [internalValue, setInternalValue] = React.useState<string[]>(
      defaultValue ? (Array.isArray(defaultValue) ? defaultValue : [defaultValue]) : []
    );

    const activeValues = value !== undefined ? (Array.isArray(value) ? value : [value]) : internalValue;

    const toggleItem = (itemValue: string) => {
      let nextValues: string[];
      if (type === 'single') {
        nextValues = activeValues.includes(itemValue) ? [] : [itemValue];
      } else {
        nextValues = activeValues.includes(itemValue)
          ? activeValues.filter(v => v !== itemValue)
          : [...activeValues, itemValue];
      }

      if (value === undefined) setInternalValue(nextValues);
      onValueChange?.(type === 'single' ? (nextValues[0] || '') : nextValues);
    };

    return (
      <AccordionContext.Provider value={{ activeValues, toggleItem, variant }}>
        <div
          ref={ref}
          className={cn(accordionContainerVariants({ variant }), className)}
          {...props}
        >
          {children}
        </div>
      </AccordionContext.Provider>
    );
  }
);

// Sub-components
const AccordionItem = ({ children, value, disabled, className, ...props }: AccordionItemProps) => {
  const { activeValues, variant } = useAccordion();
  const isOpen = activeValues.includes(value);

  return (
    <div
      className={cn(accordionItemVariants({ variant, isOpen, disabled }), className)}
      {...props}
    >
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<any>, { value, isOpen, disabled });
        }
        return child;
      })}
    </div>
  );
};

const AccordionTrigger = ({ children, startIcon, className, ...props }: AccordionTriggerProps) => {
  const { toggleItem } = useAccordion();
  // Destructure internal props passed by AccordionItem so they don't leak to the DOM
  const { value, isOpen, disabled, ...rest } = props as any;

  return (
    <button
      type="button"
      onClick={() => !disabled && toggleItem(value)}
      disabled={disabled}
      className={cn(accordionTriggerVariants({ isOpen }), className)}
      {...rest}
    >
      <div className="flex items-center gap-4 flex-1">
        {startIcon && <span className="text-core-circle-primary">{startIcon}</span>}
        <span className="font-core-circle-bold text-core-circle-text-main">{children}</span>
      </div>
      <ChevronDown 
        className={cn(
          "w-4 h-4 text-core-circle-text-muted transition-transform duration-300",
          isOpen && "rotate-180 text-core-circle-primary"
        )} 
      />
    </button>
  );
};

const AccordionContent = ({ children, className, ...props }: AccordionContentProps) => {
  const { isOpen } = props as any;

  return (
    <div className={cn(accordionContentVariants({ isOpen }), className)}>
      <div className="px-6 pb-6 text-sm text-core-circle-text-muted leading-relaxed">
        {children}
      </div>
    </div>
  );
};

AccordionRoot.displayName = 'Accordion';

export interface AccordionComponent
  extends React.ForwardRefExoticComponent<
    AccordionProps & React.RefAttributes<HTMLDivElement>
  > {
  Item: typeof AccordionItem;
  Trigger: typeof AccordionTrigger;
  Content: typeof AccordionContent;
}

export const Accordion = Object.assign(AccordionRoot, {
  Item: AccordionItem,
  Trigger: AccordionTrigger,
  Content: AccordionContent,
}) as AccordionComponent;
