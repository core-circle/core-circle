import { HomeIcon } from '@core-circle/icons';
import React from 'react';
import { PropItem } from '../../../interface/components/props-table.types';

export const DIVIDER_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/', icon: React.createElement(HomeIcon, { size: 14 }) },
  { label: 'Atoms', href: '/atoms' },
  { label: 'Divider' },
];

export const DIVIDER_HEADER_CONTENT = {
  title: 'Divider',
  description: 'A clean visual line separator between content blocks, supporting 10 styles, embedded labels, and dual orientations.',
};

export const DIVIDER_SECTIONS = [
  { id: 'overview', title: 'Overview', description: 'Divider line semantics.' },
  { id: 'variants', title: 'Variants', description: '10 visual divider line styles.' },
  { id: 'playground', title: 'Playground', description: 'Interactive divider playground.' },
];

export const DIVIDER_PROPS_DATA: PropItem[] = [
  {
    name: 'variant',
    type: "'solid' | 'dashed' | 'dotted' | 'gradient' | 'fade' | 'accent' | 'subtle' | 'thick' | 'double' | 'glow'",
    defaultValue: "'solid'",
    description: 'The visual styling variant of the divider line (10 variants).'
  },
  {
    name: 'orientation',
    type: "'horizontal' | 'vertical'",
    defaultValue: "'horizontal'",
    description: 'The layout direction of the separator.'
  },
  {
    name: 'thickness',
    type: "'sm' | 'md' | 'lg'",
    defaultValue: "'sm'",
    description: 'Line thickness width/height.'
  },
  {
    name: 'align',
    type: "'start' | 'center' | 'end'",
    defaultValue: "'center'",
    description: 'Alignment of embedded text or badge content (horizontal only).'
  },
  {
    name: 'children',
    type: 'ReactNode',
    defaultValue: '-',
    description: 'Optional embedded label, badge, or icon node.'
  },
];
