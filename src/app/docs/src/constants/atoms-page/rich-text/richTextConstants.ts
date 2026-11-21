import { HomeIcon } from '@core-circle/icons';
import React from 'react';
import { PropItem } from '../../../interface/components/props-table.types';

export const RICHTEXT_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Atoms', href: '/atoms' },
  { label: 'RichText' }
];

export const RICHTEXT_HEADER_CONTENT = {
  title: 'RichText',
  description: 'A component for rendering complex HTML or formatted content with consistent design system styles. Perfect for blog posts, documentation, and user-generated content.',
};

export const RICHTEXT_PROPS_DATA: PropItem[] = [
  {
    name: 'content',
    type: 'string',
    description: 'The raw HTML string to be safely sanitized and formatted with design system typography rules.'
  },
  {
    name: 'variant',
    type: "'default' | 'card' | 'bordered' | 'floating' | 'glassmorphic' | 'gradient' | 'filled' | 'minimal' | 'ghost' | 'accent' | 'dark'",
    defaultValue: "'default'",
    description: 'Visual surface, border, and elevation theme of the rich text container.'
  },
  {
    name: 'size',
    type: "'sm' | 'base' | 'lg'",
    defaultValue: "'base'",
    description: 'Typography scale and heading sizing hierarchy.'
  },
  {
    name: 'className',
    type: 'string',
    description: 'Additional CSS class names to apply custom overrides.'
  }
];

export const RICHTEXT_SECTIONS = [
  {
    id: 'theming',
    title: 'Theming',
    description: 'Production-ready themes for security compliance, API release notes, VIP editorials, and knowledge bases.',
  },
  {
    id: 'variants',
    title: 'Variants',
    description: 'Explore 11 surface and typography variants.',
  },
  {
    id: 'playground',
    title: 'Playground',
    description: 'Interactive playground to test variants and content templates.',
  },
  {
    id: 'mock-code',
    title: 'Mock Code',
    description: 'Headless CMS integration and dynamic article viewer examples.',
  },
  {
    id: 'overview',
    title: 'Overview',
    description: 'Quick usage guide and component properties.',
  },
];
