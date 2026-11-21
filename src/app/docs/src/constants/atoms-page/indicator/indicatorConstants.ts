import { HomeIcon } from '@core-circle/icons';
import React from 'react';
import { PropItem } from '../../../interface/components/props-table.types';

export const INDICATOR_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/', icon: React.createElement(HomeIcon, { size: 14 }) },
  { label: 'Atoms', href: '/atoms' },
  { label: 'Indicator' },
];

export const INDICATOR_HEADER_CONTENT = {
  title: 'Indicator',
  description: 'A status and notification marker primitive supporting anchored badges, live radar pulse pings, standalone presence chips, numeric overflow clipping, and 10 visual variants.',
};

export const INDICATOR_PROPS_DATA: PropItem[] = [
  {
    name: 'variant',
    type: "'primary' | 'success' | 'warning' | 'destructive' | 'info' | 'gradient' | 'glassmorphic' | 'soft' | 'bordered' | 'neutral'",
    defaultValue: "'primary'",
    description: 'Visual color and surface style (10 options).'
  },
  {
    name: 'size',
    type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
    defaultValue: "'md'",
    description: 'Size scale from micro status dot (xs) to prominent counter (xl).'
  },
  {
    name: 'position',
    type: "'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center' | 'middle'",
    defaultValue: "'top-right'",
    description: 'Anchor placement relative to the child element.'
  },
  {
    name: 'shape',
    type: "'circle' | 'pill' | 'square' | 'rounded'",
    defaultValue: "'circle'",
    description: 'Contour shape of the indicator badge.'
  },
  {
    name: 'pulse',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether to emit a continuous radar ping animation.'
  },
  {
    name: 'content',
    type: 'ReactNode',
    defaultValue: '-',
    description: 'Custom text or element rendered inside the badge.'
  },
  {
    name: 'count',
    type: 'number',
    defaultValue: '-',
    description: 'Numeric counter automatically formatted with max clipping.'
  },
  {
    name: 'max',
    type: 'number',
    defaultValue: '99',
    description: 'Maximum number before appending the "+" suffix (e.g. 99+).'
  },
  {
    name: 'standalone',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether to render as an inline indicator without wrapping children.'
  },
  {
    name: 'show',
    type: 'boolean',
    defaultValue: 'true',
    description: 'Visibility flag for toggling indicator on or off.'
  }
];
