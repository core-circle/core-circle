'use client';

import * as React from 'react';
import { cn } from '../../../utils/cn';
import { TextInputProps } from '../../../interface/atoms/text-input/text-input.types';
import { inputContainerVariants, inputVariants, labelVariants, inputWrapperVariants, prefixSuffixVariants } from './text-input.styles';
import { Label } from '../label/label';

export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      className,
      wrapperClassName,
      variant = 'outline',
      size = 'md',
      label,
      labelSize,
      labelWeight,
      labelClassName,
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
    const isPill = variant === 'pill';
    const isStandard = variant === 'standard';

    const getLeftPadClass = () => {
      if (isStandard) return 'pl-1';
      if (isPill) return size === 'sm' ? 'pl-4' : size === 'lg' ? 'pl-6' : 'pl-5';
      if (size === 'sm') return 'pl-3';
      if (size === 'lg') return 'pl-5';
      return 'pl-4';
    };

    const getRightPadClass = () => {
      if (isStandard) return 'pr-1';
      if (isPill) return size === 'sm' ? 'pr-4' : size === 'lg' ? 'pr-6' : 'pr-5';
      if (size === 'sm') return 'pr-3';
      if (size === 'lg') return 'pr-5';
      return 'pr-4';
    };

    return (
      <div className={cn(inputContainerVariants({ fullWidth, hasFloatingLabel: isMaterialAnimated }), className)}>
        {label && !isMaterialAnimated && (
          <Label 
            htmlFor={inputId} 
            size={labelSize}
            weight={labelWeight}
            className={cn(labelVariants({ variant, hasError }), labelClassName)}
          >
            {label}
          </Label>
        )}
        
        <div className={cn(inputWrapperVariants({ variant, hasError, disabled: props.disabled }), wrapperClassName)}>
          {label && isMaterialAnimated && (
            <Label 
              htmlFor={inputId} 
              size={labelSize}
              weight={labelWeight}
              className={cn(
                labelVariants({ variant, hasError, isFloating }),
                (startIcon || prefix) && !isFloating && 'left-11',
                labelClassName
              )}
            >
              {label}
            </Label>
          )}

          {startIcon && (
            <div className={cn(
              "flex items-center justify-center text-core-circle-text-muted group-focus-within:text-core-circle-primary transition-colors shrink-0",
              getLeftPadClass()
            )}>
              {startIcon}
            </div>
          )}

          {prefix && (
            <div className={cn(
              prefixSuffixVariants({ size }),
              startIcon ? 'pl-2' : getLeftPadClass()
            )}>
              {prefix}
            </div>
          )}
          
          <input
            id={inputId}
            ref={ref}
            className={cn(
              inputVariants({ size, variant }),
              (startIcon || prefix) ? 'pl-2' : getLeftPadClass(),
              (endIcon || suffix) ? 'pr-2' : getRightPadClass()
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
              endIcon ? 'pr-2' : getRightPadClass()
            )}>
              {suffix}
            </div>
          )}
          
          {endIcon && (
            <div className={cn(
              "flex items-center justify-center text-core-circle-text-muted group-focus-within:text-core-circle-primary transition-colors shrink-0",
              getRightPadClass()
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
