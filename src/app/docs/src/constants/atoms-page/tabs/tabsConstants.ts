import React from 'react';
import { PropItem } from '../../../interface/components/props-table.types';

export const TABS_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Atoms', href: '/atoms' },
  { label: 'Tabs' }
];

export const TABS_HEADER_CONTENT = {
  title: 'Tabs',
  description: 'An interactive navigation component organizing content into contextual tabbed panels, featuring 10 distinct styling variants, size scales, icon slots, and controlled/uncontrolled state support.',
};

export const TABS_SECTIONS = [
  {
    id: 'theming',
    title: 'Theming',
    description: 'Production-grade tab navigation implementations for Kubernetes clusters, crypto portfolios, DevOps log streams, IAM role matrices, and dispatch hubs.',
  },
  {
    id: 'variants',
    title: 'Variants',
    description: 'Explore 10 distinct layout and indicator surface styling variants.',
  },
  {
    id: 'playground',
    title: 'Playground',
    description: 'Interactive property playground with live variant selection and code generator.',
  },
  {
    id: 'mock-code',
    title: 'Mock Code',
    description: 'Dynamic API user dashboard and tab configuration integration example.',
  },
  {
    id: 'overview',
    title: 'Overview',
    description: 'Quick usage snippet and props reference.',
  },
];

export const TABS_PROPS_DATA: PropItem[] = [
  {
    name: 'items',
    type: 'TabItem[]',
    description: 'Array of tab descriptor objects ({ id, label, content, icon?, disabled? }).'
  },
  {
    name: 'variant',
    type: "'underline' | 'pills' | 'enclosed' | 'cards' | 'glassmorphic' | 'gradient' | 'glow' | 'segmented' | 'bordered' | 'dark'",
    defaultValue: "'underline'",
    description: 'Visual layout and active indicator styling variant.'
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg'",
    defaultValue: "'md'",
    description: 'Padding and typography size scale.'
  },
  {
    name: 'fullWidth',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether the tab buttons stretch to fill the entire container width.'
  },
  {
    name: 'value',
    type: 'string',
    description: 'The currently active tab ID (controlled mode).'
  },
  {
    name: 'defaultValue',
    type: 'string',
    description: 'The initial active tab ID for uncontrolled mode.'
  },
  {
    name: 'onChange',
    type: '(id: string) => void',
    description: 'Callback fired whenever active tab selection changes.'
  },
  {
    name: 'className',
    type: 'string',
    description: 'Additional class name applied to outer wrapper container.'
  }
];
