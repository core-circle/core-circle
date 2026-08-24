import { HomeIcon } from '@core-circle/icons';
import React from 'react';
import { PropItem } from '../../../interface/components/props-table.types';

export const STEPPER_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/', icon: React.createElement(HomeIcon, { size: 14 }) },
  { label: 'Atoms', href: '/atoms' },
  { label: 'Stepper' }
];

export const STEPPER_HEADER_CONTENT = {
  title: 'Stepper',
  description: 'A progress indicator that displays a sequence of steps to guide users through a multi-stage process.',
};

export const STEPPER_SECTIONS = [
  {
    id: 'playground',
    title: 'Live Playground',
    description: 'Interact with orientation, variants, and step progress in real-time.',
    showBorder: true,
    isPlayground: true
  },
  {
    id: 'orientations',
    title: 'Orientations',
    description: 'Switch between horizontal and vertical layouts based on your UI space.',
    previews: [
      {
        id: 'horizontal',
        title: 'Horizontal',
        code: `<Stepper orientation="horizontal" activeStep={1} steps={steps} />`
      },
      {
        id: 'vertical',
        title: 'Vertical',
        code: `<Stepper orientation="vertical" activeStep={2} steps={steps} />`
      }
    ]
  }
];

export const STEPPER_PROPS_DATA: PropItem[] = [
  {
    name: 'steps',
    type: 'StepItem[]',
    description: 'Array of objects containing title, description, and status for each step.'
  },
  {
    name: 'activeStep',
    type: 'number',
    defaultValue: '0',
    description: 'The zero-indexed value of the currently active step.'
  },
  {
    name: 'orientation',
    type: "'horizontal' | 'vertical'",
    defaultValue: "'horizontal'",
    description: 'The layout direction of the stepper.'
  },
  {
    name: 'variant',
    type: "'numbers' | 'circles' | 'dots'",
    defaultValue: "'numbers'",
    description: 'The visual style of the step indicators.'
  },
  {
    name: 'showDescription',
    type: 'boolean',
    defaultValue: 'true',
    description: 'Whether to display the optional description text below/beside the title.'
  }
];
