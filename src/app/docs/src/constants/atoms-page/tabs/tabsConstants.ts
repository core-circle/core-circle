import { HomeIcon } from '@core-circle/icons';
import React from 'react';
import { PropItem } from '../../../interface/components/props-table.types';

export const TABS_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/', icon: React.createElement(HomeIcon, { size: 14 }) },
  { label: 'Atoms', href: '/atoms' },
  { label: 'Tabs' }
];

export const TABS_HEADER_CONTENT = {
  title: 'Tabs',
  description: 'A dynamic tab component used for alternating between different views within the same context.',
};

export const TABS_SECTIONS = [
  {
    id: 'playground',
    title: 'Live Playground',
    description: 'Add tabs dynamically and experiment with different styles.',
    showBorder: true,
    isPlayground: true
  },
  {
    id: 'variants',
    title: 'Style Variants',
    description: 'Tabs support multiple visual variants including underline, pills, and enclosed styles.',
    previews: [
      {
        title: 'Variants',
        code: `<Tabs variant="underline" items={[{ id: '1', label: 'Tab 1', content: 'Content 1' }]} />\n<Tabs variant="pills" items={[{ id: '1', label: 'Tab 1', content: 'Content 1' }]} />\n<Tabs variant="enclosed" items={[{ id: '1', label: 'Tab 1', content: 'Content 1' }]} />`
      }
    ]
  },
  {
    id: 'sizes',
    title: 'Sizes',
    description: 'Adjust the size of the tabs to fit different layouts.',
    previews: [
      {
        title: 'Size Scale',
        code: `<Tabs size="sm" items={...} />\n<Tabs size="md" items={...} />\n<Tabs size="lg" items={...} />`
      }
    ]
  },
  {
    id: 'icons',
    title: 'With Icons',
    description: 'Add icons to your tabs for better visual context.',
    previews: [
      {
        title: 'Icons Integration',
        code: `<Tabs items={[\n  { id: '1', label: 'Profile', icon: <UserIcon size={16} />, content: '...' }\n]} />`
      }
    ]
  }
];

export const TABS_PROPS_DATA: PropItem[] = [
  {
    name: 'items',
    type: 'TabItem[]',
    description: 'The list of tabs to render dynamically (id, label, content, icon).'
  },
  {
    name: 'variant',
    type: "'underline' | 'pills' | 'enclosed'",
    defaultValue: "'underline'",
    description: 'The design variant of the tabs.'
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg'",
    defaultValue: "'md'",
    description: 'The size of the tabs.'
  },
  {
    name: 'fullWidth',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether the tabs list should take up the full width.'
  },
  {
    name: 'value',
    type: 'string',
    description: 'The currently active tab ID (controlled mode).'
  },
  {
    name: 'defaultValue',
    type: 'string',
    description: 'The default active tab ID (uncontrolled mode).'
  },
  {
    name: 'onChange',
    type: '(id: string) => void',
    description: 'Callback fired when the active tab changes.'
  },
  {
    name: 'className',
    type: 'string',
    description: 'Additional class name for the wrapper.'
  }
];
