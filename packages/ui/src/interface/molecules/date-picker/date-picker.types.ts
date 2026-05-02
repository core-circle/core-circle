import { HTMLAttributes } from 'react';

export interface DatePickerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /**
   * The selected date
   */
  value?: Date;
  /**
   * Callback when date is selected
   */
  onChange?: (date: Date) => void;
  /**
   * Minimum selectable date
   */
  minDate?: Date;
  /**
   * Maximum selectable date
   */
  maxDate?: Date;
  /**
   * Placeholder text
   * @default 'Select date'
   */
  placeholder?: string;
  /**
   * Whether the picker is disabled
   */
  disabled?: boolean;
  /**
   * Label for the input
   */
  label?: string;
  /**
   * Whether to take up full width
   */
  fullWidth?: boolean;
}

export interface DateRange {
  from?: Date;
  to?: Date;
}

export interface DatePickerRangeProps extends Omit<DatePickerProps, 'value' | 'onChange'> {
  value?: DateRange;
  onChange?: (range: DateRange) => void;
}

export interface CalendarProps {
  selectedDate?: Date;
  selectedRange?: DateRange;
  onSelect: (date: Date) => void;
  minDate?: Date;
  maxDate?: Date;
  mode?: 'single' | 'range';
}
