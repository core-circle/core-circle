export const BADGE_HEADER_CONTENT = {
  title: 'Badge',
  description: 'A versatile visual indicator used for status signaling, numeric counts, feature tags, and categorization.',
};

export const BADGE_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Atoms', href: '/atoms' },
  { label: 'Badge' },
];

export const BADGE_PROPS_DATA = [
  {
    name: 'variant',
    type: '"primary" | "secondary" | "success" | "warning" | "destructive" | "info" | "ghost" | "outline" | "glassmorphic" | "gradient" | "floating" | "dot"',
    defaultValue: '"primary"',
    description: 'The visual styling variant of the badge (12 variants).',
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
    description: 'The border radius geometry of the badge.',
  },
  {
    name: 'dot',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether to display an animated active status dot.',
  },
  {
    name: 'startIcon',
    type: 'ReactNode',
    defaultValue: '-',
    description: 'Optional leading icon.',
  },
  {
    name: 'endIcon',
    type: 'ReactNode',
    defaultValue: '-',
    description: 'Optional trailing icon.',
  },
  {
    name: 'removable',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether to show a dismissible remove button.',
  },
  {
    name: 'onRemove',
    type: '() => void',
    defaultValue: '-',
    description: 'Callback executed when the remove button is clicked.',
  },
  {
    name: 'pulse',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether to apply a gentle pulse animation.',
  },
];

export const BADGE_SECTIONS = [
  {
    id: 'overview',
    title: 'Overview',
    description: 'Badges highlight statuses, tags, counts, and metadata.',
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
