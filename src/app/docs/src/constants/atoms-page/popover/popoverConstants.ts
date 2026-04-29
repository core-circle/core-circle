export const POPOVER_HEADER_CONTENT = {
  title: 'Popover',
  description: 'Displays rich content in a portal, triggered by a button or other interactive element.',
};

export const POPOVER_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Atoms', href: '/atoms' },
  { label: 'Popover' },
];

export const POPOVER_PROPS_DATA = [
  { name: 'trigger', type: 'ReactNode', defaultValue: '-', description: 'The element that opens the popover' },
  { name: 'position', type: "'top' | 'bottom' | 'left' | 'right'", defaultValue: "'bottom'", description: 'Preferred position' },
  { name: 'align', type: "'start' | 'center' | 'end'", defaultValue: "'center'", description: 'Preferred alignment' },
  { name: 'open', type: 'boolean', defaultValue: 'false', description: 'Controlled open state' },
];
