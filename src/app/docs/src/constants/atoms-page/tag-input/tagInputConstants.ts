import { PropItem } from '../../../interface/components/props-table.types';

export const TAG_INPUT_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Atoms', href: '/atoms' },
  { label: 'TagInput' },
];

export const TAG_INPUT_HEADER_CONTENT = {
  title: 'TagInput',
  description: 'An interactive chip and tag creation input that generates dismissible badges on Enter or comma keystrokes, with duplicate prevention, limit thresholds, and 10 styling variants.',
};

export const TAG_INPUT_SECTIONS = [
  {
    id: 'theming',
    title: 'Theming',
    description: 'Production-grade tag creation inputs for email recipient bars, GitHub issue label dispatchers, AI LLM reasoning keywords, and Kubernetes pod labels.',
  },
  {
    id: 'variants',
    title: 'Variants',
    description: 'Explore 10 surface styling variants from capsule pills to radiant gradients and cyber neon glow.',
  },
  {
    id: 'playground',
    title: 'Playground',
    description: 'Interactive tag input playground with live chip creation, duplicate toggles, max limits, and code generator.',
  },
  {
    id: 'mock-code',
    title: 'Mock Code',
    description: 'Dynamic tagging metadata payload integration example.',
  },
  {
    id: 'overview',
    title: 'Overview',
    description: 'Quick usage snippet and props reference.',
  },
];

export const TAG_INPUT_PROPS_DATA: PropItem[] = [
  {
    name: 'value',
    type: 'string[]',
    defaultValue: '-',
    description: 'Controlled array of tag strings.'
  },
  {
    name: 'defaultValue',
    type: 'string[]',
    defaultValue: '[]',
    description: 'Default initial array of tags in uncontrolled mode.'
  },
  {
    name: 'placeholder',
    type: 'string',
    defaultValue: "'Add a tag...'",
    description: 'Placeholder shown when no tags have been entered yet.'
  },
  {
    name: 'variant',
    type: "'outline' | 'pills' | 'gradient' | 'glow' | 'glassmorphic' | 'subtle' | 'dark' | 'bordered' | 'accent' | 'minimal'",
    defaultValue: "'outline'",
    description: 'Container and chip surface styling aesthetic.'
  },
  {
    name: 'maxTags',
    type: 'number',
    defaultValue: '-',
    description: 'Maximum allowable number of tags.'
  },
  {
    name: 'allowDuplicates',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether duplicate tag strings are allowed.'
  },
  {
    name: 'label',
    type: 'string',
    defaultValue: '-',
    description: 'Label text positioned above the input.'
  },
  {
    name: 'helperText',
    type: 'string',
    defaultValue: '-',
    description: 'Subtle guidance caption below the input.'
  },
  {
    name: 'onChange',
    type: '(tags: string[]) => void',
    defaultValue: '-',
    description: 'Callback triggered whenever tags are added or removed.'
  },
];
