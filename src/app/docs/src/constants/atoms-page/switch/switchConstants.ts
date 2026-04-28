import { HomeIcon } from '@core-circle/icons';
import React from 'react';
import { DOC_TEXT } from '../../common-constants';

export const SWITCH_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/', icon: React.createElement(HomeIcon, { size: 14 }) },
  { label: 'Atoms', href: '/atoms' },
  { label: 'Switch', href: '/atoms/switch', active: true },
];

export const SWITCH_HEADER_CONTENT = {
  title: 'Switch',
  description: 'A toggle component that allows users to switch between two states: on and off.',
};

export const SWITCH_SECTIONS = [
  {
    id: 'overview',
    title: DOC_TEXT.COMMON.OVERVIEW,
    content: 'The Switch component is a digital toggle used to trigger an immediate action or change a setting.',
  },
  {
    id: 'variants',
    title: DOC_TEXT.COMMON.VARIANTS,
    content: 'Switch comes in multiple sizes and brand variants.',
  },
  {
    id: 'properties',
    title: DOC_TEXT.COMMON.PROPERTIES,
    content: 'Customize the switch with different sizes and colors.',
  },
];
