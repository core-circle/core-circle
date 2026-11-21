import { HomeIcon } from '@core-circle/icons';
import React from 'react';
import { PropItem } from '../../../interface/components/props-table.types';

export const IMAGE_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/', icon: React.createElement(HomeIcon, { size: 14 }) },
  { label: 'Atoms', href: '/atoms' },
  { label: 'Image' },
];

export const IMAGE_HEADER_CONTENT = {
  title: 'Image',
  description: 'An enhanced media primitive featuring automatic skeleton loading, graceful error fallbacks, 10 frame variants, aspect ratio bounding boxes, hover zoom transitions, and caption overlays.',
};

export const IMAGE_PROPS_DATA: PropItem[] = [
  {
    name: 'src',
    type: 'string',
    defaultValue: '-',
    description: 'The source URL of the image asset.'
  },
  {
    name: 'alt',
    type: 'string',
    defaultValue: "'Image asset'",
    description: 'Accessible alternative text description.'
  },
  {
    name: 'variant',
    type: "'card' | 'floating' | 'glassmorphic' | 'gradient' | 'circular' | 'pill' | 'polaroid' | 'minimal' | 'bordered' | 'thumbnail'",
    defaultValue: "'card'",
    description: 'Visual frame and container style (10 options).'
  },
  {
    name: 'aspectRatio',
    type: "'1:1' | '16:9' | '4:3' | '21:9' | '3:2' | 'auto'",
    defaultValue: "'auto'",
    description: 'Constrained aspect ratio box preventing layout shifts.'
  },
  {
    name: 'fit',
    type: "'cover' | 'contain' | 'fill' | 'none' | 'scale-down'",
    defaultValue: "'cover'",
    description: 'CSS object-fit behavior inside the frame.'
  },
  {
    name: 'rounded',
    type: "'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full'",
    defaultValue: "'xl'",
    description: 'Corner radius curvature scale.'
  },
  {
    name: 'zoomOnHover',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether to apply a smooth scale zoom on hover.'
  },
  {
    name: 'caption',
    type: 'ReactNode',
    defaultValue: '-',
    description: 'Bottom caption text or element overlay.'
  },
  {
    name: 'overlay',
    type: 'ReactNode',
    defaultValue: '-',
    description: 'Top overlay badge or interactive action slot.'
  },
  {
    name: 'fallback',
    type: 'ReactNode',
    defaultValue: '-',
    description: 'Custom UI rendered if the image fails to load (404/offline).'
  },
  {
    name: 'width',
    type: 'string | number',
    defaultValue: '-',
    description: 'Custom width constraint.'
  },
  {
    name: 'height',
    type: 'string | number',
    defaultValue: '-',
    description: 'Custom height constraint.'
  }
];
