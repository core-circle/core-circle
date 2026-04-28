'use client';

import * as React from 'react';
import { cn } from '../../../utils/cn';
import { CheckboxProps } from '../../../interface/atoms/checkbox/checkbox.types';
import { checkboxWrapperVariants, checkboxVariants, labelVariants } from './checkbox.styles';
import { CheckIcon, Minus } from '@core-circle/icons';
import { Label } from '../label/label';

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      className,
      variant = 'outline',
      size = 'md',
      label,
      labelSize,
      labelWeight,
      labelClassName,
      error,
      helperText,
      indeterminate = false,
      checked: controlledChecked,
      defaultChecked,
      onChange,
      disabled = false,
      ...props
    },
    ref
  ) => {
    const [internalChecked, setInternalChecked] = React.useState(defaultChecked || false);
    const isChecked = controlledChecked !== undefined ? controlledChecked : internalChecked;
    const hasError = !!error;

    const handleToggle = () => {
      if (disabled) return;
      const nextChecked = !isChecked;
      if (controlledChecked === undefined) {
        setInternalChecked(nextChecked);
      }
      onChange?.(nextChecked);
    };

    const iconSize = size === 'sm' ? 10 : size === 'md' ? 12 : 14;

    return (
      <div className={cn("flex flex-col gap-1.5", fullWidth ? "w-full" : "w-fit")}>
        <label 
          className={cn(checkboxWrapperVariants({ disabled }), className)}
        >
          <div className="relative flex items-center justify-center">
            <input
              type="checkbox"
              ref={ref}
              checked={isChecked}
              disabled={disabled}
              onChange={handleToggle}
              className="sr-only"
              aria-invalid={hasError}
              {...props}
            />
            <div className={cn(checkboxVariants({ variant, size, checked: isChecked || indeterminate, hasError }))}>
              {indeterminate ? (
                <Minus size={iconSize} className="text-white" strokeWidth={3} />
              ) : (
                isChecked && <CheckIcon size={iconSize} className="text-white" strokeWidth={3} />
              )}
            </div>
          </div>
          {label && (
            <Label 
              as="span"
              size={labelSize || (size === 'lg' ? 'md' : size === 'md' ? 'sm' : 'xs')}
              weight={labelWeight || 'medium'}
              uppercase={false}
              className={cn(labelVariants({ size, hasError }), labelClassName)}
            >
              {label}
            </Label>
          )}
        </label>
        
        {(error || helperText) && (
          <p className={cn(
            "text-[11px] font-core-circle-medium pl-1 transition-all duration-200",
            hasError ? "text-core-circle-warning" : "text-core-circle-text-muted"
          )}>
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';

// Temporary fix for fullWidth if needed, though checkbox is usually fit-content
const fullWidth = false; 
