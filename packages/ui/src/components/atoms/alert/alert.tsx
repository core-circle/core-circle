import React from 'react';
import { cn } from '../../../utils/cn';
import { XIcon } from '@core-circle/icons';
import { AlertProps } from '../../../interface/atoms/alert/alert.types';
import { alertVariants, alertTitleStyles, alertDescriptionStyles, alertCloseButtonStyles } from './alert.styles';
import { Typography } from '../typography/typography';
import { Button } from '../button/button';

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      className,
      variant = 'info',
      title,
      description,
      children,
      icon,
      action,
      dismissible = false,
      onDismiss,
      onClose,
      fullWidth = true,
      ...props
    },
    ref
  ) => {
    const handleClose = onDismiss || onClose;
    const shouldShowClose = dismissible || Boolean(handleClose);
    const content = description || children;

    return (
      <div
        ref={ref}
        role="alert"
        className={cn(
          alertVariants({ variant }),
          !fullWidth && 'w-fit',
          className
        )}
        {...props}
      >
        {/* Title row with icon on the same line */}
        {title ? (
          <div className="flex items-center gap-2 mb-1.5 min-w-0">
            {icon && (
              <span className="shrink-0 text-core-circle-primary/90 inline-flex items-center">
                {icon}
              </span>
            )}
            <Typography variant="h4" className={alertTitleStyles}>
              {title}
            </Typography>
          </div>
        ) : null}

        {/* Content & Action Area */}
        <div className={cn(
          "flex-1 min-w-0",
          !title && icon ? "flex items-start gap-2.5" : ""
        )}>
          {!title && icon && (
            <span className="shrink-0 mt-0.5 text-core-circle-primary/90 inline-flex items-center">
              {icon}
            </span>
          )}

          <div className="flex-1 min-w-0">
            {content && (
              <div className={alertDescriptionStyles}>
                {content}
              </div>
            )}
            {action && (
              <div className="mt-3 flex items-center gap-3">
                {action}
              </div>
            )}
          </div>
        </div>

        {/* Top-Right Dismiss Icon Button */}
        {shouldShowClose && (
          <Button
            variant="ghost"
            onClick={handleClose}
            className={alertCloseButtonStyles}
            aria-label="Close alert"
          >
            <XIcon size={18} />
          </Button>
        )}
      </div>
    );
  }
);

Alert.displayName = 'Alert';
