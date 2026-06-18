import { HomeIcon } from '@core-circle/icons';
import React from 'react';
import { PropItem } from '../../../interface/components/props-table.types';

export const TYPOGRAPHY_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/', icon: React.createElement(HomeIcon, { size: 14 }) },
  { label: 'Atoms', href: '/atoms' },
  { label: 'Typography' }
];

export const TYPOGRAPHY_HEADER_CONTENT = {
  title: 'Typography',
  description: 'A comprehensive component for managing all text styles in your application. From headings to small captions, ensure consistency across your UI.',
};

export const TYPOGRAPHY_SECTIONS = [
  {
    id: 'variants',
    title: 'Text Variants',
    description: 'Use these variants to define the semantic purpose of the text.',
    previews: [
      {
        title: 'Headings',
        code: `<Typography variant="h1">Heading 1</Typography>\n<Typography variant="h2">Heading 2</Typography>\n<Typography variant="h3">Heading 3</Typography>`
      }
    ]
  },
  {
    id: 'styles',
    title: 'Utility Styles',
    description: 'Special styles for blockquotes, inline code, and muted text.',
    previews: [
      {
        title: 'Special Variants',
        code: `<Typography variant="blockquote">"Great things never come from comfort zones."</Typography>\n<Typography variant="code">const name = "Core Circle";</Typography>\n<Typography variant="muted">Secondary information text.</Typography>`
      }
    ]
  }
];

export const TYPOGRAPHY_PROPS_DATA: PropItem[] = [
  {
    name: 'variant',
    type: "'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'blockquote' | 'code' | 'lead' | 'large' | 'small' | 'muted'",
    defaultValue: "'p'",
    description: 'The semantic and visual style of the text.'
  },
  {
    name: 'as',
    type: 'React.ElementType',
    description: 'The underlying HTML element to render.'
  },
  {
    name: 'weight',
    type: "'light' | 'normal' | 'medium' | 'semibold' | 'bold'",
    defaultValue: "'normal'",
    description: 'The font weight of the text.'
  },
  {
    name: 'align',
    type: "'left' | 'center' | 'right' | 'justify'",
    defaultValue: "'left'",
    description: 'The text alignment.'
  },
  {
    name: 'italic',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether the text should be italicized.'
  },
  {
    name: 'underline',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether the text should be underlined.'
  }
];
