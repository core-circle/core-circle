'use client';

import {
  HomeIcon,
  MousePointer,
  Sparkles,
  SquareEdit,
  ChevronRight,
  ChevronDown,
  CircleDot,
  TypeIcon,
  RowsIcon,
  TabIcon,
  CircleCheck,
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
  KbdIcon,
  IndicatorIcon,
  ImageIcon,
  CounterIcon,
  DocumentText,
  TypeIcon as TypographyIcon,
  Alert as AlertIcon,
  Bell as BellIcon,
  Layers as LayersIcon,
  Grid as DialogIcon,
  Key,
  Palette,
  Calendar as CalendarIcon,
  List as ListIcon,
  Star,
  Cloud,
  Clock,
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
  description: 'Atoms are the basic building blocks of matter. Applied to web interfaces, atoms are our foundational UI elements, such as inputs, buttons, badges, cards, and typography.',
};

/**
 * Atoms List for the main grid (Alphabetically Arranged)
 */
export const ATOM_CARDS = [
  {
    title: 'Accordion',
    description: 'A vertically stacked set of interactive headings that reveal content sections.',
    href: '/atoms/accordion',
    icon: AccordionIcon,
  },
  {
    title: 'Alert',
    description: 'Displays a callout for user attention or information with various visual styles.',
    href: '/atoms/alert',
    icon: AlertIcon,
  },
  {
    title: 'AspectRatio',
    description: 'A responsive layout container enforcing strict proportional dimensions.',
    href: '/atoms/aspect-ratio',
    icon: AspectRatioIcon,
  },
  {
    title: 'Avatar',
    description: 'Visual representation of a user or entity with fallback support.',
    href: '/atoms/avatar',
    icon: UserCircle,
  },
  {
    title: 'AvatarGroup',
    description: 'A stacked cluster of user identity avatars with overflow badge support.',
    href: '/atoms/avatar-group',
    icon: UserCircle,
  },
  {
    title: 'Badge',
    description: 'Small visual indicator for status, counts, or categorization.',
    href: '/atoms/badge',
    icon: Tag,
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
    title: 'Card',
    description: 'Flexible content container with support for headers, footers, and elevation variants.',
    href: '/atoms/card',
    icon: LayersIcon,
  },
  {
    title: 'Checkbox',
    description: 'Toggleable selection control for single or multiple choices.',
    href: '/atoms/checkbox',
    icon: CircleCheck,
  },
  {
    title: 'Color Picker',
    description: 'A visual tool for selecting colors with support for various output formats.',
    href: '/atoms/color-picker',
    icon: Palette,
  },
  {
    title: 'Counter',
    description: 'A numeric indicator for counts, often used in buttons or tabs.',
    href: '/atoms/counter',
    icon: CounterIcon,
  },
  {
    title: 'DatePicker',
    description: 'A visual interface for selecting dates from an interactive calendar popup.',
    href: '/atoms/date-picker',
    icon: CalendarIcon,
  },
  {
    title: 'Dialog',
    description: 'A window overlaid on the primary window, rendering the content underneath inert.',
    href: '/atoms/dialog',
    icon: DialogIcon,
  },
  {
    title: 'Divider',
    description: 'Clean visual separation of content with horizontal and vertical variants.',
    href: '/atoms/divider',
    icon: DividerIcon,
  },
  {
    title: 'Drawer',
    description: 'A slide-over overlay panel anchored to any viewport edge.',
    href: '/atoms/drawer',
    icon: LayersIcon,
  },
  {
    title: 'FileUpload',
    description: 'An interactive drag-and-drop file upload dropzone with multi-file support.',
    href: '/atoms/file-upload',
    icon: Cloud,
  },
  {
    title: 'Icons',
    description: '130+ high-quality vector icons for the Core Circle ecosystem.',
    href: '/atoms/icons',
    icon: Sparkles,
  },
  {
    title: 'Image',
    description: 'Enhanced media element with loading and fallback support.',
    href: '/atoms/image',
    icon: ImageIcon,
  },
  {
    title: 'Indicator',
    description: 'A visual marker to indicate status or presence on a component.',
    href: '/atoms/indicator',
    icon: IndicatorIcon,
  },
  {
    title: 'Kbd',
    description: 'Visual representation of keyboard keys and shortcuts.',
    href: '/atoms/kbd',
    icon: KbdIcon,
  },
  {
    title: 'Label',
    description: 'A primitive component for displaying text labels with various styles.',
    href: '/atoms/label',
    icon: TypeIcon,
  },
  {
    title: 'MultiSelect',
    description: 'Advanced dropdown for multiple selections with tag visualization.',
    href: '/atoms/multi-select',
    icon: RowsIcon,
  },
  {
    title: 'OTP Input',
    description: 'A specialized input for one-time passwords and verification codes.',
    href: '/atoms/otp-input',
    icon: Key,
  },
  {
    title: 'Popover',
    description: 'Displays rich content in a portal, triggered by a button or other interactive element.',
    href: '/atoms/popover',
    icon: LayersIcon,
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
    title: 'Rating',
    description: 'An interactive satisfaction and star evaluation rating component.',
    href: '/atoms/rating',
    icon: Star,
  },
  {
    title: 'RichText',
    description: 'Render complex HTML or formatted content with design system styles.',
    href: '/atoms/rich-text',
    icon: DocumentText,
  },
  {
    title: 'ScrollArea',
    description: 'A cross-browser custom smooth scrollable viewport with custom scrollbars.',
    href: '/atoms/scroll-area',
    icon: RowsIcon,
  },
  {
    title: 'Select',
    description: 'Customizable dropdown selection component with variant support.',
    href: '/atoms/select',
    icon: ChevronDown,
  },
  {
    title: 'Skeleton',
    description: 'Provide a placeholder for content that is still loading with smooth animations.',
    href: '/atoms/skeleton',
    icon: SkeletonIcon,
  },
  {
    title: 'SliderInput',
    description: 'A range input component for selecting values by sliding a thumb.',
    href: '/atoms/slider-input',
    icon: SlidersHorizontalIcon,
  },
  {
    title: 'Spinner',
    description: 'An indeterminate circular progress indicator for loading states.',
    href: '/atoms/spinner',
    icon: SpinnerIcon,
  },
  {
    title: 'Stepper',
    description: 'A visual progress indicator for multi-stage workflows and wizards.',
    href: '/atoms/stepper',
    icon: ListIcon,
  },
  {
    title: 'Switch',
    description: 'A toggle component that allows users to switch between two states: on and off.',
    href: '/atoms/switch',
    icon: SwitchIcon,
  },
  {
    title: 'Tabs',
    description: 'Dynamic tab component used for alternating between different views.',
    href: '/atoms/tabs',
    icon: TabIcon,
  },
  {
    title: 'TagInput',
    description: 'An interactive chip and tag creation input with duplicate checks and limit rules.',
    href: '/atoms/tag-input',
    icon: Tag,
  },
  {
    title: 'TextInput',
    description: 'Versatile input field with Material Design support and icons.',
    href: '/atoms/text-input',
    icon: SquareEdit,
  },
  {
    title: 'Textarea',
    description: 'Multi-line text input for longer content with support for variants and resizing.',
    href: '/atoms/textarea',
    icon: DocumentText,
  },
  {
    title: 'TimePicker',
    description: 'An interactive time selection input supporting 12h/24h formats and minute steps.',
    href: '/atoms/time-picker',
    icon: Clock,
  },
  {
    title: 'Toast',
    description: 'A succinct message that is displayed temporarily and non-interruptively.',
    href: '/atoms/toast',
    icon: BellIcon,
  },
  {
    title: 'Tooltip',
    description: 'An information popover that appears on click or hover to provide additional context.',
    href: '/atoms/tooltip',
    icon: Info,
  },
  {
    title: 'Typography',
    description: 'A fundamental component for consistent text styles, headings, and paragraphs.',
    href: '/atoms/typography',
    icon: TypographyIcon,
  },
];
