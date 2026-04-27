'use client';

import * as React from 'react';
import { cn } from '../../../utils/cn';
import { SelectProps } from '../../../interface/atoms/select/select.types';
import { selectWrapperVariants, selectVariants, labelVariants, prefixVariants } from './select.styles';
import { ChevronDown } from '@core-circle/icons';


export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      className,
      variant = 'outline',
      size = 'md',
      label,
      error,
      helperText,
      options = [],
      startIcon,
      fullWidth = false,
      prefix,
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
    const selectId = id || generatedId;
    const hasError = !!error;
    const isMaterialAnimated = variant === 'material-animated';

    const [isFocused, setIsFocused] = React.useState(false);
    const [hasValue, setHasValue] = React.useState(false);
    const innerRef = React.useRef<HTMLSelectElement>(null);

    React.useEffect(() => {
      const select = innerRef.current;
      if (select) {
        setHasValue(!!select.value);
      }
    }, [value, defaultValue, options]);

    const handleFocus = (e: React.FocusEvent<HTMLSelectElement>) => {
      setIsFocused(true);
      onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLSelectElement>) => {
      setIsFocused(false);
      onBlur?.(e);
    };

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setHasValue(!!e.currentTarget.value);
      onChange?.(e);
    };

    const isFloating = isMaterialAnimated && (isFocused || hasValue);

    return (
      <div className={cn(
        "relative flex flex-col transition-all duration-200",
        fullWidth ? "w-full" : "w-fit",
        isMaterialAnimated && "mt-6",
        className
      )}>
        {label && !isMaterialAnimated && (
          <label 
            htmlFor={selectId} 
            className={cn(labelVariants({ variant, hasError }))}
          >
            {label}
          </label>
        )}
        
        <div className={cn(selectWrapperVariants({ variant, hasError, disabled: props.disabled }))}>
          {label && isMaterialAnimated && (
            <label 
              htmlFor={selectId} 
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
              prefixVariants({ size }),
              variant === 'outline' && !startIcon && 'pl-4',
              (startIcon) && 'pl-2',
              isMaterialAnimated && "mt-2"
            )}>
              {prefix}
            </div>
          )}
          
          <select
            id={selectId}
            ref={(node) => {
              (innerRef as any).current = node;
              if (typeof ref === 'function') ref(node);
              else if (ref) (ref as any).current = node;
            }}
            className={cn(
              selectVariants({ size, variant }),
              'pr-10',
              variant === 'outline' && !startIcon && !prefix && 'pl-4',
              (startIcon || prefix) && 'pl-2',
              isMaterialAnimated && !isFloating && 'text-transparent'
            )}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            value={value}
            defaultValue={defaultValue}
            {...props}
          >
            {(placeholder || isMaterialAnimated) && (
              <option value="">
                {placeholder || 'Select...'}
              </option>
            )}
            {options.map((option) => (
              <option key={option.value} value={option.value} disabled={option.disabled}>
                {option.label}
              </option>
            ))}
          </select>

          <div className={cn(
            "absolute right-3 pointer-events-none text-core-circle-text-muted transition-transform duration-200",
            isFocused && "rotate-180",
            isMaterialAnimated && "mt-2"
          )}>
            <ChevronDown size={18} />
          </div>
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

Select.displayName = 'Select';
