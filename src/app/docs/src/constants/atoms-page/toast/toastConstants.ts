export const TOAST_HEADER_CONTENT = {
  title: 'Toast',
  description: 'A floating notification message displayed temporarily and non-interruptively to convey system feedback.',
};

export const TOAST_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Atoms', href: '/atoms' },
  { label: 'Toast' },
];

export const TOAST_SECTIONS = [
  { id: 'overview', title: 'Overview', description: 'Toast notification semantics.' },
  { id: 'variants', title: 'Variants', description: '12 visual toast styles.' },
  { id: 'playground', title: 'Playground', description: 'Interactive toast sandbox.' },
];

export const TOAST_PROPS_DATA = [
  {
    name: 'variant',
    type: "'default' | 'success' | 'warning' | 'destructive' | 'error' | 'info' | 'card' | 'glassmorphic' | 'gradient' | 'floating' | 'pill' | 'minimal'",
    defaultValue: "'default'",
    description: 'The visual styling variant of the toast notification (12 options).'
  },
  { name: 'title', type: 'ReactNode', defaultValue: '-', description: 'Primary headline text or JSX.' },
  { name: 'description', type: 'ReactNode', defaultValue: '-', description: 'Secondary descriptive detail text or JSX.' },
  { name: 'action', type: 'ReactNode', defaultValue: '-', description: 'Optional action button element (e.g. Undo, Retry).' },
  { name: 'icon', type: 'ReactNode', defaultValue: '-', description: 'Optional leading icon element.' },
  { name: 'duration', type: 'number', defaultValue: '5000', description: 'Display time in milliseconds before auto-dismissal.' },
  { name: 'onClose', type: '(id?: string) => void', defaultValue: '-', description: 'Callback triggered when the toast is dismissed.' },
];
