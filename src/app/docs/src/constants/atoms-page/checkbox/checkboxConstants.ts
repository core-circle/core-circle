import { HomeIcon } from '@core-circle/icons';
import React from 'react';
import { PropItem } from '../../../interface/components/props-table.types';

export const CHECKBOX_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/', icon: React.createElement(HomeIcon, { size: 14 }) },
  { label: 'Atoms', href: '/atoms' },
  { label: 'Checkbox' }
];

export const CHECKBOX_HEADER_CONTENT = {
  title: 'Checkbox',
  description: 'A multi-state selection control supporting 10 visual variants, rich card containers, indeterminate minus states, contour shapes, and accessibility labels.',
};

export const CHECKBOX_PROPS_DATA: PropItem[] = [
  {
    name: 'checked',
    type: 'boolean',
    defaultValue: '-',
    description: 'Controlled checked state of the checkbox.'
  },
  {
    name: 'defaultChecked',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Initial checked state for uncontrolled usage.'
  },
  {
    name: 'indeterminate',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Displays a horizontal minus icon representing a partially selected parent group.'
  },
  {
    name: 'variant',
    type: "'solid' | 'outline' | 'card' | 'floating' | 'glassmorphic' | 'gradient' | 'pill' | 'bordered' | 'success' | 'ghost'",
    defaultValue: "'solid'",
    description: 'Visual style and container variant (10 options).'
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg'",
    defaultValue: "'md'",
    description: 'Size scale of the checkbox box and label text.'
  },
  {
    name: 'shape',
    type: "'rounded' | 'circle' | 'square'",
    defaultValue: "'rounded'",
    description: 'Contour shape of the checkbox box.'
  },
  {
    name: 'label',
    type: 'ReactNode',
    defaultValue: '-',
    description: 'Primary label text displayed alongside the checkbox.'
  },
  {
    name: 'description',
    type: 'ReactNode',
    defaultValue: '-',
    description: 'Subtitle description text rendered under the label.'
  },
  {
    name: 'badge',
    type: 'ReactNode',
    defaultValue: '-',
    description: 'Optional badge pill rendered next to the label.'
  },
  {
    name: 'error',
    type: 'string',
    defaultValue: '-',
    description: 'Error validation message displayed below.'
  },
  {
    name: 'helperText',
    type: 'string',
    defaultValue: '-',
    description: 'Guidance text displayed below.'
  },
  {
    name: 'disabled',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether the checkbox is disabled.'
  },
  {
    name: 'onChange',
    type: '(e: React.ChangeEvent<HTMLInputElement>) => void',
    defaultValue: '-',
    description: 'Standard event callback when state changes.'
  },
  {
    name: 'onCheckedChange',
    type: '(checked: boolean) => void',
    defaultValue: '-',
    description: 'Simplified boolean callback when checked state changes.'
  }
];
