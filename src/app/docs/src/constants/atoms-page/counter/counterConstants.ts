import { HomeIcon } from '@core-circle/icons';
import React from 'react';

export const COUNTER_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/', icon: React.createElement(HomeIcon, { size: 14 }) },
  { label: 'Atoms', href: '/atoms' },
  { label: 'Counter' },
];

export const COUNTER_HEADER_CONTENT = {
  title: 'Counter',
  description: 'The Counter component is used to display numeric counts, typically used within buttons, tabs, or badges.',
};

export const COUNTER_PROPS_DATA = [
  { name: 'count', type: 'number', defaultValue: '-', description: 'The numeric value to display' },
  { name: 'variant', type: 'primary | neutral | outline | ghost', defaultValue: 'primary', description: 'The visual style of the counter' },
  { name: 'size', type: 'xs | sm | md', defaultValue: 'sm', description: 'The size of the counter' },
  { name: 'max', type: 'number', defaultValue: '-', description: 'The maximum value to display (e.g. 99+)' },
  { name: 'showZero', type: 'boolean', defaultValue: 'false', description: 'Whether to show the counter if count is zero' },
];
