'use client';

import * as React from 'react';
import { cn } from '../../../utils/cn';
import { TextInput } from '../../atoms/text-input/text-input';
import { Calendar as CalendarIcon } from '@core-circle/icons';
import { DatePickerRangeProps } from '../../../interface/molecules/date-picker/date-picker.types';
import { datePickerStyles as s } from './date-picker.styles';
import { Calendar } from './calendar';

export const DatePickerRange = React.forwardRef<
  HTMLDivElement,
  DatePickerRangeProps
>(
  (
    {
      value,
      onChange,
      label,
      placeholder = 'Select range',
      fullWidth,
      disabled,
      className,
      ...props
    },
    ref,
  ) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const containerRef = React.useRef<HTMLDivElement>(null);

    const formatDate = (date?: Date, includeYear = false) => {
      if (!date) return '';
      return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        ...(includeYear && { year: 'numeric' }),
      });
    };

    const getDisplayValue = () => {
      if (!value?.from) return '';
      if (!value.to) return `${formatDate(value.from, true)} - ...`;

      return `${formatDate(value.from, true)} - ${formatDate(value.to, true)}`;
    };

    const handleSelect = (date: Date) => {
      if (!value?.from || (value.from && value.to)) {
        // Reset and start new range
        onChange?.({ from: date, to: undefined });
      } else {
        // Selection of 'to' date
        if (date < value.from) {
          onChange?.({ from: date, to: value.from });
        } else {
          onChange?.({ from: value.from, to: date });
        }
        setIsOpen(false);
      }
    };

    // Close on outside click
    React.useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          containerRef.current &&
          !containerRef.current.contains(event.target as Node)
        ) {
          setIsOpen(false);
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () =>
        document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
      <div
        ref={containerRef}
        className={cn(s.container, fullWidth && s.fullWidth, className)}
      >
        <div
          onClick={() => !disabled && setIsOpen(!isOpen)}
          className="cursor-pointer"
        >
          <TextInput
            label={label}
            placeholder={placeholder}
            value={getDisplayValue()}
            readOnly
            disabled={disabled}
            fullWidth={fullWidth}
            startIcon={<CalendarIcon size={18} />}
            className="pointer-events-none"
          />
        </div>

        {isOpen && (
          <div className={s.popover}>
            <Calendar
              mode="range"
              selectedRange={value}
              onSelect={handleSelect}
            />
          </div>
        )}
      </div>
    );
  },
);

DatePickerRange.displayName = 'DatePickerRange';
