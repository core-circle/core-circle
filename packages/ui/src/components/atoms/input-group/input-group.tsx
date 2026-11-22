'use client';

import * as React from 'react';
import { cn } from '../../../utils/cn';
import {
  InputGroupProps,
  InputGroupTextProps,
  InputGroupButtonProps,
} from '../../../interface/atoms/input-group/input-group.types';
import { inputGroupVariants, inputGroupTextVariants } from './input-group.styles';
import { Label } from '../label/label';

export const InputGroupText: React.FC<InputGroupTextProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <span
      className={cn(
        inputGroupTextVariants(),
        'text-slate-500 font-medium',
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

export const InputGroupButton: React.FC<InputGroupButtonProps> = ({
  children,
  variant = 'default',
  className,
  ...props
}) => {
  return (
    <button
      type="button"
      className={cn(
        'inline-flex items-center justify-center px-4 font-semibold shrink-0 transition-colors focus:outline-none focus:ring-2 focus:ring-core-circle-primary/20 disabled:opacity-50 select-none cursor-pointer',
        variant === 'default' &&
          'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-core-circle-border-main',
        variant === 'primary' &&
          'bg-core-circle-primary hover:bg-core-circle-primary/90 text-white border border-core-circle-primary',
        variant === 'outline' &&
          'bg-white hover:bg-slate-50 text-slate-700 border border-core-circle-border-main',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export interface InputGroupComponent
  extends React.ForwardRefExoticComponent<
    InputGroupProps & React.RefAttributes<HTMLDivElement>
  > {
  Text: typeof InputGroupText;
  Button: typeof InputGroupButton;
}

export const InputGroup = React.forwardRef<HTMLDivElement, InputGroupProps>(
  (
    {
      className,
      size = 'md',
      joined = true,
      fullWidth = false,
      label,
      error,
      helperText,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div className={cn('flex flex-col gap-1.5', fullWidth ? 'w-full' : 'w-auto max-w-md')}>
        {label && <Label>{label}</Label>}

        <div
          ref={ref}
          className={cn(
            inputGroupVariants({ size, joined, fullWidth }),
            error && '[&>input]:border-core-circle-destructive [&>input]:focus:ring-core-circle-destructive/20',
            className
          )}
          {...props}
        >
          {children}
        </div>

        {typeof error === 'string' && error ? (
          <span className="text-xs text-core-circle-destructive">{error}</span>
        ) : helperText ? (
          <span className="text-xs text-core-circle-text-muted">{helperText}</span>
        ) : null}
      </div>
    );
  }
) as InputGroupComponent;

InputGroup.Text = InputGroupText;
InputGroup.Button = InputGroupButton;
InputGroup.displayName = 'InputGroup';

export default InputGroup;
