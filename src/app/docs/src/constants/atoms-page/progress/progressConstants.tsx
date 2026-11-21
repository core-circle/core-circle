
import { PropItem } from '../../../interface/components/props-table.types';

export const PROGRESS_HEADER_CONTENT = {
  title: 'Progress',
  description: 'Displays a visual indicator showing the completion status of a task, process, quota, or multi-stage workflow with customizable variants, animations, shapes, and labels.',
};

export const PROGRESS_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Atoms', href: '/atoms' },
  { label: 'Progress' },
];

export const PROGRESS_PROPS_DATA: PropItem[] = [
  {
    name: 'value',
    type: 'number',
    defaultValue: '0',
    description: 'The current value of the progress bar.',
  },
  {
    name: 'max',
    type: 'number',
    defaultValue: '100',
    description: 'The maximum value of the progress bar.',
  },
  {
    name: 'variant',
    type: "'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'gradient' | 'glassmorphic' | 'striped' | 'glow' | 'floating' | 'ghost'",
    defaultValue: "'primary'",
    description: 'Visual theme and color variant of the progress indicator.',
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg'",
    defaultValue: "'md'",
    description: 'Height and scale of the progress track.',
  },
  {
    name: 'shape',
    type: "'pill' | 'rounded' | 'square'",
    defaultValue: "'pill'",
    description: 'Border-radius geometry of the track and indicator.',
  },
  {
    name: 'striped',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether to display animated barber-pole diagonal stripes on the indicator.',
  },
  {
    name: 'showLabel',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether to display the progress percentage or custom label.',
  },
  {
    name: 'labelPosition',
    type: "'inside' | 'outside-end' | 'outside-top'",
    defaultValue: "'outside-end'",
    description: 'Where to position the label relative to the progress bar.',
  },
  {
    name: 'label',
    type: 'ReactNode',
    defaultValue: 'undefined',
    description: 'Custom label text or element. If not provided, percentage is calculated automatically.',
  },
  {
    name: 'indeterminate',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether the progress bar displays an indeterminate infinite loading animation.',
  },
  {
    name: 'animate',
    type: 'boolean',
    defaultValue: 'true',
    description: 'Whether the bar transition smoothly animates value changes.',
  },
];

export const PROGRESS_SECTIONS = [
  {
    id: 'theming',
    title: 'Theming',
    description: 'Production-ready themes for enterprise quotas, VIP progression, delivery logistics, and health metrics.',
  },
  {
    id: 'variants',
    title: 'Variants',
    description: 'Explore 12 visual color and styling variants, shapes, and striped animations.',
  },
  {
    id: 'playground',
    title: 'Playground',
    description: 'Interactive playground to customize progress bar properties.',
  },
  {
    id: 'mock-code',
    title: 'Mock Code',
    description: 'Dynamic telemetry and upload tracking API integration examples.',
  },
  {
    id: 'overview',
    title: 'Overview',
    description: 'Component usage guidelines and comprehensive properties documentation.',
  },
];
