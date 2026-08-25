import React from 'react';
import { PropItem } from '../../../interface/components/props-table.types';

export const SPINNER_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Atoms', href: '/atoms' },
  { label: 'Spinner' }
];

export const SPINNER_HEADER_CONTENT = {
  title: 'Spinner',
  description: 'An indeterminate rotating indicator with 12 color variants, custom thickness, rotation speed overrides, and size scales.',
};

export const SPINNER_SECTIONS = [
  {
    id: 'theming',
    title: 'Theming',
    description: 'Production-grade loading spinner themes for payment gateways, Kubernetes rollouts, AI streams, and dispatch sync.',
  },
  {
    id: 'variants',
    title: 'Variants',
    description: 'Explore 12 distinct color and surface styling variants.',
  },
  {
    id: 'playground',
    title: 'Playground',
    description: 'Interactive property playground with live thickness and rotation speed controls.',
  },
  {
    id: 'mock-code',
    title: 'Mock Code',
    description: 'Dynamic API payment processing state integration example.',
  },
  {
    id: 'overview',
    title: 'Overview',
    description: 'Quick usage snippet and props reference.',
  },
];

export const SPINNER_PROPS_DATA: PropItem[] = [
  {
    name: 'variant',
    type: "'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'gradient' | 'glow' | 'glassmorphic' | 'accent' | 'dark' | 'white'",
    defaultValue: "'primary'",
    description: 'Color theme and glow styling applied to the spinner border.'
  },
  {
    name: 'size',
    type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
    defaultValue: "'md'",
    description: 'Predefined diameter and border thickness size scale.'
  },
  {
    name: 'thickness',
    type: 'number',
    description: 'Custom stroke border width in pixels.'
  },
  {
    name: 'speed',
    type: 'number',
    defaultValue: '0.8',
    description: 'Rotation cycle duration in seconds.'
  },
  {
    name: 'className',
    type: 'string',
    description: 'Additional CSS classes.'
  }
];
