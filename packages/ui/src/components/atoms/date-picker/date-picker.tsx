'use client';

import * as React from 'react';
import { cn } from '../../../utils/cn';
import { Calendar as CalendarIcon, ChevronDown } from '@core-circle/icons';
import { DatePickerProps, DateRange } from '../../../interface/atoms/date-picker/date-picker.types';
import { 
  datePickerContainerVariants, 
  datePickerTriggerVariants, 
  calendarPopoverVariants 
} from './date-picker.styles';
import { Calendar } from './calendar';

export const DatePicker = React.forwardRef<HTMLDivElement, DatePickerProps>(
  (
    {
      value,
      defaultValue,
      rangeValue,
      defaultRangeValue,
      mode = 'single',
      variant = 'outline',
      size = 'md',
      label,
      helperText,
      error,
      placeholder = 'Select date',
      fullWidth = false,
      disabled = false,
      showPresets = false,
      presets,
      showTime = false,
      timeValue = '12:00',
      onTimeChange,
      showClear = true,
      showToday = true,
      minDate,
      maxDate,
      isDateDisabled,
      formatDate: customFormatDate,
      onChange,
      onRangeChange,
      className,
      style,
      ...props
    },
    ref
  ) => {
    const [selectedSingle, setSelectedSingle] = React.useState<Date | undefined>(
      value || defaultValue
    );
    const [selectedRange, setSelectedRange] = React.useState<DateRange | undefined>(
      rangeValue || defaultRangeValue
    );
    const [isOpen, setIsOpen] = React.useState(mode === 'inline' || variant === 'calendar-card');
    const [internalTime, setInternalTime] = React.useState(timeValue);

    const containerRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
      if (value !== undefined) setSelectedSingle(value);
    }, [value]);

    React.useEffect(() => {
      if (rangeValue !== undefined) setSelectedRange(rangeValue);
    }, [rangeValue]);

    const defaultFormatDate = (date?: Date) => {
      if (!date) return '';
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    };

    const formatFn = customFormatDate || defaultFormatDate;

    const getDisplayText = () => {
      if (mode === 'range') {
        if (!selectedRange?.from && !selectedRange?.to) return '';
        if (selectedRange.from && !selectedRange.to) return `${formatFn(selectedRange.from)} - ...`;
        return `${formatFn(selectedRange.from)} - ${formatFn(selectedRange.to)}`;
      }
      if (!selectedSingle) return '';
      let text = formatFn(selectedSingle);
      if (showTime) text += ` ${internalTime}`;
      return text;
    };

    const handleSingleSelect = (date: Date) => {
      setSelectedSingle(date);
      onChange?.(date);
      if (mode !== 'inline' && variant !== 'calendar-card') {
        setIsOpen(false);
      }
    };

    const handleRangeSelect = (range: DateRange) => {
      setSelectedRange(range);
      onRangeChange?.(range);
      if (range.from && range.to && mode !== 'inline' && variant !== 'calendar-card') {
        setIsOpen(false);
      }
    };

    const handleClear = () => {
      setSelectedSingle(undefined);
      setSelectedRange(undefined);
    };

    // Close popover on outside click (if not inline)
    React.useEffect(() => {
      if (mode === 'inline' || variant === 'calendar-card') return;

      const handleClickOutside = (event: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [mode, variant]);

    const isInline = mode === 'inline' || variant === 'calendar-card';
    const displayText = getDisplayText();

    return (
      <div 
        ref={containerRef} 
        className={cn(datePickerContainerVariants({ fullWidth, disabled }), className)}
        style={style}
        {...props}
      >
        {label && (
          <label className="text-xs font-core-circle-bold tracking-tight text-core-circle-text-main mb-1">
            {label}
          </label>
        )}

        {/* Trigger Bar (hidden in inline / calendar-card mode) */}
        {!isInline && (
          <div
            onClick={() => !disabled && setIsOpen(!isOpen)}
            className={cn(
              datePickerTriggerVariants({ variant, size, hasError: !!error }),
              fullWidth && 'w-full justify-between'
            )}
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <CalendarIcon size={size === 'sm' ? 14 : size === 'lg' ? 18 : 16} className="text-core-circle-primary shrink-0" />
              <span className={cn(
                "truncate",
                !displayText ? "text-core-circle-text-muted" : "text-core-circle-text-main font-core-circle-medium"
              )}>
                {displayText || placeholder}
              </span>
            </div>

            <ChevronDown size={14} className={cn(
              "text-core-circle-text-muted transition-transform duration-200 shrink-0 ml-auto",
              isOpen && "rotate-180 text-core-circle-primary"
            )} />
          </div>
        )}

        {/* Calendar Widget (Popover or Embedded Inline) */}
        {(isOpen || isInline) && (
          <div className={cn(
            isInline ? "w-fit" : calendarPopoverVariants({ variant })
          )}>
            <Calendar
              selectedDate={selectedSingle}
              selectedRange={selectedRange}
              onSelect={handleSingleSelect}
              onRangeSelect={handleRangeSelect}
              mode={mode}
              size={size}
              variant={variant}
              minDate={minDate}
              maxDate={maxDate}
              isDateDisabled={isDateDisabled}
              showPresets={showPresets}
              presets={presets}
              showTime={showTime}
              timeValue={internalTime}
              onTimeChange={(t) => {
                setInternalTime(t);
                onTimeChange?.(t);
              }}
              showToday={showToday}
              showClear={showClear}
              onClear={handleClear}
            />
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

DatePicker.displayName = 'DatePicker';

export default DatePicker;
