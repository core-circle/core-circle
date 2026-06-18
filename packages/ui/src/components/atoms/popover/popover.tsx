'use client';

import { useState, useRef, useEffect } from 'react';
import { cn } from '../../../utils/cn';
import { PopoverProps } from '../../../interface/atoms/popover/popover.types';
import { popoverContentVariants } from './popover.styles';

export const Popover = ({
  trigger,
  children,
  position = 'bottom',
  align = 'center',
  open: controlledOpen,
  defaultOpen = false,
  onOpenChange,
  className,
}: PopoverProps) => {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const isOpen = controlledOpen !== undefined ? controlledOpen : uncontrolledOpen;
  const popoverRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  const toggle = () => {
    const next = !isOpen;
    if (controlledOpen === undefined) {
      setUncontrolledOpen(next);
    }
    onOpenChange?.(next);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        if (controlledOpen === undefined) {
          setUncontrolledOpen(false);
        }
        onOpenChange?.(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, controlledOpen, onOpenChange]);

  const getPositionClasses = () => {
    const positions = {
      top: 'bottom-full mb-2',
      bottom: 'top-full mt-2',
      left: 'right-full mr-2',
      right: 'left-full ml-2',
    };
    
    const alignments = {
      start: position === 'top' || position === 'bottom' ? 'left-0' : 'top-0',
      center: position === 'top' || position === 'bottom' ? 'left-1/2 -translate-x-1/2' : 'top-1/2 -translate-y-1/2',
      end: position === 'top' || position === 'bottom' ? 'right-0' : 'bottom-0',
    };

    return `${positions[position]} ${alignments[align]}`;
  };

  return (
    <div className="relative inline-block">
      <div ref={triggerRef} onClick={toggle} className="inline-block cursor-pointer">
        {trigger}
      </div>
      
      {isOpen && (
        <div
          ref={popoverRef}
          className={cn(
            'absolute transition-all duration-200',
            getPositionClasses(),
            popoverContentVariants({ align }),
            className
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
};

Popover.displayName = 'Popover';
