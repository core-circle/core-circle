'use client';

import * as React from 'react';
import { cn } from '../../../utils/cn';
import { SliderInputProps } from '../../../interface/atoms/slider-input/slider-input.types';
import { sliderContainerVariants, sliderWrapperVariants, sliderVariants, valueDisplayVariants } from './slider-input.styles';
import { Label } from '../label/label';

export const SliderInput = React.forwardRef<HTMLInputElement, SliderInputProps>(
  (
    {
      className,
      variant = 'standard',
      size = 'md',
      label,
      labelSize,
      labelWeight,
      labelClassName,
      error,
      helperText,
      fullWidth = false,
      showValue = false,
      formatValue,
      id,
      onChange,
      value,
      defaultValue,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId();
    const inputId = id || generatedId;
    const hasError = !!error;

    // Internal state to track value for display if needed
    const [currentValue, setCurrentValue] = React.useState(Number(value || defaultValue || 0));

    React.useEffect(() => {
      if (value !== undefined) {
        setCurrentValue(Number(value));
      }
    }, [value]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = Number(e.target.value);
      setCurrentValue(newValue);
      onChange?.(e);
    };

    const displayValue = formatValue ? formatValue(currentValue) : currentValue;

    return (
      <div className={cn(sliderContainerVariants({ fullWidth }), className)}>
        {label && (
          <Label 
            htmlFor={inputId} 
            size={labelSize}
            weight={labelWeight}
            className={cn(hasError && "text-core-circle-destructive", labelClassName)}
          >
            {label}
          </Label>
        )}
        
        <div className={cn(sliderWrapperVariants({ disabled: props.disabled }))}>
          <input
            id={inputId}
            ref={ref}
            type="range"
            className={cn(
              sliderVariants({ variant, size }),
              // Basic cross-browser thumb styling
              "[&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-none [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:active:scale-95",
              "[&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-none [&::-moz-range-thumb]:shadow-md [&::-moz-range-thumb]:transition-transform [&::-moz-range-thumb]:active:scale-95",
              // Track styling
              "[&::-webkit-slider-runnable-track]:rounded-full",
              "[&::-moz-range-track]:rounded-full"
            )}
            onChange={handleChange}
            value={value}
            defaultValue={defaultValue}
            {...props}
          />
          
          {showValue && (
            <span className={cn(valueDisplayVariants({ size }))}>
              {displayValue}
            </span>
          )}
        </div>
        
        {(error || helperText) && (
          <p className={cn(
            "mt-1.5 text-[11px] font-core-circle-medium transition-all duration-200",
            hasError ? "text-core-circle-destructive" : "text-core-circle-text-muted"
          )}>
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

SliderInput.displayName = 'SliderInput';
