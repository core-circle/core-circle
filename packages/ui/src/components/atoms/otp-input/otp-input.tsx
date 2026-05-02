'use client';

import * as React from 'react';
import { cn } from '../../../utils/cn';
import { OTPInputProps } from '../../../interface/atoms/otp-input/otp-input.types';
import { otpContainerVariants, otpGroupVariants, otpInputVariants } from './otp-input.styles';

export const OTPInput = React.forwardRef<HTMLDivElement, OTPInputProps>(
  (
    {
      length = 4,
      variant = 'outline',
      size = 'md',
      onChange,
      onComplete,
      error,
      helperText,
      value: controlledValue,
      mask = false,
      disabled = false,
      className,
      ...props
    },
    ref
  ) => {
    const [values, setValues] = React.useState<string[]>(
      controlledValue ? controlledValue.split('').slice(0, length) : Array(length).fill('')
    );
    const inputsRef = React.useRef<(HTMLInputElement | null)[]>([]);

    React.useEffect(() => {
      setValues((prev) => {
        const baseValue = controlledValue !== undefined ? controlledValue : prev.join('');
        const newValues = baseValue.split('').slice(0, length);
        return [...newValues, ...Array(Math.max(0, length - newValues.length)).fill('')];
      });
    }, [controlledValue, length]);

    const handleValueChange = (newValues: string[]) => {
      const combinedValue = newValues.join('');
      setValues(newValues);
      onChange?.(combinedValue);
      if (combinedValue.length === length) {
        onComplete?.(combinedValue);
      }
    };

    const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value;
      if (!val) return;

      const char = val.slice(-1);
      const newValues = [...values];
      newValues[index] = char;
      
      handleValueChange(newValues);

      // Move to next input
      if (index < length - 1) {
        inputsRef.current[index + 1]?.focus();
      }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Backspace') {
        if (!values[index] && index > 0) {
          // Move to previous input on backspace if current is empty
          const newValues = [...values];
          newValues[index - 1] = '';
          handleValueChange(newValues);
          inputsRef.current[index - 1]?.focus();
        } else {
          const newValues = [...values];
          newValues[index] = '';
          handleValueChange(newValues);
        }
      } else if (e.key === 'ArrowLeft' && index > 0) {
        inputsRef.current[index - 1]?.focus();
      } else if (e.key === 'ArrowRight' && index < length - 1) {
        inputsRef.current[index + 1]?.focus();
      }
    };

    const handlePaste = (e: React.ClipboardEvent) => {
      e.preventDefault();
      const pasteData = e.clipboardData.getData('text').slice(0, length).split('');
      const newValues = [...values];
      
      pasteData.forEach((char, i) => {
        if (i < length) newValues[i] = char;
      });

      handleValueChange(newValues);
      
      // Focus the next empty input or the last one
      const nextEmpty = newValues.findIndex(v => !v);
      const focusIndex = nextEmpty === -1 ? length - 1 : nextEmpty;
      inputsRef.current[focusIndex]?.focus();
    };

    return (
      <div ref={ref} className={cn(otpContainerVariants(), className)}>
        <div className={cn(otpGroupVariants({ size }))}>
          {values.map((val, i) => (
            <input
              key={i}
              ref={el => { inputsRef.current[i] = el; }}
              type={mask ? 'password' : 'text'}
              inputMode="numeric"
              autoComplete="one-time-code"
              pattern="\d*"
              maxLength={1}
              value={val}
              disabled={disabled}
              onChange={e => handleChange(i, e)}
              onKeyDown={e => handleKeyDown(i, e)}
              onPaste={handlePaste}
              className={cn(otpInputVariants({ variant, size, hasError: !!error }))}
              {...props}
            />
          ))}
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

OTPInput.displayName = 'OTPInput';
