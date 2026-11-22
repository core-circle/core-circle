'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '../../../utils/cn';
import { XIcon } from '@core-circle/icons';
import { DialogProps } from '../../../interface/atoms/dialog/dialog.types';
import { 
  dialogOverlayVariants, 
  dialogContentVariants, 
  dialogHeaderStyles, 
  dialogFooterStyles,
  dialogCloseButtonStyles 
} from './dialog.styles';
import { Typography } from '../typography/typography';

export const Dialog: React.FC<DialogProps> = ({
  open: controlledOpen,
  defaultOpen = false,
  onOpenChange,
  trigger,
  title,
  description,
  icon,
  children,
  footer,
  variant = 'card',
  size = 'md',
  position = 'center',
  className,
  overlayClassName,
  showCloseButton = true,
  closeOnOverlayClick = true,
  closeOnEsc = true,
}) => {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const [mounted, setMounted] = useState(false);
  
  const isOpen = controlledOpen !== undefined ? controlledOpen : uncontrolledOpen;

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Prevent scroll when dialog is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const close = React.useCallback(() => {
    if (controlledOpen === undefined) {
      setUncontrolledOpen(false);
    }
    onOpenChange?.(false);
  }, [controlledOpen, onOpenChange]);

  // Handle ESC key to close
  useEffect(() => {
    if (!isOpen || !closeOnEsc) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        close();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeOnEsc, close]);

  const toggle = () => {
    const next = !isOpen;
    if (controlledOpen === undefined) {
      setUncontrolledOpen(next);
    }
    onOpenChange?.(next);
  };

  if (!mounted) return trigger ? <div onClick={toggle} className="inline-block">{trigger}</div> : null;

  return (
    <>
      {trigger && (
        <div onClick={toggle} className="inline-block cursor-pointer">
          {trigger}
        </div>
      )}
      
      {isOpen && createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Overlay Backdrop */}
          <div 
            className={cn(dialogOverlayVariants, overlayClassName)} 
            onClick={closeOnOverlayClick ? close : undefined} 
          />

          {/* Dialog Modal Card */}
          <div 
            role="dialog"
            aria-modal="true"
            className={cn(dialogContentVariants({ variant, size, position }), className)}
          >
            {/* Top Gradient Banner for 'gradient' variant */}
            {variant === 'gradient' && (
              <div className="h-1.5 w-full bg-gradient-to-r from-core-circle-primary via-indigo-600 to-purple-600 absolute top-0 left-0 right-0" />
            )}

            {/* Header Area */}
            {(title || icon || description) && (
              <div className={cn(
                dialogHeaderStyles,
                variant === 'centered-hero' && 'items-center text-center'
              )}>
                {icon && (
                  <div className="mb-2">
                    {icon}
                  </div>
                )}
                {title && (
                  <Typography variant="h3" className="text-lg font-core-circle-bold leading-tight tracking-tight text-slate-900">
                    {title}
                  </Typography>
                )}
                {description && (
                  <Typography variant="p" className="text-xs text-slate-500 leading-relaxed mt-1">
                    {description}
                  </Typography>
                )}
              </div>
            )}
            
            {/* Body Content */}
            <div className="py-2 text-slate-700">
              {children}
            </div>
            
            {/* Footer Actions */}
            {footer && (
              <div className={dialogFooterStyles}>
                {footer}
              </div>
            )}
            
            {/* Close Button */}
            {showCloseButton && (
              <button
                type="button"
                onClick={close}
                className={dialogCloseButtonStyles}
                aria-label="Close dialog"
              >
                <XIcon size={16} />
              </button>
            )}
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

Dialog.displayName = 'Dialog';

export default Dialog;
