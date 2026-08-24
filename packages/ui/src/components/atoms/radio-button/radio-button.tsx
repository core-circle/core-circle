'use client';

import * as React from 'react';
import { cn } from '../../../utils/cn';
import { RadioButtonProps } from '../../../interface/atoms/radio-button/radio-button.types';
import { 
  radioWrapperVariants, 
  radioCircleVariants, 
  innerDotVariants 
} from './radio-button.styles';

export const RadioButton = React.forwardRef<HTMLInputElement, RadioButtonProps>(
  (
    {
      className,
      variant = 'outline',
      size = 'md',
      label,
      description,
      badge,
      error,
      helperText,
      checked: controlledChecked,
      defaultChecked = false,
      onChange,
      disabled = false,
      value,
      id: customId,
      ...props
    },
    ref
  ) => {
    const [internalChecked, setInternalChecked] = React.useState(defaultChecked);
    const autoId = React.useId();
    const id = customId || autoId;

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
      <div className="flex flex-col gap-1 w-full">
        <label
          htmlFor={id}
          className={cn(radioWrapperVariants({ variant, disabled }), className)}
        >
          {/* Visual Radio Circle */}
          <div
            data-state={isChecked ? 'checked' : 'unchecked'}
            className={cn(radioCircleVariants({ variant, size, hasError }))}
          >
            <div
              className={cn(innerDotVariants({ variant, size, checked: isChecked }))}
            />
          </div>

          {/* Hidden native radio input */}
          <input
            {...props}
            ref={ref}
            id={id}
            type="radio"
            checked={isChecked}
            disabled={disabled}
            onChange={handleChange}
            value={value}
            className="sr-only"
          />

          {/* Label, Badge & Subtitle Description */}
          {(label || description || badge) && (
            <div className="flex flex-col gap-0.5 min-w-0 flex-1">
              <div className="flex items-center gap-2">
                {label && (
                  <span
                    className={cn(
                      "font-core-circle-medium text-slate-900 leading-tight",
                      size === 'sm' ? "text-xs" : size === 'lg' ? "text-base" : "text-sm",
                      disabled && "text-slate-400"
                    )}
                  >
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
          <p
            className={cn(
              "text-[11px] font-core-circle-medium pl-1 transition-all duration-200",
              hasError ? "text-core-circle-warning" : "text-core-circle-text-muted"
            )}
          >
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

RadioButton.displayName = 'RadioButton';

export default RadioButton;
