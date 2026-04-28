import { HomeIcon } from '@core-circle/icons';
import React from 'react';

export const KBD_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/', icon: React.createElement(HomeIcon, { size: 14 }) },
  { label: 'Atoms', href: '/atoms' },
  { label: 'Kbd' },
];

export const KBD_HEADER_CONTENT = {
  title: 'Kbd',
  description: 'The Kbd component is used to display keyboard shortcuts and keys.',
};

export const KBD_PROPS_DATA = [
  { name: 'variant', type: 'outline | solid | ghost', defaultValue: 'outline', description: 'Visual style of the kbd component' },
  { name: 'size', type: 'sm | md', defaultValue: 'md', description: 'The size of the kbd component' },
  { name: 'children', type: 'ReactNode', defaultValue: '-', description: 'The key name or icon' },
];
