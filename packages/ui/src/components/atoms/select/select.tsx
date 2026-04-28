'use client';

import * as React from 'react';
import { cn } from '../../../utils/cn';
import { SelectProps } from '../../../interface/atoms/select/select.types';
import { selectWrapperVariants, selectVariants, labelVariants, prefixVariants, dropdownVariants, optionVariants } from './select.styles';
import { ChevronDown, CheckIcon } from '@core-circle/icons';
import { Label } from '../label/label';


export const Select = React.forwardRef<HTMLDivElement, SelectProps>(
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
      placeholder = 'Select...',
      disabled = false,
      ...props
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [isFocused, setIsFocused] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState<string>(
      (value as string) || (defaultValue as string) || ''
    );
    const containerRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
      if (value !== undefined) {
        setSelectedValue(value as string);
      }
    }, [value]);

    React.useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSelect = (optionValue: string) => {
      if (disabled) return;
      if (value === undefined) {
        setSelectedValue(optionValue);
      }
      setIsOpen(false);
      
      // Create a mock event to maintain compatibility with existing onChange handlers
      const event = {
        target: { value: optionValue, name: props.name },
        currentTarget: { value: optionValue, name: props.name },
      } as any;
      onChange?.(event);
    };

    const selectedOption = options.find((opt) => opt.value === selectedValue);
    const hasError = !!error;
    const isMaterialAnimated = variant === 'material-animated';
    const hasValue = !!selectedValue;
    const isFloating = isMaterialAnimated && (isFocused || isOpen || hasValue);

    return (
      <div
        ref={(node) => {
          (containerRef as any).current = node;
          if (typeof ref === 'function') ref(node);
          else if (ref) (ref as any).current = node;
        }}
        className={cn(
          "relative flex flex-col transition-all duration-200",
          fullWidth ? "w-full" : "w-72",
          isMaterialAnimated && "mt-6",
          className
        )}
      >
        {label && !isMaterialAnimated && (
          <Label
            htmlFor={id}
            size={labelSize}
            weight={labelWeight}
            className={cn(labelVariants({ variant, hasError }), labelClassName)}
          >
            {label}
          </Label>
        )}

        <div className="relative">
          <div
            id={id}
            onClick={() => !disabled && setIsOpen(!isOpen)}
            onFocus={() => !disabled && setIsFocused(true)}
            onBlur={() => !disabled && setIsFocused(false)}
            tabIndex={disabled ? -1 : 0}
            className={cn(selectWrapperVariants({ variant, hasError, disabled }))}
          >
            {label && isMaterialAnimated && (
              <Label
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
                "flex items-center justify-center text-core-circle-text-muted transition-colors pl-4",
                isOpen && "text-core-circle-primary",
                isMaterialAnimated && "mt-2"
              )}>
                {startIcon}
              </div>
            )}

            {prefix && (
              <div className={cn(
                prefixVariants({ size }),
                !startIcon && 'pl-4',
                startIcon && 'pl-2',
                isMaterialAnimated && "mt-2"
              )}>
                {prefix}
              </div>
            )}

            <div className={cn(
              selectVariants({ size, variant }),
              'flex items-center',
              variant === 'outline' && !startIcon && !prefix && 'pl-4',
              (startIcon || prefix) && 'pl-2',
              isMaterialAnimated && "mt-2"
            )}>
              <span className={cn(
                "truncate",
                !hasValue && "text-core-circle-text-muted opacity-50"
              )}>
                {selectedOption ? selectedOption.label : (isMaterialAnimated && !isFloating ? '' : placeholder)}
              </span>
            </div>

            <div className={cn(
              "absolute right-3 pointer-events-none text-core-circle-text-muted transition-transform duration-200",
              isOpen && "rotate-180",
              isMaterialAnimated && "mt-2"
            )}>
              <ChevronDown size={18} />
            </div>
          </div>

          <div className={cn(dropdownVariants({ isOpen }))}>
            {options.length > 0 ? (
              options.map((option) => {
                const isSelected = option.value === selectedValue;
                return (
                  <div
                    key={option.value}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (!option.disabled) handleSelect(option.value);
                    }}
                    className={cn(optionVariants({ isSelected, disabled: option.disabled }))}
                  >
                    <span className="text-sm">{option.label}</span>
                    {isSelected && <CheckIcon className="text-core-circle-primary" size={16} />}
                  </div>
                );
              })
            ) : (
              <div className="px-4 py-3 text-core-circle-text-muted text-sm italic">
                No options available
              </div>
            )}
          </div>
        </div>

        {(error || helperText) && (
          <p className={cn(
            "mt-1.5 text-core-circle-xs font-core-circle-medium transition-all duration-200",
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
