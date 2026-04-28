import { HomeIcon } from '@core-circle/icons';
import React from 'react';
import { PropItem } from '../../../interface/components/props-table.types';

export const TEXT_INPUT_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/', icon: React.createElement(HomeIcon, { size: 14 }) },
  { label: 'Atoms', href: '/atoms' },
  { label: 'TextInput' }
];

export const TEXT_INPUT_HEADER_CONTENT = {
  title: 'TextInput',
  description: 'A highly versatile input component supporting multiple visual styles, including Google Material design, with integrated icon slots and validation states.',
};

export const TEXT_INPUT_SECTIONS = [
  {
    id: 'playground',
    title: 'Live Playground',
    description: 'Experiment with variants, sizes, and icon positions live.',
    showBorder: true,
    isPlayground: true
  },
  {
    id: 'variants',
    title: 'Visual Variants',
    description: 'Five distinct styles to fit any design requirement.',
    previews: [
      {
        id: 'material-animated',
        title: 'Material Animated',
        code: '<TextInput variant="material-animated" label="Floating Label" placeholder="" />'
      },
      {
        id: 'outline',
        title: 'Outline (Default)',
        code: '<TextInput variant="outline" label="Username" placeholder="Enter username" />'
      },
      {
        id: 'material',
        title: 'Material Design (Static)',
        code: '<TextInput variant="material" label="Email Address" placeholder="name@example.com" />'
      },
      {
        id: 'standard',
        title: 'Standard (Minimal)',
        code: '<TextInput variant="standard" label="Company Name" placeholder="Google" />'
      },
      {
        id: 'ghost',
        title: 'Ghost',
        code: '<TextInput variant="ghost" placeholder="Search components..." />'
      }
    ]
  },
  {
    id: 'icons',
    title: 'With Icons',
    description: 'Enhance usability with contextual icons at the start or end of the input.',
    previews: [
      {
        title: 'Icon Positions',
        code: `<TextInput startIcon={<Mail />} placeholder="Email" />\n<TextInput endIcon={<SearchIcon />} placeholder="Search..." />\n<TextInput startIcon={<Lock />} type="password" placeholder="Password" />`
      }
    ]
  },
  {
    id: 'prefix-suffix',
    title: 'Prefix and Suffix',
    description: 'Add non-editable text or symbols at the start or end of the input field.',
    previews: [
      {
        id: 'currency',
        title: 'Currency & Units',
        code: `<TextInput \n  label="Price" \n  prefix={<span className="font-bold">$</span>} \n  suffix="USD" \n  placeholder="0.00" \n/>`
      },
      {
        id: 'titles',
        title: 'Titles & Measurements',
        code: `<TextInput prefix="Mr." placeholder="Full Name" />\n<TextInput suffix="kgs" placeholder="Weight" />`
      }
    ]
  },
  {
    id: 'validation',
    title: 'Validation States',
    description: 'Built-in error and helper text support for clear user feedback.',
    previews: [
      {
        title: 'Errors and Helpers',
        code: `<TextInput label="Password" type="password" helperText="Must be at least 8 characters" />\n<TextInput label="Email" error="Please enter a valid email address" defaultValue="invalid-email" />`
      }
    ]
  }
];

export const TEXT_INPUT_PROPS_DATA: PropItem[] = [
  {
    name: 'variant',
    type: "'outline' | 'material' | 'material-animated' | 'ghost' | 'standard'",
    defaultValue: "'outline'",
    description: 'Visual style of the input.'
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg'",
    defaultValue: "'md'",
    description: 'Vertical size of the input field.'
  },
  {
    name: 'label',
    type: 'string',
    description: 'Floating or static label text for the input.'
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
    description: 'Icon element to display at the beginning of the input.'
  },
  {
    name: 'endIcon',
    type: 'ReactNode',
    description: 'Icon element to display at the end of the input.'
  },
  {
    name: 'prefix',
    type: 'ReactNode',
    description: 'Non-editable content at the start of the input (after icon).'
  },
  {
    name: 'suffix',
    type: 'ReactNode',
    description: 'Non-editable content at the end of the input (before icon).'
  },
  {
    name: 'error',
    type: 'string',
    description: 'Error message that changes input color and displays below.'
  },
  {
    name: 'helperText',
    type: 'string',
    description: 'Additional guidance text displayed below the input.'
  },
  {
    name: 'fullWidth',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether the input takes the full width of its container.'
  },
  {
    name: 'disabled',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Prevents user interaction with the input.'
  }
];
