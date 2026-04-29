import { HomeIcon } from '@core-circle/icons';
import React from 'react';
import { PropItem } from '../../../interface/components/props-table.types';

export const RICHTEXT_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/', icon: React.createElement(HomeIcon, { size: 14 }) },
  { label: 'Atoms', href: '/atoms' },
  { label: 'RichText' }
];

export const RICHTEXT_HEADER_CONTENT = {
  title: 'RichText',
  description: 'A component for rendering complex HTML or formatted content with consistent design system styles. Perfect for blog posts, documentation, and user-generated content.',
};

export const RICHTEXT_PROPS_DATA: PropItem[] = [
  {
    name: 'content',
    type: 'string',
    description: 'The HTML string to be rendered.'
  },
  {
    name: 'size',
    type: "'sm' | 'base' | 'lg'",
    defaultValue: "'base'",
    description: 'The scale of the typography inside the content.'
  }
];
