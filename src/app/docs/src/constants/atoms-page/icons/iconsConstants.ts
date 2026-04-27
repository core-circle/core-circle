import { HomeIcon } from '@core-circle/icons';
import React from 'react';

export const ICONS_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/', icon: React.createElement(HomeIcon, { size: 14 }) },
  { label: 'Atoms', href: '/atoms' },
  { label: 'Icons' }
];

export const ICONS_HEADER_CONTENT = {
  title: 'Icons',
  description: 'A comprehensive collection of 110+ premium icons designed to perfectly align with the Core Circle design system.',
};

export const ICONS_SECTIONS = [
  {
    id: 'usage',
    title: 'Usage',
    description: 'Icons are easy to use and fully customizable with standard SVG props.',
    previews: [
      {
        title: 'Basic Usage',
        code: "import { HomeIcon, SearchIcon } from '@core-circle/icons';\n\n<HomeIcon size={24} color=\"primary\" />\n<SearchIcon size={20} className=\"opacity-50\" />"
      }
    ]
  },
  {
    id: 'gallery',
    title: 'Icon Gallery',
    description: 'Click on any icon to copy the React component code to your clipboard.',
    showBorder: true,
    isGallery: true
  }
];
