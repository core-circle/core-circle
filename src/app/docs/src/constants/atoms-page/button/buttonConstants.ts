import { HomeIcon } from '@core-circle/icons';
import React from 'react';
import { PropItem } from '../../../interface/components/props-table.types';

export const BUTTON_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/', icon: React.createElement(HomeIcon, { size: 14 }) },
  { label: 'Atoms', href: '/atoms' },
  { label: 'Button' }
];

export const BUTTON_HEADER_CONTENT = {
  title: 'Button',
  description: 'The core button component with multiple variants, sizes, and advanced loading states. Perfectly crafted for the Core Circle ecosystem.',
};

export const BUTTON_SECTIONS = [
  {
    id: 'playground',
    title: 'Live Playground',
    description: 'Experiment with props live to see how the button behaves and copy the generated code.',
    showBorder: true,
    isPlayground: true
  },
  {
    id: 'variants',
    title: 'Style Variants',
    description: 'Choose from 6 distinct visual styles to match your UI context.',
    previews: [
      {
        title: 'All Variants',
        code: `<Button variant="primary">Primary</Button>\n<Button variant="secondary">Secondary</Button>\n<Button variant="warning">Warning</Button>\n<Button variant="destructive">Destructive</Button>\n<Button variant="outline">Outline</Button>\n<Button variant="ghost">Ghost</Button>`
      }
    ]
  },
  {
    id: 'sizes',
    title: 'Sizes',
    description: 'Four sizes tailored for various layout densities.',
    previews: [
      {
        title: 'Size Scale',
        code: `<Button size="sm">Small</Button>\n<Button size="md">Medium</Button>\n<Button size="lg">Large</Button>\n<Button size="icon"><i className="fa-solid fa-bell" /></Button>`
      }
    ]
  },
  {
    id: 'icons',
    title: 'With Icons',
    description: 'Enhance buttons with visual cues using start and end icon slots.',
    previews: [
      {
        title: 'Icon Positions',
        code: `<Button startIcon={<i className="fa-solid fa-envelope" />}>Email</Button>\n<Button variant="secondary" endIcon={<i className="fa-solid fa-arrow-right" />}>Continue</Button>\n<Button variant="ghost" startIcon={<i className="fa-solid fa-gear" />}>Settings</Button>`
      }
    ]
  },
  {
    id: 'loading',
    title: 'Loading States',
    description: 'Built-in loading indicators with support for custom icons and positioning.',
    previews: [
      {
        title: 'Interactive Loaders',
        code: `<Button loading>Default Loader</Button>\n<Button variant="secondary" loading startLoadingIcon={<i className="fa-solid fa-rotate" />}>\n  Custom Start Loader\n</Button>\n<Button variant="warning" loading endLoadingIcon={<i className="fa-regular fa-clock" />}>\n  Custom End Loader\n</Button>`
      }
    ]
  }
];

export const BUTTON_PROPS_DATA: PropItem[] = [
  {
    name: 'variant',
    type: "'primary' | 'secondary' | 'warning' | 'destructive' | 'outline' | 'ghost'",
    defaultValue: "'primary'",
    description: 'The visual style of the button.'
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg' | 'icon'",
    defaultValue: "'md'",
    description: 'The size of the button.'
  },
  {
    name: 'loading',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Shows a loading spinner and disables interaction.'
  },
  {
    name: 'startIcon',
    type: 'React.ReactNode',
    description: 'Icon element to display before the button label.'
  },
  {
    name: 'endIcon',
    type: 'React.ReactNode',
    description: 'Icon element to display after the button label.'
  },
  {
    name: 'labelSize',
    type: "'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl'",
    defaultValue: "'sm'",
    description: 'Specific typography size for the button label.'
  },
  {
    name: 'labelWeight',
    type: "'light' | 'normal' | 'medium' | 'semibold' | 'bold'",
    defaultValue: "'medium'",
    description: 'Typography weight for the button label.'
  },
  {
    name: 'disabled',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether the button is non-interactive.'
  }
];
