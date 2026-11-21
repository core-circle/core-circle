import React from 'react';
import { PropItem } from '../../../interface/components/props-table.types';

export const SKELETON_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Atoms', href: '/atoms' },
  { label: 'Skeleton' }
];

export const SKELETON_HEADER_CONTENT = {
  title: 'Skeleton',
  description: 'A dynamic placeholder component that displays animated shimmer and pulse shapes while content or API data is loading.',
};

export const SKELETON_SECTIONS = [
  {
    id: 'theming',
    title: 'Theming',
    description: 'Production-grade loading skeleton themes for social feeds, products, analytics, and music players.',
  },
  {
    id: 'variants',
    title: 'Variants',
    description: 'Explore 11 preset component shapes, sizes, and animation effects.',
  },
  {
    id: 'playground',
    title: 'Playground',
    description: 'Interactive property playground with dimensions and animation toggles.',
  },
  {
    id: 'mock-code',
    title: 'Mock Code',
    description: 'React Query & SWR async loading state integration examples.',
  },
  {
    id: 'overview',
    title: 'Overview',
    description: 'Quick usage snippet and props reference.',
  },
];

export const SKELETON_PROPS_DATA: PropItem[] = [
  {
    name: 'variant',
    type: "'default' | 'rectangular' | 'circular' | 'text' | 'card' | 'avatar' | 'button' | 'badge' | 'image' | 'glassmorphic' | 'gradient' | 'dark'",
    defaultValue: "'default'",
    description: 'Shape and preset surface styling of the skeleton placeholder.'
  },
  {
    name: 'animation',
    type: "'shimmer' | 'pulse' | 'wave' | 'glow' | 'none'",
    defaultValue: "'shimmer'",
    description: 'Loading animation effect applied across the skeleton.'
  },
  {
    name: 'loading',
    type: 'boolean',
    defaultValue: 'true',
    description: 'When wrapping child elements, toggles between the loading skeleton and active children.'
  },
  {
    name: 'width',
    type: 'string | number',
    description: 'Explicit width in pixels or CSS units (e.g. 100% or 320).'
  },
  {
    name: 'height',
    type: 'string | number',
    description: 'Explicit height in pixels or CSS units (e.g. 140).'
  },
  {
    name: 'borderRadius',
    type: 'string | number',
    description: 'Custom CSS border radius override.'
  },
  {
    name: 'className',
    type: 'string',
    description: 'Additional CSS class names for custom layout overrides.'
  }
];
