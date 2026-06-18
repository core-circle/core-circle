export const DIALOG_HEADER_CONTENT = {
  title: 'Dialog',
  description: 'A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.',
};

export const DIALOG_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Atoms', href: '/atoms' },
  { label: 'Dialog' },
];

export const DIALOG_PROPS_DATA = [
  { name: 'trigger', type: 'ReactNode', defaultValue: '-', description: 'The element that opens the dialog' },
  { name: 'title', type: 'string', defaultValue: '-', description: 'Modal title' },
  { name: 'size', type: "'sm' | 'md' | 'lg' | 'xl' | 'full'", defaultValue: "'md'", description: 'Width of the dialog' },
  { name: 'footer', type: 'ReactNode', defaultValue: '-', description: 'Optional footer content' },
];
