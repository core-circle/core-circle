'use client';

import * as React from 'react';
import { cn } from '../../../utils/cn';
import {
  DropdownMenuProps,
  DropdownMenuItemProps,
  DropdownMenuSeparatorProps,
  DropdownMenuLabelProps,
  DropdownMenuVariant,
} from '../../../interface/atoms/dropdown-menu/dropdown-menu.types';
import {
  dropdownMenuContentVariants,
  dropdownMenuItemVariants,
} from './dropdown-menu.styles';

interface DropdownMenuSubComponents {
  Item: React.FC<DropdownMenuItemProps>;
  Separator: React.FC<DropdownMenuSeparatorProps>;
  Label: React.FC<DropdownMenuLabelProps>;
}

const DropdownMenuContext = React.createContext<{
  variant?: DropdownMenuVariant;
  closeMenu: () => void;
}>({
  closeMenu: () => {
    // Default no-op
  },
});

export const DropdownMenu: React.FC<DropdownMenuProps> & DropdownMenuSubComponents = ({
  trigger,
  items,
  children,
  open: controlledOpen,
  defaultOpen = false,
  onOpenChange,
  variant = 'card',
  size = 'md',
  position = 'bottom-start',
  className,
  triggerClassName,
}) => {
  const [internalOpen, setInternalOpen] = React.useState(defaultOpen);
  const isControlled = controlledOpen !== undefined;
  const isOpen = isControlled ? controlledOpen : internalOpen;

  const menuRef = React.useRef<HTMLDivElement>(null);
  const triggerRef = React.useRef<HTMLDivElement>(null);

  const setOpen = React.useCallback(
    (nextState: boolean) => {
      if (!isControlled) {
        setInternalOpen(nextState);
      }
      onOpenChange?.(nextState);
    },
    [isControlled, onOpenChange]
  );

  const toggle = () => setOpen(!isOpen);
  const close = React.useCallback(() => setOpen(false), [setOpen]);

  // Click outside to close
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        triggerRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        close();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, close]);

  // Escape key to close
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        close();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, close]);

  const getPositionClasses = () => {
    switch (position) {
      case 'bottom-start':
        return 'top-full left-0 mt-1.5';
      case 'bottom-end':
        return 'top-full right-0 mt-1.5';
      case 'bottom-center':
        return 'top-full left-1/2 -translate-x-1/2 mt-1.5';
      case 'top-start':
        return 'bottom-full left-0 mb-1.5';
      case 'top-end':
        return 'bottom-full right-0 mb-1.5';
      case 'left':
        return 'right-full top-0 mr-1.5';
      case 'right':
        return 'left-full top-0 ml-1.5';
      default:
        return 'top-full left-0 mt-1.5';
    }
  };

  return (
    <DropdownMenuContext.Provider value={{ variant, closeMenu: close }}>
      <div className="relative inline-flex">
        {/* Trigger */}
        <div
          ref={triggerRef}
          onClick={toggle}
          className={cn('inline-flex cursor-pointer select-none', triggerClassName)}
          aria-haspopup="true"
          aria-expanded={isOpen}
        >
          {trigger}
        </div>

        {/* Dropdown Content */}
        {isOpen && (
          <div
            ref={menuRef}
            className={cn(
              'absolute',
              getPositionClasses(),
              dropdownMenuContentVariants({ variant, size }),
              className
            )}
            role="menu"
          >
            {items ? (
              items.map((item) => (
                <React.Fragment key={item.id}>
                  {item.divider && <DropdownMenu.Separator />}
                  <DropdownMenu.Item
                    icon={item.icon}
                    shortcut={item.shortcut}
                    disabled={item.disabled}
                    destructive={item.destructive}
                    badge={item.badge}
                    onClick={item.onClick}
                  >
                    {item.label}
                  </DropdownMenu.Item>
                </React.Fragment>
              ))
            ) : (
              children
            )}
          </div>
        )}
      </div>
    </DropdownMenuContext.Provider>
  );
};

DropdownMenu.displayName = 'DropdownMenu';

DropdownMenu.Item = function DropdownMenuItemComponent({
  children,
  icon,
  shortcut,
  disabled,
  destructive,
  badge,
  onClick,
  className,
}: DropdownMenuItemProps) {
  const { variant, closeMenu } = React.useContext(DropdownMenuContext);

  const handleClick = () => {
    if (disabled) return;
    onClick?.();
    closeMenu();
  };

  return (
    <div
      role="menuitem"
      aria-disabled={disabled}
      onClick={handleClick}
      className={cn(
        dropdownMenuItemVariants({ variant, destructive, disabled }),
        className
      )}
    >
      <div className="flex items-center gap-2 min-w-0">
        {icon && <span className="shrink-0 text-current opacity-80">{icon}</span>}
        <span className="truncate">{children}</span>
      </div>
      <div className="flex items-center gap-2 ml-3 shrink-0">
        {badge && <span>{badge}</span>}
        {shortcut && (
          <kbd className="font-mono text-[10px] tracking-widest text-slate-400 group-hover:text-slate-600">
            {shortcut}
          </kbd>
        )}
      </div>
    </div>
  );
};

DropdownMenu.Separator = function DropdownMenuSeparatorComponent({
  className,
}: DropdownMenuSeparatorProps) {
  return (
    <div
      role="separator"
      className={cn('my-1 h-px bg-slate-200/80 -mx-1', className)}
    />
  );
};

DropdownMenu.Label = function DropdownMenuLabelComponent({
  children,
  className,
}: DropdownMenuLabelProps) {
  return (
    <div
      className={cn(
        'px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-400 select-none',
        className
      )}
    >
      {children}
    </div>
  );
};

export default DropdownMenu;
