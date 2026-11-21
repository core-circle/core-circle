import React from 'react';
import { PropItem } from '../../../interface/components/props-table.types';

export const ASPECT_RATIO_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Atoms', href: '/atoms' },
  { label: 'AspectRatio' },
];

export const ASPECT_RATIO_HEADER_CONTENT = {
  title: 'AspectRatio',
  description: 'A responsive layout container that enforces strict proportional dimensions (16:9, 4:3, 1:1, 21:9) across videos, images, maps, and media embeds.',
};

export const ASPECT_RATIO_SECTIONS = [
  {
    id: 'theming',
    title: 'Theming',
    description: 'Production-grade aspect ratio containers for 4K cinematic video players, Instagram photo feeds, ultra-wide terminal dashboards, and product media heroes.',
  },
  {
    id: 'variants',
    title: 'Variants',
    description: 'Explore 10 surface styling variants from gradient borders to frosted glass and cyber neon glow.',
  },
  {
    id: 'playground',
    title: 'Playground',
    description: 'Interactive aspect ratio playground with live ratio switching, presets, and code generator.',
  },
  {
    id: 'mock-code',
    title: 'Mock Code',
    description: 'Dynamic media embed and responsive iframe video integration example.',
  },
  {
    id: 'overview',
    title: 'Overview',
    description: 'Quick usage snippet and props reference.',
  },
];

export const ASPECT_RATIO_PROPS_DATA: PropItem[] = [
  {
    name: 'ratio',
    type: "'16:9' | '4:3' | '1:1' | '21:9' | '9:16' | '3:2' | '2:3' | '3:4' | number",
    defaultValue: "'16:9'",
    description: 'Width-to-height proportional aspect ratio constraint.'
  },
  {
    name: 'variant',
    type: "'default' | 'bordered' | 'rounded' | 'glassmorphic' | 'gradient' | 'glow' | 'dark' | 'shadow' | 'accent' | 'minimal'",
    defaultValue: "'default'",
    description: 'Container edge rounding, surface border, and halo styling.'
  },
];
