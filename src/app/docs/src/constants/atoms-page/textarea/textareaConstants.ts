import { HomeIcon } from '@core-circle/icons';
import React from 'react';
import { PropItem } from '../../../interface/components/props-table.types';

export const TEXTAREA_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/', icon: React.createElement(HomeIcon, { size: 14 }) },
  { label: 'Atoms', href: '/atoms' },
  { label: 'Textarea' }
];

export const TEXTAREA_HEADER_CONTENT = {
  title: 'Textarea',
  description: 'A multi-line input component for handling longer text entries, supporting variants, floating labels, and custom resizing behavior.',
};

export const TEXTAREA_SECTIONS = [
  {
    id: 'playground',
    title: 'Live Playground',
    description: 'Experiment with variants, sizes, and resizing behaviors live.',
    showBorder: true,
    isPlayground: true
  },
  {
    id: 'variants',
    title: 'Visual Variants',
    description: 'Multiple styles to match your application design.',
    previews: [
      {
        id: 'material-animated',
        title: 'Material Animated',
        code: '<Textarea variant="material-animated" label="Floating Label" placeholder="" rows={4} />'
      },
      {
        id: 'outline',
        title: 'Outline (Default)',
        code: '<Textarea variant="outline" label="Description" placeholder="Enter description" rows={4} />'
      },
      {
        id: 'material',
        title: 'Material Design',
        code: '<Textarea variant="material" label="Bio" placeholder="Tell us about yourself" rows={4} />'
      },
      {
        id: 'standard',
        title: 'Standard',
        code: '<Textarea variant="standard" label="Feedback" placeholder="How can we improve?" rows={4} />'
      }
    ]
  },
  {
    id: 'resize',
    title: 'Resizing Behavior',
    description: 'Control how the user can resize the textarea.',
    previews: [
      {
        id: 'none',
        title: 'No Resize',
        code: '<Textarea resize="none" label="Fixed Height" placeholder="I cannot be resized" rows={4} />'
      },
      {
        id: 'vertical',
        title: 'Vertical Only (Default)',
        code: '<Textarea resize="vertical" label="Vertical Resize" placeholder="I can only be resized vertically" rows={4} />'
      }
    ]
  },
  {
    id: 'validation',
    title: 'Validation States',
    description: 'Error messages and helper text support.',
    previews: [
      {
        title: 'Errors and Helpers',
        code: `<Textarea label="Comment" helperText="Maximum 500 characters" rows={3} />\n<Textarea label="Message" error="Message is too short" defaultValue="Hi" rows={3} />`
      }
    ]
  }
];

export const TEXTAREA_PROPS_DATA: PropItem[] = [
  {
    name: 'variant',
    type: "'outline' | 'material' | 'material-animated' | 'ghost' | 'standard'",
    defaultValue: "'outline'",
    description: 'Visual style of the textarea.'
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg'",
    defaultValue: "'md'",
    description: 'Size of the textarea.'
  },
  {
    name: 'resize',
    type: "'none' | 'vertical' | 'horizontal' | 'both'",
    defaultValue: "'vertical'",
    description: 'Resizing behavior of the textarea.'
  },
  {
    name: 'label',
    type: 'string',
    description: 'Label text for the textarea.'
  },
  {
    name: 'error',
    type: 'string',
    description: 'Error message displayed below.'
  },
  {
    name: 'helperText',
    type: 'string',
    description: 'Guidance text displayed below.'
  },
  {
    name: 'rows',
    type: 'number',
    defaultValue: '4',
    description: 'Number of visible text lines.'
  },
  {
    name: 'fullWidth',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether it takes full width.'
  }
];
