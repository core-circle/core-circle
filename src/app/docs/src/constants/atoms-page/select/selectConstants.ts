import { HomeIcon } from '@core-circle/icons';
import React from 'react';

export const SELECT_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/', icon: React.createElement(HomeIcon, { size: 14 }) },
  { label: 'Atoms', href: '/atoms' },
  { label: 'Select' }
];

export const SELECT_HEADER_CONTENT = {
  title: 'Select',
  description: 'A custom select component that provides a consistent look and feel across different browsers while supporting variants and integrated icons.',
};

export const SELECT_SECTIONS = [
  {
    id: 'playground',
    title: 'Live Playground',
    description: 'Experiment with variants, sizes, and states live.',
    showBorder: true,
    isPlayground: true
  },
  {
    id: 'variants',
    title: 'Visual Variants',
    description: 'Multiple styles to match your design system.',
    previews: [
      {
        id: 'material-animated',
        title: 'Material Animated',
        code: '<Select variant="material-animated" label="Select Category" options={options} placeholder="Choose a category" />'
      },
      {
        id: 'outline',
        title: 'Outline (Default)',
        code: '<Select variant="outline" label="Choose Fruit" options={options} placeholder="Pick a fruit..." />'
      },
      {
        id: 'standard',
        title: 'Standard',
        code: '<Select variant="standard" label="Select Theme" options={options} />'
      },
      {
        id: 'ghost',
        title: 'Ghost',
        code: '<Select variant="ghost" options={options} />'
      }
    ]
  },
  {
    id: 'icons',
    title: 'With Icons & Prefixes',
    description: 'Enhance selection context with start icons and text prefixes.',
    previews: [
      {
        id: 'start-icon',
        title: 'Start Icon',
        code: '<Select startIcon={<Filter />} options={options} />'
      },
      {
        id: 'prefix',
        title: 'With Prefix',
        code: '<Select prefix="ID:" options={options} />'
      }
    ]
  },
  {
    id: 'validation',
    title: 'Validation States',
    description: 'Visual feedback for errors and help text.',
    previews: [
      {
        title: 'Error State',
        code: '<Select error="This field is required" options={options} />'
      }
    ]
  }
];
