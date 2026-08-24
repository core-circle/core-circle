import { HomeIcon } from '@core-circle/icons';
import React from 'react';
import { PropItem } from '../../../interface/components/props-table.types';

export const DIALOG_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/', icon: React.createElement(HomeIcon, { size: 14 }) },
  { label: 'Atoms', href: '/atoms' },
  { label: 'Dialog' }
];

export const DIALOG_HEADER_CONTENT = {
  title: 'Dialog',
  description: 'An accessible modal window overlaid on the primary viewport, supporting 10 visual variants, header icon badges, backdrop blur, custom screen positions, and keyboard escape handling.',
};

export const DIALOG_PROPS_DATA: PropItem[] = [
  {
    name: 'open',
    type: 'boolean',
    defaultValue: '-',
    description: 'Controlled visibility state of the dialog modal.'
  },
  {
    name: 'defaultOpen',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Initial open state for uncontrolled usage.'
  },
  {
    name: 'trigger',
    type: 'ReactNode',
    defaultValue: '-',
    description: 'Element that triggers the dialog opening on click.'
  },
  {
    name: 'title',
    type: 'ReactNode',
    defaultValue: '-',
    description: 'The title displayed in the dialog header.'
  },
  {
    name: 'description',
    type: 'ReactNode',
    defaultValue: '-',
    description: 'Subtitle description text displayed below the title.'
  },
  {
    name: 'icon',
    type: 'ReactNode',
    defaultValue: '-',
    description: 'Optional icon badge displayed in the dialog header.'
  },
  {
    name: 'variant',
    type: "'card' | 'floating' | 'glassmorphic' | 'gradient' | 'destructive' | 'success' | 'centered-hero' | 'drawer' | 'minimal' | 'bordered'",
    defaultValue: "'card'",
    description: 'Visual style variant of the dialog (10 options).'
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg' | 'xl' | 'full'",
    defaultValue: "'md'",
    description: 'Maximum width constraints of the dialog container.'
  },
  {
    name: 'position',
    type: "'center' | 'top' | 'bottom'",
    defaultValue: "'center'",
    description: 'Viewport alignment position of the modal.'
  },
  {
    name: 'footer',
    type: 'ReactNode',
    defaultValue: '-',
    description: 'Optional action buttons slot placed at the bottom.'
  },
  {
    name: 'showCloseButton',
    type: 'boolean',
    defaultValue: 'true',
    description: 'Whether to display the close (X) icon in top right corner.'
  },
  {
    name: 'closeOnOverlayClick',
    type: 'boolean',
    defaultValue: 'true',
    description: 'Whether clicking the backdrop closes the dialog.'
  },
  {
    name: 'closeOnEsc',
    type: 'boolean',
    defaultValue: 'true',
    description: 'Whether pressing the Escape key dismisses the dialog.'
  },
  {
    name: 'onOpenChange',
    type: '(open: boolean) => void',
    defaultValue: '-',
    description: 'Callback fired whenever the open state changes.'
  }
];
