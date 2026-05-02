import { HomeIcon } from '@core-circle/icons';
import React from 'react';
import { PropItem } from '../../../interface/components/props-table.types';

export const COLOR_PICKER_BREADCRUMB_ITEMS = [
  {
    label: 'Home',
    href: '/',
    icon: React.createElement(HomeIcon, { size: 14 }),
  },
  { label: 'Atoms', href: '/atoms' },
  { label: 'ColorPicker' },
];

export const COLOR_PICKER_HEADER_CONTENT = {
  title: 'ColorPicker',
  description:
    'A sleek, visual color selection component with support for hex values and multiple design variants.',
};

export const COLOR_PICKER_SECTIONS = [
  {
    id: 'playground',
    title: 'Live Playground',
    description: 'Experiment with variants, sizes, and display options live.',
    showBorder: true,
    isPlayground: true,
  },
  {
    id: 'variants',
    title: 'Visual Variants',
    description: 'Choose between different design styles to match your UI.',
    previews: [
      {
        id: 'outline',
        title: 'Outline (Default)',
        code: '<ColorPicker variant="outline" label="Primary Color" value="#3b82f6" />',
      },
      {
        id: 'material',
        title: 'Material Design',
        code: '<ColorPicker variant="material" label="Secondary Color" value="#10b981" />',
      },
    ],
  },
];

export const COLOR_PICKER_PROPS_DATA: PropItem[] = [
  {
    name: 'value',
    type: 'string',
    defaultValue: "'#3b82f6'",
    description: 'The current color hex value.',
  },
  {
    name: 'label',
    type: 'string',
    description: 'Text label displayed above the picker.',
  },
  {
    name: 'variant',
    type: "'outline' | 'material' | 'ghost'",
    defaultValue: "'outline'",
    description: 'The visual style variant.',
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg'",
    defaultValue: "'md'",
    description: 'Size of the color swatch.',
  },
  {
    name: 'showValue',
    type: 'boolean',
    defaultValue: 'true',
    description: 'Whether to display the hex code next to the swatch.',
  },
];
