import { HomeIcon } from '@core-circle/icons';
import React from 'react';
import { PropItem } from '../../../interface/components/props-table.types';

export const SLIDER_INPUT_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/', icon: React.createElement(HomeIcon, { size: 14 }) },
  { label: 'Atoms', href: '/atoms' },
  { label: 'SliderInput' }
];

export const SLIDER_INPUT_HEADER_CONTENT = {
  title: 'SliderInput',
  description: 'A range input component that allows users to select a value from a range by sliding a thumb along a track.',
};

export const SLIDER_INPUT_SECTIONS = [
  {
    id: 'playground',
    title: 'Live Playground',
    description: 'Experiment with variants, sizes, and values live.',
    showBorder: true,
    isPlayground: true
  },
  {
    id: 'variants',
    title: 'Visual Variants',
    description: 'Distinct color schemes to represent different states or themes.',
    previews: [
      {
        id: 'standard',
        title: 'Standard (Default)',
        code: '<SliderInput variant="standard" label="Default Slider" defaultValue={50} />'
      },
      {
        id: 'primary',
        title: 'Primary',
        code: '<SliderInput variant="primary" label="Primary Theme" defaultValue={40} />'
      },
      {
        id: 'success',
        title: 'Success',
        code: '<SliderInput variant="success" label="Success Theme" defaultValue={70} />'
      },
      {
        id: 'warning',
        title: 'Warning',
        code: '<SliderInput variant="warning" label="Warning Theme" defaultValue={30} />'
      },
      {
        id: 'danger',
        title: 'Danger',
        code: '<SliderInput variant="danger" label="Danger Theme" defaultValue={90} />'
      }
    ]
  },
  {
    id: 'sizes',
    title: 'Sizes',
    description: 'Three different track heights and thumb sizes.',
    previews: [
      {
        title: 'Small, Medium, and Large',
        code: `<SliderInput size="sm" label="Small Track" defaultValue={25} />\n<SliderInput size="md" label="Medium Track" defaultValue={50} />\n<SliderInput size="lg" label="Large Track" defaultValue={75} />`
      }
    ]
  },
  {
    id: 'value-display',
    title: 'Value Display',
    description: 'Optionally show the current value and format it as needed.',
    previews: [
      {
        title: 'Formatted Values',
        code: `<SliderInput \n  label="Volume" \n  showValue \n  defaultValue={30} \n/>\n<SliderInput \n  label="Price Range" \n  showValue \n  formatValue={(val) => \`$\${val}\`} \n  defaultValue={250} \n  max={1000} \n/>`
      }
    ]
  }
];

export const SLIDER_INPUT_PROPS_DATA: PropItem[] = [
  {
    name: 'variant',
    type: "'standard' | 'primary' | 'success' | 'warning' | 'danger'",
    defaultValue: "'standard'",
    description: 'Color theme of the slider.'
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg'",
    defaultValue: "'md'",
    description: 'Height of the track and size of the thumb.'
  },
  {
    name: 'label',
    type: 'string',
    description: 'Label text for the slider.'
  },
  {
    name: 'showValue',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether to display the current numeric value.'
  },
  {
    name: 'formatValue',
    type: '(value: number) => string',
    description: 'Custom function to format the displayed value.'
  },
  {
    name: 'min',
    type: 'number',
    defaultValue: '0',
    description: 'Minimum possible value.'
  },
  {
    name: 'max',
    type: 'number',
    defaultValue: '100',
    description: 'Maximum possible value.'
  },
  {
    name: 'step',
    type: 'number',
    defaultValue: '1',
    description: 'Increment amount for each step.'
  },
  {
    name: 'error',
    type: 'string',
    description: 'Error message displayed below the slider.'
  },
  {
    name: 'helperText',
    type: 'string',
    description: 'Helper text displayed below the slider.'
  },
  {
    name: 'fullWidth',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether the slider takes full width.'
  },
  {
    name: 'disabled',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Disables user interaction.'
  }
];
