import { HomeIcon } from '@core-circle/icons';
import React from 'react';
import { PropItem } from '../../../interface/components/props-table.types';

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

export const RADIO_BUTTON_PROPS_DATA: PropItem[] = [
  {
    name: 'variant',
    type: "'outline' | 'solid'",
    defaultValue: "'outline'",
    description: 'Visual style of the radio button.'
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg'",
    defaultValue: "'md'",
    description: 'Size of the radio circle and label.'
  },
  {
    name: 'label',
    type: 'string',
    description: 'Label text displayed next to the radio button.'
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
    name: 'name',
    type: 'string',
    description: 'The group name for the radio buttons (essential for exclusive selection).'
  },
  {
    name: 'value',
    type: 'string',
    description: 'The value to be submitted with the form when selected.'
  },
  {
    name: 'error',
    type: 'string',
    description: 'Error message that displays below the radio button.'
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
    type: '(value: string) => void',
    description: 'Callback function when the selection changes.'
  }
];
