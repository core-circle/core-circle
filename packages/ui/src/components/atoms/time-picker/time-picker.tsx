'use client';

import * as React from 'react';
import { cn } from '../../../utils/cn';
import { TimePickerProps, TimeValue } from '../../../interface/atoms/time-picker/time-picker.types';
import { 
  timePickerWrapperVariants, 
  timePickerInputContainerVariants, 
  timePickerLabelStyles, 
  timePickerHelperStyles, 
  timePickerErrorStyles 
} from './time-picker.styles';
import { Clock } from '@core-circle/icons';

const parseInitialTime = (value?: string | TimeValue, format: '12h' | '24h' = '12h'): TimeValue => {
  if (typeof value === 'object' && value !== null) {
    return {
      hours: value.hours ?? 12,
      minutes: value.minutes ?? 0,
      seconds: value.seconds ?? 0,
      period: value.period ?? 'AM',
    };
  }
  if (typeof value === 'string' && value.includes(':')) {
    const parts = value.trim().split(/[:\s]/);
    let hours = parseInt(parts[0], 10) || 12;
    const minutes = parseInt(parts[1], 10) || 0;
    const period = parts[2]?.toUpperCase() === 'PM' ? 'PM' : 'AM';
    return { hours, minutes, period };
  }
  return { hours: format === '12h' ? 12 : 0, minutes: 0, seconds: 0, period: 'AM' };
};

const formatTimeString = (time: TimeValue, format: '12h' | '24h', showSeconds: boolean): string => {
  const pad = (n: number) => n.toString().padStart(2, '0');
  const h = format === '12h' ? (time.hours === 0 ? 12 : time.hours) : time.hours;
  let str = `${pad(h)}:${pad(time.minutes)}`;
  if (showSeconds) str += `:${pad(time.seconds || 0)}`;
  if (format === '12h') str += ` ${time.period || 'AM'}`;
  return str;
};

export const TimePicker = React.forwardRef<HTMLDivElement, TimePickerProps>(
  (
    {
      value: controlledValue,
      defaultValue,
      format = '12h',
      size = 'md',
      variant = 'outline',
      label,
      helperText,
      error,
      disabled = false,
      fullWidth = false,
      showSeconds = false,
      minuteStep = 1,
      placeholder = '--:--',
      onChange,
      className,
      ...props
    },
    ref
  ) => {
    const [time, setTime] = React.useState<TimeValue>(() =>
      parseInitialTime(controlledValue || defaultValue, format)
    );

    const updateTime = (key: keyof TimeValue, val: any) => {
      if (disabled) return;
      const updated = { ...time, [key]: val };
      setTime(updated);
      onChange?.(formatTimeString(updated, format, showSeconds), updated);
    };

    const maxHours = format === '12h' ? 12 : 23;
    const minHours = format === '12h' ? 1 : 0;

    return (
      <div
        ref={ref}
        className={cn(timePickerWrapperVariants({ fullWidth, disabled }), className)}
        {...props}
      >
        {label && <label className={timePickerLabelStyles}>{label}</label>}

        <div className={cn(timePickerInputContainerVariants({ variant, size, hasError: Boolean(error) }))}>
          <div className="flex items-center gap-1 font-mono select-none">
            {/* Hours Input */}
            <select
              disabled={disabled}
              value={time.hours}
              onChange={(e) => updateTime('hours', parseInt(e.target.value, 10))}
              className="bg-transparent focus:outline-none cursor-pointer py-0 px-0.5 text-center font-semibold text-inherit"
            >
              {Array.from({ length: maxHours - minHours + 1 }, (_, i) => minHours + i).map((h) => (
                <option key={h} value={h} className="text-slate-900 bg-white">
                  {h.toString().padStart(2, '0')}
                </option>
              ))}
            </select>

            <span className="text-slate-400 font-bold">:</span>

            {/* Minutes Input */}
            <select
              disabled={disabled}
              value={time.minutes}
              onChange={(e) => updateTime('minutes', parseInt(e.target.value, 10))}
              className="bg-transparent focus:outline-none cursor-pointer py-0 px-0.5 text-center font-semibold text-inherit"
            >
              {Array.from({ length: Math.ceil(60 / minuteStep) }, (_, i) => i * minuteStep).map((m) => (
                <option key={m} value={m} className="text-slate-900 bg-white">
                  {m.toString().padStart(2, '0')}
                </option>
              ))}
            </select>

            {/* Optional Seconds */}
            {showSeconds && (
              <>
                <span className="text-slate-400 font-bold">:</span>
                <select
                  disabled={disabled}
                  value={time.seconds || 0}
                  onChange={(e) => updateTime('seconds', parseInt(e.target.value, 10))}
                  className="bg-transparent focus:outline-none cursor-pointer py-0 px-0.5 text-center font-semibold text-inherit"
                >
                  {Array.from({ length: 60 }, (_, i) => i).map((s) => (
                    <option key={s} value={s} className="text-slate-900 bg-white">
                      {s.toString().padStart(2, '0')}
                    </option>
                  ))}
                </select>
              </>
            )}

            {/* 12h Period Toggle */}
            {format === '12h' && (
              <button
                type="button"
                disabled={disabled}
                onClick={() => updateTime('period', time.period === 'AM' ? 'PM' : 'AM')}
                className="ml-1.5 px-1.5 py-0.5 text-[11px] font-bold rounded bg-slate-100 dark:bg-slate-800 text-core-circle-primary hover:bg-blue-50 transition-colors focus:outline-none"
              >
                {time.period || 'AM'}
              </button>
            )}
          </div>

          <div className="text-core-circle-text-muted pl-2 pointer-events-none">
            <Clock size={16} />
          </div>
        </div>

        {error && typeof error === 'string' && <p className={timePickerErrorStyles}>{error}</p>}
        {helperText && !error && <p className={timePickerHelperStyles}>{helperText}</p>}
      </div>
    );
  }
);

TimePicker.displayName = 'TimePicker';
