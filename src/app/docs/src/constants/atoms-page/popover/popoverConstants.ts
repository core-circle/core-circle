import { HomeIcon } from '@core-circle/icons';
import React from 'react';
import { PropItem } from '../../../interface/components/props-table.types';

export const POPOVER_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/', icon: React.createElement(HomeIcon, { size: 14 }) },
  { label: 'Atoms', href: '/atoms' },
  { label: 'Popover' },
];

export const POPOVER_HEADER_CONTENT = {
  title: 'Popover',
  description: 'An accessible floating card container for rich contextual tools, user profiles, date pickers, and filter menus, supporting 10 visual variants, header actions, and pure light mode surfaces.',
};

export const POPOVER_PROPS_DATA: PropItem[] = [
  {
    name: 'trigger',
    type: 'ReactNode',
    defaultValue: '-',
    description: 'The interactive trigger element that toggles the popover.'
  },
  {
    name: 'children',
    type: 'ReactNode',
    defaultValue: '-',
    description: 'Content rendered inside the popover body.'
  },
  {
    name: 'title',
    type: 'ReactNode',
    defaultValue: '-',
    description: 'Header title text displayed at top.'
  },
  {
    name: 'description',
    type: 'ReactNode',
    defaultValue: '-',
    description: 'Subtitle description text displayed under the title.'
  },
  {
    name: 'icon',
    type: 'ReactNode',
    defaultValue: '-',
    description: 'Optional leading icon displayed in the header.'
  },
  {
    name: 'variant',
    type: "'card' | 'floating' | 'glassmorphic' | 'gradient' | 'bordered' | 'pill' | 'primary' | 'success' | 'warning' | 'compact'",
    defaultValue: "'card'",
    description: 'Visual surface and border variant (10 options).'
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg' | 'xl' | 'auto'",
    defaultValue: "'md'",
    description: 'Width scale of the popover card (from 240px to 384px or auto).'
  },
  {
    name: 'position',
    type: "'top' | 'bottom' | 'left' | 'right'",
    defaultValue: "'bottom'",
    description: 'Placement relative to the trigger element.'
  },
  {
    name: 'align',
    type: "'start' | 'center' | 'end'",
    defaultValue: "'center'",
    description: 'Alignment along the trigger axis.'
  },
  {
    name: 'showClose',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether to render the accessible top-right close (x) button.'
  },
  {
    name: 'showArrow',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether to display an arrow pointer pointing toward the trigger.'
  },
  {
    name: 'open',
    type: 'boolean',
    defaultValue: '-',
    description: 'Controlled open state.'
  },
  {
    name: 'defaultOpen',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Initial open state for uncontrolled usage.'
  },
  {
    name: 'onOpenChange',
    type: '(open: boolean) => void',
    defaultValue: '-',
    description: 'Callback fired when popover opens or closes.'
  }
];
