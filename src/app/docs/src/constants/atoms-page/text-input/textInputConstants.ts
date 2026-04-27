import { HomeIcon } from '@core-circle/icons';
import React from 'react';

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
