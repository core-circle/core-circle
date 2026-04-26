'use client';

import * as React from 'react';
import { cn } from '../../../utils/cn';
import { TextInputProps } from '../../../interface/atoms/text-input/text-input.types';
import { inputContainerVariants, inputVariants, labelVariants } from './text-input.styles';

export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      className,
      variant = 'outline',
      size = 'md',
      label,
      error,
      helperText,
      startIcon,
      endIcon,
      fullWidth = false,
      id,
      onFocus,
      onBlur,
      onChange,
      value,
      defaultValue,
      placeholder,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId();
    const inputId = id || generatedId;
    const hasError = !!error;
    const isMaterialAnimated = variant === 'material-animated';

    const [isFocused, setIsFocused] = React.useState(false);
    const [hasValue, setHasValue] = React.useState(!!value || !!defaultValue);

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      onBlur?.(e);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setHasValue(!!e.target.value);
      onChange?.(e);
    };

    const isFloating = isMaterialAnimated && (isFocused || hasValue);

    return (
      <div className={cn(inputContainerVariants({ fullWidth, hasFloatingLabel: isMaterialAnimated }), className)}>
        {label && !isMaterialAnimated && (
          <label 
            htmlFor={inputId} 
            className={cn(labelVariants({ variant, hasError }))}
          >
            {label}
          </label>
        )}
        
        <div className="relative flex items-center group">
          {label && isMaterialAnimated && (
            <label 
              htmlFor={inputId} 
              className={cn(
                labelVariants({ variant, hasError, isFloating }),
                startIcon && !isFloating && 'left-11'
              )}
            >
              {label}
            </label>
          )}

          {startIcon && (
            <div className={cn(
              "absolute left-4 flex items-center justify-center text-core-circle-text-muted group-focus-within:text-core-circle-primary transition-colors",
              isMaterialAnimated && "top-1/2 -translate-y-1/2 mt-2"
            )}>
              {startIcon}
            </div>
          )}
          
          <input
            id={inputId}
            ref={ref}
            className={cn(
              inputVariants({ variant, size, hasError }),
              startIcon && 'pl-11',
              endIcon && 'pr-11'
            )}
            placeholder={isMaterialAnimated ? (isFloating ? placeholder : '') : placeholder}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            value={value}
            defaultValue={defaultValue}
            {...props}
          />
          
          {endIcon && (
            <div className={cn(
              "absolute right-4 flex items-center justify-center text-core-circle-text-muted group-focus-within:text-core-circle-primary transition-colors",
              isMaterialAnimated && "top-1/2 -translate-y-1/2 mt-2"
            )}>
              {endIcon}
            </div>
          )}
        </div>
        
        {(error || helperText) && (
          <p className={cn(
            "mt-1.5 text-[11px] font-core-circle-medium transition-all duration-200",
            hasError ? "text-core-circle-warning" : "text-core-circle-text-muted"
          )}>
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

TextInput.displayName = 'TextInput';
