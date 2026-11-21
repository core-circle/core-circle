'use client';

import * as React from 'react';
import { cn } from '../../../utils/cn';
import { MultiSelectProps } from '../../../interface/atoms/multi-select/multi-select.types';
import { 
  multiSelectContainerVariants, 
  multiSelectTriggerVariants, 
  multiSelectDropdownVariants, 
  multiSelectOptionVariants 
} from './multi-select.styles';
import { 
  ChevronDown, 
  XIcon, 
  CheckIcon, 
  SearchIcon 
} from '@core-circle/icons';

export const MultiSelect = React.forwardRef<HTMLDivElement, MultiSelectProps>(
  (
    {
      options = [],
      value: controlledValue,
      defaultValue = [],
      onChange,
      variant = 'outline',
      size = 'md',
      label,
      error,
      helperText,
      placeholder = 'Select options...',
      searchable = true,
      searchPlaceholder = 'Search options...',
      showSelectAll = false,
      showClearAll = true,
      maxTags = 3,
      disabled = false,
      fullWidth = false,
      startIcon,
      className,
      ...props
    },
    ref
  ) => {
    const [selectedValues, setSelectedValues] = React.useState<string[]>(
      controlledValue || defaultValue
    );
    const [isOpen, setIsOpen] = React.useState(false);
    const [searchQuery, setSearchQuery] = React.useState('');

    const containerRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
      if (controlledValue !== undefined) {
        setSelectedValues(controlledValue);
      }
    }, [controlledValue]);

    const activeValues = controlledValue !== undefined ? controlledValue : selectedValues;

    const handleToggleOption = (optValue: string) => {
      let newValues: string[];
      if (activeValues.includes(optValue)) {
        newValues = activeValues.filter((v) => v !== optValue);
      } else {
        newValues = [...activeValues, optValue];
      }
      setSelectedValues(newValues);
      onChange?.(newValues);
    };

    const handleRemoveTag = (e: React.MouseEvent, optValue: string) => {
      e.stopPropagation();
      const newValues = activeValues.filter((v) => v !== optValue);
      setSelectedValues(newValues);
      onChange?.(newValues);
    };

    const handleClearAll = (e: React.MouseEvent) => {
      e.stopPropagation();
      setSelectedValues([]);
      onChange?.([]);
    };

    const handleSelectAll = (e: React.MouseEvent) => {
      e.stopPropagation();
      const allEnabled = options.filter(o => !o.disabled).map(o => o.value);
      setSelectedValues(allEnabled);
      onChange?.(allEnabled);
    };

    // Close on outside click
    React.useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const filteredOptions = options.filter((opt) =>
      opt.label.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const selectedOptions = options.filter((opt) => activeValues.includes(opt.value));
    const visibleTags = selectedOptions.slice(0, maxTags);
    const hiddenCount = selectedOptions.length - maxTags;

    return (
      <div
        ref={containerRef}
        className={cn(multiSelectContainerVariants({ fullWidth, disabled }), className)}
        {...props}
      >
        {label && (
          <label className="text-xs font-core-circle-bold tracking-tight text-core-circle-text-main mb-1">
            {label}
          </label>
        )}

        {/* Trigger Bar */}
        <div
          onClick={() => !disabled && setIsOpen(!isOpen)}
          className={cn(
            multiSelectTriggerVariants({ variant, size, hasError: !!error }),
            fullWidth && 'w-full'
          )}
        >
          <div className="flex flex-wrap items-center gap-1.5 flex-1 min-w-0 pr-2">
            {startIcon && (
              <span className="text-core-circle-text-muted shrink-0 mr-1">
                {startIcon}
              </span>
            )}

            {selectedOptions.length === 0 ? (
              <span className="text-xs text-core-circle-text-muted truncate">
                {placeholder}
              </span>
            ) : (
              <>
                {visibleTags.map((opt) => (
                  <span
                    key={opt.value}
                    className="inline-flex items-center gap-1 bg-core-circle-primary/10 text-core-circle-primary border border-core-circle-primary/20 rounded-lg px-2 py-0.5 text-xs font-core-circle-bold animate-in zoom-in-95 duration-150"
                  >
                    <span className="truncate max-w-[120px]">{opt.label}</span>
                    <button
                      type="button"
                      onClick={(e) => handleRemoveTag(e, opt.value)}
                      className="hover:bg-core-circle-primary/20 rounded-full p-0.5 text-core-circle-primary transition-colors cursor-pointer"
                      aria-label={`Remove ${opt.label}`}
                    >
                      <XIcon size={12} />
                    </button>
                  </span>
                ))}

                {hiddenCount > 0 && (
                  <span className="inline-flex items-center bg-slate-100 text-slate-700 font-mono text-[11px] font-bold px-1.5 py-0.5 rounded-md">
                    +{hiddenCount} more
                  </span>
                )}
              </>
            )}
          </div>

          <div className="flex items-center gap-1 shrink-0">
            {showClearAll && selectedOptions.length > 0 && (
              <button
                type="button"
                onClick={handleClearAll}
                className="p-1 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
                title="Clear selection"
              >
                <XIcon size={14} />
              </button>
            )}

            <ChevronDown
              size={14}
              className={cn(
                'text-core-circle-text-muted transition-transform duration-200',
                isOpen && 'rotate-180 text-core-circle-primary'
              )}
            />
          </div>
        </div>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className={cn(multiSelectDropdownVariants({ variant }))}>
            {/* Search filter input */}
            {searchable && (
              <div className="p-1.5 border-b border-core-circle-border-main/50 flex items-center gap-2">
                <SearchIcon size={14} className="text-slate-400 shrink-0" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={searchPlaceholder}
                  onClick={(e) => e.stopPropagation()}
                  className="w-full text-xs bg-transparent outline-none text-slate-800 placeholder-slate-400 font-medium"
                  autoFocus
                />
              </div>
            )}

            {/* Select All / Clear All toolbar */}
            {showSelectAll && (
              <div className="flex items-center justify-between px-2 py-1 border-b border-core-circle-border-main/40 text-[11px]">
                <button
                  type="button"
                  onClick={handleSelectAll}
                  className="text-core-circle-primary font-bold hover:underline cursor-pointer"
                >
                  Select All
                </button>
                <button
                  type="button"
                  onClick={handleClearAll}
                  className="text-slate-400 hover:text-slate-700 cursor-pointer"
                >
                  Deselect All
                </button>
              </div>
            )}

            {/* Options list */}
            <div className="flex flex-col gap-0.5 py-1">
              {filteredOptions.length === 0 ? (
                <div className="p-3 text-center text-xs text-slate-400">
                  No matching options found
                </div>
              ) : (
                filteredOptions.map((opt) => {
                  const isSelected = activeValues.includes(opt.value);
                  return (
                    <div
                      key={opt.value}
                      onClick={() => !opt.disabled && handleToggleOption(opt.value)}
                      className={cn(
                        multiSelectOptionVariants({ selected: isSelected, disabled: opt.disabled })
                      )}
                    >
                      <div className="flex items-center gap-2 truncate">
                        {opt.icon && <span className="shrink-0">{opt.icon}</span>}
                        <span className="truncate">{opt.label}</span>
                      </div>
                      {isSelected && (
                        <CheckIcon size={14} className="text-core-circle-primary shrink-0" />
                      )}
                    </div>
                  );
                })
              )}
            </div>
          </div>
        )}

        {/* Error or Helper text */}
        {(error || helperText) && (
          <p className={cn(
            "mt-1 text-[11px] font-core-circle-medium transition-all duration-200",
            error ? "text-core-circle-warning" : "text-core-circle-text-muted"
          )}>
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

MultiSelect.displayName = 'MultiSelect';

export default MultiSelect;
