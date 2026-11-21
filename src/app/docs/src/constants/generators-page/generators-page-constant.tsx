import React from 'react';
import { HomeIcon, Palette } from '@core-circle/icons';

/**
 * Generators Page Header Content
 */
export const GENERATORS_HEADER_CONTENT = {
  title: 'Generators',
  description: 'Interactive tooling, theme configurators, and asset generators for the CoreCircle ecosystem.',
};

/**
 * Generators Breadcrumb Items
 */
export const GENERATORS_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/', icon: <HomeIcon size={14} /> },
  { label: 'Generators' },
];

/**
 * Main generator tool cards for the generators listing page
 */
export const GENERATOR_CARDS = [
  {
    title: 'Theme Generator',
    description: 'Generate customized Tailwind CSS v4 [product].theme.css stylesheets and design tokens for custom customer brand lines.',
    href: '/generators/theme-generator',
    icon: Palette,
  },
];
