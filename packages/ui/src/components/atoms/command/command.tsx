'use client';

import * as React from 'react';
import { cn } from '../../../utils/cn';
import { CommandProps, CommandItem } from '../../../interface/atoms/command/command.types';
import { commandContainerVariants } from './command.styles';
import { SearchIcon, XIcon } from '@core-circle/icons';

export const Command = React.forwardRef<HTMLDivElement, CommandProps>(
  (
    {
      className,
      groups = [],
      placeholder = 'Type a command or search...',
      open = true,
      onOpenChange,
      mode = 'inline',
      query: controlledQuery,
      onQueryChange,
      shortcutHint = '⌘K',
      variant = 'default',
      ...props
    },
    ref
  ) => {
    const [internalQuery, setInternalQuery] = React.useState('');
    const [activeIndex, setActiveIndex] = React.useState(0);
    const searchInputRef = React.useRef<HTMLInputElement | null>(null);

    const query = controlledQuery !== undefined ? controlledQuery : internalQuery;

    const setQuery = React.useCallback(
      (newQuery: string) => {
        if (controlledQuery === undefined) {
          setInternalQuery(newQuery);
        }
        onQueryChange?.(newQuery);
        setActiveIndex(0);
      },
      [controlledQuery, onQueryChange]
    );

    // Filtered command items
    const filteredGroups = React.useMemo(() => {
      if (!query.trim()) return groups;
      const lower = query.toLowerCase();
      return groups
        .map((group) => ({
          ...group,
          items: group.items.filter(
            (item) =>
              item.label.toLowerCase().includes(lower) ||
              item.description?.toLowerCase().includes(lower)
          ),
        }))
        .filter((group) => group.items.length > 0);
    }, [groups, query]);

    // Flat list of visible selectable items for keyboard navigation
    const flatItems = React.useMemo(() => {
      const list: CommandItem[] = [];
      filteredGroups.forEach((g) => {
        g.items.forEach((item) => {
          if (!item.disabled) list.push(item);
        });
      });
      return list;
    }, [filteredGroups]);

    // Keyboard navigation handlers
    const handleKeyDown = React.useCallback(
      (e: React.KeyboardEvent) => {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          setActiveIndex((prev) => (prev + 1 < flatItems.length ? prev + 1 : 0));
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          setActiveIndex((prev) => (prev - 1 >= 0 ? prev - 1 : flatItems.length - 1));
        } else if (e.key === 'Enter') {
          e.preventDefault();
          if (flatItems[activeIndex]) {
            flatItems[activeIndex].onSelect?.();
            if (mode === 'modal') onOpenChange?.(false);
          }
        } else if (e.key === 'Escape' && mode === 'modal') {
          e.preventDefault();
          onOpenChange?.(false);
        }
      },
      [flatItems, activeIndex, mode, onOpenChange]
    );

    // Auto-focus search input when opened
    React.useEffect(() => {
      if (open) {
        setTimeout(() => searchInputRef.current?.focus(), 50);
      }
    }, [open]);

    if (mode === 'modal' && !open) return null;

    let itemCounter = -1;

    const content = (
      <div
        {...props}
        ref={ref}
        onKeyDown={handleKeyDown}
        className={cn(commandContainerVariants({ variant }), className)}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-core-circle-border-main/70 gap-3">
          <SearchIcon size={18} className="text-core-circle-text-muted shrink-0" />
          <input
            ref={searchInputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={placeholder}
            className="flex-1 bg-transparent text-sm text-core-circle-text-main placeholder:text-core-circle-text-muted focus:outline-none"
          />
          {query ? (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="text-core-circle-text-muted hover:text-core-circle-text-main p-0.5 rounded cursor-pointer"
            >
              <XIcon size={14} />
            </button>
          ) : (
            shortcutHint && (
              <kbd className="px-1.5 py-0.5 text-[11px] font-semibold text-slate-500 bg-slate-100 border border-slate-200 rounded">
                {shortcutHint}
              </kbd>
            )
          )}
        </div>

        {/* Grouped Commands List */}
        <div className="max-h-[320px] overflow-y-auto p-2 space-y-4">
          {filteredGroups.length === 0 ? (
            <div className="py-8 text-center text-sm text-core-circle-text-muted">
              No matching commands found.
            </div>
          ) : (
            filteredGroups.map((group) => (
              <div key={group.id} className="space-y-1">
                <div className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-core-circle-text-muted/80">
                  {group.heading}
                </div>
                {group.items.map((item) => {
                  if (!item.disabled) itemCounter++;
                  const isCurrentActive = itemCounter === activeIndex;

                  return (
                    <button
                      key={item.id}
                      type="button"
                      disabled={item.disabled}
                      onClick={() => {
                        item.onSelect?.();
                        if (mode === 'modal') onOpenChange?.(false);
                      }}
                      className={cn(
                        'w-full flex items-center justify-between px-3 py-2 rounded-core-circle-lg text-sm text-left transition-colors cursor-pointer',
                        isCurrentActive
                          ? 'bg-core-circle-primary/10 text-core-circle-primary font-medium'
                          : 'hover:bg-slate-100 text-core-circle-text-main',
                        item.disabled && 'opacity-40 cursor-not-allowed hover:bg-transparent'
                      )}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        {item.icon && (
                          <span className="shrink-0 text-current">{item.icon}</span>
                        )}
                        <span className="truncate">{item.label}</span>
                        {item.description && (
                          <span className="text-xs text-core-circle-text-muted truncate">
                            {item.description}
                          </span>
                        )}
                      </div>
                      {item.shortcut && (
                        <kbd className="ml-3 shrink-0 px-1.5 py-0.5 text-[10px] font-mono text-slate-500 bg-slate-100 border border-slate-200 rounded">
                          {item.shortcut}
                        </kbd>
                      )}
                    </button>
                  );
                })}
              </div>
            ))
          )}
        </div>

        {/* Keyboard Footer Info */}
        <div className="px-4 py-2 border-t border-core-circle-border-main/50 bg-slate-50/70 flex items-center justify-between text-[11px] text-core-circle-text-muted">
          <div className="flex items-center gap-3">
            <span>
              <kbd className="font-mono bg-white border border-slate-200 px-1 rounded">↑↓</kbd> Navigate
            </span>
            <span>
              <kbd className="font-mono bg-white border border-slate-200 px-1 rounded">↵</kbd> Select
            </span>
          </div>
          <span>
            <kbd className="font-mono bg-white border border-slate-200 px-1 rounded">esc</kbd> Dismiss
          </span>
        </div>
      </div>
    );

    if (mode === 'modal') {
      return (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-900/40 backdrop-blur-xs">
          <div
            className="fixed inset-0"
            onClick={() => onOpenChange?.(false)}
            aria-hidden="true"
          />
          <div className="relative w-full max-w-xl shadow-2xl z-10">{content}</div>
        </div>
      );
    }

    return content;
  }
);

Command.displayName = 'Command';
export default Command;
