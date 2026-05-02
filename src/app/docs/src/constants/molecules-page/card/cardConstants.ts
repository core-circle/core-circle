import { HomeIcon } from '@core-circle/icons';
import React from 'react';
import { PropItem } from '../../../interface/components/props-table.types';

export const CARD_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/', icon: React.createElement(HomeIcon, { size: 14 }) },
  { label: 'Molecules', href: '/molecules' },
  { label: 'Card' }
];

export const CARD_HEADER_CONTENT = {
  title: 'Card',
  description: 'A flexible content container used to group related information and actions.',
};

export const CARD_SECTIONS = [
  {
    id: 'playground',
    title: 'Live Playground',
    description: 'Experiment with card variants, header/footer options, and content layouts.',
    showBorder: true,
    isPlayground: true
  },
  {
    id: 'variants',
    title: 'Visual Variants',
    description: 'Multiple styles to fit your layout requirements.',
    previews: [
      {
        id: 'outline',
        title: 'Outline',
        code: `<Card variant="outline">\n  <Card.Body>Simple Outline Card</Card.Body>\n</Card>`
      },
      {
        id: 'shadow',
        title: 'Shadow',
        code: `<Card variant="shadow">\n  <Card.Body>Shadow Card with Elevation</Card.Body>\n</Card>`
      }
    ]
  }
];

export const CARD_PROPS_DATA: PropItem[] = [
  {
    name: 'variant',
    type: "'outline' | 'shadow' | 'ghost' | 'flat'",
    defaultValue: "'outline'",
    description: 'The visual style of the card.'
  },
  {
    name: 'rounded',
    type: 'boolean',
    defaultValue: 'true',
    description: 'Whether to use rounded corners.'
  },
  {
    name: 'hoverable',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Enables hover elevation and pointer cursor.'
  },
  {
    name: 'fullWidth',
    type: 'boolean',
    defaultValue: 'true',
    description: 'Whether the card expands to fill its container.'
  },
  {
    name: 'onClose',
    type: '() => void',
    description: 'Callback function triggered when the close icon is clicked. Displays a close icon in the header if provided.'
  }
];
