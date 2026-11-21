import { HomeIcon } from '@core-circle/icons';
import React from 'react';
import { PropItem } from '../../../interface/components/props-table.types';

export const MULTI_SELECT_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/', icon: React.createElement(HomeIcon, { size: 14 }) },
  { label: 'Atoms', href: '/atoms' },
  { label: 'MultiSelect' }
];

export const MULTI_SELECT_HEADER_CONTENT = {
  title: 'MultiSelect',
  description: 'A multi-item selection primitive featuring removable tag chips, live search filtering, select-all shortcuts, 10 visual variants, and overflow tag counters.',
};

export const MULTI_SELECT_PROPS_DATA: PropItem[] = [
  {
    name: 'options',
    type: 'MultiSelectOption[]',
    defaultValue: '[]',
    description: 'Array of option objects with label, value, group, and icon properties.'
  },
  {
    name: 'value',
    type: 'string[]',
    defaultValue: '-',
    description: 'Controlled array of selected value keys.'
  },
  {
    name: 'defaultValue',
    type: 'string[]',
    defaultValue: '[]',
    description: 'Initial selected values for uncontrolled usage.'
  },
  {
    name: 'variant',
    type: "'outline' | 'filled' | 'floating' | 'glassmorphic' | 'pill' | 'material' | 'gradient' | 'compact' | 'chips' | 'ghost'",
    defaultValue: "'outline'",
    description: 'Visual style variant of the input trigger (10 options).'
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg'",
    defaultValue: "'md'",
    description: 'Size scale of the trigger bar and dropdown options.'
  },
  {
    name: 'label',
    type: 'ReactNode',
    defaultValue: '-',
    description: 'Label displayed above the multi-select input.'
  },
  {
    name: 'placeholder',
    type: 'string',
    defaultValue: "'Select options...'",
    description: 'Placeholder text shown when no options are selected.'
  },
  {
    name: 'searchable',
    type: 'boolean',
    defaultValue: 'true',
    description: 'Whether to show the search input inside the dropdown.'
  },
  {
    name: 'showSelectAll',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether to display Select All / Deselect All toolbar buttons.'
  },
  {
    name: 'showClearAll',
    type: 'boolean',
    defaultValue: 'true',
    description: 'Whether to render the clear (x) button in the trigger.'
  },
  {
    name: 'maxTags',
    type: 'number',
    defaultValue: '3',
    description: 'Max chips displayed before collapsing remaining count into a +N badge.'
  },
  {
    name: 'fullWidth',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether the multi-select expands to fill container width.'
  },
  {
    name: 'disabled',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether the component is disabled.'
  },
  {
    name: 'onChange',
    type: '(values: string[]) => void',
    defaultValue: '-',
    description: 'Callback triggered when selected items change.'
  }
];
