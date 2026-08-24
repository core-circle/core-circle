import { HomeIcon } from '@core-circle/icons';
import React from 'react';
import { PropItem } from '../../../interface/components/props-table.types';

export const BREADCRUMB_DOCS_ITEMS = [
  { label: 'Home', href: '/', icon: React.createElement(HomeIcon, { size: 14 }) },
  { label: 'Atoms', href: '/atoms' },
  { label: 'Breadcrumb' }
];

export const BREADCRUMB_HEADER_CONTENT = {
  title: 'Breadcrumb',
  description: 'A hierarchical navigation trail that allows users to identify their location within application routes and nested document trees.',
};

export const BREADCRUMB_SECTIONS = [
  {
    id: 'overview',
    title: 'Overview',
    description: 'Breadcrumbs show user location within application hierarchy.',
  },
  {
    id: 'variants',
    title: 'Variants',
    description: 'Multiple visual styles for breadcrumb trails.',
  },
  {
    id: 'playground',
    title: 'Playground',
    description: 'Interactive breadcrumb sandbox.',
  },
];

export const BREADCRUMB_PROPS_DATA: PropItem[] = [
  {
    name: 'items',
    type: 'BreadcrumbItem[]',
    description: 'Array of objects representing each breadcrumb step (label, href, icon, prefix, suffix).'
  },
  {
    name: 'variant',
    type: "'standard' | 'pills' | 'card' | 'glassmorphic' | 'gradient' | 'floating' | 'underlined' | 'bordered-segment' | 'soft' | 'ghost'",
    defaultValue: "'standard'",
    description: 'Visual styling variant of the breadcrumb trail (10 options).'
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg'",
    defaultValue: "'md'",
    description: 'Font size and spacing scale of the breadcrumb trail.'
  },
  {
    name: 'separator',
    type: 'ReactNode',
    defaultValue: '<ChevronRight />',
    description: 'Custom element or icon rendered between trail items.'
  },
  {
    name: 'showBack',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Renders a history back button leading the breadcrumb trail.'
  },
  {
    name: 'backLabel',
    type: 'string',
    defaultValue: "'Back'",
    description: 'Custom text label for the back button.'
  },
  {
    name: 'renderLink',
    type: '(props) => ReactNode',
    defaultValue: '-',
    description: 'Custom link renderer slot (essential for Next.js <Link>).'
  },
];
