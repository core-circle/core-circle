'use client';

import * as React from 'react';
import { cn } from '../../../utils/cn';
import {
  NumberInputProps,
} from '../../../interface/atoms/number-input/number-input.types';
import {
  numberInputContainerVariants,
  numberInputGroupVariants,
  numberInputVariants,
  stepperButtonVariants,
} from './number-input.styles';
import { Plus, Minus } from '@core-circle/icons';
import { Label } from '../label/label';

export function formatNumberDisplay(
  num: number | null,
  precision?: number,
  formatThousands = false
): string {
  if (num === null || isNaN(num)) return '';
  let str = precision !== undefined ? num.toFixed(precision) : num.toString();
  if (formatThousands) {
    const parts = str.split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    str = parts.join('.');
  }
  return str;
}

export function parseNumberString(str: string): number | null {
  const cleaned = str.replace(/,/g, '').trim();
  if (!cleaned || cleaned === '-' || cleaned === '.') return null;
  const parsed = parseFloat(cleaned);
  return isNaN(parsed) ? null : parsed;
}

export const NumberInput = React.forwardRef<HTMLInputElement, NumberInputProps>(
  (
    {
      className,
      wrapperClassName,
      variant = 'outline',
      size = 'md',
      label,
      error,
      helperText,
      fullWidth = false,
      value,
      defaultValue,
      min,
      max,
      step = 1,
      precision,
      allowNegative = true,
      prefix,
      suffix,
      stepper = 'stacked',
      formatThousands = false,
      onNumberChange,
      id,
      disabled,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId();
    const inputId = id || generatedId;

    const [numericValue, setNumericValue] = React.useState<number | null>(() => {
      const init = value !== undefined ? value : defaultValue;
      if (typeof init === 'number') return init;
      if (typeof init === 'string') return parseNumberString(init);
      return null;
    });

    const [displayString, setDisplayString] = React.useState<string>(() => {
      const init = value !== undefined ? value : defaultValue;
      if (typeof init === 'number') return formatNumberDisplay(init, precision, formatThousands);
      return typeof init === 'string' ? init : '';
    });

    React.useEffect(() => {
      if (value !== undefined) {
        const parsed = typeof value === 'number' ? value : parseNumberString(value);
        setNumericValue(parsed);
        setDisplayString(
          parsed !== null ? formatNumberDisplay(parsed, precision, formatThousands) : ''
        );
      }
    }, [value, precision, formatThousands]);

    const clamp = (val: number): number => {
      let clamped = val;
      if (min !== undefined && clamped < min) clamped = min;
      if (max !== undefined && clamped > max) clamped = max;
      if (!allowNegative && clamped < 0) clamped = 0;
      if (precision !== undefined) {
        clamped = parseFloat(clamped.toFixed(precision));
      }
      return clamped;
    };

    const updateValue = (nextVal: number | null) => {
      const finalVal = nextVal !== null ? clamp(nextVal) : null;
      setNumericValue(finalVal);
      const str = finalVal !== null ? formatNumberDisplay(finalVal, precision, formatThousands) : '';
      setDisplayString(str);
      onNumberChange?.(finalVal, str);
    };

    const handleIncrement = () => {
      if (disabled) return;
      const current = numericValue ?? (min !== undefined ? min : 0);
      updateValue(current + step);
    };

    const handleDecrement = () => {
      if (disabled) return;
      const current = numericValue ?? (min !== undefined ? min : 0);
      updateValue(current - step);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        handleIncrement();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        handleDecrement();
      }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const raw = e.target.value;
      setDisplayString(raw);
      const parsed = parseNumberString(raw);
      if (parsed !== null) {
        if (!allowNegative && parsed < 0) return;
        setNumericValue(parsed);
        onNumberChange?.(parsed, raw);
      } else {
        setNumericValue(null);
        onNumberChange?.(null, raw);
      }
    };

    const handleBlur = () => {
      if (numericValue !== null) {
        updateValue(numericValue);
      }
    };

    const hasError = !!error;
    const canDecrement = !disabled && (min === undefined || (numericValue ?? 0) > min);
    const canIncrement = !disabled && (max === undefined || (numericValue ?? 0) < max);

    return (
      <div
        className={cn(numberInputContainerVariants({ fullWidth }), wrapperClassName)}
      >
        {label && <Label htmlFor={inputId}>{label}</Label>}

        <div className={cn(numberInputGroupVariants({ variant, hasError }))}>
          {/* Split Stepper: Decrement on left */}
          {stepper === 'split' && (
            <button
              type="button"
              disabled={!canDecrement}
              onClick={handleDecrement}
              aria-label="Decrement"
              className={cn(
                stepperButtonVariants({ size }),
                'border-r border-core-circle-border-main/60'
              )}
            >
              <Minus size={size === 'sm' ? 12 : 14} />
            </button>
          )}

          {/* Optional Prefix */}
          {prefix && (
            <span className="pl-3 pr-1 text-slate-500 font-medium select-none text-xs sm:text-sm">
              {prefix}
            </span>
          )}

          {/* Number Input Field */}
          <input
            {...props}
            ref={ref}
            id={inputId}
            type="text"
            inputMode="decimal"
            disabled={disabled}
            value={displayString}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            onBlur={handleBlur}
            className={cn(
              numberInputVariants({ size }),
              stepper === 'split' && 'text-center',
              className
            )}
          />

          {/* Optional Suffix */}
          {suffix && (
            <span className="pr-3 pl-1 text-slate-500 font-medium select-none text-xs sm:text-sm">
              {suffix}
            </span>
          )}

          {/* Split Stepper: Increment on right */}
          {stepper === 'split' && (
            <button
              type="button"
              disabled={!canIncrement}
              onClick={handleIncrement}
              aria-label="Increment"
              className={cn(
                stepperButtonVariants({ size }),
                'border-l border-core-circle-border-main/60'
              )}
            >
              <Plus size={size === 'sm' ? 12 : 14} />
            </button>
          )}

          {/* Stacked Stepper on right */}
          {stepper === 'stacked' && (
            <div className="flex flex-col border-l border-core-circle-border-main/60 shrink-0 h-full">
              <button
                type="button"
                disabled={!canIncrement}
                onClick={handleIncrement}
                aria-label="Increment"
                className="flex-1 flex items-center justify-center px-2 hover:bg-slate-100 text-slate-500 hover:text-slate-800 disabled:opacity-30 border-b border-core-circle-border-main/40 transition-colors"
              >
                <Plus size={size === 'sm' ? 10 : 12} />
              </button>
              <button
                type="button"
                disabled={!canDecrement}
                onClick={handleDecrement}
                aria-label="Decrement"
                className="flex-1 flex items-center justify-center px-2 hover:bg-slate-100 text-slate-500 hover:text-slate-800 disabled:opacity-30 transition-colors"
              >
                <Minus size={size === 'sm' ? 10 : 12} />
              </button>
            </div>
          )}
        </div>

        {/* Error or Helper Message */}
        {typeof error === 'string' && error ? (
          <span className="text-xs text-core-circle-destructive">{error}</span>
        ) : helperText ? (
          <span className="text-xs text-core-circle-text-muted">{helperText}</span>
        ) : null}
      </div>
    );
  }
);

NumberInput.displayName = 'NumberInput';
export default NumberInput;
