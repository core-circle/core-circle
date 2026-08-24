import React from 'react';
import { cn } from '../../../utils/cn';
import { XIcon } from '@core-circle/icons';
import { ToastProps } from '../../../interface/atoms/toast/toast.types';
import { 
  toastVariants, 
  toastTitleStyles, 
  toastDescriptionStyles, 
  toastCloseButtonStyles,
  toastActionStyles
} from './toast.styles';
import { Typography } from '../typography/typography';
import { Button } from '../button/button';

export const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
  ({ className, variant, title, description, action, icon, onClose, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(toastVariants({ variant }), className)}
        {...props}
      >
        <div className="flex gap-3 items-start">
          {icon && <div className="mt-0.5">{icon}</div>}
          <div className="grid gap-1">
            {title && (
              <Typography variant="h4" className={toastTitleStyles}>
                {title}
              </Typography>
            )}
            {description && (
              <Typography variant="p" className={toastDescriptionStyles}>
                {description}
              </Typography>
            )}
          </div>
        </div>
        {action && (
          <div className={toastActionStyles}>
            {action}
          </div>
        )}
        <Button
          variant="ghost"
          onClick={() => onClose?.(props.id)}
          className={toastCloseButtonStyles}
          aria-label="Close toast"
        >
          <XIcon size={16} />
        </Button>
      </div>
    );
  }
);

Toast.displayName = 'Toast';
