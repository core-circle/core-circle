export const TOAST_HEADER_CONTENT = {
  title: 'Toast',
  description: 'A succinct message that is displayed temporarily and non-interruptively.',
};

export const TOAST_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Atoms', href: '/atoms' },
  { label: 'Toast' },
];

export const TOAST_PROPS_DATA = [
  { name: 'variant', type: "'default' | 'success' | 'warning' | 'destructive'", defaultValue: "'default'", description: 'The visual style of the toast' },
  { name: 'title', type: 'string', defaultValue: '-', description: 'Primary message text' },
  { name: 'description', type: 'string', defaultValue: '-', description: 'Secondary descriptive text' },
  { name: 'action', type: 'ReactNode', defaultValue: '-', description: 'Optional action button/element' },
  { name: 'icon', type: 'ReactNode', defaultValue: '-', description: 'Optional icon' },
];
