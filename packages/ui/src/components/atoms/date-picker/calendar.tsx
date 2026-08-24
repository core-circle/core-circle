'use client';

import * as React from 'react';
import { cn } from '../../../utils/cn';
import { 
  ChevronLeft, 
  ChevronRight, 
  Clock, 
  Rotate, 
  Calendar as CalendarIcon 
} from '@core-circle/icons';
import { CalendarProps, DateRange, DatePreset } from '../../../interface/atoms/date-picker/date-picker.types';
import { dayCellVariants } from './date-picker.styles';

const WEEKDAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

export const Calendar: React.FC<CalendarProps> = ({
  selectedDate,
  selectedRange,
  onSelect,
  onRangeSelect,
  minDate,
  maxDate,
  isDateDisabled,
  mode = 'single',
  size = 'md',
  showTime = false,
  timeValue = '12:00',
  onTimeChange,
  showPresets = false,
  presets,
  showToday = true,
  showClear = true,
  onClear,
}) => {
  const [viewDate, setViewDate] = React.useState<Date>(
    selectedDate || selectedRange?.from || new Date()
  );
  const [internalTime, setInternalTime] = React.useState(timeValue);

  const currentMonth = viewDate.getMonth();
  const currentYear = viewDate.getFullYear();

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const prevMonthDays = new Date(currentYear, currentMonth, 0).getDate();

  const handleMonthChange = (offset: number) => {
    setViewDate(new Date(currentYear, currentMonth + offset, 1));
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setViewDate(new Date(Number(e.target.value), currentMonth, 1));
  };

  const handleMonthSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setViewDate(new Date(currentYear, Number(e.target.value), 1));
  };

  const isSameDay = (d1?: Date, d2?: Date) => {
    if (!d1 || !d2) return false;
    return (
      d1.getFullYear() === d2.getFullYear() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getDate() === d2.getDate()
    );
  };

  const isToday = (date: Date) => isSameDay(date, new Date());

  const isWithinRange = (date: Date, from?: Date, to?: Date) => {
    if (!from || !to) return false;
    const time = date.getTime();
    return time > from.getTime() && time < to.getTime();
  };

  const handleDayClick = (dayDate: Date) => {
    if (mode === 'range') {
      if (!selectedRange?.from || (selectedRange.from && selectedRange.to)) {
        onRangeSelect?.({ from: dayDate, to: undefined });
      } else {
        if (dayDate < selectedRange.from) {
          onRangeSelect?.({ from: dayDate, to: selectedRange.from });
        } else {
          onRangeSelect?.({ from: selectedRange.from, to: dayDate });
        }
      }
    } else {
      onSelect(dayDate);
    }
  };

  // Build 42 grid cells
  const days: { date: Date; isOutside: boolean }[] = [];

  for (let i = firstDayOfMonth - 1; i >= 0; i--) {
    days.push({
      date: new Date(currentYear, currentMonth - 1, prevMonthDays - i),
      isOutside: true,
    });
  }

  for (let i = 1; i <= daysInMonth; i++) {
    days.push({
      date: new Date(currentYear, currentMonth, i),
      isOutside: false,
    });
  }

  const remaining = 42 - days.length;
  for (let i = 1; i <= remaining; i++) {
    days.push({
      date: new Date(currentYear, currentMonth + 1, i),
      isOutside: true,
    });
  }

  const defaultPresets: DatePreset[] = [
    { label: 'Today', value: new Date() },
    { 
      label: 'Last 7 Days', 
      value: { 
        from: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), 
        to: new Date() 
      } 
    },
    { 
      label: 'Next 14 Days', 
      value: { 
        from: new Date(), 
        to: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000) 
      } 
    },
    { 
      label: 'This Month', 
      value: { 
        from: new Date(currentYear, currentMonth, 1), 
        to: new Date(currentYear, currentMonth + 1, 0) 
      } 
    },
  ];

  const activePresets = presets || defaultPresets;

  const handlePresetClick = (preset: DatePreset) => {
    const val = typeof preset.value === 'function' ? preset.value() : preset.value;
    if (val instanceof Date) {
      onSelect(val);
      setViewDate(val);
    } else if (val && typeof val === 'object' && 'from' in val) {
      onRangeSelect?.(val as DateRange);
      if (val.from) setViewDate(val.from);
    }
  };

  // Year options for dropdown (current year - 10 to + 10)
  const years = Array.from({ length: 21 }, (_, i) => currentYear - 10 + i);

  return (
    <div className="flex gap-4">
      {/* Preset Shortcuts Sidebar */}
      {showPresets && (
        <div className="flex flex-col gap-1 pr-3 border-r border-core-circle-border-main/50 min-w-[120px]">
          <span className="text-[10px] uppercase font-core-circle-bold tracking-wider text-core-circle-text-muted mb-1">
            Quick Select
          </span>
          {activePresets.map((preset, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => handlePresetClick(preset)}
              className="text-left text-xs font-core-circle-medium text-core-circle-text-main hover:text-core-circle-primary hover:bg-core-circle-bg-page rounded-lg px-2 py-1.5 transition-colors cursor-pointer"
            >
              {preset.label}
            </button>
          ))}
        </div>
      )}

      {/* Main Calendar Body */}
      <div className="flex flex-col gap-3">
        {/* Calendar Header Nav */}
        <div className="flex items-center justify-between gap-2 pb-2 border-b border-core-circle-border-main/40">
          <div className="flex items-center gap-1.5">
            <select
              value={currentMonth}
              onChange={handleMonthSelect}
              className="text-xs font-core-circle-bold bg-transparent text-core-circle-text-main cursor-pointer outline-none hover:text-core-circle-primary"
            >
              {MONTHS.map((m, idx) => (
                <option key={m} value={idx}>{m}</option>
              ))}
            </select>

            <select
              value={currentYear}
              onChange={handleYearChange}
              className="text-xs font-core-circle-bold bg-transparent text-core-circle-text-muted cursor-pointer outline-none hover:text-core-circle-primary"
            >
              {years.map((y) => (
                <option key={y} value={y}>{y}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => handleMonthChange(-1)}
              className="p-1.5 hover:bg-core-circle-bg-page rounded-lg text-core-circle-text-muted hover:text-core-circle-text-main transition-colors cursor-pointer"
              aria-label="Previous month"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              type="button"
              onClick={() => handleMonthChange(1)}
              className="p-1.5 hover:bg-core-circle-bg-page rounded-lg text-core-circle-text-muted hover:text-core-circle-text-main transition-colors cursor-pointer"
              aria-label="Next month"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Weekday Labels */}
        <div className="grid grid-cols-7 gap-1 text-center">
          {WEEKDAYS.map((day) => (
            <span 
              key={day} 
              className="h-7 w-8.5 flex items-center justify-center text-[10px] font-core-circle-bold uppercase tracking-wider text-core-circle-text-muted/80"
            >
              {day}
            </span>
          ))}
        </div>

        {/* 42-cell Date Grid */}
        <div className="grid grid-cols-7 gap-1">
          {days.map(({ date, isOutside }, index) => {
            const isSelected = mode === 'single' && isSameDay(date, selectedDate);
            const isRangeStart = mode === 'range' && isSameDay(date, selectedRange?.from);
            const isRangeEnd = mode === 'range' && isSameDay(date, selectedRange?.to);
            const isInRange = mode === 'range' && isWithinRange(date, selectedRange?.from, selectedRange?.to);
            const isTodayDate = isToday(date);
            const isDisabled = (minDate && date < minDate) || 
                               (maxDate && date > maxDate) || 
                               Boolean(isDateDisabled?.(date));

            let status: any = 'default';
            if (isDisabled) status = 'disabled';
            else if (isRangeStart) status = 'range-start';
            else if (isRangeEnd) status = 'range-end';
            else if (isInRange) status = 'range-between';
            else if (isSelected) status = 'selected';
            else if (isTodayDate) status = 'today';
            else if (isOutside) status = 'outside';

            return (
              <button
                key={index}
                type="button"
                disabled={isDisabled}
                onClick={() => !isDisabled && handleDayClick(date)}
                className={cn(dayCellVariants({ status, size }))}
              >
                {date.getDate()}
              </button>
            );
          })}
        </div>

        {/* Time Selector */}
        {showTime && (
          <div className="flex items-center justify-between gap-3 pt-2.5 border-t border-core-circle-border-main/50">
            <div className="flex items-center gap-1.5 text-xs text-core-circle-text-muted">
              <Clock size={14} className="text-core-circle-primary" />
              <span className="font-core-circle-bold">Time</span>
            </div>
            <input
              type="time"
              value={internalTime}
              onChange={(e) => {
                setInternalTime(e.target.value);
                onTimeChange?.(e.target.value);
              }}
              className="text-xs font-mono font-bold bg-core-circle-bg-page border border-core-circle-border-main/60 rounded-lg px-2 py-1 outline-none text-core-circle-text-main cursor-pointer"
            />
          </div>
        )}

        {/* Footer Actions */}
        {(showToday || showClear) && (
          <div className="flex items-center justify-between pt-2 border-t border-core-circle-border-main/40">
            {showClear && (
              <button
                type="button"
                onClick={onClear}
                className="text-xs text-core-circle-text-muted hover:text-core-circle-warning transition-colors font-core-circle-medium cursor-pointer"
              >
                Clear
              </button>
            )}
            {showToday && (
              <button
                type="button"
                onClick={() => {
                  const now = new Date();
                  handleDayClick(now);
                  setViewDate(now);
                }}
                className="text-xs text-core-circle-primary hover:underline transition-colors font-core-circle-bold cursor-pointer ml-auto"
              >
                Today
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
