import { HomeIcon } from '@core-circle/icons';
import React from 'react';

export const SPINNER_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/', icon: React.createElement(HomeIcon, { size: 14 }) },
  { label: 'Atoms', href: '/atoms' },
  { label: 'Spinner', href: '/atoms/spinner', active: true },
];

export const SPINNER_HEADER_CONTENT = {
  title: 'Spinner',
  description: 'An indeterminate circular progress indicator for loading states.',
};
