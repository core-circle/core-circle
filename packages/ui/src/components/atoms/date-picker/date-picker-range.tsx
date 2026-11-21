'use client';

import * as React from 'react';
import { DatePickerRangeProps } from '../../../interface/atoms/date-picker/date-picker.types';
import { DatePicker } from './date-picker';

export const DatePickerRange = React.forwardRef<HTMLDivElement, DatePickerRangeProps>(
  ({ value, onChange, ...props }, ref) => {
    return (
      <DatePicker
        ref={ref}
        mode="range"
        rangeValue={value}
        onRangeChange={onChange}
        {...props}
      />
    );
  }
);

DatePickerRange.displayName = 'DatePickerRange';

export default DatePickerRange;
