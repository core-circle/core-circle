'use client';

import {
  HomeIcon,
  Layers,
  List,
  AccordionIcon,
  Bell,
  Calendar,
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
    'Molecules are groups of atoms bonded together and are the smallest fundamental units of a compound. These molecules take on their own properties and serve as the backbone of our design system.',
};

/**
 * Molecules List for the main grid
 */
export const MOLECULE_CARDS = [
  {
    title: 'Card',
    description:
      'A flexible content container with support for headers, footers, and various styles.',
    href: '/molecules/card',
    icon: Layers,
  },
  {
    title: 'Stepper',
    description: 'A visual progress indicator for multi-stage workflows.',
    href: '/molecules/stepper',
    icon: List,
  },
  {
    title: 'Accordion',
    description:
      'A flexible, compound-based accordion for vertically stacked content.',
    href: '/molecules/accordion',
    icon: AccordionIcon,
  },
  {
    title: 'Toast',
    description: 'A notification system for displaying temporary alerts.',
    href: '/molecules/toast',
    icon: Bell,
  },
  {
    title: 'DatePicker',
    description: 'A visual interface for selecting dates from a calendar.',
    href: '/molecules/date-picker',
    icon: Calendar,
  },
];
