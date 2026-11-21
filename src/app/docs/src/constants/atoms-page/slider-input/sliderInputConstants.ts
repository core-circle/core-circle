import React from 'react';
import { PropItem } from '../../../interface/components/props-table.types';

export const SLIDER_INPUT_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Atoms', href: '/atoms' },
  { label: 'SliderInput' }
];

export const SLIDER_INPUT_HEADER_CONTENT = {
  title: 'SliderInput',
  description: 'An interactive range slider component supporting 12 visual variants, size scales, formatted numeric tooltips, step increments, and form validation states.',
};

export const SLIDER_INPUT_SECTIONS = [
  {
    id: 'theming',
    title: 'Theming',
    description: 'Production-grade slider implementations for audio gain decibels, cloud CPU cores, smart lumens, and mortgage calculators.',
  },
  {
    id: 'variants',
    title: 'Variants',
    description: 'Explore 12 distinct color and surface styling variants.',
  },
  {
    id: 'playground',
    title: 'Playground',
    description: 'Interactive property playground with live value formatting and code generator.',
  },
  {
    id: 'mock-code',
    title: 'Mock Code',
    description: 'Dynamic real-time audio/transcoding config state binding example.',
  },
  {
    id: 'overview',
    title: 'Overview',
    description: 'Quick usage snippet and props reference.',
  },
];

export const SLIDER_INPUT_PROPS_DATA: PropItem[] = [
  {
    name: 'variant',
    type: "'standard' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'gradient' | 'glassmorphic' | 'glow' | 'floating' | 'accent' | 'dark'",
    defaultValue: "'standard'",
    description: 'Visual color theme and thumb/track styling treatment.'
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg'",
    defaultValue: "'md'",
    description: 'Vertical height of the slider track and thumb diameter.'
  },
  {
    name: 'label',
    type: 'string',
    description: 'Label text positioned above the slider track.'
  },
  {
    name: 'showValue',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether to render the active numeric value badge.'
  },
  {
    name: 'formatValue',
    type: '(value: number) => string',
    description: 'Custom formatter callback for rendering unit suffixes or currency.'
  },
  {
    name: 'min',
    type: 'number',
    defaultValue: '0',
    description: 'Minimum selectable bound.'
  },
  {
    name: 'max',
    type: 'number',
    defaultValue: '100',
    description: 'Maximum selectable bound.'
  },
  {
    name: 'step',
    type: 'number',
    defaultValue: '1',
    description: 'Granular step interval between numbers.'
  },
  {
    name: 'error',
    type: 'string',
    description: 'Validation error message rendered beneath the slider.'
  },
  {
    name: 'helperText',
    type: 'string',
    description: 'Informational helper text rendered beneath the slider.'
  },
  {
    name: 'fullWidth',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether the slider spans 100% width of its parent.'
  },
  {
    name: 'disabled',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Disables slider interactions and mutes appearance.'
  }
];
