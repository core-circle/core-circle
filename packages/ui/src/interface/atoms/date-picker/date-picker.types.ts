import { HTMLAttributes, ReactNode } from 'react';

export type DatePickerVariant =
  | 'outline'
  | 'filled'
  | 'floating'
  | 'glassmorphic'
  | 'pill'
  | 'material'
  | 'gradient'
  | 'compact'
  | 'calendar-card'
  | 'ghost';

export type DatePickerSize = 'sm' | 'md' | 'lg';

export type DatePickerMode = 'single' | 'range' | 'inline' | 'month-year';

export interface DateRange {
  from?: Date;
  to?: Date;
}

export interface DatePreset {
  label: string;
  value: Date | DateRange | (() => Date | DateRange);
}

export interface DatePickerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange' | 'defaultValue'> {
  /**
   * Selected date in single mode.
   */
  value?: Date;

  /**
   * Default selected date.
   */
  defaultValue?: Date;

  /**
   * Selected date range in range mode.
   */
  rangeValue?: DateRange;

  /**
   * Default selected date range.
   */
  defaultRangeValue?: DateRange;

  /**
   * Selection mode: single date, date range, inline calendar, or month-year picker.
   * @default 'single'
   */
  mode?: DatePickerMode;

  /**
   * Visual style variant of the input trigger and popover.
   * @default 'outline'
   */
  variant?: DatePickerVariant;

  /**
   * Size scale of the input trigger and calendar cells.
   * @default 'md'
   */
  size?: DatePickerSize;

  /**
   * Callback fired when a single date is selected.
   */
  onChange?: (date: Date) => void;

  /**
   * Callback fired when a date range is selected.
   */
  onRangeChange?: (range: DateRange) => void;

  /**
   * Minimum selectable date boundary.
   */
  minDate?: Date;

  /**
   * Maximum selectable date boundary.
   */
  maxDate?: Date;

  /**
   * Custom function to determine whether a specific date should be disabled (e.g. weekends).
   */
  isDateDisabled?: (date: Date) => boolean;

  /**
   * Input placeholder text.
   * @default 'Select date'
   */
  placeholder?: string;

  /**
   * Text label displayed above the picker.
   */
  label?: ReactNode;

  /**
   * Subtitle helper text.
   */
  helperText?: string;

  /**
   * Error message.
   */
  error?: string;

  /**
   * Whether the picker is disabled.
   * @default false
   */
  disabled?: boolean;

  /**
   * Whether the input expands to fill its container width.
   * @default false
   */
  fullWidth?: boolean;

  /**
   * Whether to display quick-pick presets (e.g. Today, Yesterday, Next 7 Days).
   * @default false
   */
  showPresets?: boolean;

  /**
   * Custom list of date presets.
   */
  presets?: DatePreset[];

  /**
   * Whether to show an integrated time picker (HH:MM).
   * @default false
   */
  showTime?: boolean;

  /**
   * Time string (e.g. "14:30")
   */
  timeValue?: string;

  /**
   * Callback when time is changed.
   */
  onTimeChange?: (time: string) => void;

  /**
   * Whether to show a 'Clear' button to reset selection.
   * @default true
   */
  showClear?: boolean;

  /**
   * Whether to show a 'Today' button to quickly jump to the current date.
   * @default true
   */
  showToday?: boolean;

  /**
   * Custom date formatting function.
   */
  formatDate?: (date?: Date) => string;
}

export interface DatePickerRangeProps extends Omit<DatePickerProps, 'value' | 'onChange'> {
  value?: DateRange;
  onChange?: (range: DateRange) => void;
}

export interface CalendarProps {
  selectedDate?: Date;
  selectedRange?: DateRange;
  onSelect: (date: Date) => void;
  onRangeSelect?: (range: DateRange) => void;
  minDate?: Date;
  maxDate?: Date;
  isDateDisabled?: (date: Date) => boolean;
  mode?: DatePickerMode;
  size?: DatePickerSize;
  variant?: DatePickerVariant;
  showTime?: boolean;
  timeValue?: string;
  onTimeChange?: (time: string) => void;
  showPresets?: boolean;
  presets?: DatePreset[];
  showToday?: boolean;
  showClear?: boolean;
  onClear?: () => void;
}
