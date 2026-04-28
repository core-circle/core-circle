'use client';

import { 
  HomeIcon
} from '@core-circle/icons';
import React from 'react';

/**
 * Main Molecules Page Breadcrumb Items
 */
export const MOLECULES_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/', icon: React.createElement(HomeIcon, { size: 14 }) },
  { label: 'Molecules' }
];

/**
 * Main Molecules Page Header Content
 */
export const MOLECULES_HEADER_CONTENT = {
  title: 'Molecules',
  description: 'Molecules are groups of atoms bonded together and are the smallest fundamental units of a compound. These molecules take on their own properties and serve as the backbone of our design system.',
};

/**
 * Molecules List for the main grid
 */
export const MOLECULE_CARDS = [];
