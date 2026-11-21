'use client';

import * as React from 'react';
import { cn } from '../../../utils/cn';
import { CheckboxProps } from '../../../interface/atoms/checkbox/checkbox.types';
import { checkboxContainerVariants, checkboxBoxVariants } from './checkbox.styles';
import { CheckIcon, Minus } from '@core-circle/icons';

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      className,
      variant = 'solid',
      size = 'md',
      shape = 'rounded',
      checked: controlledChecked,
      defaultChecked = false,
      indeterminate = false,
      label,
      labelClassName,
      description,
      badge,
      error,
      helperText,
      disabled = false,
      onChange,
      onCheckedChange,
      id: customId,
      ...props
    },
    ref
  ) => {
    const [internalChecked, setInternalChecked] = React.useState(defaultChecked);
    const autoId = React.useId();
    const id = customId || autoId;

    const isChecked = controlledChecked !== undefined ? controlledChecked : internalChecked;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (disabled) return;
      const nextChecked = e.target.checked;
      if (controlledChecked === undefined) {
        setInternalChecked(nextChecked);
      }
      onChange?.(e);
      onCheckedChange?.(nextChecked);
    };

    const state = indeterminate ? 'indeterminate' : isChecked ? 'checked' : 'unchecked';

    return (
      <div className="flex flex-col gap-1 w-full">
        <label
          htmlFor={id}
          className={cn(
            checkboxContainerVariants({ variant, disabled }),
            className
          )}
        >
          {/* Visual Checkbox Box */}
          <div
            data-state={state}
            className={cn(checkboxBoxVariants({ variant, size, shape }))}
          >
            {indeterminate ? (
              <Minus size={size === 'sm' ? 10 : size === 'lg' ? 14 : 12} className="stroke-[3]" />
            ) : isChecked ? (
              <CheckIcon size={size === 'sm' ? 12 : size === 'lg' ? 16 : 14} className="stroke-[3]" />
            ) : null}
          </div>

          {/* Hidden native checkbox input */}
          <input
            {...props}
            ref={ref}
            id={id}
            type="checkbox"
            checked={isChecked}
            onChange={handleChange}
            disabled={disabled}
            className="sr-only"
          />

          {/* Label, Badge & Subtitle Description */}
          {(label || description || badge) && (
            <div className="flex flex-col gap-0.5 min-w-0 flex-1">
              <div className="flex items-center gap-2">
                {label && (
                  <span className={cn(
                    "font-core-circle-medium text-slate-900 leading-tight",
                    size === 'sm' ? "text-xs" : size === 'lg' ? "text-base" : "text-sm",
                    disabled && "text-slate-400",
                    labelClassName
                  )}>
                    {label}
                  </span>
                )}
                {badge && (
                  <span className="inline-flex items-center">
                    {badge}
                  </span>
                )}
              </div>

              {description && (
                <p className="text-xs text-slate-500 leading-relaxed">
                  {description}
                </p>
              )}
            </div>
          )}
        </label>

        {/* Error or Helper text */}
        {(error || helperText) && (
          <p className={cn(
            "text-[11px] font-core-circle-medium pl-1 transition-all duration-200",
            error ? "text-core-circle-warning" : "text-core-circle-text-muted"
          )}>
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
