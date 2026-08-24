'use client';

import {
  HomeIcon,
} from '@core-circle/icons';
import React from 'react';

/**
 * Main Molecules Page Breadcrumb Items
 */
export const MOLECULES_BREADCRUMB_ITEMS = [
  {
    label: 'Home',
    href: '/',
    icon: React.createElement(HomeIcon, { size: 14 }),
  },
  { label: 'Molecules' },
];

/**
 * Main Molecules Page Header Content
 */
export const MOLECULES_HEADER_CONTENT = {
  title: 'Molecules',
  description:
    'Molecules are relatively complex UI components composed of groups of atomic primitives bonded together. As new molecules are built, they will appear here.',
};

/**
 * Molecules List for the main grid
 */
export const MOLECULE_CARDS: any[] = [];
