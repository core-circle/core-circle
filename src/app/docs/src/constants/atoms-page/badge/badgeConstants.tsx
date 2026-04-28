
export const BADGE_HEADER_CONTENT = {
  title: 'Badge',
  description: 'A small visual indicator used for status, counts, or categorization.',
};

export const BADGE_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Atoms', href: '/atoms' },
  { label: 'Badge' },
];

export const BADGE_PROPS_DATA = [
  {
    name: 'variant',
    type: '"primary" | "secondary" | "success" | "warning" | "danger" | "ghost" | "outline"',
    defaultValue: '"primary"',
    description: 'The visual theme of the badge.',
  },
  {
    name: 'size',
    type: '"sm" | "md" | "lg"',
    defaultValue: '"md"',
    description: 'The vertical padding and font size.',
  },
  {
    name: 'shape',
    type: '"rounded" | "pill" | "square"',
    defaultValue: '"rounded"',
    description: 'The border-radius style.',
  },
  {
    name: 'removable',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether to show a remove button.',
  },
  {
    name: 'pulse',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether to add a pulse animation.',
  },
];

export const BADGE_SECTIONS = [
  {
    id: 'overview',
    title: 'Overview',
    description: 'Badges are used to highlight specific information such as counts, status, or labels.',
  },
  {
    id: 'variants',
    title: 'Variants',
    description: 'Semantic colors and styles to convey different meanings.',
  },
  {
    id: 'playground',
    title: 'Playground',
    description: 'Interactive tool to test different configurations.',
  },
];
