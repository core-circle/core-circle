import * as React from 'react';
import { cn } from '../../../utils/cn';
import { ButtonProps } from '../../../interface/atoms/button/button.types';
import { buttonVariants } from './button.styles';
import { LoadingIcon } from '@core-circle/icons';

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      shape,
      labelSize,
      labelWeight,
      loading,
      startLoadingIcon,
      endLoadingIcon,
      startIcon,
      endIcon,
      children,
      disabled,
      fullWidth,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading;

    const showDefaultLoader = loading && !startLoadingIcon && !endLoadingIcon;

    return (
      <button
        ref={ref}
        disabled={isDisabled}
        className={cn(buttonVariants({ variant, size, shape, labelSize, labelWeight, fullWidth, className }))}
        {...props}
      >
        {loading && (startLoadingIcon || showDefaultLoader) ? (
          <span className="inline-flex shrink-0">
            {startLoadingIcon || <LoadingIcon className="h-4 w-4" />}
          </span>
        ) : (
          startIcon && <span className="inline-flex shrink-0">{startIcon}</span>
        )}

        <span className="truncate">{children}</span>

        {loading && endLoadingIcon ? (
          <span className="inline-flex shrink-0">{endLoadingIcon}</span>
        ) : (
          endIcon && <span className="inline-flex shrink-0">{endIcon}</span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
