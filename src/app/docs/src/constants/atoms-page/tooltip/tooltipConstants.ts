import { HomeIcon } from '@core-circle/icons';
import React from 'react';
import { DOC_TEXT } from '../../common-constants';

export const TOOLTIP_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/', icon: React.createElement(HomeIcon, { size: 14 }) },
  { label: 'Atoms', href: '/atoms' },
  { label: 'Tooltip', href: '/atoms/tooltip', active: true },
];

export const TOOLTIP_HEADER_CONTENT = {
  title: 'Tooltip',
  description: 'An information popover that appears on click or hover to provide additional context.',
};

export const TOOLTIP_SECTIONS = [
  {
    id: 'overview',
    title: DOC_TEXT.COMMON.OVERVIEW,
    content: 'Tooltips are used to provide additional information about an element without cluttering the UI.',
  },
  {
    id: 'variants',
    title: DOC_TEXT.COMMON.VARIANTS,
    content: 'Tooltip supports different semantic variants and trigger modes.',
  },
];
