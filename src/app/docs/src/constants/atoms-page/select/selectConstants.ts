import { PropItem } from '../../../interface/components/props-table.types';

export const SELECT_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Atoms', href: '/atoms' },
  { label: 'Select' }
];

export const SELECT_HEADER_CONTENT = {
  title: 'Select',
  description: 'An accessible, fully customized single-select dropdown supporting 12 visual styling variants, floating material labels, prefixes, icons, and validation states.',
};

export const SELECT_SECTIONS = [
  {
    id: 'theming',
    title: 'Theming',
    description: 'Production-grade select implementations for currencies, cloud regions, VIP tiers, and RBAC roles.',
  },
  {
    id: 'variants',
    title: 'Variants',
    description: 'Explore 12 distinct surface and outline variants.',
  },
  {
    id: 'playground',
    title: 'Playground',
    description: 'Interactive property playground with live preview and code generator.',
  },
  {
    id: 'mock-code',
    title: 'Mock Code',
    description: 'Dynamic API option fetching and consumer component code.',
  },
  {
    id: 'overview',
    title: 'Overview',
    description: 'Quick usage snippet and properties reference.',
  },
];

export const SELECT_PROPS_DATA: PropItem[] = [
  {
    name: 'variant',
    type: "'outline' | 'material' | 'material-animated' | 'ghost' | 'standard' | 'filled' | 'glassmorphic' | 'floating' | 'gradient' | 'pill' | 'accent' | 'dark'",
    defaultValue: "'outline'",
    description: 'Visual styling theme and border treatment of the select input.'
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg'",
    defaultValue: "'md'",
    description: 'Vertical height and typography scale of the select.'
  },
  {
    name: 'options',
    type: 'SelectOption[]',
    description: 'Array of selectable option objects ({ value, label, disabled? }).'
  },
  {
    name: 'label',
    type: 'string',
    description: 'Label text placed above or floating within the select container.'
  },
  {
    name: 'placeholder',
    type: 'string',
    defaultValue: "'Select...'",
    description: 'Placeholder text shown when no option is selected.'
  },
  {
    name: 'startIcon',
    type: 'ReactNode',
    description: 'Icon element rendered at the leading start position.'
  },
  {
    name: 'prefix',
    type: 'ReactNode',
    description: 'Static prefix text or element placed before the value.'
  },
  {
    name: 'error',
    type: 'string',
    description: 'Error feedback message displayed beneath the input.'
  },
  {
    name: 'helperText',
    type: 'string',
    description: 'Helpful guidance text rendered beneath the input.'
  },
  {
    name: 'fullWidth',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether the select stretches to 100% of its parent container.'
  },
  {
    name: 'disabled',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Disables user interactions and applies a muted opacity.'
  }
];
