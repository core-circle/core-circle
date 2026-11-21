import React from 'react';
import { PropItem } from '../../../interface/components/props-table.types';

export const SCROLL_AREA_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Atoms', href: '/atoms' },
  { label: 'ScrollArea' },
];

export const SCROLL_AREA_HEADER_CONTENT = {
  title: 'ScrollArea',
  description: 'A cross-browser custom smooth scrollable viewport with 10 themed scrollbar thumb and track variants, multi-directional scrolling, and autohide options.',
};

export const SCROLL_AREA_SECTIONS = [
  {
    id: 'theming',
    title: 'Theming',
    description: 'Production-grade scroll containers for live terminal telemetry, stock market tickers, realtime chat threads, and file explorers.',
  },
  {
    id: 'variants',
    title: 'Variants',
    description: 'Explore 10 themed scrollbar thumb, track, and halo glow styling variants.',
  },
  {
    id: 'playground',
    title: 'Playground',
    description: 'Interactive scroll area playground with live orientation, height constraint, and code generator.',
  },
  {
    id: 'mock-code',
    title: 'Mock Code',
    description: 'Dynamic server telemetry log stream payload integration example.',
  },
  {
    id: 'overview',
    title: 'Overview',
    description: 'Quick usage snippet and props reference.',
  },
];

export const SCROLL_AREA_PROPS_DATA: PropItem[] = [
  {
    name: 'orientation',
    type: "'vertical' | 'horizontal' | 'both'",
    defaultValue: "'vertical'",
    description: 'Permitted axis directions for overflowing content scroll.'
  },
  {
    name: 'variant',
    type: "'default' | 'subtle' | 'thin' | 'glow' | 'gradient' | 'glassmorphic' | 'dark' | 'rounded' | 'accent' | 'minimal'",
    defaultValue: "'default'",
    description: 'Scrollbar track and thumb color/shadow aesthetic.'
  },
  {
    name: 'maxHeight',
    type: 'string | number',
    defaultValue: '-',
    description: 'Maximum container height before scrollbars activate.'
  },
  {
    name: 'maxWidth',
    type: 'string | number',
    defaultValue: '-',
    description: 'Maximum container width before horizontal scrollbars activate.'
  },
  {
    name: 'hideScrollbar',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Enables smooth scrolling while visually hiding native scrollbars.'
  },
];
