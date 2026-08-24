'use client';

import * as React from 'react';
import { cn } from '../../../utils/cn';
import { TextInput } from '../../atoms/text-input/text-input';
import { Calendar as CalendarIcon } from '@core-circle/icons';
import { DatePickerProps } from '../../../interface/atoms/date-picker/date-picker.types';
import { datePickerStyles as s } from './date-picker.styles';
import { Calendar } from './calendar';

export const DatePicker = React.forwardRef<HTMLDivElement, DatePickerProps>(
  ({ value, onChange, label, placeholder = 'Select date', fullWidth, disabled, className, ...props }, ref) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const containerRef = React.useRef<HTMLDivElement>(null);

    const formatDate = (date?: Date) => {
      if (!date) return '';
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    };

    const handleSelect = (date: Date) => {
      onChange?.(date);
      setIsOpen(false);
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

    return (
      <div 
        ref={containerRef} 
        className={cn(s.container, fullWidth && s.fullWidth, className)}
      >
        <div onClick={() => !disabled && setIsOpen(!isOpen)} className="cursor-pointer">
          <TextInput
            label={label}
            placeholder={placeholder}
            value={formatDate(value)}
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
              selectedDate={value} 
              onSelect={handleSelect} 
            />
          </div>
        )}
      </div>
    );
  }
);

DatePicker.displayName = 'DatePicker';
