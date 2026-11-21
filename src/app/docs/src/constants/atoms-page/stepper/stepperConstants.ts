import { PropItem } from '../../../interface/components/props-table.types';

export const STEPPER_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Atoms', href: '/atoms' },
  { label: 'Stepper' }
];

export const STEPPER_HEADER_CONTENT = {
  title: 'Stepper',
  description: 'A multi-stage progress component supporting 10 visual variants, horizontal and vertical orientations, dynamic error states, custom step cards, and milestone timelines.',
};

export const STEPPER_SECTIONS = [
  {
    id: 'theming',
    title: 'Theming',
    description: 'Production-grade multi-step implementations for enterprise SaaS onboarding, CI/CD pipelines, KYC identity checks, and checkout flows.',
  },
  {
    id: 'variants',
    title: 'Variants',
    description: 'Explore 10 distinct layout and indicator surface styling variants.',
  },
  {
    id: 'playground',
    title: 'Playground',
    description: 'Interactive property playground with live step navigation and orientation controls.',
  },
  {
    id: 'mock-code',
    title: 'Mock Code',
    description: 'Dynamic API multi-stage workflow integration and state machine example.',
  },
  {
    id: 'overview',
    title: 'Overview',
    description: 'Quick usage snippet and props reference.',
  },
];

export const STEPPER_PROPS_DATA: PropItem[] = [
  {
    name: 'steps',
    type: 'StepItem[]',
    description: 'Array of step descriptor objects ({ title, description?, icon?, status? }).'
  },
  {
    name: 'activeStep',
    type: 'number',
    defaultValue: '0',
    description: 'The zero-indexed value of the currently active step.'
  },
  {
    name: 'orientation',
    type: "'horizontal' | 'vertical'",
    defaultValue: "'horizontal'",
    description: 'The layout direction of the stepper.'
  },
  {
    name: 'variant',
    type: "'numbers' | 'dots' | 'circles' | 'pill' | 'gradient' | 'glow' | 'glassmorphic' | 'cards' | 'timeline' | 'dark'",
    defaultValue: "'numbers'",
    description: 'Visual indicator geometry and surface container styling.'
  },
  {
    name: 'showDescription',
    type: 'boolean',
    defaultValue: 'true',
    description: 'Whether to render optional subtitle descriptions beneath/beside step titles.'
  },
  {
    name: 'className',
    type: 'string',
    description: 'Additional CSS classes for outer container customization.'
  }
];
