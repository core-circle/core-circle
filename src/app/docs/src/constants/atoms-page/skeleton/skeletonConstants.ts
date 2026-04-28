import { HomeIcon } from '@core-circle/icons';
import React from 'react';

export const SKELETON_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/', icon: React.createElement(HomeIcon, { size: 14 }) },
  { label: 'Atoms', href: '/atoms' },
  { label: 'Skeleton', href: '/atoms/skeleton', active: true },
];

export const SKELETON_HEADER_CONTENT = {
  title: 'Skeleton',
  description: 'Provide a placeholder for content that is still loading with smooth animations.',
};
