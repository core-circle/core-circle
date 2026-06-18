'use client';

import * as React from 'react';
import { cn } from '../../../utils/cn';
import { RadioButtonProps } from '../../../interface/atoms/radio-button/radio-button.types';
import { radioWrapperVariants, radioVariants, innerCircleVariants } from './radio-button.styles';
import { labelVariants } from '../checkbox/checkbox.styles';
import { Label } from '../label/label';

export const RadioButton = React.forwardRef<HTMLInputElement, RadioButtonProps>(
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
      checked: controlledChecked,
      defaultChecked,
      onChange,
      disabled = false,
      value,
      ...props
    },
    ref
  ) => {
    const [internalChecked, setInternalChecked] = React.useState(defaultChecked || false);
    const isChecked = controlledChecked !== undefined ? controlledChecked : internalChecked;
    const hasError = !!error;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (disabled) return;
      if (controlledChecked === undefined) {
        setInternalChecked(e.target.checked);
      }
      if (e.target.checked) {
        onChange?.(value as string);
      }
    };

    return (
      <div className={cn("flex flex-col gap-1.5", "w-fit")}>
        <label 
          className={cn(radioWrapperVariants({ disabled }), className)}
        >
          <div className="relative flex items-center justify-center">
            <input
              type="radio"
              ref={ref}
              checked={isChecked}
              disabled={disabled}
              onChange={handleChange}
              className="sr-only"
              value={value}
              {...props}
            />
            <div className={cn(radioVariants({ variant, size, checked: isChecked, hasError }))}>
              <div className={cn(innerCircleVariants({ size, checked: isChecked }))} />
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

RadioButton.displayName = 'RadioButton';
