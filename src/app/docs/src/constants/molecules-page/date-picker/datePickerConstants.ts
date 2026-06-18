import { HomeIcon } from '@core-circle/icons';
import React from 'react';
import { PropItem } from '../../../interface/components/props-table.types';

export const DATE_PICKER_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/', icon: React.createElement(HomeIcon, { size: 14 }) },
  { label: 'Molecules', href: '/molecules' },
  { label: 'DatePicker' }
];

export const DATE_PICKER_HEADER_CONTENT = {
  title: 'DatePicker',
  description: 'A component that allows users to select a single date from a visual calendar.',
};

export const DATE_PICKER_SECTIONS = [
  {
    id: 'playground',
    title: 'Live Playground',
    description: 'Interact with the date picker to see selection logic in action.',
    showBorder: true,
    isPlayground: true
  }
];

export const DATE_PICKER_PROPS_DATA: PropItem[] = [
  {
    name: 'value',
    type: 'Date',
    description: 'The currently selected date object.'
  },
  {
    name: 'onChange',
    type: '(date: Date) => void',
    description: 'Callback function triggered when a new date is selected.'
  },
  {
    name: 'label',
    type: 'string',
    description: 'Optional label displayed above the input.'
  },
  {
    name: 'placeholder',
    type: 'string',
    defaultValue: "'Select date'",
    description: 'Text displayed when no date is selected.'
  },
  {
    name: 'disabled',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether the component is interactive.'
  }
];
