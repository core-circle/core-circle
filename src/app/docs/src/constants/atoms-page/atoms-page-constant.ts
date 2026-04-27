'use client';

import { 
  HomeIcon,
  MousePointer, 
  Sparkles, 
  SquareEdit, 
  ChevronRight, 
  ChevronDown, 
  List, 
  CheckIcon, 
  CircleDot
} from '@core-circle/icons';
import React from 'react';

/**
 * Main Atoms Page Breadcrumb Items
 */
export const ATOMS_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/', icon: React.createElement(HomeIcon, { size: 14 }) },
  { label: 'Atoms' }
];

/**
 * Main Atoms Page Header Content
 */
export const ATOMS_HEADER_CONTENT = {
  title: 'Atoms',
  description: 'Atoms are the basic building blocks of matter. Applied to web interfaces, atoms are our HTML tags, such as a form label, an input or a button.',
};

/**
 * Atoms List for the main grid
 */
export const ATOM_CARDS = [
  {
    title: 'Button',
    description: 'Standard button with various variants, sizes, and loading states.',
    href: '/atoms/button',
    icon: MousePointer,
  },
  {
    title: 'Icons',
    description: '110+ high-quality vector icons for the Core Circle ecosystem.',
    href: '/atoms/icons',
    icon: Sparkles,
  },
  {
    title: 'TextInput',
    description: 'Versatile input field with Material Design support and icons.',
    href: '/atoms/text-input',
    icon: SquareEdit,
  },
  {
    title: 'Breadcrumb',
    description: 'Navigation path component with dynamic items and back support.',
    href: '/atoms/breadcrumb',
    icon: ChevronRight,
  },
  {
    title: 'Select',
    description: 'Customizable dropdown selection component with variant support.',
    href: '/atoms/select',
    icon: ChevronDown,
  },
  {
    title: 'MultiSelect',
    description: 'Advanced dropdown for multiple selections with tag visualization.',
    href: '/atoms/multi-select',
    icon: List,
  },
  {
    title: 'Checkbox',
    description: 'Toggleable selection control for single or multiple choices.',
    href: '/atoms/checkbox',
    icon: CheckIcon,
  },
  {
    title: 'RadioButton',
    description: 'Exclusive selection control for choosing one from many options.',
    href: '/atoms/radio-button',
    icon: CircleDot,
  },
  {
    title: 'Tabs',
    description: 'Dynamic tab component used for alternating between different views.',
    href: '/atoms/tabs',
    icon: List,
  },
];
