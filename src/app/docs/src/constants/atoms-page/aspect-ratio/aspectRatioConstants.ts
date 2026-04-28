import { HomeIcon } from '@core-circle/icons';
import React from 'react';

export const ASPECT_RATIO_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/', icon: React.createElement(HomeIcon, { size: 14 }) },
  { label: 'Atoms', href: '/atoms' },
  { label: 'AspectRatio', href: '/atoms/aspect-ratio', active: true },
];

export const ASPECT_RATIO_HEADER_CONTENT = {
  title: 'AspectRatio',
  description: 'Displays content within a desired ratio, maintaining its proportions during responsive resizing.',
};
