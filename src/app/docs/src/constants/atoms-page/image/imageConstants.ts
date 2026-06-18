import { HomeIcon } from '@core-circle/icons';
import React from 'react';

export const IMAGE_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/', icon: React.createElement(HomeIcon, { size: 14 }) },
  { label: 'Atoms', href: '/atoms' },
  { label: 'Image' },
];

export const IMAGE_HEADER_CONTENT = {
  title: 'Image',
  description: 'The Image component is an enhanced wrapper for the <img> tag with support for loading states and fallbacks.',
};

export const IMAGE_PROPS_DATA = [
  { name: 'src', type: 'string', defaultValue: '-', description: 'The source URL of the image' },
  { name: 'alt', type: 'string', defaultValue: '-', description: 'Alternative text for accessibility' },
  { name: 'fit', type: 'cover | contain | fill | none | scaleDown', defaultValue: 'cover', description: 'How the image should fit its container' },
  { name: 'rounded', type: 'none | sm | md | lg | xl | full', defaultValue: 'none', description: 'Corner rounding' },
  { name: 'fallback', type: 'ReactNode', defaultValue: '-', description: 'Content to show if the image fails to load' },
  { name: 'width', type: 'string | number', defaultValue: '-', description: 'Width of the image container' },
  { name: 'height', type: 'string | number', defaultValue: '-', description: 'Height of the image container' },
];
