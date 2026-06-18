'use client';

import { useState, useEffect } from 'react';
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
import { Button } from '../button/button';

export const Dialog = ({
  open: controlledOpen,
  defaultOpen = false,
  onOpenChange,
  trigger,
  title,
  children,
  footer,
  size = 'md',
  className,
  closeOnOverlayClick = true,
}: DialogProps) => {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const [mounted, setMounted] = useState(false);
  
  const isOpen = controlledOpen !== undefined ? controlledOpen : uncontrolledOpen;

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

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

  const toggle = () => {
    const next = !isOpen;
    if (controlledOpen === undefined) {
      setUncontrolledOpen(next);
    }
    onOpenChange?.(next);
  };

  const close = () => {
    if (controlledOpen === undefined) {
      setUncontrolledOpen(false);
    }
    onOpenChange?.(false);
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
          <div 
            className={dialogOverlayVariants} 
            onClick={closeOnOverlayClick ? close : undefined} 
          />
          <div className={cn(dialogContentVariants({ size }), className)}>
            <div className={dialogHeaderStyles}>
              {title && (
                <Typography variant="h2" className="text-lg font-core-circle-bold leading-none tracking-tight">
                  {title}
                </Typography>
              )}
            </div>
            
            <div className="py-4">
              {children}
            </div>
            
            {footer && (
              <div className={dialogFooterStyles}>
                {footer}
              </div>
            )}
            
            <Button
              variant="ghost"
              onClick={close}
              className={dialogCloseButtonStyles}
              aria-label="Close dialog"
            >
              <XIcon size={20} />
            </Button>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

Dialog.displayName = 'Dialog';
