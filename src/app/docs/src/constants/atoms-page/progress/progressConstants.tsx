import React from 'react';

export const PROGRESS_HEADER_CONTENT = {
  title: 'Progress',
  description: 'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
};

export const PROGRESS_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Atoms', href: '/atoms' },
  { label: 'Progress' },
];

export const PROGRESS_PROPS_DATA = [
  {
    name: 'value',
    type: 'number',
    defaultValue: '0',
    description: 'The current value of the progress bar.',
  },
  {
    name: 'max',
    type: 'number',
    defaultValue: '100',
    description: 'The maximum value of the progress bar.',
  },
  {
    name: 'variant',
    type: '"primary" | "secondary" | "success" | "warning" | "danger" | "ghost"',
    defaultValue: '"primary"',
    description: 'The visual style of the progress bar.',
  },
  {
    name: 'size',
    type: '"sm" | "md" | "lg"',
    defaultValue: '"md"',
    description: 'The height and border-radius of the progress bar.',
  },
  {
    name: 'showLabel',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether to display the completion percentage.',
  },
  {
    name: 'labelPosition',
    type: '"inside" | "outside-end" | "outside-top"',
    defaultValue: '"outside-end"',
    description: 'Where to position the percentage label.',
  },
  {
    name: 'indeterminate',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether the progress bar shows an indeterminate loading state.',
  },
];

export const PROGRESS_SECTIONS = [
  {
    id: 'overview',
    title: 'Overview',
    description: 'Progress indicators inform users about the status of ongoing processes, such as loading an application or submitting a form.',
  },
  {
    id: 'variants',
    title: 'Variants',
    description: 'Different color themes to convey semantic meaning.',
  },
  {
    id: 'playground',
    title: 'Playground',
    description: 'Interactive tool to test different configurations.',
  },
];
