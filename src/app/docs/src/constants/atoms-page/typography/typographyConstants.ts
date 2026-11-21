import React from 'react';
import { PropItem } from '../../../interface/components/props-table.types';

export const TYPOGRAPHY_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Atoms', href: '/atoms' },
  { label: 'Typography' }
];

export const TYPOGRAPHY_HEADER_CONTENT = {
  title: 'Typography',
  description: 'A comprehensive typographic design system primitive providing 14 semantic text variants, 12 design token color modes, 5 font weight scales, and alignment controls.',
};

export const TYPOGRAPHY_SECTIONS = [
  {
    id: 'theming',
    title: 'Theming',
    description: 'Production-grade typographic hierarchies for financial earnings calls, zero-trust whitepapers, AI neural benchmarks, terminal logs, and VIP editorial showcases.',
  },
  {
    id: 'variants',
    title: 'Variants',
    description: 'Explore 14 semantic heading, body, blockquote, inline code, and caption variants.',
  },
  {
    id: 'playground',
    title: 'Playground',
    description: 'Interactive typography sandbox with live variant, color token, font weight, and alignment controls.',
  },
  {
    id: 'mock-code',
    title: 'Mock Code',
    description: 'Dynamic CMS headline and rich editorial payload integration example.',
  },
  {
    id: 'overview',
    title: 'Overview',
    description: 'Quick usage snippet and props reference.',
  },
];

export const TYPOGRAPHY_PROPS_DATA: PropItem[] = [
  {
    name: 'variant',
    type: "'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'blockquote' | 'code' | 'lead' | 'large' | 'small' | 'muted'",
    defaultValue: "'p'",
    description: 'Semantic scale and typography hierarchy level.'
  },
  {
    name: 'color',
    type: "'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'gradient' | 'glow' | 'accent' | 'muted' | 'white'",
    defaultValue: "'default'",
    description: 'Design token text color or radiant gradient fill.'
  },
  {
    name: 'as',
    type: 'React.ElementType',
    description: 'Custom underlying HTML element tag override (e.g. span, p, h2).'
  },
  {
    name: 'weight',
    type: "'light' | 'normal' | 'medium' | 'semibold' | 'bold'",
    defaultValue: "'normal'",
    description: 'Font weight scale from 300 to 700.'
  },
  {
    name: 'align',
    type: "'left' | 'center' | 'right' | 'justify'",
    defaultValue: "'left'",
    description: 'Horizontal text alignment.'
  },
  {
    name: 'italic',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether font style is italic.'
  },
  {
    name: 'underline',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether text has an underline with offset.'
  }
];
