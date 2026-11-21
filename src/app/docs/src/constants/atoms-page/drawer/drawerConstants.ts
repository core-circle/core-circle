import React from 'react';
import { PropItem } from '../../../interface/components/props-table.types';

export const DRAWER_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Atoms', href: '/atoms' },
  { label: 'Drawer' },
];

export const DRAWER_HEADER_CONTENT = {
  title: 'Drawer',
  description: 'A slide-over overlay panel anchored to any viewport edge, featuring 10 visual variants, 4-directional transitions, escape-key dismissing, and nested scrolling.',
};

export const DRAWER_SECTIONS = [
  {
    id: 'theming',
    title: 'Theming',
    description: 'Production-grade slide-over panels for shopping carts, cloud infrastructure filters, IAM permissions, mobile nav, and telemetry logs.',
  },
  {
    id: 'variants',
    title: 'Variants',
    description: 'Explore 10 surface styling variants from frosted glassmorphism to deep cyber neon glow.',
  },
  {
    id: 'playground',
    title: 'Playground',
    description: 'Interactive drawer playground with live positioning, sizing, and code generation.',
  },
  {
    id: 'mock-code',
    title: 'Mock Code',
    description: 'Dynamic checkout cart and remote filtering panel integration example.',
  },
  {
    id: 'overview',
    title: 'Overview',
    description: 'Quick usage snippet and props reference.',
  },
];

export const DRAWER_PROPS_DATA: PropItem[] = [
  {
    name: 'isOpen',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether the slide-over drawer is currently visible.'
  },
  {
    name: 'onClose',
    type: '() => void',
    defaultValue: '-',
    description: 'Callback triggered when backdrop, close button, or ESC key is pressed.'
  },
  {
    name: 'position',
    type: "'right' | 'left' | 'top' | 'bottom'",
    defaultValue: "'right'",
    description: 'Viewport edge that the drawer panel slides in from.'
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg' | 'xl' | 'full'",
    defaultValue: "'md'",
    description: 'Width or height scale of the drawer panel.'
  },
  {
    name: 'variant',
    type: "'default' | 'subtle' | 'bordered' | 'glassmorphic' | 'gradient' | 'glow' | 'dark' | 'sidebar' | 'accent' | 'minimal'",
    defaultValue: "'default'",
    description: 'Visual styling theme of the panel container.'
  },
  {
    name: 'title',
    type: 'React.ReactNode',
    defaultValue: '-',
    description: 'Header headline text or custom element.'
  },
  {
    name: 'description',
    type: 'React.ReactNode',
    defaultValue: '-',
    description: 'Header subtitle text.'
  },
  {
    name: 'footer',
    type: 'React.ReactNode',
    defaultValue: '-',
    description: 'Sticky bottom action bar container.'
  },
  {
    name: 'showCloseButton',
    type: 'boolean',
    defaultValue: 'true',
    description: 'Whether to display the top-right X dismiss icon.'
  },
  {
    name: 'closeOnOverlayClick',
    type: 'boolean',
    defaultValue: 'true',
    description: 'Whether clicking the backdrop overlay triggers onClose.'
  },
  {
    name: 'closeOnEsc',
    type: 'boolean',
    defaultValue: 'true',
    description: 'Whether pressing the Escape key triggers onClose.'
  },
];
