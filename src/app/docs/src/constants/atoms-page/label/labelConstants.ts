import { HomeIcon } from '@core-circle/icons';
import React from 'react';
import { PropItem } from '../../../interface/components/props-table.types';

export const LABEL_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/', icon: React.createElement(HomeIcon, { size: 14 }) },
  { label: 'Atoms', href: '/atoms' },
  { label: 'Label' },
];

export const LABEL_HEADER_CONTENT = {
  title: 'Label',
  description: 'An accessible form label primitive with support for required indicators (*), optional tags, helper icon tooltips, sub-badges, 10 color styles, and responsive typography scales.',
};

export const LABEL_PROPS_DATA: PropItem[] = [
  {
    name: 'variant',
    type: "'default' | 'primary' | 'muted' | 'success' | 'warning' | 'destructive' | 'gradient' | 'glassmorphic' | 'pill' | 'badge-label'",
    defaultValue: "'default'",
    description: 'Visual color and styling variant of the label text (10 options).'
  },
  {
    name: 'size',
    type: "'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",
    defaultValue: "'sm'",
    description: 'Typography size scale from 11px to 20px.'
  },
  {
    name: 'weight',
    type: "'light' | 'normal' | 'medium' | 'semibold' | 'bold'",
    defaultValue: "'medium'",
    description: 'Font weight scale.'
  },
  {
    name: 'required',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether to display the red required asterisk indicator (*).'
  },
  {
    name: 'optional',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether to display the (Optional) subtitle tag.'
  },
  {
    name: 'uppercase',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Transforms text to uppercase with wide tracking.'
  },
  {
    name: 'helperIcon',
    type: 'ReactNode',
    defaultValue: '-',
    description: 'Optional helper icon or info tooltip slot.'
  },
  {
    name: 'badge',
    type: 'ReactNode',
    defaultValue: '-',
    description: 'Optional sub-badge pill rendered alongside the label.'
  },
  {
    name: 'as',
    type: "'label' | 'span' | 'div'",
    defaultValue: "'label'",
    description: 'The underlying HTML tag to render.'
  },
  {
    name: 'htmlFor',
    type: 'string',
    defaultValue: '-',
    description: 'ID of the form input associated with this label.'
  }
];
