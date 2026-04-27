'use client';

import * as React from 'react';
import { cn } from '../../../utils/cn';
import { TextInputProps } from '../../../interface/atoms/text-input/text-input.types';
import { inputContainerVariants, inputVariants, labelVariants, inputWrapperVariants, prefixSuffixVariants } from './text-input.styles';

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
      prefix,
      suffix,
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
      setHasValue(!!e.currentTarget.value);
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
        
        <div className={cn(inputWrapperVariants({ variant, hasError, disabled: props.disabled }))}>
          {label && isMaterialAnimated && (
            <label 
              htmlFor={inputId} 
              className={cn(
                labelVariants({ variant, hasError, isFloating }),
                (startIcon || prefix) && !isFloating && 'left-11'
              )}
            >
              {label}
            </label>
          )}

          {startIcon && (
            <div className={cn(
              "flex items-center justify-center text-core-circle-text-muted group-focus-within:text-core-circle-primary transition-colors",
              variant === 'outline' ? 'pl-4' : 'pl-0',
              isMaterialAnimated && "mt-2"
            )}>
              {startIcon}
            </div>
          )}

          {prefix && (
            <div className={cn(
              prefixSuffixVariants({ size }),
              variant === 'outline' && !startIcon && 'pl-4',
              (startIcon) && 'pl-2',
              isMaterialAnimated && "mt-2"
            )}>
              {prefix}
            </div>
          )}
          
          <input
            id={inputId}
            ref={ref}
            className={cn(
              inputVariants({ size, variant }),
              variant === 'outline' && !startIcon && !prefix && 'pl-4',
              variant === 'outline' && !endIcon && !suffix && 'pr-4',
              (startIcon || prefix) && 'pl-2',
              (endIcon || suffix) && 'pr-2'
            )}
            placeholder={isMaterialAnimated ? (isFloating ? placeholder : '') : placeholder}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            value={value}
            defaultValue={defaultValue}
            {...props}
          />

          {suffix && (
            <div className={cn(
              prefixSuffixVariants({ size }),
              variant === 'outline' && !endIcon && 'pr-4',
              (endIcon) && 'pr-2',
              isMaterialAnimated && "mt-2"
            )}>
              {suffix}
            </div>
          )}
          
          {endIcon && (
            <div className={cn(
              "flex items-center justify-center text-core-circle-text-muted group-focus-within:text-core-circle-primary transition-colors",
              variant === 'outline' ? 'pr-4' : 'pr-0',
              isMaterialAnimated && "mt-2"
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
