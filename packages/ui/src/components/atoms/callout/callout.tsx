'use client';

import * as React from 'react';
import { cn } from '../../../utils/cn';
import { CalloutProps } from '../../../interface/atoms/callout/callout.types';
import {
  calloutContainerVariants,
  calloutIconVariants,
} from './callout.styles';
import {
  Info,
  CircleCheck,
  AlertTriangle,
  Sparkles,
  XIcon,
} from '@core-circle/icons';

export const Callout = React.forwardRef<HTMLDivElement, CalloutProps>(
  (
    {
      children,
      title,
      variant = 'info',
      size = 'md',
      icon = true,
      dismissible = false,
      onDismiss,
      action,
      className,
    },
    ref
  ) => {
    const [dismissed, setDismissed] = React.useState(false);

    const handleDismiss = React.useCallback(() => {
      setDismissed(true);
      onDismiss?.();
    }, [onDismiss]);

    if (dismissed) return null;

    const defaultIcon = React.useMemo(() => {
      const iconSize = size === 'sm' ? 16 : size === 'md' ? 18 : 20;
      switch (variant) {
        case 'success':
          return <CircleCheck size={iconSize} />;
        case 'warning':
        case 'danger':
          return <AlertTriangle size={iconSize} />;
        case 'brand':
          return <Sparkles size={iconSize} />;
        case 'info':
        case 'neutral':
        default:
          return <Info size={iconSize} />;
      }
    }, [variant, size]);

    return (
      <div
        ref={ref}
        role="region"
        aria-label={typeof title === 'string' ? title : 'Callout notice'}
        className={cn(calloutContainerVariants({ variant, size }), className)}
      >
        {/* Leading Icon */}
        {icon && (
          <div className={cn(calloutIconVariants({ variant, size }))}>
            {typeof icon === 'boolean' ? defaultIcon : icon}
          </div>
        )}

        {/* Text Content */}
        <div className="flex flex-col flex-1 min-w-0 gap-0.5">
          {title && (
            <h5 className="font-bold tracking-tight leading-snug">{title}</h5>
          )}
          <div className="leading-relaxed opacity-90">{children}</div>
          {action && <div className="mt-2.5 flex items-center gap-2">{action}</div>}
        </div>

        {/* Dismiss Button */}
        {dismissible && (
          <button
            type="button"
            onClick={handleDismiss}
            aria-label="Dismiss notice"
            className="p-1 rounded-lg opacity-60 hover:opacity-100 hover:bg-black/5 transition-opacity shrink-0 cursor-pointer"
          >
            <XIcon size={14} />
          </button>
        )}
      </div>
    );
  }
);

Callout.displayName = 'Callout';

export default Callout;
