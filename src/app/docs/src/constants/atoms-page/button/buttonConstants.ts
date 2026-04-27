import { HomeIcon } from '@core-circle/icons';
import React from 'react';

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
