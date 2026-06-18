import { PropItem } from '../../../interface/components/props-table.types';

export const TOAST_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Molecules', href: '/molecules' },
  { label: 'Toast' }
];

export const TOAST_HEADER_CONTENT = {
  title: 'Toast',
  description: 'A succinct message that is displayed temporarily in a specific area of the screen to provide feedback about an action.',
};

export const TOAST_SECTIONS = [
  {
    id: 'playground',
    title: 'Live Playground',
    description: 'Trigger various toast notifications to see them in action.',
    showBorder: true,
    isPlayground: true
  },
  {
    id: 'variants',
    title: 'Variants',
    description: 'Toast supports multiple status-based variants.',
    previews: [
      {
        id: 'success',
        title: 'Success',
        code: `toast({ title: 'Success', variant: 'success' })`
      },
      {
        id: 'error',
        title: 'Error',
        code: `toast({ title: 'Error', variant: 'error' })`
      }
    ]
  }
];

export const TOAST_PROPS_DATA: PropItem[] = [
  {
    name: 'title',
    type: 'ReactNode',
    description: 'The title of the toast message.'
  },
  {
    name: 'description',
    type: 'ReactNode',
    description: 'Additional detail or information about the notification.'
  },
  {
    name: 'variant',
    type: "'default' | 'success' | 'error' | 'warning' | 'info'",
    defaultValue: "'default'",
    description: 'The visual style of the toast.'
  },
  {
    name: 'duration',
    type: 'number',
    defaultValue: '5000',
    description: 'Time in milliseconds before the toast automatically disappears. Set to 0 to keep it open.'
  },
  {
    name: 'action',
    type: 'ReactNode',
    description: 'Optional element (like a Button) to display alongside the close icon.'
  }
];
