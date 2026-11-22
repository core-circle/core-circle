'use client';

import * as React from 'react';
import { cn } from '../../../utils/cn';
import {
  PasswordInputProps,
  PasswordStrength,
} from '../../../interface/atoms/password-input/password-input.types';
import {
  passwordInputContainerVariants,
  passwordInputVariants,
  strengthBarVariants,
} from './password-input.styles';
import { Lock, Unlock, AlertTriangle } from '@core-circle/icons';
import { Label } from '../label/label';

export function calculatePasswordStrength(pass: string): {
  strength: PasswordStrength;
  score: number;
  label: string;
} {
  if (!pass) return { strength: 'weak', score: 0, label: 'Empty' };

  let score = 0;
  if (pass.length >= 8) score += 1;
  if (pass.length >= 12) score += 1;
  if (/[A-Z]/.test(pass)) score += 1;
  if (/[0-9]/.test(pass)) score += 1;
  if (/[^A-Za-z0-9]/.test(pass)) score += 1;

  if (score <= 1) return { strength: 'weak', score, label: 'Weak' };
  if (score === 2 || score === 3) return { strength: 'fair', score, label: 'Fair' };
  if (score === 4) return { strength: 'good', score, label: 'Good' };
  return { strength: 'strong', score, label: 'Strong' };
}

export const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
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
      showStrength = false,
      capsLockWarning = true,
      showToggle = true,
      onStrengthChange,
      id,
      value,
      defaultValue,
      onChange,
      onKeyDown,
      onKeyUp,
      disabled,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId();
    const inputId = id || generatedId;
    const [visible, setVisible] = React.useState(false);
    const [capsLockActive, setCapsLockActive] = React.useState(false);
    const [currentValue, setCurrentValue] = React.useState<string>(
      (value as string) || (defaultValue as string) || ''
    );

    React.useEffect(() => {
      if (value !== undefined) {
        setCurrentValue(value as string);
      }
    }, [value]);

    const strengthInfo = React.useMemo(
      () => calculatePasswordStrength(currentValue),
      [currentValue]
    );

    React.useEffect(() => {
      if (showStrength && onStrengthChange) {
        onStrengthChange(strengthInfo.strength, strengthInfo.score);
      }
    }, [strengthInfo, showStrength, onStrengthChange]);

    const handleKeyActivity = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.getModifierState) {
        setCapsLockActive(e.getModifierState('CapsLock'));
      }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (value === undefined) {
        setCurrentValue(e.target.value);
      }
      onChange?.(e);
    };

    const hasError = !!error;

    return (
      <div
        className={cn(
          passwordInputContainerVariants({ fullWidth }),
          wrapperClassName
        )}
      >
        {label && (
          <div className="flex items-center justify-between">
            <Label htmlFor={inputId}>{label}</Label>
            {capsLockActive && capsLockWarning && (
              <span className="flex items-center gap-1 text-[11px] font-medium text-amber-600 animate-pulse">
                <AlertTriangle size={12} /> Caps Lock On
              </span>
            )}
          </div>
        )}

        <div className="relative flex items-center w-full">
          <input
            {...props}
            ref={ref}
            id={inputId}
            type={visible ? 'text' : 'password'}
            disabled={disabled}
            value={value}
            defaultValue={defaultValue}
            onChange={handleChange}
            onKeyDown={(e) => {
              handleKeyActivity(e);
              onKeyDown?.(e);
            }}
            onKeyUp={(e) => {
              handleKeyActivity(e);
              onKeyUp?.(e);
            }}
            className={cn(
              passwordInputVariants({ variant, size, hasError }),
              className
            )}
          />

          {showToggle && (
            <button
              type="button"
              aria-label={visible ? 'Hide password' : 'Show password'}
              disabled={disabled}
              onClick={() => setVisible(!visible)}
              className={cn(
                'absolute right-2.5 p-1 text-slate-400 hover:text-slate-600 transition-colors focus:outline-none focus:text-core-circle-primary disabled:opacity-50',
                size === 'sm' && 'right-1.5'
              )}
            >
              {visible ? (
                <Unlock size={size === 'sm' ? 14 : size === 'lg' ? 18 : 16} />
              ) : (
                <Lock size={size === 'sm' ? 14 : size === 'lg' ? 18 : 16} />
              )}
            </button>
          )}
        </div>

        {/* Strength Meter */}
        {showStrength && currentValue.length > 0 && (
          <div className="flex flex-col gap-1 mt-1">
            <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
              <div
                className={cn(
                  strengthBarVariants({ strength: strengthInfo.strength })
                )}
              />
            </div>
            <div className="flex items-center justify-between text-[11px] text-slate-500">
              <span>Password strength:</span>
              <span
                className={cn(
                  'font-semibold capitalize',
                  strengthInfo.strength === 'weak' && 'text-red-500',
                  strengthInfo.strength === 'fair' && 'text-amber-500',
                  strengthInfo.strength === 'good' && 'text-blue-500',
                  strengthInfo.strength === 'strong' && 'text-emerald-500'
                )}
              >
                {strengthInfo.label}
              </span>
            </div>
          </div>
        )}

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

PasswordInput.displayName = 'PasswordInput';
export default PasswordInput;
