import { HomeIcon } from '@core-circle/icons';
import React from 'react';
import { PropItem } from '../../../interface/components/props-table.types';

export const CHECKBOX_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/', icon: React.createElement(HomeIcon, { size: 14 }) },
  { label: 'Atoms', href: '/atoms' },
  { label: 'Checkbox' }
];

export const CHECKBOX_HEADER_CONTENT = {
  title: 'Checkbox',
  description: 'Checkboxes allow the user to select one or more items from a set. They can also be used to turn an option on or off.',
};

export const CHECKBOX_SECTIONS = [
  {
    id: 'playground',
    title: 'Interactive Playground',
    description: 'Customize the checkbox with different variants, sizes, and states.',
    isPlayground: true
  },
  {
    id: 'variants',
    title: 'Visual Variants',
    description: 'Choose between different visual styles.',
    previews: [
      {
        id: 'outline',
        title: 'Outline',
        code: '<Checkbox variant="outline" label="Default Outline" />'
      },
      {
        id: 'solid',
        title: 'Solid',
        code: '<Checkbox variant="solid" label="Solid Variant" defaultChecked />'
      }
    ]
  },
  {
    id: 'sizes',
    title: 'Sizes',
    description: 'Available in three sizes to fit your layout.',
    previews: [
      {
        id: 'sizes-gallery',
        title: 'Sizes Gallery',
        code: `<Checkbox size="sm" label="Small" />\n<Checkbox size="md" label="Medium" />\n<Checkbox size="lg" label="Large" />`
      }
    ]
  },
  {
    id: 'states',
    title: 'States',
    description: 'Support for different interaction and feedback states.',
    previews: [
      {
        id: 'interaction-states',
        title: 'Interaction States',
        code: `<Checkbox label="Disabled" disabled />\n<Checkbox label="Error" error="Field required" />\n<Checkbox label="Indeterminate" indeterminate />`
      }
    ]
  }
];

export const CHECKBOX_PROPS_DATA: PropItem[] = [
  {
    name: 'variant',
    type: "'outline' | 'solid'",
    defaultValue: "'outline'",
    description: 'Visual style of the checkbox.'
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg'",
    defaultValue: "'md'",
    description: 'Size of the checkbox and label.'
  },
  {
    name: 'label',
    type: 'string',
    description: 'Label text displayed next to the checkbox.'
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
    name: 'indeterminate',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Shows a dash instead of a checkmark (used for partially selected groups).'
  },
  {
    name: 'error',
    type: 'string',
    description: 'Error message that displays below the checkbox.'
  },
  {
    name: 'helperText',
    type: 'string',
    description: 'Additional guidance text.'
  },
  {
    name: 'disabled',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Prevents user interaction.'
  },
  {
    name: 'onChange',
    type: '(checked: boolean) => void',
    description: 'Callback function when the checked state changes.'
  }
];
