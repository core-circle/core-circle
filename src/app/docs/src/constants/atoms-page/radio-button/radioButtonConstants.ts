import { HomeIcon } from '@core-circle/icons';
import React from 'react';
import { PropItem } from '../../../interface/components/props-table.types';

export const RADIO_BUTTON_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/', icon: React.createElement(HomeIcon, { size: 14 }) },
  { label: 'Atoms', href: '/atoms' },
  { label: 'RadioButton' }
];

export const RADIO_BUTTON_HEADER_CONTENT = {
  title: 'RadioButton',
  description: 'A single-selection control allowing users to select one option from a mutually exclusive set, supporting 10 style variants, rich plan cards, and subtitle descriptions.',
};

export const RADIO_BUTTON_PROPS_DATA: PropItem[] = [
  {
    name: 'checked',
    type: 'boolean',
    defaultValue: '-',
    description: 'Controlled checked state of the radio button.'
  },
  {
    name: 'defaultChecked',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Initial checked state for uncontrolled usage.'
  },
  {
    name: 'variant',
    type: "'outline' | 'solid' | 'card' | 'floating' | 'glassmorphic' | 'gradient' | 'pill' | 'bordered' | 'success' | 'ghost'",
    defaultValue: "'outline'",
    description: 'Visual style and container variant (10 options).'
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg'",
    defaultValue: "'md'",
    description: 'Size scale of the radio circle and label.'
  },
  {
    name: 'label',
    type: 'ReactNode',
    defaultValue: '-',
    description: 'Primary label text displayed alongside the radio circle.'
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
    name: 'name',
    type: 'string',
    defaultValue: '-',
    description: 'HTML group name for mutually exclusive selection.'
  },
  {
    name: 'value',
    type: 'string',
    defaultValue: '-',
    description: 'Value of this radio option passed to onChange.'
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
    description: 'Whether the radio option is disabled.'
  },
  {
    name: 'onChange',
    type: '(value: string) => void',
    defaultValue: '-',
    description: 'Callback fired when this option is selected.'
  }
];
