import React from 'react';
import { PropItem } from '../../../interface/components/props-table.types';

export const TIME_PICKER_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Atoms', href: '/atoms' },
  { label: 'TimePicker' },
];

export const TIME_PICKER_HEADER_CONTENT = {
  title: 'TimePicker',
  description: 'An interactive time selection input supporting 12h/24h formats, minute/second step dials, AM/PM switching, and 10 styling variants.',
};

export const TIME_PICKER_SECTIONS = [
  {
    id: 'theming',
    title: 'Theming',
    description: 'Production-grade time picker themes for airline flight departures, telehealth bookings, server cron schedules, and international meeting planners.',
  },
  {
    id: 'variants',
    title: 'Variants',
    description: 'Explore 10 surface styling variants from material animated to cyber neon glow.',
  },
  {
    id: 'playground',
    title: 'Playground',
    description: 'Interactive time picker playground with live 12h/24h toggle, seconds support, and code generator.',
  },
  {
    id: 'mock-code',
    title: 'Mock Code',
    description: 'Dynamic reservation scheduling payload integration example.',
  },
  {
    id: 'overview',
    title: 'Overview',
    description: 'Quick usage snippet and props reference.',
  },
];

export const TIME_PICKER_PROPS_DATA: PropItem[] = [
  {
    name: 'value',
    type: 'string | TimeValue',
    defaultValue: '-',
    description: 'Controlled time value (e.g. "09:30 AM" or { hours: 9, minutes: 30 }).'
  },
  {
    name: 'defaultValue',
    type: 'string | TimeValue',
    defaultValue: '-',
    description: 'Default initial time in uncontrolled mode.'
  },
  {
    name: 'format',
    type: "'12h' | '24h'",
    defaultValue: "'12h'",
    description: 'Time display format standard.'
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg'",
    defaultValue: "'md'",
    description: 'Dimensional height and font scale.'
  },
  {
    name: 'variant',
    type: "'outline' | 'material' | 'ghost' | 'standard' | 'filled' | 'glassmorphic' | 'gradient' | 'glow' | 'accent' | 'dark'",
    defaultValue: "'outline'",
    description: 'Input container surface styling aesthetic.'
  },
  {
    name: 'label',
    type: 'string',
    defaultValue: '-',
    description: 'Label text positioned above the input.'
  },
  {
    name: 'helperText',
    type: 'string',
    defaultValue: '-',
    description: 'Subtle guidance caption below the input.'
  },
  {
    name: 'showSeconds',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether to display the seconds selection segment.'
  },
  {
    name: 'minuteStep',
    type: 'number',
    defaultValue: '1',
    description: 'Interval step between minute options (e.g. 5, 15, 30).'
  },
  {
    name: 'onChange',
    type: '(timeString: string, timeObj: TimeValue) => void',
    defaultValue: '-',
    description: 'Callback triggered whenever hours, minutes, seconds, or AM/PM change.'
  },
];
