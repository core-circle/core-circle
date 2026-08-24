import { HomeIcon } from '@core-circle/icons';
import React from 'react';
import { PropItem } from '../../../interface/components/props-table.types';

export const BUTTON_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/', icon: React.createElement(HomeIcon, { size: 14 }) },
  { label: 'Atoms', href: '/atoms' },
  { label: 'Button' }
];

export const BUTTON_HEADER_CONTENT = {
  title: 'Button',
  description: 'Interactive button primitive supporting 12 visual styling variants, multiple size scales, loading animations, icon slots, and elevation surfaces.',
};

export const BUTTON_PROPS_DATA: PropItem[] = [
  {
    name: 'variant',
    type: "'primary' | 'secondary' | 'success' | 'warning' | 'destructive' | 'outline' | 'ghost' | 'glassmorphic' | 'gradient' | 'floating' | 'pill' | 'soft'",
    defaultValue: "'primary'",
    description: 'Visual styling variant of the button (12 options).'
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg' | 'icon'",
    defaultValue: "'md'",
    description: 'Size dimensions and internal padding scale.'
  },
  {
    name: 'shape',
    type: "'rounded' | 'pill' | 'square'",
    defaultValue: "'rounded'",
    description: 'Border radius shape of the button container.'
  },
  {
    name: 'loading',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Renders an animated spinner and disables interaction.'
  },
  {
    name: 'startIcon',
    type: 'React.ReactNode',
    description: 'Icon element rendered before the button label.'
  },
  {
    name: 'endIcon',
    type: 'React.ReactNode',
    description: 'Icon element rendered after the button label.'
  },
  {
    name: 'fullWidth',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Expands the button to 100% of its parent container.'
  },
  {
    name: 'disabled',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Disables pointer events and lowers opacity.'
  },
];
