import React from 'react';
import { PropItem } from '../../../interface/components/props-table.types';

export const TEXTAREA_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Atoms', href: '/atoms' },
  { label: 'Textarea' }
];

export const TEXTAREA_HEADER_CONTENT = {
  title: 'Textarea',
  description: 'A multi-line text input component supporting 12 visual styling variants, Material animated floating labels, custom resize behaviors, icon adornments, and error validation states.',
};

export const TEXTAREA_SECTIONS = [
  {
    id: 'theming',
    title: 'Theming',
    description: 'Production-grade multi-line text areas for AI reasoning directives, IAM policy JSON editors, SLA incident dispatch, real-estate descriptions, and customer review consoles.',
  },
  {
    id: 'variants',
    title: 'Variants',
    description: 'Explore 12 distinct border, surface, and interaction styling variants.',
  },
  {
    id: 'playground',
    title: 'Playground',
    description: 'Interactive property playground with live variant selection, resize modes, and code snippet generator.',
  },
  {
    id: 'mock-code',
    title: 'Mock Code',
    description: 'Dynamic API ticket creation and prompt engineering integration example.',
  },
  {
    id: 'overview',
    title: 'Overview',
    description: 'Quick usage snippet and props reference.',
  },
];

export const TEXTAREA_PROPS_DATA: PropItem[] = [
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
    description: 'Padding and typography scale of the textarea.'
  },
  {
    name: 'resize',
    type: "'none' | 'vertical' | 'horizontal' | 'both'",
    defaultValue: "'vertical'",
    description: 'CSS resize handle behavior.'
  },
  {
    name: 'label',
    type: 'string',
    description: 'Label text rendered above or inside the animated textarea container.'
  },
  {
    name: 'rows',
    type: 'number',
    defaultValue: '4',
    description: 'Initial number of visible text lines.'
  },
  {
    name: 'startIcon',
    type: 'React.ReactNode',
    description: 'Leading icon displayed in the top-left corner.'
  },
  {
    name: 'endIcon',
    type: 'React.ReactNode',
    description: 'Trailing icon displayed in the top-right corner.'
  },
  {
    name: 'error',
    type: 'string',
    description: 'Validation error message displaying beneath the field.'
  },
  {
    name: 'helperText',
    type: 'string',
    description: 'Subtle guidance or character limit counter beneath the field.'
  },
  {
    name: 'fullWidth',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether the textarea stretches to fill container width.'
  },
  {
    name: 'disabled',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether the textarea is interactive.'
  },
  {
    name: 'className',
    type: 'string',
    description: 'Additional CSS classes.'
  }
];
