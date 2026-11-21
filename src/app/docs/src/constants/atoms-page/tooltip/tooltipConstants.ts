import React from 'react';
import { PropItem } from '../../../interface/components/props-table.types';

export const TOOLTIP_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Atoms', href: '/atoms' },
  { label: 'Tooltip' },
];

export const TOOLTIP_HEADER_CONTENT = {
  title: 'Tooltip',
  description: 'An interactive contextual popover element displayed on hover or click, featuring 10 styling variants, multi-directional position placement, and dynamic content slots.',
};

export const TOOLTIP_SECTIONS = [
  {
    id: 'theming',
    title: 'Theming',
    description: 'Production-grade contextual tooltips for crypto asset metrics, Kubernetes nodes, biometrics, TLS certificates, and express delivery.',
  },
  {
    id: 'variants',
    title: 'Variants',
    description: 'Explore 10 distinct border, halo glow, and background surface styling variants.',
  },
  {
    id: 'playground',
    title: 'Playground',
    description: 'Interactive property playground with live variant selection, position triggers, and code generator.',
  },
  {
    id: 'mock-code',
    title: 'Mock Code',
    description: 'Dynamic remote user telemetry tooltip integration example.',
  },
  {
    id: 'overview',
    title: 'Overview',
    description: 'Quick usage snippet and props reference.',
  },
];

export const TOOLTIP_PROPS_DATA: PropItem[] = [
  {
    name: 'title',
    type: 'string',
    description: 'Header headline text of the tooltip popover.'
  },
  {
    name: 'description',
    type: 'string',
    description: 'Descriptive explanatory body text inside the tooltip.'
  },
  {
    name: 'variant',
    type: "'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'gradient' | 'glow' | 'glassmorphic' | 'dark'",
    defaultValue: "'primary'",
    description: 'Visual theme and border surface styling variant.'
  },
  {
    name: 'position',
    type: "'top' | 'bottom' | 'left' | 'right'",
    defaultValue: "'top'",
    description: 'Directional anchoring position relative to target trigger.'
  },
  {
    name: 'trigger',
    type: "'click' | 'hover'",
    defaultValue: "'click'",
    description: 'User interaction event that toggles tooltip visibility.'
  },
  {
    name: 'icon',
    type: 'React.ReactNode',
    description: 'Custom trigger node replacing the default Info icon.'
  },
  {
    name: 'showCloseIcon',
    type: 'boolean',
    defaultValue: 'true',
    description: 'Whether to show the dismiss close icon when in click mode.'
  },
  {
    name: 'className',
    type: 'string',
    description: 'Additional CSS classes.'
  }
];
