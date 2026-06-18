export const ALERT_HEADER_CONTENT = {
  title: 'Alert',
  description: 'Displays a callout for user attention or information with various visual styles.',
};

export const ALERT_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Atoms', href: '/atoms' },
  { label: 'Alert' },
];

export const ALERT_PROPS_DATA = [
  { name: 'variant', type: "'info' | 'success' | 'warning' | 'destructive' | 'outline'", defaultValue: "'info'", description: 'The visual style of the alert' },
  { name: 'title', type: 'string', defaultValue: '-', description: 'Optional bold title' },
  { name: 'icon', type: 'ReactNode', defaultValue: '-', description: 'Optional icon to display' },
  { name: 'onClose', type: '() => void', defaultValue: '-', description: 'Callback when the alert is closed' },
];
