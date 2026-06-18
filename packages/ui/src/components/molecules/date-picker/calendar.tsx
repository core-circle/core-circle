'use client';

import * as React from 'react';
import { cn } from '../../../utils/cn';
import { ChevronLeft, ChevronRight } from '@core-circle/icons';
import { CalendarProps } from '../../../interface/molecules/date-picker/date-picker.types';
import { calendarStyles as s, dayVariants } from './date-picker.styles';

const WEEKDAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

export const Calendar = ({ selectedDate, selectedRange, onSelect, minDate, maxDate, mode = 'single' }: CalendarProps) => {
  const [viewDate, setViewDate] = React.useState(selectedDate || selectedRange?.from || new Date());
  
  const currentMonth = viewDate.getMonth();
  const currentYear = viewDate.getFullYear();

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  
  const prevMonthDays = new Date(currentYear, currentMonth, 0).getDate();
  
  const handleMonthChange = (offset: number) => {
    setViewDate(new Date(currentYear, currentMonth + offset, 1));
  };

  const days = [];

  // Add days from previous month
  for (let i = firstDayOfMonth - 1; i >= 0; i--) {
    days.push({
      day: prevMonthDays - i,
      month: currentMonth - 1,
      year: currentYear,
      isOutside: true
    });
  }

  // Add days from current month
  for (let i = 1; i <= daysInMonth; i++) {
    days.push({
      day: i,
      month: currentMonth,
      year: currentYear,
      isOutside: false
    });
  }

  // Add days from next month to fill the grid (42 cells for 6 rows)
  const remainingCells = 42 - days.length;
  for (let i = 1; i <= remainingCells; i++) {
    days.push({
      day: i,
      month: currentMonth + 1,
      year: currentYear,
      isOutside: true
    });
  }

  const isSameDay = (d1?: Date, d2?: Date) => {
    if (!d1 || !d2) return false;
    return d1.getDate() === d2.getDate() && 
           d1.getMonth() === d2.getMonth() && 
           d1.getFullYear() === d2.getFullYear();
  };

  const isToday = (d: number, m: number, y: number) => {
    const today = new Date();
    return today.getDate() === d && today.getMonth() === m && today.getFullYear() === y;
  };

  const getDayStatus = (d: number, m: number, y: number, isOutside: boolean) => {
    if (isOutside) return 'outside';
    
    const date = new Date(y, m, d);

    if (mode === 'single') {
      if (isSameDay(date, selectedDate)) return 'selected';
    } else if (mode === 'range' && selectedRange) {
      const { from, to } = selectedRange;
      if (isSameDay(date, from)) return to ? 'range-start' : 'selected';
      if (isSameDay(date, to)) return 'range-end';
      if (from && to && date > from && date < to) return 'range-between';
    }

    if (isToday(d, m, y)) return 'today';
    return 'default';
  };

  return (
    <div className="w-[280px]">
      <div className={s.header}>
        <button onClick={() => handleMonthChange(-1)} className={s.navButton}>
          <ChevronLeft size={18} />
        </button>
        <span className={s.title}>{MONTHS[currentMonth]} {currentYear}</span>
        <button onClick={() => handleMonthChange(1)} className={s.navButton}>
          <ChevronRight size={18} />
        </button>
      </div>

      <div className={s.grid}>
        {WEEKDAYS.map(day => (
          <div key={day} className={s.weekday}>{day}</div>
        ))}
        {days.map((dateObj, i) => {
          const { day, month, year, isOutside } = dateObj;
          const status = getDayStatus(day, month, year, isOutside);
          
          return (
            <div
              key={i}
              onClick={() => !isOutside && onSelect(new Date(year, month, day))}
              className={cn(dayVariants({ status }))}
            >
              {day}
            </div>
          );
        })}
      </div>
    </div>
  );
};
