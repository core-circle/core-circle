import { HomeIcon } from '@core-circle/icons';
import React from 'react';

export const DIVIDER_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/', icon: React.createElement(HomeIcon, { size: 14 }) },
  { label: 'Atoms', href: '/atoms' },
  { label: 'Divider', href: '/atoms/divider', active: true },
];

export const DIVIDER_HEADER_CONTENT = {
  title: 'Divider',
  description: 'A visual separator between sections of content, supporting horizontal and vertical orientations.',
};
