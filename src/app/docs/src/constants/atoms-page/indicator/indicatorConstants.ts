import { HomeIcon } from '@core-circle/icons';
import React from 'react';

export const INDICATOR_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/', icon: React.createElement(HomeIcon, { size: 14 }) },
  { label: 'Atoms', href: '/atoms' },
  { label: 'Indicator' },
];

export const INDICATOR_HEADER_CONTENT = {
  title: 'Indicator',
  description: 'The Indicator component is used to show a status marker or count overlay on other components.',
};

export const INDICATOR_PROPS_DATA = [
  { name: 'variant', type: 'primary | success | warning | danger | info', defaultValue: 'primary', description: 'Semantic color variant' },
  { name: 'size', type: 'sm | md | lg', defaultValue: 'md', description: 'The size of the indicator' },
  { name: 'position', type: 'top-right | top-left | bottom-right | bottom-left', defaultValue: 'top-right', description: 'Placement relative to children' },
  { name: 'pulse', type: 'boolean', defaultValue: 'false', description: 'Whether to apply a pulse animation' },
  { name: 'content', type: 'ReactNode', defaultValue: '-', description: 'Optional text or number to display inside' },
  { name: 'show', type: 'boolean', defaultValue: 'true', description: 'Whether to show the indicator' },
];
