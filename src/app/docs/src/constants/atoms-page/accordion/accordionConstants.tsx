import { UserIcon, Shield, SettingsIcon, ArrowRight } from '@core-circle/icons';
import React from 'react';

export const ACCORDION_HEADER_CONTENT = {
  title: 'Accordion',
  description: 'A vertically stacked set of interactive headings that each reveal a section of content.',
};

export const ACCORDION_PLAYGROUND_ITEMS = [
  {
    id: '1',
    title: 'Account Settings',
    content: 'Manage your account settings and preferences.',
    icon: <UserIcon size={18} />,
  },
  {
    id: '2',
    title: 'Privacy & Security',
    content: 'Configure your privacy settings and security options.',
    icon: <Shield size={18} />,
  },
  {
    id: '3',
    title: 'System Preferences',
    content: 'Adjust system-wide settings like notifications.',
    icon: <SettingsIcon size={18} />,
  },
];

export const ACCORDION_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Atoms', href: '/atoms' },
  { label: 'Accordion' },
];

export const ACCORDION_PROPS_DATA = [
  {
    name: 'items',
    type: 'AccordionItemProps[]',
    defaultValue: '[]',
    description: 'The list of items to display in the accordion.',
  },
  {
    name: 'type',
    type: '"single" | "multiple"',
    defaultValue: '"single"',
    description: 'Whether one or multiple items can be open at a time.',
  },
  {
    name: 'collapsible',
    type: 'boolean',
    defaultValue: 'true',
    description: 'When type is "single", allows closing the open item by clicking it again.',
  },
  {
    name: 'variant',
    type: '"bordered" | "card" | "filled" | "glassmorphic" | "floating" | "gradient" | "pill" | "separated" | "minimal" | "ghost"',
    defaultValue: '"bordered"',
    description: 'The visual style of the accordion.',
  },
  {
    name: 'size',
    type: '"sm" | "md" | "lg"',
    defaultValue: '"md"',
    description: 'The vertical padding and font size of the accordion items.',
  },
  {
    name: 'fullWidth',
    type: 'boolean',
    defaultValue: 'true',
    description: 'Whether the accordion should take up the full width of its container.',
  },
  {
    name: 'expandIcon',
    type: 'ReactNode | ((isOpen: boolean) => ReactNode)',
    defaultValue: '<ChevronDown />',
    description: 'Custom icon or dynamic render function to replace the default toggle icon.',
  },
  {
    name: 'collapseIcon',
    type: 'ReactNode',
    defaultValue: 'undefined',
    description: 'Custom icon to display when expanded (e.g. Minus or X icon paired with Plus expandIcon).',
  },
];

export const ACCORDION_SECTIONS = [
  {
    id: 'overview',
    title: 'Overview',
    description: 'Accordions are useful for organizing large amounts of content into digestible sections.',
  },
  {
    id: 'variants',
    title: 'Variants',
    description: 'Multiple visual styles to match your design requirements.',
  },
  {
    id: 'playground',
    title: 'Playground',
    description: 'Interactive tool to test different configurations.',
  },
];

export const ACCORDION_SAMPLE_ITEMS = [
  {
    id: '1',
    title: 'Profile Information',
    content: 'Manage your personal details, contact information, and public profile settings.',
    startIcon: <UserIcon size={18} />,
    endIcon: <div className="px-2 py-0.5 rounded-full bg-core-circle-primary/10 text-[10px] text-core-circle-primary font-bold uppercase tracking-wider">New</div>
  },
  {
    id: '2',
    title: 'Security & Privacy',
    content: 'Control your account security, two-factor authentication, and privacy preferences.',
    startIcon: <Shield size={18} />,
  },
  {
    id: '3',
    title: 'Notifications',
    content: 'Customize how you receive alerts and stay updated with your account activity.',
    endIcon: <ArrowRight size={14} />
  },
];
