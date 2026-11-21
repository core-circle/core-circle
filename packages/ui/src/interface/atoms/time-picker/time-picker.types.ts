import * as React from 'react';

export type TimePickerFormat = '12h' | '24h';
export type TimePickerSize = 'sm' | 'md' | 'lg';
export type TimePickerVariant = 
  | 'outline'
  | 'material'
  | 'ghost'
  | 'standard'
  | 'filled'
  | 'glassmorphic'
  | 'gradient'
  | 'glow'
  | 'accent'
  | 'dark';

export interface TimeValue {
  hours: number;
  minutes: number;
  seconds?: number;
  period?: 'AM' | 'PM';
}

export interface TimePickerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'defaultValue'> {
  value?: string | TimeValue;
  defaultValue?: string | TimeValue;
  format?: TimePickerFormat;
  size?: TimePickerSize;
  variant?: TimePickerVariant;
  label?: string;
  helperText?: string;
  error?: boolean | string;
  disabled?: boolean;
  fullWidth?: boolean;
  showSeconds?: boolean;
  minuteStep?: number;
  placeholder?: string;
  onChange?: (timeString: string, timeObj: TimeValue) => void;
}
