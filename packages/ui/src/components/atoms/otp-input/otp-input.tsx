'use client';

import * as React from 'react';
import { cn } from '../../../utils/cn';
import { OTPInputProps } from '../../../interface/atoms/otp-input/otp-input.types';
import { otpContainerVariants, otpSlotVariants } from './otp-input.styles';

export const OtpInput = React.forwardRef<HTMLDivElement, OTPInputProps>(
  (
    {
      length = 6,
      value: controlledValue,
      defaultValue = '',
      onChange,
      onComplete,
      variant = 'outline',
      size = 'md',
      shape = 'rounded',
      mask = false,
      maskChar = '•',
      separator,
      disabled = false,
      autoFocus = false,
      error,
      helperText,
      className,
      ...props
    },
    ref
  ) => {
    const [otpValues, setOtpValues] = React.useState<string[]>(() => {
      const initial = (controlledValue !== undefined ? controlledValue : defaultValue).split('');
      return Array.from({ length }, (_, i) => initial[i] || '');
    });

    const inputRefs = React.useRef<(HTMLInputElement | null)[]>([]);

    React.useEffect(() => {
      if (controlledValue !== undefined) {
        const valArr = controlledValue.split('');
        setOtpValues(Array.from({ length }, (_, i) => valArr[i] || ''));
      }
    }, [controlledValue, length]);

    const handleInputChange = (index: number, val: string) => {
      if (disabled) return;
      const lastChar = val.slice(-1);
      const newOtp = [...otpValues];
      newOtp[index] = lastChar;
      setOtpValues(newOtp);

      const fullOtp = newOtp.join('');
      onChange?.(fullOtp);

      if (lastChar && index < length - 1) {
        inputRefs.current[index + 1]?.focus();
      }

      if (newOtp.every((char) => char !== '') && newOtp.length === length) {
        onComplete?.(fullOtp);
      }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Backspace') {
        if (!otpValues[index] && index > 0) {
          inputRefs.current[index - 1]?.focus();
          const newOtp = [...otpValues];
          newOtp[index - 1] = '';
          setOtpValues(newOtp);
          onChange?.(newOtp.join(''));
        }
      } else if (e.key === 'ArrowLeft' && index > 0) {
        e.preventDefault();
        inputRefs.current[index - 1]?.focus();
      } else if (e.key === 'ArrowRight' && index < length - 1) {
        e.preventDefault();
        inputRefs.current[index + 1]?.focus();
      }
    };

    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
      e.preventDefault();
      if (disabled) return;
      const pastedData = e.clipboardData.getData('text').trim();
      if (!pastedData) return;

      const pastedChars = pastedData.split('').slice(0, length);
      const newOtp = Array.from({ length }, (_, i) => pastedChars[i] || '');
      setOtpValues(newOtp);

      const fullOtp = newOtp.join('');
      onChange?.(fullOtp);

      const nextEmptyIndex = newOtp.findIndex((char) => char === '');
      const focusIndex = nextEmptyIndex === -1 ? length - 1 : nextEmptyIndex;
      inputRefs.current[focusIndex]?.focus();

      if (newOtp.every((char) => char !== '') && newOtp.length === length) {
        onComplete?.(fullOtp);
      }
    };

    const halfLength = Math.floor(length / 2);

    return (
      <div
        ref={ref}
        className={cn(otpContainerVariants({ disabled }), className)}
        {...props}
      >
        <div className="flex items-center gap-2">
          {Array.from({ length }, (_, i) => (
            <React.Fragment key={i}>
              <input
                ref={(el) => {
                  inputRefs.current[i] = el;
                }}
                type={mask ? 'password' : 'text'}
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={1}
                value={mask && otpValues[i] ? maskChar : otpValues[i]}
                onChange={(e) => handleInputChange(i, e.target.value)}
                onKeyDown={(e) => handleKeyDown(i, e)}
                onPaste={handlePaste}
                autoFocus={autoFocus && i === 0}
                disabled={disabled}
                className={cn(
                  otpSlotVariants({ variant, size, shape, hasError: !!error })
                )}
                aria-label={`Digit ${i + 1}`}
              />

              {/* Mid-point separator slot */}
              {separator && i === halfLength - 1 && (
                <span className="text-slate-400 font-bold px-1 select-none">
                  {separator}
                </span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Error or helper text */}
        {(error || helperText) && (
          <p
            className={cn(
              'text-[11px] font-core-circle-medium pl-1 transition-all duration-200',
              error ? 'text-core-circle-warning' : 'text-core-circle-text-muted'
            )}
          >
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

OtpInput.displayName = 'OtpInput';

export const OTPInput = OtpInput;

export default OtpInput;
