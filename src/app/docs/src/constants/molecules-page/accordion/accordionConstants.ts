import { HomeIcon } from '@core-circle/icons';
import React from 'react';
import { PropItem } from '../../../interface/components/props-table.types';

export const ACCORDION_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/', icon: React.createElement(HomeIcon, { size: 14 }) },
  { label: 'Molecules', href: '/molecules' },
  { label: 'Accordion' }
];

export const ACCORDION_HEADER_CONTENT = {
  title: 'Accordion',
  description: 'A vertically stacked set of interactive headings that each reveal a section of content.',
};

export const ACCORDION_SECTIONS = [
  {
    id: 'playground',
    title: 'Live Playground',
    description: 'Experiment with the compound pattern and visual variants live.',
    showBorder: true,
    isPlayground: true
  },
  {
    id: 'compound',
    title: 'Compound Pattern',
    description: 'Use the sub-components to build your layout exactly how you need it.',
    previews: [
      {
        id: 'single',
        title: 'Single Selection',
        code: `<Accordion type="single">\n  <Accordion.Item value="item-1">\n    <Accordion.Trigger>Title</Accordion.Trigger>\n    <Accordion.Content>Content</Accordion.Content>\n  </Accordion.Item>\n</Accordion>`
      }
    ]
  }
];

export const ACCORDION_PROPS_DATA: PropItem[] = [
  {
    name: 'type',
    type: "'single' | 'multiple'",
    defaultValue: "'single'",
    description: 'Determines whether one or multiple items can be opened at once.'
  },
  {
    name: 'variant',
    type: "'bordered' | 'ghost' | 'separated'",
    defaultValue: "'bordered'",
    description: 'The visual style of the accordion items.'
  },
  {
    name: 'defaultValue',
    type: 'string | string[]',
    description: 'The initial value of the item(s) to expand.'
  }
];
