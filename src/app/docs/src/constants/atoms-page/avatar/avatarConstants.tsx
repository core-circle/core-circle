import React from 'react';

export const AVATAR_HEADER_CONTENT = {
  title: 'Avatar',
  description: 'A visual representation of a user or entity, with support for images, initials, and fallback icons.',
};

export const AVATAR_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Atoms', href: '/atoms' },
  { label: 'Avatar' },
];

export const AVATAR_PROPS_DATA = [
  {
    name: 'src',
    type: 'string',
    defaultValue: '-',
    description: 'The image source for the avatar.',
  },
  {
    name: 'alt',
    type: 'string',
    defaultValue: '""',
    description: 'Alternative text for the image.',
  },
  {
    name: 'name',
    type: 'string',
    defaultValue: '-',
    description: 'The name of the user, used to generate initials if image is missing.',
  },
  {
    name: 'size',
    type: '"xs" | "sm" | "md" | "lg" | "xl" | "2xl"',
    defaultValue: '"md"',
    description: 'The size of the avatar.',
  },
  {
    name: 'shape',
    type: '"circle" | "square" | "rounded"',
    defaultValue: '"circle"',
    description: 'The shape of the avatar.',
  },
  {
    name: 'status',
    type: '"online" | "offline" | "away" | "busy"',
    defaultValue: '-',
    description: 'Optional status indicator.',
  },
  {
    name: 'bordered',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether to show a border around the avatar.',
  },
];

export const AVATAR_SECTIONS = [
  {
    id: 'overview',
    title: 'Overview',
    description: 'Avatars are used throughout the application to represent users in profile sections, comments, and lists.',
  },
  {
    id: 'variants',
    title: 'Variants',
    description: 'Multiple shapes, sizes, and fallback states to suit any context.',
  },
  {
    id: 'playground',
    title: 'Playground',
    description: 'Interactive tool to test different configurations.',
  },
];
