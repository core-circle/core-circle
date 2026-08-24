export const ALERT_HEADER_CONTENT = {
  title: 'Alert',
  description: 'Displays a callout for user attention or information with various visual styles and action triggers.',
};

export const ALERT_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Atoms', href: '/atoms' },
  { label: 'Alert' },
];

export const ALERT_SECTIONS = [
  { id: 'overview', title: 'Overview', description: 'Alert semantics and usage.' },
  { id: 'variants', title: 'Variants', description: '12 visual alert styles.' },
  { id: 'playground', title: 'Playground', description: 'Interactive alert playground.' },
];

export const ALERT_PROPS_DATA = [
  { name: 'variant', type: "'info' | 'success' | 'warning' | 'destructive' | 'card' | 'floating' | 'glassmorphic' | 'gradient' | 'pill' | 'minimal' | 'outline' | 'soft'", defaultValue: "'info'", description: 'The visual style of the alert (12 options).' },
  { name: 'title', type: 'ReactNode', defaultValue: '-', description: 'Optional bold title of the alert.' },
  { name: 'description', type: 'ReactNode', defaultValue: '-', description: 'The main message or content of the alert (or pass children).' },
  { name: 'children', type: 'ReactNode', defaultValue: '-', description: 'Content of the alert passed as children.' },
  { name: 'icon', type: 'ReactNode', defaultValue: '-', description: 'Optional icon element displayed before the title.' },
  { name: 'action', type: 'ReactNode', defaultValue: '-', description: 'Optional action button or link element slot.' },
  { name: 'dismissible', type: 'boolean', defaultValue: 'false', description: 'Whether the alert shows a dismiss close button.' },
  { name: 'onDismiss', type: '() => void', defaultValue: '-', description: 'Callback triggered when the dismiss button is clicked.' },
  { name: 'onClose', type: '() => void', defaultValue: '-', description: 'Callback triggered when the dismiss button is clicked (alias).' },
  { name: 'fullWidth', type: 'boolean', defaultValue: 'true', description: 'Whether the alert expands to fill its container width.' },
];
