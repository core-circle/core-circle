import React from 'react';
import { PropItem } from '../../../interface/components/props-table.types';

export const RATING_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Atoms', href: '/atoms' },
  { label: 'Rating' },
];

export const RATING_HEADER_CONTENT = {
  title: 'Rating',
  description: 'An interactive satisfaction and evaluation rating component supporting half-star increments, custom icon slots, read-only mode, and 10 visual variants.',
};

export const RATING_SECTIONS = [
  {
    id: 'theming',
    title: 'Theming',
    description: 'Production-grade rating themes for e-commerce reviews, NPS feedback surveys, movie critic scores, Michelin guides, and app store ratings.',
  },
  {
    id: 'variants',
    title: 'Variants',
    description: 'Explore 10 color and halo glow styling variants across sizes sm through xl.',
  },
  {
    id: 'playground',
    title: 'Playground',
    description: 'Interactive rating playground with live hover state toggles, half-star controls, and code generator.',
  },
  {
    id: 'mock-code',
    title: 'Mock Code',
    description: 'Dynamic customer review submission payload integration example.',
  },
  {
    id: 'overview',
    title: 'Overview',
    description: 'Quick usage snippet and props reference.',
  },
];

export const RATING_PROPS_DATA: PropItem[] = [
  {
    name: 'value',
    type: 'number',
    defaultValue: '-',
    description: 'Controlled star rating numeric value.'
  },
  {
    name: 'defaultValue',
    type: 'number',
    defaultValue: '0',
    description: 'Initial rating value in uncontrolled mode.'
  },
  {
    name: 'max',
    type: 'number',
    defaultValue: '5',
    description: 'Total number of star rating items to render.'
  },
  {
    name: 'allowHalf',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether to allow 0.5 decimal fractional increments.'
  },
  {
    name: 'readOnly',
    type: 'boolean',
    defaultValue: 'false',
    description: 'If true, user cannot interactively modify the score.'
  },
  {
    name: 'disabled',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Disables all interactions and applies reduced opacity.'
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg' | 'xl'",
    defaultValue: "'md'",
    description: 'Scale size of the star items.'
  },
  {
    name: 'variant',
    type: "'default' | 'amber' | 'gold' | 'rose' | 'emerald' | 'indigo' | 'gradient' | 'glow' | 'glassmorphic' | 'dark'",
    defaultValue: "'default'",
    description: 'Visual color theme and drop shadow effect.'
  },
  {
    name: 'showScore',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether to display the numerical value alongside the stars.'
  },
  {
    name: 'onChange',
    type: '(value: number) => void',
    defaultValue: '-',
    description: 'Callback triggered when user selects a new rating value.'
  },
];
