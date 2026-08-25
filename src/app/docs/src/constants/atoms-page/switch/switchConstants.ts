import React from 'react';
import { PropItem } from '../../../interface/components/props-table.types';

export const SWITCH_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Atoms', href: '/atoms' },
  { label: 'Switch' }
];

export const SWITCH_HEADER_CONTENT = {
  title: 'Switch',
  description: 'An interactive two-state toggle switch supporting 12 visual variants, internal thumb icons, size scales, and accessible keyboard navigation.',
};

export const SWITCH_SECTIONS = [
  {
    id: 'theming',
    title: 'Theming',
    description: 'Production-grade toggle themes for dark mode switching, cloud auto-scaling, biometric 2FA enforcement, smart home HVAC, and overdraft protection.',
  },
  {
    id: 'variants',
    title: 'Variants',
    description: 'Explore 12 distinct color and surface track styling variants.',
  },
  {
    id: 'playground',
    title: 'Playground',
    description: 'Interactive property playground with live toggling, variant selection, and snippet generation.',
  },
  {
    id: 'mock-code',
    title: 'Mock Code',
    description: 'Dynamic API user preferences state integration example.',
  },
  {
    id: 'overview',
    title: 'Overview',
    description: 'Quick usage snippet and props reference.',
  },
];

export const SWITCH_PROPS_DATA: PropItem[] = [
  {
    name: 'variant',
    type: "'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'gradient' | 'glassmorphic' | 'glow' | 'floating' | 'accent' | 'dark'",
    defaultValue: "'primary'",
    description: 'Color theme variant applied to the active switch track.'
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg'",
    defaultValue: "'md'",
    description: 'Track dimensions and thumb diameter scale.'
  },
  {
    name: 'checked',
    type: 'boolean',
    description: 'Controlled on/off state of the switch.'
  },
  {
    name: 'defaultChecked',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Initial state for uncontrolled usage.'
  },
  {
    name: 'thumbIcon',
    type: 'React.ReactNode',
    description: 'Optional icon rendered inside the moving thumb circle (e.g. Moon or Sun).'
  },
  {
    name: 'onCheckedChange',
    type: '(checked: boolean) => void',
    description: 'Callback fired when the switch toggle state changes.'
  },
  {
    name: 'disabled',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether the switch is interactive or disabled.'
  },
  {
    name: 'className',
    type: 'string',
    description: 'Additional CSS classes.'
  }
];

