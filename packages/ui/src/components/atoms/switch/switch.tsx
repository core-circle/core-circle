'use client';

import * as React from 'react';
import { cn } from '../../../utils/cn';
import { SwitchProps } from '../../../interface/atoms/switch/switch.types';
import { switchVariants, switchThumbVariants } from './switch.styles';

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, variant, size, checked, defaultChecked, onCheckedChange, disabled, ...props }, ref) => {
    const [internalChecked, setInternalChecked] = React.useState(defaultChecked || false);
    const isChecked = checked !== undefined ? checked : internalChecked;

    const handleToggle = () => {
      if (disabled) return;
      const newValue = !isChecked;
      if (checked === undefined) {
        setInternalChecked(newValue);
      }
      onCheckedChange?.(newValue);
    };

    return (
      <button
        type="button"
        role="switch"
        aria-checked={isChecked}
        data-state={isChecked ? 'checked' : 'unchecked'}
        disabled={disabled}
        onClick={handleToggle}
        className={cn(switchVariants({ variant, size }), className)}
      >
        <span
          data-state={isChecked ? 'checked' : 'unchecked'}
          className={cn(switchThumbVariants({ size }))}
        />
        <input
          ref={ref}
          type="checkbox"
          checked={isChecked}
          disabled={disabled}
          readOnly
          className="sr-only"
          {...props}
        />
      </button>
    );
  }
);

Switch.displayName = 'Switch';
