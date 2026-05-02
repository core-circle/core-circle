'use client';

import { 
  HomeIcon,
  MousePointer, 
  Sparkles, 
  SquareEdit, 
  ChevronRight, 
  ChevronDown, 
  CheckIcon, 
  CircleDot,
  TypeIcon,
  RowsIcon,
  TabIcon,
  SlidersHorizontalIcon,
  PresentationChart,
  UserCircle,
  Tag,
  Info,
  AccordionIcon,
  SwitchIcon,
  SkeletonIcon,
  SpinnerIcon,
  DividerIcon,
  AspectRatioIcon,
  DocumentText,
  Key,
  Palette
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
    title: 'Accordion',
    description: 'A vertically stacked set of interactive headings that reveal content sections.',
    href: '/atoms/accordion',
    icon: AccordionIcon,
  },
  {
    title: 'Avatar',
    description: 'Visual representation of a user or entity with fallback support.',
    href: '/atoms/avatar',
    icon: UserCircle,
  },
  {
    title: 'Badge',
    description: 'Small visual indicator for status, counts, or categorization.',
    href: '/atoms/badge',
    icon: Tag,
  },
  {
    title: 'AspectRatio',
    description: 'Ensuring media (images, videos) maintains a specific ratio during resize.',
    href: '/atoms/aspect-ratio',
    icon: AspectRatioIcon,
  },
  {
    title: 'Breadcrumb',
    description: 'Navigation path component with dynamic items and back support.',
    href: '/atoms/breadcrumb',
    icon: ChevronRight,
  },
  {
    title: 'Button',
    description: 'Standard button with various variants, sizes, and loading states.',
    href: '/atoms/button',
    icon: MousePointer,
  },
  {
    title: 'Checkbox',
    description: 'Toggleable selection control for single or multiple choices.',
    href: '/atoms/checkbox',
    icon: CheckIcon,
  },
  {
    title: 'Icons',
    description: '110+ high-quality vector icons for the Core Circle ecosystem.',
    href: '/atoms/icons',
    icon: Sparkles,
  },
  {
    title: 'Label',
    description: 'A primitive component for displaying text labels with various styles.',
    href: '/atoms/label',
    icon: TypeIcon,
  },
  {
    title: 'Divider',
    description: 'Clean visual separation of content with horizontal and vertical variants.',
    href: '/atoms/divider',
    icon: DividerIcon,
  },
  {
    title: 'MultiSelect',
    description: 'Advanced dropdown for multiple selections with tag visualization.',
    href: '/atoms/multi-select',
    icon: RowsIcon,
  },
  {
    title: 'Progress',
    description: 'Visual indicator of task completion with support for variants and labels.',
    href: '/atoms/progress',
    icon: PresentationChart,
  },
  {
    title: 'RadioButton',
    description: 'Exclusive selection control for choosing one from many options.',
    href: '/atoms/radio-button',
    icon: CircleDot,
  },
  {
    title: 'Select',
    description: 'Customizable dropdown selection component with variant support.',
    href: '/atoms/select',
    icon: ChevronDown,
  },
  {
    title: 'SliderInput',
    description: 'A range input component for selecting values by sliding a thumb.',
    href: '/atoms/slider-input',
    icon: SlidersHorizontalIcon,
  },
  {
    title: 'Tabs',
    description: 'Dynamic tab component used for alternating between different views.',
    href: '/atoms/tabs',
    icon: TabIcon,
  },
  {
    title: 'TextInput',
    description: 'Versatile input field with Material Design support and icons.',
    href: '/atoms/text-input',
    icon: SquareEdit,
  },
  {
    title: 'Switch',
    description: 'A toggle component that allows users to switch between two states: on and off.',
    href: '/atoms/switch',
    icon: SwitchIcon,
  },
  {
    title: 'Skeleton',
    description: 'Provide a placeholder for content that is still loading with smooth animations.',
    href: '/atoms/skeleton',
    icon: SkeletonIcon,
  },
  {
    title: 'Spinner',
    description: 'An indeterminate circular progress indicator for loading states.',
    href: '/atoms/spinner',
    icon: SpinnerIcon,
  },
  {
    title: 'Tooltip',
    description: 'An information popover that appears on click or hover to provide additional context.',
    href: '/atoms/tooltip',
    icon: Info,
  },
  {
    title: 'Textarea',
    description: 'Multi-line text input for longer content with support for variants and resizing.',
    href: '/atoms/textarea',
    icon: DocumentText,
  },
  {
    title: 'OTP Input',
    description: 'A specialized input for one-time passwords and verification codes.',
    href: '/atoms/otp-input',
    icon: Key,
  },
  {
    title: 'Color Picker',
    description: 'A visual tool for selecting colors with support for various output formats.',
    href: '/atoms/color-picker',
    icon: Palette,
  },
];
