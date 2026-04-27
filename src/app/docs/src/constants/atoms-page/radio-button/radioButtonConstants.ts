import { HomeIcon } from '@core-circle/icons';
import React from 'react';

export const RADIO_BUTTON_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/', icon: React.createElement(HomeIcon, { size: 14 }) },
  { label: 'Atoms', href: '/atoms' },
  { label: 'RadioButton' }
];

export const RADIO_BUTTON_HEADER_CONTENT = {
  title: 'RadioButton',
  description: 'Radio buttons allow the user to select one option from a set. Use radio buttons for exclusive selection if you think that the user needs to see all available options side-by-side.',
};

export const RADIO_BUTTON_SECTIONS = [
  {
    id: 'playground',
    title: 'Interactive Playground',
    description: 'Customize the radio button with different variants, sizes, and states.',
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
        code: '<RadioButton variant="outline" label="Default Outline" />'
      },
      {
        id: 'solid',
        title: 'Solid',
        code: '<RadioButton variant="solid" label="Solid Variant" defaultChecked />'
      }
    ]
  },
  {
    id: 'groups',
    title: 'Radio Groups',
    description: 'Group radio buttons by using the same "name" attribute.',
    previews: [
      {
        id: 'exclusive-selection',
        title: 'Exclusive Selection',
        code: `<div className="flex flex-col gap-3">\n  <RadioButton name="fruit" value="apple" label="Apple" />\n  <RadioButton name="fruit" value="banana" label="Banana" />\n</div>`
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
        code: `<RadioButton size="sm" label="Small" />\n<RadioButton size="md" label="Medium" />\n<RadioButton size="lg" label="Large" />`
      }
    ]
  }
];
