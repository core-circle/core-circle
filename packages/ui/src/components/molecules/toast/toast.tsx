'use client';

import * as React from 'react';
import { cn } from '../../../utils/cn';
import { XIcon, CircleCheck, CircleX, Alert, Info } from '@core-circle/icons';
import {
  ToastProps,
  ToastVariant,
} from '../../../interface/molecules/toast/toast.types';
import { toastVariants, toastIconVariants } from './toast.styles';

const getIcon = (variant: ToastVariant) => {
  const size = 32;
  switch (variant) {
    case 'success':
      return <CircleCheck size={size} className="" />;
    case 'error':
      return <CircleX size={size} className="" />;
    case 'warning':
      return <Alert size={size} className="" />;
    case 'info':
      return <Info size={size} className="" />;
    default:
      return null;
  }
};

export const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
  (
    { id, title, description, action, variant = 'default', onClose, ...props },
    ref,
  ) => {
    return (
      <div ref={ref} className={cn(toastVariants({ variant }))} {...props}>
        <div className="flex gap-4 flex-1">
          <div className={cn(toastIconVariants({ variant }))}>
            {getIcon(variant)}
          </div>
          <div className="grid gap-1">
            {title && (
              <div className="text-sm font-core-circle-bold leading-none">
                {title}
              </div>
            )}
            {description && (
              <div className="text-xs opacity-90 leading-relaxed">
                {description}
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2 ml-4">
          {action}
          <button
            onClick={() => onClose?.(id)}
            className="rounded-lg p-1 text-current/50 transition-colors hover:text-current hover:bg-current/10"
            aria-label="Close"
          >
            <XIcon size={16} />
          </button>
        </div>
      </div>
    );
  },
);

Toast.displayName = 'Toast';
