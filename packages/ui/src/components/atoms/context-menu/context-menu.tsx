'use client';

import * as React from 'react';
import { cn } from '../../../utils/cn';
import {
  ContextMenuProps,
  ContextMenuItemProps,
  ContextMenuSeparatorProps,
  ContextMenuLabelProps,
  ContextMenuVariant,
} from '../../../interface/atoms/context-menu/context-menu.types';
import {
  contextMenuContentVariants,
  contextMenuItemVariants,
} from './context-menu.styles';

interface ContextMenuSubComponents {
  Item: React.FC<ContextMenuItemProps>;
  Separator: React.FC<ContextMenuSeparatorProps>;
  Label: React.FC<ContextMenuLabelProps>;
}

const ContextMenuContext = React.createContext<{
  variant?: ContextMenuVariant;
  closeMenu: () => void;
}>({
  closeMenu: () => {
    // Default no-op
  },
});

export const ContextMenu: React.FC<ContextMenuProps> & ContextMenuSubComponents = ({
  children,
  items,
  variant = 'card',
  size = 'md',
  disabled = false,
  className,
  triggerClassName,
}) => {
  const [open, setOpen] = React.useState(false);
  const [coords, setCoords] = React.useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const menuRef = React.useRef<HTMLDivElement>(null);
  const triggerRef = React.useRef<HTMLDivElement>(null);

  const close = React.useCallback(() => setOpen(false), []);

  const handleContextMenu = (e: React.MouseEvent) => {
    if (disabled) return;
    e.preventDefault();
    e.stopPropagation();

    // Clamp coordinates to stay within window viewport
    const menuWidth = 220;
    const menuHeight = 260;
    const x = Math.min(e.clientX, window.innerWidth - menuWidth - 10);
    const y = Math.min(e.clientY, window.innerHeight - menuHeight - 10);

    setCoords({ x, y });
    setOpen(true);
  };

  // Close on outside click
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        close();
      }
    };

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
      window.addEventListener('scroll', close);
      window.addEventListener('resize', close);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', close);
      window.removeEventListener('resize', close);
    };
  }, [open, close]);

  // Close on Escape key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) {
        close();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, close]);

  return (
    <ContextMenuContext.Provider value={{ variant, closeMenu: close }}>
      <div
        ref={triggerRef}
        onContextMenu={handleContextMenu}
        className={cn('inline-block w-full', triggerClassName)}
      >
        {children}

        {open && (
          <div
            ref={menuRef}
            style={{ top: `${coords.y}px`, left: `${coords.x}px` }}
            className={cn(contextMenuContentVariants({ variant, size }), className)}
            role="menu"
          >
            {items &&
              items.map((item) => (
                <React.Fragment key={item.id}>
                  {item.divider && <ContextMenu.Separator />}
                  <ContextMenu.Item
                    icon={item.icon}
                    shortcut={item.shortcut}
                    disabled={item.disabled}
                    destructive={item.destructive}
                    badge={item.badge}
                    onClick={item.onClick}
                  >
                    {item.label}
                  </ContextMenu.Item>
                </React.Fragment>
              ))}
          </div>
        )}
      </div>
    </ContextMenuContext.Provider>
  );
};

ContextMenu.displayName = 'ContextMenu';

ContextMenu.Item = function ContextMenuItemComponent({
  children,
  icon,
  shortcut,
  disabled,
  destructive,
  badge,
  onClick,
  className,
}: ContextMenuItemProps) {
  const { variant, closeMenu } = React.useContext(ContextMenuContext);

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
        contextMenuItemVariants({ variant, destructive, disabled }),
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

ContextMenu.Separator = function ContextMenuSeparatorComponent({
  className,
}: ContextMenuSeparatorProps) {
  return (
    <div
      role="separator"
      className={cn('my-1 h-px bg-slate-200/80 -mx-1', className)}
    />
  );
};

ContextMenu.Label = function ContextMenuLabelComponent({
  children,
  className,
}: ContextMenuLabelProps) {
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

export default ContextMenu;
