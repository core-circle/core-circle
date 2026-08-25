'use client';

import * as React from 'react';
import { cn } from '../../../utils/cn';
import { DrawerProps } from '../../../interface/atoms/drawer/drawer.types';
import { drawerOverlayStyles, drawerPanelStyles } from './drawer.styles';
import { XIcon } from '@core-circle/icons';

export const Drawer = React.forwardRef<HTMLDivElement, DrawerProps>(
  (
    {
      isOpen,
      onClose,
      position = 'right',
      size = 'md',
      variant = 'default',
      title,
      description,
      footer,
      showCloseButton = true,
      closeOnOverlayClick = true,
      closeOnEsc = true,
      children,
      className,
      overlayClassName,
      ...props
    },
    ref
  ) => {
    // ESC key listener
    React.useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (closeOnEsc && e.key === 'Escape' && isOpen) {
          onClose();
        }
      };
      if (isOpen) {
        document.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden';
      }
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = '';
      };
    }, [isOpen, closeOnEsc, onClose]);

    // Slide transforms
    const getTransformClass = () => {
      if (isOpen) return 'translate-x-0 translate-y-0';
      switch (position) {
        case 'right': return 'translate-x-full';
        case 'left': return '-translate-x-full';
        case 'top': return '-translate-y-full';
        case 'bottom': return 'translate-y-full';
      }
    };

    return (
      <div className={cn('relative z-50', !isOpen && 'pointer-events-none')}>
        {/* Backdrop Overlay */}
        <div
          className={cn(drawerOverlayStyles({ isOpen }), overlayClassName)}
          onClick={() => {
            if (closeOnOverlayClick) onClose();
          }}
          aria-hidden="true"
        />

        {/* Sliding Panel */}
        <div
          ref={ref}
          role="dialog"
          aria-modal="true"
          className={cn(
            drawerPanelStyles({ variant, position, size }),
            getTransformClass(),
            className
          )}
          {...props}
        >
          {/* Header */}
          {(title || description || showCloseButton) && (
            <div className="flex items-start justify-between p-6 border-b border-inherit shrink-0">
              <div className="space-y-1 pr-4">
                {title && (
                  <h3 className="text-lg font-core-circle-bold leading-none tracking-tight">
                    {title}
                  </h3>
                )}
                {description && (
                  <p className="text-xs text-core-circle-text-muted leading-relaxed">
                    {description}
                  </p>
                )}
              </div>
              {showCloseButton && (
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-full p-1.5 text-core-circle-text-muted hover:bg-black/5 hover:text-core-circle-text-main transition-colors focus:outline-none shrink-0"
                  aria-label="Close drawer"
                >
                  <XIcon size={18} />
                </button>
              )}
            </div>
          )}

          {/* Content Body */}
          <div className="flex-1 overflow-y-auto p-6">
            {children}
          </div>

          {/* Footer */}
          {footer && (
            <div className="p-6 border-t border-inherit shrink-0 bg-inherit">
              {footer}
            </div>
          )}
        </div>
      </div>
    );
  }
);

Drawer.displayName = 'Drawer';
