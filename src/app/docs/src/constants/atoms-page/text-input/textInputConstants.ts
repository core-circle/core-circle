import React from 'react';
import { PropItem } from '../../../interface/components/props-table.types';

export const TEXT_INPUT_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Atoms', href: '/atoms' },
  { label: 'TextInput' }
];

export const TEXT_INPUT_HEADER_CONTENT = {
  title: 'TextInput',
  description: 'A versatile single-line text field supporting 12 visual styling variants, prefix/suffix adornments, leading/trailing icons, size scales, error states, and animated floating labels.',
};

export const TEXT_INPUT_SECTIONS = [
  {
    id: 'theming',
    title: 'Theming',
    description: 'Production-grade text field themes for multi-currency wire transfers, zero-trust login, AI hyperparameters, SSH commit search, and VIP checkout.',
  },
  {
    id: 'variants',
    title: 'Variants',
    description: 'Explore 12 distinct border, surface, and interaction styling variants.',
  },
  {
    id: 'playground',
    title: 'Playground',
    description: 'Interactive property playground with live variant selection, icon toggling, and snippet generation.',
  },
  {
    id: 'mock-code',
    title: 'Mock Code',
    description: 'Dynamic backend API user registration and form validation integration example.',
  },
  {
    id: 'overview',
    title: 'Overview',
    description: 'Quick usage snippet and props reference.',
  },
];

export const TEXT_INPUT_PROPS_DATA: PropItem[] = [
  {
    name: 'variant',
    type: "'outline' | 'material' | 'material-animated' | 'ghost' | 'standard' | 'filled' | 'glassmorphic' | 'floating' | 'gradient' | 'pill' | 'accent' | 'dark'",
    defaultValue: "'outline'",
    description: 'Visual styling and container surface treatment variant.'
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg'",
    defaultValue: "'md'",
    description: 'Height and typography scale of the input.'
  },
  {
    name: 'label',
    type: 'string',
    description: 'Label text rendered above or inside the animated input container.'
  },
  {
    name: 'startIcon',
    type: 'React.ReactNode',
    description: 'Leading icon displayed before input text.'
  },
  {
    name: 'endIcon',
    type: 'React.ReactNode',
    description: 'Trailing icon or action indicator displayed after input text.'
  },
  {
    name: 'prefix',
    type: 'React.ReactNode',
    description: 'Fixed adornment text/symbol rendered immediately before user text (e.g. $, https://).'
  },
  {
    name: 'suffix',
    type: 'React.ReactNode',
    description: 'Fixed adornment text/symbol rendered immediately after user text (e.g. USD, kgs).'
  },
  {
    name: 'error',
    type: 'string',
    description: 'Validation error feedback message displaying beneath the field.'
  },
  {
    name: 'helperText',
    type: 'string',
    description: 'Subtle guidance or informative footnote beneath the field.'
  },
  {
    name: 'fullWidth',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether the field stretches to fill container width.'
  },
  {
    name: 'disabled',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether the input field is interactive.'
  },
  {
    name: 'className',
    type: 'string',
    description: 'Additional CSS classes.'
  }
];
