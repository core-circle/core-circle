import { HomeIcon } from '@core-circle/icons';
import React from 'react';
import { PropItem } from '../../../interface/components/props-table.types';

export const CARD_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/', icon: React.createElement(HomeIcon, { size: 14 }) },
  { label: 'Atoms', href: '/atoms' },
  { label: 'Card' }
];

export const CARD_HEADER_CONTENT = {
  title: 'Card',
  description: 'A flexible, elevated container primitive supporting 11 visual styling variants, media cover slots, floating corner icons/avatars, compound subcomponents, and responsive horizontal/vertical orientations.',
};

export const CARD_SECTIONS = [
  {
    id: 'overview',
    title: 'Overview',
    description: 'Card container semantics and usage.',
  },
  {
    id: 'variants',
    title: 'Variants',
    description: '11 visual card styling variants and media layouts.',
  },
  {
    id: 'playground',
    title: 'Playground',
    description: 'Interactive card playground.',
  },
];

export const CARD_PROPS_DATA: PropItem[] = [
  {
    name: 'variant',
    type: "'outline' | 'shadow' | 'floating' | 'glassmorphic' | 'gradient' | 'gradient-border' | 'flat' | 'bordered-elevated' | 'minimal' | 'interactive' | 'ghost'",
    defaultValue: "'outline'",
    description: 'The visual styling variant of the card (11 variants).'
  },
  {
    name: 'orientation',
    type: "'vertical' | 'horizontal'",
    defaultValue: "'vertical'",
    description: 'Layout flow for cards with side media or split columns.'
  },
  {
    name: 'rounded',
    type: 'boolean',
    defaultValue: 'true',
    description: 'Whether to apply rounded border corners.'
  },
  {
    name: 'hoverable',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Enables hover elevation lift and interactive cursor.'
  },
  {
    name: 'fullWidth',
    type: 'boolean',
    defaultValue: 'true',
    description: 'Whether the card expands to fill its parent container width.'
  },
  {
    name: 'Card.Media',
    type: 'Component ({ src, position, aspect, overlay, children })',
    defaultValue: '-',
    description: 'Full-bleed media slot for top banner, bottom media, side thumbnail, or background cover.'
  },
  {
    name: 'Card.Corner',
    type: 'Component ({ position, shape, size, children })',
    defaultValue: '-',
    description: 'Floating anchor at card corners for profile avatars, status badges, or action icons.'
  },
];
