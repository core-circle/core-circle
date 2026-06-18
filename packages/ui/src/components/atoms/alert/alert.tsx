import React from 'react';
import { cn } from '../../../utils/cn';
import { XIcon } from '@core-circle/icons';
import { AlertProps } from '../../../interface/atoms/alert/alert.types';
import { alertVariants, alertTitleStyles, alertDescriptionStyles, alertCloseButtonStyles } from './alert.styles';
import { Typography } from '../typography/typography';
import { Button } from '../button/button';

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant, title, children, icon, onClose, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="alert"
        className={cn(alertVariants({ variant }), className)}
        {...props}
      >
        {icon && <span className="mr-3 mt-0.5">{icon}</span>}
        <div className="flex-1">
          {title && (
            <Typography variant="h4" className={alertTitleStyles}>
              {title}
            </Typography>
          )}
          <div className={alertDescriptionStyles}>{children}</div>
        </div>
        {onClose && (
          <Button
            variant="ghost"
            onClick={onClose}
            className={alertCloseButtonStyles}
            aria-label="Close alert"
          >
            <XIcon size={16} />
          </Button>
        )}
      </div>
    );
  }
);

Alert.displayName = 'Alert';
