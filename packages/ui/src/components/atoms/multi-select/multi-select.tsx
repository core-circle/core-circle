'use client';

import * as React from 'react';
import { cn } from '../../../utils/cn';
import { MultiSelectProps } from '../../../interface/atoms/multi-select/multi-select.types';
import { multiSelectWrapperVariants, multiSelectContentVariants, tagVariants, dropdownVariants, optionVariants } from './multi-select.styles';
import { labelVariants, prefixVariants } from '../select/select.styles';
import { ChevronDown, XIcon, CheckIcon } from '@core-circle/icons';


export const MultiSelect = React.forwardRef<HTMLDivElement, MultiSelectProps>(
  (
    {
      className,
      variant = 'outline',
      size = 'md',
      label,
      error,
      helperText,
      options = [],
      value,
      defaultValue = [],
      onChange,
      startIcon,
      fullWidth = false,
      prefix,
      placeholder = 'Select...',
      disabled = false,
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [isFocused, setIsFocused] = React.useState(false);
    const [selectedValues, setSelectedValues] = React.useState<string[]>(value || defaultValue);
    const containerRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
      if (value !== undefined) {
        setSelectedValues(value);
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

    const toggleOption = (optionValue: string) => {
      if (disabled) return;
      
      const newValues = selectedValues.includes(optionValue)
        ? selectedValues.filter(v => v !== optionValue)
        : [...selectedValues, optionValue];
      
      if (value === undefined) {
        setSelectedValues(newValues);
      }
      onChange?.(newValues);
    };

    const removeValue = (e: React.MouseEvent, optionValue: string) => {
      e.stopPropagation();
      if (disabled) return;
      const newValues = selectedValues.filter(v => v !== optionValue);
      if (value === undefined) {
        setSelectedValues(newValues);
      }
      onChange?.(newValues);
    };

    const hasError = !!error;
    const isMaterialAnimated = variant === 'material-animated';
    const hasSelected = selectedValues.length > 0;
    const isFloating = isMaterialAnimated && (isFocused || isOpen || hasSelected);

    const selectedOptions = options.filter(opt => selectedValues.includes(opt.value));

    return (
      <div 
        ref={containerRef}
        className={cn(
          "relative flex flex-col transition-all duration-200",
          fullWidth ? "w-full" : "w-72",
          isMaterialAnimated && "mt-8",
          className
        )}
      >
        {label && !isMaterialAnimated && (
          <label className={cn(labelVariants({ variant, hasError }))}>
            {label}
          </label>
        )}

        <div 
          onClick={() => !disabled && setIsOpen(!isOpen)}
          onFocus={() => !disabled && setIsFocused(true)}
          onBlur={() => !disabled && setIsFocused(false)}
          tabIndex={disabled ? -1 : 0}
          className={cn(multiSelectWrapperVariants({ variant, hasError, disabled }))}
        >
          {label && isMaterialAnimated && (
            <label 
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
            multiSelectContentVariants({ size }),
            (startIcon || prefix) && 'pl-2',
            "pr-10",
            isMaterialAnimated && "mt-2"
          )}>
            {selectedOptions.length > 0 ? (
              selectedOptions.map(opt => (
                <span 
                  key={opt.value} 
                  className={cn(tagVariants({ size }))}
                >
                  {opt.label}
                  <button 
                    onClick={(e) => removeValue(e, opt.value)}
                    className="hover:text-core-circle-warning transition-colors"
                  >
                    <XIcon />
                  </button>
                </span>
              ))
            ) : (
              <span className="text-core-circle-text-muted opacity-50 truncate min-h-[20px] flex items-center">
                {(!isMaterialAnimated || isFloating) ? placeholder : ''}
              </span>
            )}
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
            options.map(option => {
              const isSelected = selectedValues.includes(option.value);
              return (
                <div 
                  key={option.value}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (!option.disabled) toggleOption(option.value);
                  }}
                  className={cn(optionVariants({ isSelected, disabled: option.disabled }))}
                >
                  <div className={cn(
                    "w-4 h-4 rounded border flex items-center justify-center transition-all duration-200",
                    isSelected 
                      ? "bg-core-circle-primary border-core-circle-primary shadow-sm" 
                      : "border-core-circle-border-main bg-white group-hover:border-core-circle-primary/50"
                  )}>
                    {isSelected && <CheckIcon className="text-white" size={12} />}
                  </div>
                  <span className="text-sm">{option.label}</span>
                </div>
              );
            })
          ) : (
            <div className="px-4 py-3 text-core-circle-text-muted text-sm italic">
              No options available
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

MultiSelect.displayName = 'MultiSelect';
