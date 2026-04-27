import { HomeIcon } from '@core-circle/icons';
import React from 'react';

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
