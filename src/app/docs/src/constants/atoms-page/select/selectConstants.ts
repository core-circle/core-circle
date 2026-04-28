import { HomeIcon } from '@core-circle/icons';
import React from 'react';
import { PropItem } from '../../../interface/components/props-table.types';

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

export const SELECT_PROPS_DATA: PropItem[] = [
  {
    name: 'variant',
    type: "'outline' | 'material' | 'material-animated' | 'ghost' | 'standard'",
    defaultValue: "'outline'",
    description: 'Visual style of the select.'
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg'",
    defaultValue: "'md'",
    description: 'Vertical size of the select field.'
  },
  {
    name: 'options',
    type: 'SelectOption[]',
    description: 'List of options to display in the dropdown.'
  },
  {
    name: 'label',
    type: 'string',
    description: 'Floating or static label text.'
  },
  {
    name: 'labelSize',
    type: "'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",
    defaultValue: "'sm'",
    description: 'Typography size for the label.'
  },
  {
    name: 'labelWeight',
    type: "'light' | 'normal' | 'medium' | 'semibold' | 'bold'",
    defaultValue: "'medium'",
    description: 'Typography weight for the label.'
  },
  {
    name: 'startIcon',
    type: 'ReactNode',
    description: 'Icon element to display at the beginning.'
  },
  {
    name: 'prefix',
    type: 'ReactNode',
    description: 'Non-editable content at the start.'
  },
  {
    name: 'placeholder',
    type: 'string',
    description: 'Text shown when no option is selected.'
  },
  {
    name: 'error',
    type: 'string',
    description: 'Error message displayed below.'
  },
  {
    name: 'helperText',
    type: 'string',
    description: 'Additional guidance text.'
  },
  {
    name: 'fullWidth',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Takes full width of container.'
  },
  {
    name: 'disabled',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Prevents interaction.'
  }
];
