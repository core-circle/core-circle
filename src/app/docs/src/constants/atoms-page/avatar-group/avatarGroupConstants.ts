import React from 'react';
import { PropItem } from '../../../interface/components/props-table.types';

export const AVATAR_GROUP_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Atoms', href: '/atoms' },
  { label: 'AvatarGroup' },
];

export const AVATAR_GROUP_HEADER_CONTENT = {
  title: 'AvatarGroup',
  description: 'A stacked cluster of user identity avatars featuring configurable maximum thresholds, +N overflow badges, hover zoom interactions, and 10 styling ring variants.',
};

export const AVATAR_GROUP_SECTIONS = [
  {
    id: 'theming',
    title: 'Theming',
    description: 'Production-grade avatar groups for GitHub PR reviewers, Figma realtime canvas collaborators, Linear project assignees, and multiplayer lobbies.',
  },
  {
    id: 'variants',
    title: 'Variants',
    description: 'Explore 10 surface border rings, neon halos, compact spacings, and sizes from xs through xl.',
  },
  {
    id: 'playground',
    title: 'Playground',
    description: 'Interactive avatar group sandbox with live overflow calculation, size adjustments, and code generator.',
  },
  {
    id: 'mock-code',
    title: 'Mock Code',
    description: 'Dynamic team collaborators API response payload integration example.',
  },
  {
    id: 'overview',
    title: 'Overview',
    description: 'Quick usage snippet and props reference.',
  },
];

export const AVATAR_GROUP_PROPS_DATA: PropItem[] = [
  {
    name: 'max',
    type: 'number',
    defaultValue: '4',
    description: 'Maximum visible avatars before collapsing into the +N overflow count.'
  },
  {
    name: 'size',
    type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
    defaultValue: "'md'",
    description: 'Uniform dimensional scale applied to avatars and the overflow badge.'
  },
  {
    name: 'variant',
    type: "'default' | 'bordered' | 'ring' | 'glow' | 'glassmorphic' | 'gradient' | 'compact' | 'relaxed' | 'dark' | 'pill'",
    defaultValue: "'default'",
    description: 'Ring surface and drop-shadow halo styling.'
  },
  {
    name: 'spacing',
    type: "'compact' | 'normal' | 'relaxed'",
    defaultValue: "'normal'",
    description: 'Horizontal negative overlap distance between avatar cards.'
  },
  {
    name: 'items',
    type: 'Array<{ src?: string; fallback?: string; name?: string; status?: string }>',
    defaultValue: '-',
    description: 'Structured array of user data objects to automatically map to Avatars.'
  },
  {
    name: 'renderOverflow',
    type: '(count: number) => React.ReactNode',
    defaultValue: '-',
    description: 'Custom JSX renderer for the trailing +N badge.'
  },
];
