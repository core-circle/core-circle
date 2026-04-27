import { HomeIcon } from '@core-circle/icons';
import React from 'react';

export const MULTI_SELECT_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/', icon: React.createElement(HomeIcon, { size: 14 }) },
  { label: 'Atoms', href: '/atoms' },
  { label: 'MultiSelect' }
];

export const MULTI_SELECT_HEADER_CONTENT = {
  title: 'MultiSelect',
  description: 'A powerful dropdown component that allows users to select multiple options. Selected items are displayed as removable tags within the input field.',
};

export const MULTI_SELECT_SECTIONS = [
  {
    id: 'playground',
    title: 'Live Playground',
    description: 'Experiment with variants, sizes, and selection behavior live.',
    showBorder: true,
    isPlayground: true
  },
  {
    id: 'variants',
    title: 'Visual Variants',
    description: 'Consistent styling across all input types.',
    previews: [
      {
        id: 'material-animated',
        title: 'Material Animated',
        code: '<MultiSelect variant="material-animated" label="Skills" options={options} placeholder="Search skills..." />'
      },
      {
        id: 'outline',
        title: 'Outline',
        code: '<MultiSelect variant="outline" label="Categories" options={options} />'
      },
      {
        id: 'standard',
        title: 'Standard',
        code: '<MultiSelect variant="standard" label="Tags" options={options} />'
      },
      {
        id: 'ghost',
        title: 'Ghost',
        code: '<MultiSelect variant="ghost" placeholder="Add filters..." options={options} />'
      }
    ]
  },
  {
    id: 'icons',
    title: 'With Icons',
    description: 'Use start icons to provide visual cues for the selection type.',
    previews: [
      {
        id: 'user-selection',
        title: 'User Selection',
        code: '<MultiSelect startIcon={<Users />} options={options} />'
      },
      {
        id: 'tagging',
        title: 'Tagging',
        code: '<MultiSelect prefix={<Tag size={14} />} options={options} />'
      }
    ]
  }
];
