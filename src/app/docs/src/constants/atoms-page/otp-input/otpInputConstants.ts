import { HomeIcon } from '@core-circle/icons';
import React from 'react';
import { PropItem } from '../../../interface/components/props-table.types';

export const OTP_INPUT_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/', icon: React.createElement(HomeIcon, { size: 14 }) },
  { label: 'Atoms', href: '/atoms' },
  { label: 'OtpInput' }
];

export const OTP_INPUT_HEADER_CONTENT = {
  title: 'OtpInput',
  description: 'A verification code and one-time password entry primitive supporting 10 visual variants, PIN masking, smart clipboard paste distribution, arrow key navigation, and automatic onComplete callbacks.',
};

export const OTP_INPUT_PROPS_DATA: PropItem[] = [
  {
    name: 'length',
    type: 'number',
    defaultValue: '6',
    description: 'Number of individual digit input slots (4, 6, or 8).'
  },
  {
    name: 'variant',
    type: "'outline' | 'filled' | 'floating' | 'glassmorphic' | 'pill' | 'material' | 'gradient' | 'bordered' | 'success' | 'ghost'",
    defaultValue: "'outline'",
    description: 'Visual style variant of the input slots (10 options).'
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg' | 'xl'",
    defaultValue: "'md'",
    description: 'Dimensions of the digit slots (from 36px to 64px).'
  },
  {
    name: 'shape',
    type: "'rounded' | 'circle' | 'square'",
    defaultValue: "'rounded'",
    description: 'Contour shape of the input boxes.'
  },
  {
    name: 'value',
    type: 'string',
    defaultValue: '-',
    description: 'Controlled string value.'
  },
  {
    name: 'defaultValue',
    type: 'string',
    defaultValue: "''",
    description: 'Initial value for uncontrolled usage.'
  },
  {
    name: 'mask',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether to mask entered digits with bullet dots for sensitive PINs.'
  },
  {
    name: 'separator',
    type: 'ReactNode',
    defaultValue: '-',
    description: 'Optional divider element rendered midway between digit groups.'
  },
  {
    name: 'autoFocus',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether the first slot auto-focuses on mount.'
  },
  {
    name: 'disabled',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether inputs are disabled.'
  },
  {
    name: 'onChange',
    type: '(value: string) => void',
    defaultValue: '-',
    description: 'Callback fired on every keystroke with current full value.'
  },
  {
    name: 'onComplete',
    type: '(value: string) => void',
    defaultValue: '-',
    description: 'Callback triggered automatically once all digits are filled.'
  },
  {
    name: 'error',
    type: 'string',
    defaultValue: '-',
    description: 'Validation error message displayed below.'
  },
  {
    name: 'helperText',
    type: 'string',
    defaultValue: '-',
    description: 'Guidance text displayed below.'
  }
];
