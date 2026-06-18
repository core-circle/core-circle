'use client';

import * as React from 'react';
import { cn } from '../../../utils/cn';
import { ColorPickerProps } from '../../../interface/atoms/color-picker/color-picker.types';
import { 
  colorPickerContainerVariants, 
  colorPickerLabelVariants, 
  colorPickerWrapperVariants, 
  swatchVariants, 
  hexValueVariants 
} from './color-picker.styles';

export const ColorPicker = React.forwardRef<HTMLInputElement, ColorPickerProps>(
  (
    {
      value: controlledValue,
      label,
      variant = 'outline',
      size = 'md',
      showValue = true,
      error,
      helperText,
      disabled = false,
      onChange,
      className,
      style,
      ...props
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = React.useState(controlledValue || '#3b82f6');
    const inputRef = React.useRef<HTMLInputElement>(null);

    React.useEffect(() => {
      if (controlledValue !== undefined) {
        setInternalValue(controlledValue);
      }
    }, [controlledValue]);

    const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newVal = e.target.value;
      setInternalValue(newVal);
      onChange?.(e);
    };

    const handleSwatchClick = () => {
      if (!disabled) {
        inputRef.current?.click();
      }
    };

    const combinedRef = (el: HTMLInputElement | null) => {
      (inputRef.current as any) = el;
      if (typeof ref === 'function') ref(el);
      else if (ref) (ref.current as any) = el;
    };

    return (
      <div className={cn(colorPickerContainerVariants({ disabled }), className)} style={style}>
        {label && (
          <label className={cn(colorPickerLabelVariants({ hasError: !!error }))}>
            {label}
          </label>
        )}

        <div className={cn(colorPickerWrapperVariants({ variant, hasError: !!error }))}>
          <div 
            className={cn(swatchVariants({ size }))}
            style={{ backgroundColor: internalValue }}
            onClick={handleSwatchClick}
            aria-label="Select color"
          />
          
          {showValue && (
            <span className={cn(hexValueVariants({ size }))}>
              {internalValue}
            </span>
          )}

          <input
            {...props}
            ref={combinedRef}
            type="color"
            value={internalValue}
            onChange={handleValueChange}
            disabled={disabled}
            className="sr-only"
          />
        </div>

        {(error || helperText) && (
          <p className={cn(
            "mt-1 text-[11px] font-core-circle-medium transition-all duration-200",
            error ? "text-core-circle-warning" : "text-core-circle-text-muted"
          )}>
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

ColorPicker.displayName = 'ColorPicker';
