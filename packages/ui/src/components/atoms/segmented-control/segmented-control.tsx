'use client';

import * as React from 'react';
import { cn } from '../../../utils/cn';
import {
  SegmentedControlProps,
} from '../../../interface/atoms/segmented-control/segmented-control.types';
import {
  segmentedControlVariants,
  segmentOptionVariants,
} from './segmented-control.styles';
import { Label } from '../label/label';

export const SegmentedControl = React.forwardRef<HTMLDivElement, SegmentedControlProps>(
  (
    {
      className,
      options = [],
      value,
      defaultValue,
      onChange,
      variant = 'default',
      size = 'md',
      fullWidth = false,
      disabled = false,
      label,
      helperText,
      ...props
    },
    ref
  ) => {
    const [activeValue, setActiveValue] = React.useState<string>(() => {
      if (value !== undefined) return value;
      if (defaultValue !== undefined) return defaultValue;
      return options[0]?.value || '';
    });

    React.useEffect(() => {
      if (value !== undefined) {
        setActiveValue(value);
      }
    }, [value]);

    const handleSelect = (optionValue: string) => {
      if (disabled) return;
      if (value === undefined) {
        setActiveValue(optionValue);
      }
      onChange?.(optionValue);
    };

    const isPill = variant === 'pills';

    return (
      <div className={cn('flex flex-col gap-1.5', fullWidth ? 'w-full' : 'w-auto')}>
        {label && <Label>{label}</Label>}

        <div
          {...props}
          ref={ref}
          role="radiogroup"
          aria-label={label}
          className={cn(segmentedControlVariants({ variant, size, fullWidth }), className)}
        >
          {options.map((option) => {
            const isActive = option.value === activeValue;
            const isOptionDisabled = disabled || option.disabled;

            return (
              <button
                key={option.value}
                type="button"
                role="radio"
                aria-checked={isActive}
                disabled={isOptionDisabled}
                onClick={() => handleSelect(option.value)}
                className={cn(
                  segmentOptionVariants({
                    active: isActive,
                    shape: isPill ? 'pill' : 'default',
                    size,
                    fullWidth,
                  })
                )}
              >
                {option.icon && <span className="shrink-0">{option.icon}</span>}
                <span>{option.label}</span>
              </button>
            );
          })}
        </div>

        {helperText && (
          <span className="text-xs text-core-circle-text-muted">{helperText}</span>
        )}
      </div>
    );
  }
);

SegmentedControl.displayName = 'SegmentedControl';
export default SegmentedControl;
