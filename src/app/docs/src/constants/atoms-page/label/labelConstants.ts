import { PropItem } from '../../../interface/components/props-table.types';

export const LABEL_HEADER_CONTENT = {
  title: 'Label',
  description: 'A primitive component for displaying text labels with various sizes, weights, and variants.',
};

export const LABEL_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Atoms', href: '/atoms' },
  { label: 'Label' },
];

export const LABEL_SECTIONS = [
  {
    id: 'playground',
    title: 'Interactive Playground',
    description: 'Experiment with different label variants and properties in real-time.',
    showBorder: true,
  },
  {
    id: 'variants',
    title: 'Variants',
    description: 'Labels come in different semantic variants for different contexts.',
    showBorder: true,
    previews: [
      { id: 'default', title: 'Default', code: '<Label>Default Label</Label>' },
      { id: 'muted', title: 'Muted', code: '<Label variant="muted">Muted Label</Label>' },
      { id: 'primary', title: 'Primary', code: '<Label variant="primary">Primary Label</Label>' },
      { id: 'warning', title: 'Warning', code: '<Label variant="warning">Warning Label</Label>' },
      { id: 'error', title: 'Error', code: '<Label variant="error">Error Label</Label>' },
    ],
  },
  {
    id: 'sizes',
    title: 'Sizes',
    description: 'Standardized sizes from extra small to 2xl.',
    showBorder: true,
    previews: [
      { id: 'xs', title: 'Extra Small', code: '<Label size="xs">Extra Small</Label>' },
      { id: 'sm', title: 'Small', code: '<Label size="sm">Small</Label>' },
      { id: 'md', title: 'Medium', code: '<Label size="md">Medium</Label>' },
      { id: 'lg', title: 'Large', code: '<Label size="lg">Large</Label>' },
      { id: 'xl', title: 'Extra Large', code: '<Label size="xl">Extra Large</Label>' },
      { id: '2xl', title: '2XL', code: '<Label size="2xl">2XL</Label>' },
    ],
  },
];

export const LABEL_PROPS_DATA: PropItem[] = [
  {
    name: 'variant',
    type: "'default' | 'muted' | 'primary' | 'warning' | 'error'",
    defaultValue: "'default'",
    description: 'The semantic variant of the label.'
  },
  {
    name: 'size',
    type: "'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",
    defaultValue: "'sm'",
    description: 'The font size of the label.'
  },
  {
    name: 'weight',
    type: "'light' | 'normal' | 'medium' | 'semibold' | 'bold'",
    defaultValue: "'normal'",
    description: 'The font weight of the label.'
  },
  {
    name: 'uppercase',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Transforms the label text to uppercase.'
  },
  {
    name: 'as',
    type: "'label' | 'span' | 'div'",
    defaultValue: "'label'",
    description: 'The underlying HTML element to render.'
  },
  {
    name: 'htmlFor',
    type: 'string',
    description: 'The ID of the input element this label is associated with.'
  }
];
