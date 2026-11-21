import { HomeIcon } from '@core-circle/icons';
import React from 'react';
import { PropItem } from '../../../interface/components/props-table.types';

export const DATE_PICKER_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/', icon: React.createElement(HomeIcon, { size: 14 }) },
  { label: 'Atoms', href: '/atoms' },
  { label: 'DatePicker' }
];

export const DATE_PICKER_HEADER_CONTENT = {
  title: 'DatePicker',
  description: 'An advanced date selection primitive supporting single date, range intervals, inline calendar studio, quick presets, time pickers, and 10 visual variants.',
};

export const DATE_PICKER_PROPS_DATA: PropItem[] = [
  {
    name: 'value',
    type: 'Date',
    defaultValue: '-',
    description: 'The selected date in single mode.'
  },
  {
    name: 'rangeValue',
    type: '{ from?: Date; to?: Date }',
    defaultValue: '-',
    description: 'The selected date range in range mode.'
  },
  {
    name: 'mode',
    type: "'single' | 'range' | 'inline'",
    defaultValue: "'single'",
    description: 'Selection mode: single date, interval range, or embedded calendar.'
  },
  {
    name: 'variant',
    type: "'outline' | 'filled' | 'floating' | 'glassmorphic' | 'pill' | 'material' | 'gradient' | 'compact' | 'calendar-card' | 'ghost'",
    defaultValue: "'outline'",
    description: 'The visual style variant of the input trigger and popover (10 options).'
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg'",
    defaultValue: "'md'",
    description: 'Size scale of the input trigger and date cells.'
  },
  {
    name: 'label',
    type: 'ReactNode',
    defaultValue: '-',
    description: 'Optional label displayed above the picker.'
  },
  {
    name: 'placeholder',
    type: 'string',
    defaultValue: "'Select date'",
    description: 'Placeholder text when no date is selected.'
  },
  {
    name: 'showPresets',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether to display quick-pick shortcuts (Today, Last 7 Days, Next 14 Days, This Month).'
  },
  {
    name: 'showTime',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether to display an integrated time picker (HH:MM).'
  },
  {
    name: 'showToday',
    type: 'boolean',
    defaultValue: 'true',
    description: 'Whether to display the Today quick jump button in the calendar footer.'
  },
  {
    name: 'showClear',
    type: 'boolean',
    defaultValue: 'true',
    description: 'Whether to display the Clear button to reset selection.'
  },
  {
    name: 'minDate',
    type: 'Date',
    defaultValue: '-',
    description: 'Minimum selectable date boundary.'
  },
  {
    name: 'maxDate',
    type: 'Date',
    defaultValue: '-',
    description: 'Maximum selectable date boundary.'
  },
  {
    name: 'fullWidth',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether the picker occupies full width of its container.'
  },
  {
    name: 'disabled',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether the date picker is disabled.'
  },
  {
    name: 'onChange',
    type: '(date: Date) => void',
    defaultValue: '-',
    description: 'Callback triggered when a single date is selected.'
  },
  {
    name: 'onRangeChange',
    type: '(range: DateRange) => void',
    defaultValue: '-',
    description: 'Callback triggered when a date range is selected.'
  }
];
