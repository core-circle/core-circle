import { HomeIcon } from '@core-circle/icons';
import React from 'react';
import { PropItem } from '../../../interface/components/props-table.types';

export const OTP_INPUT_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/', icon: React.createElement(HomeIcon, { size: 14 }) },
  { label: 'Atoms', href: '/atoms' },
  { label: 'OTPInput' }
];

export const OTP_INPUT_HEADER_CONTENT = {
  title: 'OTPInput',
  description: 'A specialized input component for one-time passwords and verification codes. Features automatic focus management, backspace handling, and paste support.',
};

export const OTP_INPUT_SECTIONS = [
  {
    id: 'playground',
    title: 'Live Playground',
    description: 'Customize the length, variant, and behavior of the OTP input.',
    showBorder: true,
    isPlayground: true
  },
  {
    id: 'variants',
    title: 'Visual Variants',
    description: 'Match the OTP input style with your form design.',
    previews: [
      {
        id: 'outline',
        title: 'Outline (Default)',
        code: '<OTPInput variant="outline" length={4} />'
      },
      {
        id: 'material',
        title: 'Material Design',
        code: '<OTPInput variant="material" length={6} />'
      },
      {
        id: 'standard',
        title: 'Standard',
        code: '<OTPInput variant="standard" length={4} />'
      }
    ]
  },
  {
    id: 'sizes',
    title: 'Sizes',
    description: 'Available in three sizes: small, medium, and large.',
    previews: [
      {
        id: 'sm',
        title: 'Small',
        code: '<OTPInput size="sm" length={4} />'
      },
      {
        id: 'lg',
        title: 'Large',
        code: '<OTPInput size="lg" length={4} />'
      }
    ]
  }
];

export const OTP_INPUT_PROPS_DATA: PropItem[] = [
  {
    name: 'length',
    type: 'number',
    defaultValue: '4',
    description: 'Number of individual digit inputs.'
  },
  {
    name: 'variant',
    type: "'outline' | 'material' | 'ghost' | 'standard'",
    defaultValue: "'outline'",
    description: 'Visual style of the input slots.'
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg'",
    defaultValue: "'md'",
    description: 'Dimensions of the input slots.'
  },
  {
    name: 'onComplete',
    type: '(value: string) => void',
    description: 'Callback triggered when all digits are entered.'
  },
  {
    name: 'onChange',
    type: '(value: string) => void',
    description: 'Callback triggered on every digit entry.'
  },
  {
    name: 'mask',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether to mask the input (type="password").'
  },
  {
    name: 'error',
    type: 'string',
    description: 'Error message displayed below the input group.'
  }
];
