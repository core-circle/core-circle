'use client';

import * as React from 'react';
import { cn } from '../../../utils/cn';
import { TextareaProps } from '../../../interface/atoms/textarea/textarea.types';
import { textareaContainerVariants, textareaVariants, labelVariants, textareaWrapperVariants } from './textarea.styles';
import { Label } from '../label/label';

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
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
      startIcon,
      endIcon,
      fullWidth = false,
      resize = 'vertical',
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

    const handleFocus = (e: React.FocusEvent<HTMLTextAreaElement>) => {
      setIsFocused(true);
      onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
      setIsFocused(false);
      onBlur?.(e);
    };

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setHasValue(!!e.currentTarget.value);
      onChange?.(e);
    };

    const isFloating = isMaterialAnimated && (isFocused || hasValue);

    return (
      <div className={cn(textareaContainerVariants({ fullWidth, hasFloatingLabel: isMaterialAnimated }), className)}>
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
        
        <div className={cn(textareaWrapperVariants({ variant, hasError, disabled: props.disabled }))}>
          {label && isMaterialAnimated && (
            <Label 
              htmlFor={inputId} 
              size={labelSize}
              weight={labelWeight}
              className={cn(
                labelVariants({ variant, hasError, isFloating }),
                (startIcon) && !isFloating && 'left-11',
                labelClassName
              )}
            >
              {label}
            </Label>
          )}

          {startIcon && (
            <div className={cn(
              "flex items-center justify-center text-core-circle-text-muted group-focus-within:text-core-circle-primary transition-colors",
              variant === 'outline' ? 'pl-4 pt-3' : 'pl-0 pt-3',
              isMaterialAnimated && "mt-2"
            )}>
              {startIcon}
            </div>
          )}
          
          <textarea
            id={inputId}
            ref={ref}
            className={cn(
              textareaVariants({ size, variant, resize }),
              variant === 'outline' && !startIcon && 'pl-4',
              variant === 'outline' && !endIcon && 'pr-4',
              (startIcon) && 'pl-2',
              (endIcon) && 'pr-2'
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
              "flex items-center justify-center text-core-circle-text-muted group-focus-within:text-core-circle-primary transition-colors",
              variant === 'outline' ? 'pr-4 pt-3' : 'pr-0 pt-3',
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

Textarea.displayName = 'Textarea';
